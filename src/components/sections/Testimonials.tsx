import { testimonials } from '../../content/site';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionIntro } from '../ui/SectionIntro';

export function Testimonials() {
  return (
    <section className="bg-[#FAF7F2] py-28 md:py-36">
      <div className="page-shell">
        <AnimatedSection className="mb-14">
          <SectionIntro
            label="From the community"
            title="People who know this property talk about it with real affection."
            body="These words came from the ribbon cutting announcement and they say a lot about what this farm means to the people around it."
          />
        </AnimatedSection>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <AnimatedSection key={item.author} delay={index * 0.06}>
              <blockquote className="flex h-full flex-col rounded-[1.8rem] bg-white p-8 shadow-[0_28px_55px_rgba(17,21,23,0.07)] ring-1 ring-black/5">
                <p className="text-xl leading-8 text-[#242323]">“{item.quote}”</p>
                <footer className="mt-8 text-sm uppercase tracking-[0.22em] text-[#9a7a56]">{item.author}</footer>
              </blockquote>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
