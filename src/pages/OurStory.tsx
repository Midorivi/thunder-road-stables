import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { PageHero } from '../components/ui/PageHero';
import { SectionIntro } from '../components/ui/SectionIntro';
import { asset } from '../lib/utils';
import { storyHistory, storyMoments } from '../content/site';

export function OurStory() {
  useEffect(() => {
    document.title = 'Our Story | Thunder Road Stables';
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <PageHero
        title="Our Story"
        subtitle="A family dream, a farm people already loved, and the work of keeping it a horse farm."
        image={asset("/gallery/ribbon-1.jpg")}
      />

      <section className="py-24 md:py-32">
        <div className="page-shell">
          <AnimatedSection className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <SectionIntro
              label="Stewardship"
              title="This place matters because it is personal, but also because it was worth saving."
              body="Deb and Ken stepped into a property with real history, local affection, and a staff that already knew how to care for the horses on it."
            />
            <div className="space-y-6">
              <div className="overflow-hidden rounded-[2rem] shadow-[0_32px_80px_rgba(17,21,23,0.12)] ring-1 ring-black/5">
                <img src={asset("/gallery/news-2.jpg")} alt="Thunder Road Stables paddocks and fencing" className="aspect-[4/3] w-full object-cover" />
              </div>
              <blockquote className="rounded-[1.5rem] bg-[#111517] p-8 md:p-10">
                <p className="text-xl leading-relaxed text-[#DCAC74] md:text-2xl">
                  &ldquo;When you get on a horse, it&apos;s like borrowing freedom. It feels like I have wings up there, and you become one with this being that really doesn&apos;t have to submit to you, but willingly does. It&apos;s a beautiful thing.&rdquo;
                </p>
                <footer className="mt-4 text-sm uppercase tracking-[0.35em] text-white/60">Debra Rothwell</footer>
              </blockquote>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="page-shell space-y-20">
          {storyMoments.map((moment, index) => (
            <AnimatedSection
              key={moment.title}
              delay={index * 0.06}
              className={`grid gap-8 lg:grid-cols-2 lg:items-center ${index % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''}`}
            >
              <div className="overflow-hidden rounded-[2rem] shadow-[0_28px_60px_rgba(17,21,23,0.12)] ring-1 ring-black/5">
                <img src={moment.image} alt={`${moment.eyebrow} at Thunder Road Stables`} className="aspect-[4/3] w-full object-cover" />
              </div>
              <article className="rounded-[2rem] bg-white/88 p-8 shadow-[0_24px_50px_rgba(17,21,23,0.07)] ring-1 ring-black/5 backdrop-blur md:p-10">
                <p className="text-xs uppercase tracking-[0.4em] text-[#9a7a56]">{moment.eyebrow}</p>
                <h2 className="mt-5 text-4xl leading-tight text-[#111517] md:text-5xl">{moment.title}</h2>
                <div className="mt-6 space-y-4 leading-8 text-[#595959]">
                  {moment.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="bg-[#111517] py-24 text-white md:py-32">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <AnimatedSection className="space-y-6">
            <p className="text-xs uppercase tracking-[0.42em] text-[#DCAC74]/88">History of the land</p>
            <h2 className="text-4xl leading-tight text-[#FAF7F2] md:text-6xl">From potato farm to Big E Farm to B.J. Farms to Thunder Road Stables.</h2>
            <p className="text-lg leading-8 text-white/72">
              The property carries layers of North Fork history. It changed names over time, but it always kept its scale, its working character, and its place in the local horse community.
            </p>
            <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl text-[#FAF7F2]">A good steward looks after what is already here.</h3>
              <p className="mt-4 leading-8 text-white/72">
                Deb wants to preserve what makes the farm special while continuing to invest in the horses, the staff, and the everyday integrity of the place.
              </p>
              <p className="mt-4 leading-8 text-white/72">
                That means future improvements, continued preservation, and the daily labor that makes a horse farm feel settled instead of staged.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
              <div className="space-y-6">
                {storyHistory.map((milestone, index) => (
                  <div key={milestone} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DCAC74]/40 bg-[#DCAC74]/10 text-sm text-[#DCAC74]">
                        {index + 1}
                      </div>
                      {index !== storyHistory.length - 1 ? <div className="mt-3 h-full w-px bg-white/10" /> : null}
                    </div>
                    <p className="pb-6 leading-8 text-white/72">{milestone}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="page-shell">
          <AnimatedSection className="rounded-[2rem] bg-white/88 p-10 shadow-[0_28px_60px_rgba(17,21,23,0.07)] ring-1 ring-black/5 md:p-14">
            <p className="text-xs uppercase tracking-[0.42em] text-[#9a7a56]">What it means now</p>
            <h2 className="mt-5 max-w-4xl text-4xl leading-tight text-[#111517] md:text-5xl">“This farm is my promised land right here on earth.”</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#595959]">
              Thunder Road is a horse farm first. The beauty is real, but so are the feed tubs, the checks at night, the staff, the mud, and the care it takes to do this right.
            </p>
            <Link to="/contact" className="mt-10 inline-flex min-h-12 items-center rounded-full bg-[#111517] px-8 text-sm tracking-[0.18em] text-[#FAF7F2] hover:scale-[1.02] hover:bg-[#242323]">
              Come See the Farm
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
