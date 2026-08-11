import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { PageHero } from '../components/ui/PageHero';
import { PricingCard } from '../components/ui/PricingCard';
import { SectionIntro } from '../components/ui/SectionIntro';
import { boardingExtras, boardingOptions } from '../content/site';

export function PriceList() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <PageHero title="Boarding" subtitle="Long Island's largest equestrian boarding facility, with room to customize care around each horse." image="/gallery/photo-8.jpg" />
      <div className="page-shell py-24 md:py-32">
        <AnimatedSection className="mb-14">
          <SectionIntro
            label="Rates"
            title="Boarding options, ordered simply and explained clearly."
            body="These are the current core plans, along with the real day-to-day details from the farm."
          />
        </AnimatedSection>

        <AnimatedSection className="mb-10 overflow-hidden rounded-[2rem] bg-[#242323] text-white shadow-[0_28px_60px_rgba(17,21,23,0.18)]">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.36em] text-[#DCAC74]">Why board here</p>
              <p className="mt-5 text-2xl leading-10 text-white md:text-[2rem]">{boardingExtras.callout}</p>
            </div>
            <img src="/gallery/news-4.jpg" alt="Thunder Road Stables paddocks and barns" className="h-full min-h-[280px] w-full object-cover" />
          </div>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {boardingOptions.map((option, index) => (
            <AnimatedSection key={option.name} delay={0.08 * index}>
              <PricingCard title={option.name} price={option.price} period={option.period} description={option.description} featured={option.featured} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.35} className="mt-14 overflow-hidden rounded-[2rem] bg-[#242323] text-white shadow-[0_28px_60px_rgba(17,21,23,0.18)]">
          <div className="grid lg:grid-cols-3">
            <div className="border-b border-white/8 p-8 lg:border-b-0 lg:border-r">
              <p className="text-xs uppercase tracking-[0.36em] text-[#DCAC74]">Ring Fees</p>
              <p className="mt-2 text-sm text-white/50">Helps maintain proper footing, dragging, and care</p>
              <div className="mt-6 space-y-4">
                {boardingExtras.ringFees.map((item) => (
                  <div key={item.label} className="flex items-baseline justify-between gap-4 border-b border-white/8 pb-4 last:border-b-0 last:pb-0">
                    <span className="text-white/72">{item.label}</span>
                    <span className="text-right text-sm text-[#DCAC74]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-b border-white/8 p-8 lg:border-b-0 lg:border-r">
              <p className="text-xs uppercase tracking-[0.36em] text-[#DCAC74]">Care Services</p>
              <p className="mt-2 text-sm text-white/50">Available by request for rough boarders</p>
              <div className="mt-6 space-y-4">
                {boardingExtras.dailyCare.map((item) => (
                  <div key={item.label} className="flex items-baseline justify-between gap-4 border-b border-white/8 pb-4 last:border-b-0 last:pb-0">
                    <span className="text-white/72">{item.label}</span>
                    <span className="text-right text-sm text-[#DCAC74]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8">
              <p className="text-xs uppercase tracking-[0.36em] text-[#DCAC74]">A La Carte</p>
              <p className="mt-2 text-sm text-white/50">Individual services available upon request</p>
              <ul className="mt-6 space-y-3">
                {boardingExtras.aLaCarte.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/72">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#DCAC74]/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.45} className="mt-14">
          <Link to="/contact" className="inline-flex min-h-12 items-center rounded-full bg-[#111517] px-8 text-sm tracking-[0.18em] text-[#FAF7F2] hover:scale-[1.02] hover:bg-[#242323]">
            Come See the Farm
          </Link>
        </AnimatedSection>
      </div>
    </div>
  );
}
