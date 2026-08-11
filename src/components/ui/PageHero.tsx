import { AnimatedSection } from './AnimatedSection';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  label?: string;
  image?: string;
}

export function PageHero({ title, subtitle, label = 'Thunder Road Stables', image = '/gallery/photo-2.jpg' }: PageHeroProps) {
  return (
    <div className="relative overflow-hidden px-4 pb-20 pt-40 md:px-6 md:pb-24 md:pt-48">
      <img src={image} alt="Thunder Road Stables" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,21,23,0.6),rgba(17,21,23,0.25),rgba(17,21,23,0.7))]" />
      <div className="page-shell relative z-10">
        <AnimatedSection className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.42em] text-[#DCAC74]/88">{label}</p>
          <h1 className="mt-6 text-5xl leading-none text-[#FAF7F2] md:text-7xl">{title}</h1>
          {subtitle ? <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">{subtitle}</p> : null}
        </AnimatedSection>
      </div>
    </div>
  );
}
