interface Fetcher {
  fetch(request: Request): Promise<Response>;
}

interface Env {
  ASSETS: Fetcher;
}

declare class HTMLRewriter {
  on(
    selector: string,
    handlers: { element(element: { setAttribute(name: string, value: string): void }): void },
  ): HTMLRewriter;
  transform(response: Response): Response;
}

import { parseAccent, parseTheme } from "../src/lib/theme-catalogue";
import { parseCookie } from "../src/utils/cookies";

function withoutConditionals(headers: Headers) {
  const next = new Headers(headers);
  next.delete("if-none-match");
  next.delete("if-modified-since");
  return next;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const header = request.headers.get("cookie");
    const theme = parseTheme(parseCookie(header, "theme"));
    const accent = parseAccent(parseCookie(header, "accent"));
    const themed = Boolean((theme || accent) && (request.headers.get("accept") ?? "").includes("text/html"));

    const response = await env.ASSETS.fetch(
      themed ? new Request(request, { headers: withoutConditionals(request.headers) }) : request,
    );

    if (!themed) return response;
    if (!(response.headers.get("content-type") ?? "").includes("text/html")) return response;

    const page = new HTMLRewriter()
      .on("html", {
        element(element) {
          if (theme) element.setAttribute("data-theme", theme);
          if (accent) element.setAttribute("data-accent", accent);
        },
      })
      .transform(response);

    const headers = new Headers(page.headers);
    headers.set("cache-control", "private, no-store");
    headers.set("vary", "Cookie");
    headers.delete("etag");
    return new Response(page.body, { status: page.status, statusText: page.statusText, headers });
  },
};
