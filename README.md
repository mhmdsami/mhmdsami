# Mohamed Sami

Software engineer at [Headout](https://headout.com). I maintain the platform that supports 400+ sites and build workflows that create new sites on demand.

Outside work I build tools to build tools to make other tools.

## Projects

- **[ijra](https://github.com/mhmdsami/ijra)** — A request queue where an agent answers questions or opens a verified pull request. Access level decides which.
- **[meter](https://github.com/mhmdsami/meter)** — Tracks AI usage and spend across every machine. The Rust collector scans each host; the Swift menu bar app and the dashboard read the summaries.
- **[Slack Code Mode MCP](https://github.com/mhmdsami/slack-codemode-mcp)** — Two tools for Slack: `search` finds the API surface, `execute` runs agent-written JavaScript in a sandbox with no network and no token.
- **[devctl](https://github.com/mhmdsami/devctl)** — Many agents, many stacks, one machine. Runs a feature's worktrees across every service on isolated ports.
- **[lockout](https://github.com/mhmdsami/lockout)** — Locker booking and allocation for shared spaces, from a mobile app to an admin view.

## Stack

- **Languages**: TypeScript, Python, Rust, Go, Swift
- **Frontend**: React, Next.js, Tailwind CSS, Base UI, React Native, Expo
- **Backend**: Node.js, Bun, Hono
- **Data**: PostgreSQL, SQLite, Drizzle ORM, Cloudflare D1
- **Platform**: Cloudflare Workers, R2, AWS, Supabase, GitHub Actions

Current favorite: Next.js, OpenNext, Cloudflare Workers, D1, Drizzle, Tailwind. `baseline` is the starter template built on this stack.

## This site

Next.js 16 (App Router) and Tailwind CSS, exported as static HTML and served from Cloudflare Workers at [sam1.space](https://sam1.space). One page, no analytics, and client JavaScript only for the local clock and the rotating greeting and location. Geist Mono carries everything, on black, with one green accent. Colour, spacing, and type live as tokens in `src/styles/globals.css`; Biome handles linting and formatting.

```sh
pnpm install     # also installs the git hooks
pnpm dev
pnpm gate        # biome, typecheck, build
pnpm deploy      # build, then wrangler deploy
```

`wrangler.jsonc` holds the Worker name, the `sam1.space` custom domain, and serves `out/` as static assets. `pnpm preview` runs the built assets locally through Wrangler.

Pushes to `main` run `.github/workflows/deploy.yml`: the gate, then `pnpm deploy`. Add `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` repository secrets to enable it; without them the job warns and skips the deploy.

`pnpm og` renders the Open Graph card, the favicon, and the Apple touch icon from `og/`. Titles, descriptions, canonical URL, OG and Twitter tags, `robots.txt`, and `sitemap.xml` are generated at build.

In development, `/dev/preview/{demo,worst,empty,one}` renders the page against fixture data for layout stress tests. `pnpm deploy` strips that output before uploading, so the preview routes never reach production.

The resume source lives in `resume/` as HTML and print CSS. The PDF currently deployed at `public/resume.pdf` is the previous resume, not the output of that source. `pnpm resume` regenerates the HTML version into `public/resume.pdf` and replaces it, so leave it alone unless you intend to switch back to the generated version.

Lefthook runs `pnpm gate` on every commit, so a broken build never reaches a commit.

## Elsewhere

[GitHub](https://github.com/sm-sami) · [GitHub (secondary)](https://github.com/mhmdsami) · [LinkedIn](https://www.linkedin.com/in/sm-sami) · [X](https://x.com/siamasdev) · [siamasdev@gmail.com](mailto:siamasdev@gmail.com)
