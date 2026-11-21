import Rail from "@/app/(site)/_components/rail";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-10 mx-auto grid w-full max-w-5xl gap-8 px-5 sm:px-6 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-16 lg:px-8">
      <Rail />
      <main id="main" className="min-w-0 pb-16 lg:max-w-xl lg:py-10">
        {children}
      </main>
    </div>
  );
}
