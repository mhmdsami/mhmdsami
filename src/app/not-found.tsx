import NotFoundArt from "@/components/not-found-art";
import NotFoundTerminal from "@/components/not-found-terminal";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main
      id="main"
      className="relative z-10 mx-auto flex min-h-svh w-full max-w-5xl flex-col justify-center px-5 py-16 sm:px-6 lg:px-8"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,30rem)_minmax(0,1fr)] lg:gap-20">
        <div>
          <span className="type-label text-tertiary">404</span>
          <h1 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">This page doesn&apos;t exist.</h1>
          <p className="mt-3 max-w-sm text-sm leading-6 text-secondary">
            The link may be old, or I may have moved something around.
          </p>
          <div className="hidden sm:block">
            <NotFoundTerminal />
          </div>
          <Button href="/" className="mt-6 w-fit">
            back home
          </Button>
        </div>

        <div className="mx-auto w-full max-w-[24rem] text-foreground/80 lg:max-w-none">
          <NotFoundArt className="h-auto w-full" />
        </div>
      </div>
    </main>
  );
}
