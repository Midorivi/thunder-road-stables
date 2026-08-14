import { animate, useInView, useMotionValue } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { Heart, TreePine, UserCheck, Warehouse } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
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
    <p ref={ref} className="text-5xl font-bold text-[#242323]">
      {displayValue}
      {suffix && <span className="text-[#DCAC74]">{suffix}</span>}
    </p>
  );
}

const stats: Array<{ value: number; suffix?: string; label: string; icon: LucideIcon }> = [
  { value: 108, label: 'preserved acres', icon: TreePine },
  { value: 90, label: 'stalls', icon: Warehouse },
  { value: 6, label: 'staff on site', icon: UserCheck },
  { value: 50, suffix: '+', label: 'horses boarding', icon: Heart },
];

const facilityImages = [
  { src: '/gallery/photo-8.jpg', alt: 'Thunder Road Stables barns and paddocks', label: 'Barns & Paddocks' },
  { src: '/gallery/photo-5.jpg', alt: 'Horses walking through the farm', label: 'Daily Turnout' },
  { src: '/gallery/photo-12.jpg', alt: 'Horse in the stable barn', label: 'Indoor Stalls' },
];

export function About() {
  return (
    <section className="bg-[#FAF7F2] py-28 md:py-36">
      <div className="page-shell">
        <AnimatedSection>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.42em] text-[#9a7a56]">The facility</p>
            <h2 className="mt-5 text-4xl leading-tight text-[#242323] md:text-5xl">
              Long Island&apos;s largest equestrian boarding facility.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#595959]">
              Two outdoor arenas, one indoor arena, a harness racing practice track, and 108 preserved acres of open
              fields, ponds, and riding terrain. Daily care, nightly checks, and customized nutrition for every horse.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.08} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[1.5rem] border-t-[3px] border-[#DCAC74] bg-white p-6 shadow-[0_8px_30px_rgba(17,21,23,0.06)] ring-1 ring-black/5"
            >
              <stat.icon className="mb-4 h-7 w-7 text-[#DCAC74]" strokeWidth={1.6} />
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#9a7a56]">{stat.label}</p>
            </div>
          ))}
        </AnimatedSection>

        <AnimatedSection delay={0.14} className="mt-10 grid gap-4 md:grid-cols-3">
          {facilityImages.map((image, index) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden rounded-[2rem] shadow-[0_24px_50px_rgba(17,21,23,0.1)] ring-1 ring-black/5 ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img
                src={asset(image.src)}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${
                  index === 0 ? 'h-full' : 'aspect-[4/3]'
                }`}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(17,21,23,0.55))]" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">
                  {image.label}
                </p>
              </div>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
