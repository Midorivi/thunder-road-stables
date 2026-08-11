import { teamHighlights } from '../../content/site';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionIntro } from '../ui/SectionIntro';

export function MeetTheTeam() {
  return (
    <section className="bg-[#111517] py-28 text-white md:py-36">
      <div className="page-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <AnimatedSection>
          <SectionIntro
            label="Meet the team"
            title="“You're really nothing without your team behind you.”"
            body="Ken Rothwell said it plainly. Thunder Road Stables kept all six employees from the previous ownership, and that continuity matters."
            invert
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm md:p-10">
            <ul className="grid gap-4 md:grid-cols-2">
              {teamHighlights.map((item) => (
                <li key={item} className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5 text-lg leading-8 text-white/72">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
