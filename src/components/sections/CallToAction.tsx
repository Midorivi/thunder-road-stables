import { Link } from 'react-router-dom';
import { asset } from '../../lib/utils';
import { contactDetails } from '../../content/site';
import { AnimatedSection } from '../ui/AnimatedSection';

export function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-[#111517] py-28 text-white md:py-36">
      <img src={asset("/gallery/photo-3.jpg")} alt="Thunder Road Stables farm view" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,21,23,0.3),rgba(17,21,23,0.88))]" />

      <div className="page-shell relative z-10">
        <AnimatedSection className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.42em] text-[#DCAC74]/88">Visit the farm</p>
          <h2 className="mt-6 text-4xl leading-tight text-[#FAF7F2] md:text-6xl">If you want to understand the place, come walk it.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/72">
            Call for boarding availability, ask questions, or set up a time to see the barns, arenas, paddocks, and fields in person.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/contact" className="inline-flex min-h-12 items-center rounded-full bg-[#DCAC74] px-8 text-sm tracking-[0.18em] text-[#111517] hover:scale-[1.02] hover:bg-[#e4bc8e]">
              Come See the Farm
            </Link>
            <a href={contactDetails.phoneHref} className="inline-flex min-h-12 items-center rounded-full border border-white/25 px-8 text-sm tracking-[0.18em] text-white hover:border-white/50 hover:bg-white/10">
              {contactDetails.phone}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
