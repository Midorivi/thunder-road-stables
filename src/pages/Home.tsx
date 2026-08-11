import { useEffect } from 'react';
import { About } from '../components/sections/About';
import { CallToAction } from '../components/sections/CallToAction';
import { Features } from '../components/sections/Features';
import { GalleryPreview } from '../components/sections/GalleryPreview';
import { Hero } from '../components/sections/Hero';
import { InstagramTeaser } from '../components/sections/InstagramTeaser';
import { Testimonials } from '../components/sections/Testimonials';

export function Home() {
  useEffect(() => {
    document.title = 'Thunder Road Stables | Horse Boarding in Jamesport, NY';
  }, []);

  return (
    <div className="bg-[#FAF7F2]">
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <GalleryPreview />
      <InstagramTeaser />
      <CallToAction />
    </div>
  );
}
