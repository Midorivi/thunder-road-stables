import { useEffect } from 'react';
import { Star } from 'lucide-react';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { PageHero } from '../components/ui/PageHero';
import { asset } from '../lib/utils';
import { horseOfTheMonthPlaceholder } from '../content/site';

export function HorseOfTheMonth() {
  useEffect(() => {
    document.title = 'Horse of the Month | Thunder Road Stables';
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#FAF7F2]">
      <PageHero title="Horse of the Month" subtitle="A monthly portrait of one of the horses who shapes the rhythm of the farm." image={asset("/gallery/photo-14.jpg")} />
      <div className="page-shell flex flex-grow flex-col justify-center py-24 md:py-32">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#DCAC74]/16">
              <Star className="h-12 w-12 text-[#9a7a56]" />
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] bg-white/92 p-10 shadow-[0_28px_60px_rgba(17,21,23,0.08)] ring-1 ring-black/5 md:p-16">
            <h2 className="text-4xl text-[#111517]">{horseOfTheMonthPlaceholder.title}</h2>
            <p className="mb-10 mt-6 text-xl leading-8 text-[#595959]">{horseOfTheMonthPlaceholder.body}</p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
