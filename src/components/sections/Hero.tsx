import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-screen items-center overflow-hidden bg-[#111517]">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img src="/gallery/photo-7.jpg" alt="Thunder Road Stables horses and barns" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 z-10 bg-black/45" />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(220,172,116,0.18),transparent_34%),linear-gradient(180deg,rgba(17,21,23,0.42),rgba(17,21,23,0.78))]" />
      </motion.div>

      <div className="absolute inset-x-0 top-0 z-10 h-48 bg-gradient-to-b from-black/55 to-transparent" />

      <div className="page-shell relative z-20 grid gap-12 py-32 lg:grid-cols-[1.3fr_0.7fr] lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.45em] text-[#DCAC74]/80 md:text-sm">Jamesport, New York</p>
          <h1 className="mt-4 leading-[0.9]">
            <span className="block text-6xl font-bold tracking-wide text-[#DCAC74] md:text-8xl lg:text-[6.5rem]">Thunder Road</span>
            <span className="block text-6xl font-bold tracking-wide text-[#FAF7F2] md:text-8xl lg:text-[6.5rem]">Stables</span>
          </h1>
          <p className="mt-5 text-xl leading-relaxed text-white/70 md:text-2xl">Where Beauty Meets Exceptional Care</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[1.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-10"
        >
          <p className="text-lg leading-8 text-white/80 md:text-xl">
            108 acres. 90 stalls. Every horse still gets the personal attention as if they&apos;re the only one.
          </p>
          <Link to="/contact" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#DCAC74] px-8 text-sm tracking-[0.18em] text-[#111517] hover:scale-[1.02] hover:bg-[#e4bc8e]">
            Come See the Farm
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
