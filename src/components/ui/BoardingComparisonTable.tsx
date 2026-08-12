import { Check, X } from 'lucide-react';

const columns = [
  { name: 'Rough Board', price: '$580' },
  { name: '24/7 Turnout No Stall', price: '$870' },
  { name: '24/7 Turnout With Stall', price: '$1,050' },
  { name: 'Full Board', price: '$1,400', featured: true },
];

const rows = [
  { feature: 'Stall', values: ['No', 'No', 'Reserved', 'Yes'] },
  { feature: 'Turnout', values: ['By arrangement', '24/7', '24/7', 'Daily'] },
  { feature: 'Hay', values: ['You provide', 'Winter only ($1.50/flake)', 'Winter only ($1.50/flake)', '5 flakes/day (1st cut)'] },
  { feature: 'Grain', values: ['You provide', 'Included', 'Included', 'Included'] },
  { feature: 'Shavings', values: ['You provide', 'N/A', 'Overnight use ($15)', '5 bags/week'] },
  { feature: 'Daily care by staff', values: ['Available ($25/day)', 'Included', 'Included', 'Included'] },
  { feature: 'Property access', values: ['Full 108 acres', 'Full 108 acres', 'Full 108 acres', 'Full 108 acres'] },
];

function CellValue({ value }: { value: string }) {
  if (value === 'Yes' || value === 'Included') return <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-[#DCAC74]" />{value}</span>;
  if (value === 'No' || value === 'N/A') return <span className="inline-flex items-center gap-2 text-white/70"><X className="h-4 w-4 text-white/45" />{value}</span>;
  return <span>{value}</span>;
}

export function BoardingComparisonTable() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-[#DCAC74]/18 bg-[#242323] text-white shadow-[0_28px_60px_rgba(17,21,23,0.18)]">
      <div className="border-b border-white/8 px-6 py-8 md:px-8">
        <p className="text-xs uppercase tracking-[0.36em] text-[#DCAC74]">At a glance</p>
        <h2 className="mt-4 text-3xl text-[#FAF7F2] md:text-4xl">Compare the boarding plans side by side.</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-[940px] border-separate border-spacing-0 text-left">
          <thead>
            <tr>
              <th className="sticky left-0 z-20 border-b border-white/8 bg-[#242323] px-6 py-5 text-sm font-medium uppercase tracking-[0.2em] text-white/60 md:px-8">Feature</th>
              {columns.map((column) => (
                <th key={column.name} className={`border-b border-white/8 px-5 py-5 align-top ${column.featured ? 'bg-[#DCAC74]/10' : 'bg-[#242323]'}`}>
                  <div className={`rounded-[1.4rem] border px-4 py-4 ${column.featured ? 'border-[#DCAC74]/50 bg-[#DCAC74]/10' : 'border-white/10 bg-white/[0.03]'}`}>
                    {column.featured ? <span className="mb-3 inline-flex rounded-full border border-[#DCAC74]/45 bg-[#DCAC74]/12 px-3 py-1 text-[0.65rem] uppercase tracking-[0.22em] text-[#DCAC74]">Most Popular</span> : null}
                    <p className="text-lg leading-snug text-[#FAF7F2]">{column.name}</p>
                    <p className="mt-2 text-sm text-[#DCAC74]">{column.price}/month</p>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={row.feature}>
                <th className="sticky left-0 z-10 border-b border-white/8 bg-[#242323] px-6 py-5 text-sm font-medium text-[#FAF7F2] md:px-8">{row.feature}</th>
                {row.values.map((value, index) => (
                  <td key={`${row.feature}-${columns[index].name}`} className={`border-b border-white/8 px-5 py-5 text-sm leading-7 ${rowIndex === rows.length - 1 ? 'border-b-0' : ''} ${columns[index].featured ? 'bg-[#DCAC74]/6 text-[#FAF7F2]' : 'text-white/80'}`}>
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
