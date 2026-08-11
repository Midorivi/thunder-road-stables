import { AnimatedSection } from '../ui/AnimatedSection';

export function EventsPlaceholder() {
  return (
    <section className="bg-[#F4F4F4] py-24 md:py-28">
      <div className="page-shell">
        <AnimatedSection>
          <div className="rounded-[2rem] border border-[#DCAC74]/20 bg-white/90 p-8 text-center shadow-[0_20px_45px_rgba(17,21,23,0.05)] ring-1 ring-black/5 md:p-12">
            <p className="text-xs uppercase tracking-[0.38em] text-[#9a7a56]">Seasonal events</p>
            <h2 className="mt-5 text-4xl text-[#242323] md:text-5xl">Coming soon</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#595959]">
              The farm will share seasonal gatherings and community events here as they are scheduled.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
