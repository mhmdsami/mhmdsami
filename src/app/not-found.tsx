import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col justify-center py-16">
      <span className="type-label text-tertiary">404</span>
      <h1 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">This page doesn&apos;t exist.</h1>
      <p className="mt-3 max-w-sm text-sm leading-6 text-secondary">
        The link may be old, or I may have moved something around.
      </p>
      <Button href="/" className="mt-6 w-fit">
        back home
      </Button>
    </div>
  );
}
