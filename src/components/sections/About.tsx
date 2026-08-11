import { Link } from 'react-router-dom';
import { asset } from '../../lib/utils';
import { AnimatedSection } from '../ui/AnimatedSection';

export function About() {
  const stats = [
    { value: '108', label: 'preserved acres on the North Fork' },
    { value: '90', label: 'stalls with room to grow' },
    { value: '6', label: 'experienced team members' },
    { value: '50+', label: 'horses currently boarding' },
  ];

  return (
    <section className="bg-[#FAF7F2] py-28 md:py-36">
      <div className="page-shell">
        <AnimatedSection className="mb-14 overflow-hidden rounded-[2rem] shadow-[0_32px_80px_rgba(17,21,23,0.12)] ring-1 ring-black/5">
          <img src={asset("/gallery/photo-8.jpg")} alt="Thunder Road Stables barns, paddocks and open fields" className="aspect-[21/9] w-full object-cover" />
        </AnimatedSection>

        <AnimatedSection delay={0.08}>
          <p className="text-xs uppercase tracking-[0.42em] text-[#9a7a56]">The facility</p>
          <h2 className="mt-5 max-w-3xl text-4xl leading-tight text-[#242323] md:text-5xl">108 acres of exceptional care.</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#595959]">
            Long Island&apos;s largest equestrian boarding facility, set on 108 preserved acres in Jamesport stretching from Main Road nearly to Sound Avenue. This land has been protected since 1979, when Suffolk County purchased the development rights, so it will remain a working equestrian farm for generations.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.14} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[1.5rem] bg-white/90 p-6 ring-1 ring-black/5">
              <p className="text-5xl text-[#111517]">{stat.value}</p>
              <p className="mt-2 leading-7 text-[#595959]">{stat.label}</p>
            </div>
          ))}
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white/88 p-8 shadow-[0_24px_50px_rgba(17,21,23,0.06)] ring-1 ring-black/5 md:p-10">
            <p className="text-base leading-8 text-[#595959]">
              Two outdoor riding arenas, one indoor arena, and a new larger state-of-the-art indoor arena already approved for construction. Boarders also have access to a full-size harness racing practice track, open fields, charming ponds, and views that make the property memorable the moment you pull in.
            </p>
          </div>
          <div className="rounded-[2rem] bg-white/88 p-8 shadow-[0_24px_50px_rgba(17,21,23,0.06)] ring-1 ring-black/5 md:p-10">
            <p className="text-base leading-8 text-[#595959]">
              About 50 horses currently board here, from pleasure horses to active harness racers competing at Yonkers Raceway, Monticello, and the Meadowlands. A live-on-site manager and experienced team of 6 handle daily care and nightly checks, with customized nutrition for every horse. Body work expert on premise. Outside trainers, farriers, and veterinarians welcome.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.24} className="mt-8">
          <Link
            to="/our-story"
            className="inline-flex min-h-12 items-center rounded-full border border-black/10 px-7 text-sm tracking-[0.18em] text-[#111517] hover:scale-[1.02] hover:border-[#DCAC74]/60 hover:text-[#9a7a56]"
          >
            Read Our Story
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
