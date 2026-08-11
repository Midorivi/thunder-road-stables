import { animate, useInView, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { asset } from '../../lib/utils';
import { AnimatedSection } from '../ui/AnimatedSection';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionValue, target, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [isInView, motionValue, target]);

  return (
    <p ref={ref} className="text-5xl text-[#111517]">
      {displayValue}
      {suffix}
    </p>
  );
}

const stats = [
  { value: 108, label: 'preserved acres' },
  { value: 90, label: 'stalls' },
  { value: 6, label: 'staff on site' },
  { value: 50, suffix: '+', label: 'horses boarding' },
];

export function About() {
  return (
    <section className="bg-[#FAF7F2] py-28 md:py-36">
      <div className="page-shell">
        <AnimatedSection className="grid gap-4 md:grid-cols-3">
          <div className="overflow-hidden rounded-[2rem] shadow-[0_24px_50px_rgba(17,21,23,0.1)] ring-1 ring-black/5 md:col-span-2 md:row-span-2">
            <img src={asset("/gallery/photo-8.jpg")} alt="Thunder Road Stables barns and paddocks" className="h-full w-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-[2rem] shadow-[0_24px_50px_rgba(17,21,23,0.1)] ring-1 ring-black/5">
            <img src={asset("/gallery/photo-5.jpg")} alt="Walking horses through the farm" className="aspect-[4/3] w-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-[2rem] shadow-[0_24px_50px_rgba(17,21,23,0.1)] ring-1 ring-black/5">
            <img src={asset("/gallery/photo-12.jpg")} alt="Horse in the stable barn" className="aspect-[4/3] w-full object-cover" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[1.5rem] bg-white/90 p-6 ring-1 ring-black/5">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-[#595959]">{stat.label}</p>
            </div>
          ))}
        </AnimatedSection>

        <AnimatedSection delay={0.16} className="mt-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.42em] text-[#9a7a56]">The facility</p>
            <h2 className="mt-5 text-4xl leading-tight text-[#242323] md:text-5xl">Long Island&apos;s largest equestrian boarding facility.</h2>
            <p className="mt-5 text-lg leading-8 text-[#595959]">
              Two outdoor arenas, one indoor arena, a harness racing practice track, and 108 preserved acres of open fields, ponds, and riding terrain. Daily care, nightly checks, and customized nutrition for every horse.
            </p>
          </div>
          <Link
            to="/our-story"
            className="inline-flex min-h-12 shrink-0 items-center rounded-full border border-black/10 px-7 text-sm tracking-[0.18em] text-[#111517] hover:scale-[1.02] hover:border-[#DCAC74]/60 hover:text-[#9a7a56]"
          >
            Read Our Story
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
