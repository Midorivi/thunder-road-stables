import { Link } from 'react-router-dom';
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
        <AnimatedSection className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] shadow-[0_32px_80px_rgba(17,21,23,0.12)] ring-1 ring-black/5">
            <img src="/gallery/news-1.jpg" alt="Thunder Road Stables barns and paddocks" className="aspect-[4/5] w-full object-cover lg:aspect-[4/4.5]" />
          </div>

          <div className="rounded-[2rem] bg-white/88 p-8 shadow-[0_30px_65px_rgba(17,21,23,0.08)] ring-1 ring-black/5 backdrop-blur md:p-10">
            <p className="text-xs uppercase tracking-[0.42em] text-[#9a7a56]">The facility</p>
            <h2 className="mt-5 text-4xl leading-tight text-[#242323] md:text-5xl lg:text-6xl">108 acres of exceptional care.</h2>
            <p className="mt-6 text-lg leading-8 text-[#595959]">
              Thunder Road Stables is Long Island&apos;s largest equestrian boarding facility, set on 108 preserved acres in Jamesport stretching from Main Road nearly to Sound Avenue. This land has been protected since 1979, when Suffolk County purchased the development rights, so it will remain a working equestrian farm for generations.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[1.5rem] bg-[#FAF7F2] p-5 ring-1 ring-black/5">
                  <p className="text-4xl text-[#111517] md:text-5xl">{stat.value}</p>
                  <p className="mt-2 leading-7 text-[#595959]">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-4 text-base leading-8 text-[#595959]">
              <p>
                There are two outdoor riding arenas, one indoor arena, and a new larger state-of-the-art indoor arena already approved for construction. Boarders also have access to a full-size harness racing practice track, open fields, charming ponds, and views that make the property memorable the moment you pull in.
              </p>
              <p>
                About 50 horses currently board here, from pleasure horses to active harness racers competing at Yonkers Raceway, Monticello, and the Meadowlands. A live-on-site manager and experienced team of 6 handle daily care and nightly checks, with customized nutrition and individual attention for every horse. Body work expert on premise. Outside trainers, farriers, and veterinarians are welcome, and boarders are welcome to ride the entire 108-acre property.
              </p>
            </div>

            <Link
              to="/our-story"
              className="mt-8 inline-flex min-h-12 items-center rounded-full border border-black/10 px-7 text-sm tracking-[0.18em] text-[#111517] hover:scale-[1.02] hover:border-[#DCAC74]/60 hover:text-[#9a7a56]"
            >
              Read Our Story
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
