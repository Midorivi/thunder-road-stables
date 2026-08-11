import { ArrowUpRight } from 'lucide-react';
import { contactDetails, instagramPreviewImages } from '../../content/site';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionIntro } from '../ui/SectionIntro';

export function InstagramTeaser() {
  return (
    <section className="bg-[#FAF7F2] py-28 md:py-36">
      <div className="page-shell">
        <AnimatedSection className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionIntro
            label="Instagram"
            title="Follow along on Instagram"
            body={`See daily life on the farm at ${contactDetails.instagramHandle}.`}
          />
          <a
            href={contactDetails.instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#242323] px-7 text-sm tracking-[0.18em] text-[#FAF7F2] hover:scale-[1.02] hover:bg-[#111517]"
          >
            {contactDetails.instagramHandle}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </AnimatedSection>

        <div className="grid gap-5 md:grid-cols-3">
          {instagramPreviewImages.map((image, index) => (
            <AnimatedSection key={image} delay={index * 0.08}>
              <div className="overflow-hidden rounded-[1.7rem] shadow-[0_24px_50px_rgba(17,21,23,0.08)] ring-1 ring-black/5">
                <img src={image} alt={`Instagram preview ${index + 1}`} className="aspect-[4/3] w-full object-cover" loading="lazy" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
