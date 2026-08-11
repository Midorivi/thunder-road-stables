import { GalleryGrid } from '../components/ui/GalleryGrid';
import { PageHero } from '../components/ui/PageHero';
import { asset } from '../lib/utils';
import { allGalleryImages } from '../content/site';

export function Gallery() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <PageHero title="Gallery" subtitle="A full look at the farm, the horses, the ribbon cutting, and the corners that make the place feel like itself." image={asset("/gallery/news-1.jpg")} />
      <div className="page-shell py-24 md:py-32">
        <GalleryGrid images={allGalleryImages} />
      </div>
    </div>
  );
}
