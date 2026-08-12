import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BoardingComparisonTable } from '../components/ui/BoardingComparisonTable';
import { BoardingFaq } from '../components/ui/BoardingFaq';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { BoarderInquiryForm } from '../components/ui/BoarderInquiryForm';
import { PageHero } from '../components/ui/PageHero';
import { PricingCard } from '../components/ui/PricingCard';
import { SectionIntro } from '../components/ui/SectionIntro';
import { asset } from '../lib/utils';
import { boardingExtras, boardingOptions } from '../content/site';

export function PriceList() {
  useEffect(() => {
    document.title = 'Boarding | Thunder Road Stables';
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <PageHero title="Boarding" subtitle="Long Island's largest equestrian boarding facility, with room to customize care around each horse." image={asset("/gallery/photo-8.jpg")} />
      <div className="page-shell py-24 md:py-32">
        <AnimatedSection className="mb-14">
          <SectionIntro
            label="Boarding options"
            title="Four plans, each built around what your horse needs."
            body="Every option includes access to the full 108-acre property. Outside trainers, farriers, and veterinarians are welcome."
          />
        </AnimatedSection>

        <AnimatedSection className="mb-10 overflow-hidden rounded-[2rem] bg-[#242323] text-white shadow-[0_28px_60px_rgba(17,21,23,0.18)]">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.36em] text-[#DCAC74]">Why board here</p>
              <p className="mt-5 text-2xl leading-10 text-white md:text-[2rem]">{boardingExtras.callout}</p>
            </div>
            <img src={asset("/gallery/photo-9.jpg")} alt="Thunder Road Stables paddocks and barns" className="h-full min-h-[280px] w-full object-cover" />
          </div>
        </AnimatedSection>

        <AnimatedSection className="mb-12">
          <BoardingComparisonTable />
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {boardingOptions.map((option, index) => (
            <AnimatedSection key={option.name} delay={0.08 * index}>
              <PricingCard title={option.name} price={option.price} period={option.period} description={option.description} featured={option.featured} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <BoarderInquiryForm />
        </AnimatedSection>

        <AnimatedSection delay={0.28} className="mt-14 overflow-hidden rounded-[2rem] bg-[#1B1A1A] text-white shadow-[0_28px_60px_rgba(17,21,23,0.18)]">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <img src={asset("/gallery/photo-5.jpg")} alt="Harness racing horse training at Thunder Road Stables" className="h-full min-h-[300px] w-full object-cover" />
            <div className="p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.36em] text-[#DCAC74]">Harness racing</p>
              <h2 className="mt-5 max-w-2xl text-3xl leading-tight text-[#FAF7F2] md:text-[2.5rem]">
                Harness racing is part of the farm&apos;s daily rhythm.
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-white/74">
                About 18 race horses currently train at Thunder Road Stables. Jockeys use the half-mile
                harness racing practice track before competing at Yonkers Raceway, Monticello Raceway,
                and the Meadowlands in New Jersey.
              </p>
              <div className="mt-6 grid gap-4 text-sm leading-7 text-white/68 md:grid-cols-2">
                <p className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                  The farm&apos;s harness racing roots go back to the B.J. Farms era and still shape the property today.
                </p>
                <p className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                  Boarders with racing horses have full access to the track as part of the setup here.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

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

        <AnimatedSection delay={0.4} className="mt-14">
          <BoardingFaq />
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
