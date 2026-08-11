import { homeFeatures } from '../../content/site';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionIntro } from '../ui/SectionIntro';

export function Features() {
  return (
    <section className="bg-[#111517] py-28 text-white md:py-36">
      <div className="page-shell">
        <AnimatedSection className="mb-16">
          <SectionIntro
            label="Why Thunder Road"
            title="What sets us apart"
            body="Two outdoor arenas. One indoor. A harness racing practice track. Fields, paddocks, and fences kept up with pride. Every option starts with care for the horse first."
            invert
          />
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2">
          {homeFeatures.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 0.08}>
              <div className="group h-full rounded-[1.8rem] bg-white/[0.04] p-8 ring-1 ring-white/10 backdrop-blur-sm hover:bg-white/[0.06]">
                <feature.icon className="h-10 w-10 text-[#DCAC74] transition-transform duration-300 group-hover:scale-105" />
                <h3 className="mt-8 text-3xl text-[#FAF7F2]">{feature.title}</h3>
                <p className="mt-5 leading-8 text-white/68">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
