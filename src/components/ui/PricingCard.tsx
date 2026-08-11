import { Link } from 'react-router-dom';

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  featured?: boolean;
}

export function PricingCard({ title, price, period, description, featured = false }: PricingCardProps) {
  return (
    <div className={`flex h-full flex-col justify-between rounded-[1.8rem] p-8 shadow-[0_28px_55px_rgba(17,21,23,0.07)] ring-1 backdrop-blur ${featured ? 'bg-[#242323] text-white ring-[#DCAC74]/40' : 'bg-white/92 ring-black/5'}`}>
      <div>
        <div className="flex items-center justify-between gap-4">
          <p className={`text-xs uppercase tracking-[0.36em] ${featured ? 'text-[#DCAC74]' : 'text-[#9a7a56]'}`}>Boarding</p>
          {featured ? <span className="rounded-full border border-[#DCAC74]/40 bg-[#DCAC74]/10 px-3 py-1 text-[0.7rem] uppercase tracking-[0.2em] text-[#DCAC74]">Most Popular</span> : null}
        </div>
        <h3 className={`mt-4 text-3xl ${featured ? 'text-[#FAF7F2]' : 'text-[#111517]'}`}>{title}</h3>
        <div className="mt-5 flex items-baseline gap-2">
          <span className={`text-4xl ${featured ? 'text-[#FAF7F2]' : 'text-[#111517]'}`}>{price}</span>
          <span className={featured ? 'text-white/60' : 'text-[#595959]'}>{period}</span>
        </div>
        <div className={`mt-6 border-t pt-6 ${featured ? 'border-white/10' : 'border-black/6'}`}>
          <p className={`leading-8 ${featured ? 'text-white/72' : 'text-[#595959]'}`}>{description}</p>
        </div>
      </div>
      <Link
        to="/contact"
        className={`mt-8 inline-flex min-h-11 w-full items-center justify-center rounded-full text-sm tracking-[0.18em] transition-all hover:scale-[1.02] ${
          featured
            ? 'bg-[#DCAC74] text-[#111517] hover:bg-[#e4bc8e]'
            : 'border border-black/12 text-[#111517] hover:border-[#DCAC74]/60 hover:text-[#9a7a56]'
        }`}
      >
        Get in Touch
      </Link>
    </div>
  );
}
