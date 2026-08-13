import { Check, X } from 'lucide-react';

const columns = [
  { name: 'Rough Board', price: '$580' },
  { name: '24/7 Turnout No Stall', price: '$870' },
  { name: '24/7 Turnout With Stall', price: '$1,050' },
  { name: 'Full Board', price: '$1,400', featured: true },
];

const rows = [
  { label: 'Stall', values: ['No', 'No', 'Reserved', 'Yes'] },
  { label: 'Turnout', values: ['By arrangement', '24/7', '24/7', 'Daily'] },
  { label: 'Hay', values: ['You provide', 'Winter only ($1.50/flake)', 'Winter only ($1.50/flake)', '5 flakes/day (1st cut)'] },
  { label: 'Grain', values: ['You provide', 'Included', 'Included', 'Included'] },
  { label: 'Shavings', values: ['You provide', 'N/A', 'Overnight use ($15)', '5 bags/week'] },
  { label: 'Daily care by staff', values: ['Available ($25/day)', 'Included', 'Included', 'Included'] },
  { label: 'Property access', values: ['Full 108 acres', 'Full 108 acres', 'Full 108 acres', 'Full 108 acres'] },
];

function CellValue({ value }: { value: string }) {
  if (value === 'Yes' || value === 'Included') return <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-[#DCAC74]" />{value}</span>;
  if (value === 'No' || value === 'N/A') return <span className="inline-flex items-center gap-2 text-white/50"><X className="h-4 w-4 text-white/30" />{value}</span>;
  return <span>{value}</span>;
}

export function BoardingComparisonTable() {
  return (
    <div className="overflow-hidden rounded-[2rem] bg-[#242323] text-white shadow-[0_28px_60px_rgba(17,21,23,0.18)]">
      <div className="flex items-center justify-between gap-4 border-b border-white/8 px-4 py-4 md:px-6">
        <p className="text-sm text-white/50">Compare plans side by side</p>
        <p className="text-xs uppercase tracking-[0.3em] text-[#DCAC74]">At a glance</p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-[900px] border-separate border-spacing-0 text-left">
          <thead>
            <tr>
              <th className="sticky left-0 z-20 border-b border-white/8 bg-[#242323] px-4 py-3 md:px-6" />
              {columns.map((col) => (
                <th key={col.name} className={`border-b border-white/8 px-4 py-3 text-left ${col.featured ? 'bg-[#DCAC74]/8' : ''}`}>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className={`text-sm ${col.featured ? 'text-[#DCAC74]' : 'text-white/70'}`}>{col.name}</span>
                    <span className="text-lg text-[#FAF7F2]">{col.price}<span className="text-xs text-white/40">/mo</span></span>
                    {col.featured && <span className="text-[0.6rem] uppercase tracking-[0.18em] text-[#DCAC74]">Popular</span>}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.label}>
                <th className="sticky left-0 z-10 border-b border-white/6 bg-[#242323] px-6 py-4 text-sm text-white/60 md:px-8">{row.label}</th>
                {row.values.map((value, j) => (
                  <td key={`${row.label}-${j}`} className={`border-b border-white/6 px-5 py-4 text-sm leading-7 ${i === rows.length - 1 ? 'border-b-0' : ''} ${columns[j].featured ? 'bg-[#DCAC74]/5 text-[#FAF7F2]' : 'text-white/75'}`}>
                    <CellValue value={value} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
