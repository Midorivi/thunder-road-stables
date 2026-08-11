import { Link } from 'react-router-dom';
import { homePreviewImages } from '../../content/site';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionIntro } from '../ui/SectionIntro';

export function GalleryPreview() {
  return (
    <section className="bg-[#F4F4F4] py-28 md:py-36">
      <div className="page-shell">
        <AnimatedSection className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionIntro label="On the Farm" title="The barns, paddocks, and open corners people remember after a visit." />
          <Link
            to="/gallery"
            className="inline-flex min-h-12 items-center rounded-full border border-black/10 px-7 text-sm tracking-[0.18em] text-[#111517] hover:scale-[1.02] hover:border-[#DCAC74]/60 hover:text-[#9a7a56]"
          >
            View Gallery
          </Link>
        </AnimatedSection>

        <div className="grid gap-5 md:grid-cols-2">
          {homePreviewImages.map((src, index) => (
            <AnimatedSection key={src} delay={index * 0.1}>
              <div className="group relative overflow-hidden rounded-[1.7rem] shadow-[0_24px_50px_rgba(17,21,23,0.1)] ring-1 ring-black/5">
                <img src={src} alt={`Gallery preview ${index + 1}`} className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,21,23,0),rgba(17,21,23,0.35))]" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
