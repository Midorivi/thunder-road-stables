import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { PageHero } from '../components/ui/PageHero';
import { SectionIntro } from '../components/ui/SectionIntro';
import { contactDetails } from '../content/site';

const trainingPrograms = [
  {
    title: 'Private Lessons',
    description:
      "One-on-one instruction tailored to the rider's goals and experience level. All ages welcome.",
  },
  {
    title: 'Group Lessons',
    description:
      'Small group sessions for riders at similar skill levels. A great option for families or friends learning together.',
  },
  {
    title: 'Horse Training',
    description:
      "Working with your horse on ground manners, under saddle, or specific behavioral goals. Customized programs based on your horse's needs.",
  },
  {
    title: 'Lease Programs',
    description: 'For riders who want regular riding time without full ownership. Ask about availability.',
  },
];

const facilityHighlights = [
  'Two outdoor riding arenas',
  'Indoor arena, plus a new larger indoor arena approved for construction',
  'Full-size harness racing practice track',
  '108 acres of open riding terrain with ponds and scenic views',
];

export function Training() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <PageHero
        title="Training and Lessons"
        subtitle="Structured programs for riders and horses at every level."
        image="/gallery/photo-11.jpg"
      />

      <div className="page-shell py-24 md:py-32">
        <AnimatedSection className="mb-16">
          <div className="grid gap-8 rounded-[2rem] bg-white/90 p-8 shadow-[0_28px_60px_rgba(17,21,23,0.08)] ring-1 ring-black/5 md:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <SectionIntro
              label="Programs"
              title="Space to learn, train, and keep building from there."
            />
            <div className="space-y-5 text-lg leading-8 text-[#595959]">
              <p>
                Thunder Road Stables offers training and lesson programs across the farm&apos;s two outdoor
                arenas, indoor arena, and 108 acres of riding terrain. Whether you&apos;re a beginner learning
                the basics or an experienced rider working on specific skills, the facility has the space
                and setup to support it.
              </p>
              <p>Outside trainers are also welcome to bring their programs to the farm.</p>
              <p className="text-base text-[#6B6258]">Pricing varies by program. Call to discuss rates and availability.</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.08} className="mb-16">
          <SectionIntro
            label="What we offer"
            title="Lesson and training options shaped around the horse and rider in front of us."
            body="Programs can be tailored to age, experience level, and training goals."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {trainingPrograms.map((program, index) => (
              <div
                key={program.title}
                className={`rounded-[1.75rem] p-7 shadow-[0_20px_45px_rgba(17,21,23,0.08)] ring-1 ring-black/5 ${
                  index === 0 || index === 3 ? 'bg-[#242323] text-white' : 'bg-white/92 text-[#242323]'
                }`}
              >
                <h3 className="text-2xl leading-tight">{program.title}</h3>
                <p className={`mt-4 leading-8 ${index === 0 || index === 3 ? 'text-white/74' : 'text-[#595959]'}`}>
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.16} className="mb-16 overflow-hidden rounded-[2rem] bg-[#242323] text-white shadow-[0_28px_60px_rgba(17,21,23,0.18)]">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <img src="/gallery/photo-5.jpg" alt="Horse and rider training at Thunder Road Stables" className="h-full min-h-[320px] w-full object-cover" />
            <div className="p-8 md:p-10">
              <SectionIntro
                label="Facility highlights"
                title="The setup gives riders and trainers room to work year round."
                body="From ring work to longer rides across the property, the farm supports a wide range of programs."
                invert
              />
              <ul className="mt-8 space-y-4">
                {facilityHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/78">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#DCAC74]" />
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.24}>
          <div className="rounded-[2rem] bg-[#E8D6BE] p-8 text-[#242323] shadow-[0_24px_50px_rgba(17,21,23,0.08)] ring-1 ring-black/5 md:p-10">
            <p className="text-xs uppercase tracking-[0.36em] text-[#7B5E3C]">Call to discuss</p>
            <h2 className="mt-5 max-w-3xl text-4xl leading-tight md:text-5xl">
              Every horse and rider is different. Call to talk through what you&apos;re looking for and we&apos;ll put together a plan that fits.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#4F463E]">
              Rates depend on the program, schedule, and level of support needed.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={contactDetails.phoneHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#111517] px-7 text-sm tracking-[0.18em] text-[#FAF7F2] transition hover:scale-[1.02] hover:bg-[#242323]"
              >
                <Phone size={16} />
                Call {contactDetails.phone}
              </a>
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#111517]/12 bg-white/75 px-7 text-sm tracking-[0.18em] text-[#242323] transition hover:bg-white"
              >
                Or send us a message
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
