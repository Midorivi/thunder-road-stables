import { asset } from '../../lib/utils';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionIntro } from '../ui/SectionIntro';

export function LottiLucky() {
  return (
    <section className="bg-[#F4F4F4] py-28 md:py-36">
      <div className="page-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <AnimatedSection>
          <div className="overflow-hidden rounded-[2rem] shadow-[0_28px_55px_rgba(17,21,23,0.08)] ring-1 ring-black/5">
            <img src={asset("/gallery/photo-12.jpg")} alt="Thunder Road Stables horse in the paddock" className="aspect-[4/3] w-full object-cover" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="rounded-[2rem] bg-white/92 p-8 shadow-[0_28px_55px_rgba(17,21,23,0.07)] ring-1 ring-black/5 md:p-10">
          <SectionIntro label="Lotti and Lucky" title="The farm is also home to the two horses that made this chapter personal." />
          <div className="mt-8 space-y-5 text-lg leading-8 text-[#595959]">
            <p>
              Their sons fell in love with Lotti during riding lessons in Middle Island. In 2015, she became the first horse Deb ever owned.
            </p>
            <p>
              Lucky was rescued from South Dakota in 2020, carrying his own history and sensitivities. Ken joked that when he was appointed to the Town Board, Deb wanted another horse to keep busy.
            </p>
            <p>Both now call Thunder Road Stables home.</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
