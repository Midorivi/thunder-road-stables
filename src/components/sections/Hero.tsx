import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-screen items-end overflow-hidden bg-[#111517] pt-32">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img src="/gallery/photo-7.jpg" alt="Thunder Road Stables horses and barns" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 z-10 bg-black/45" />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(220,172,116,0.18),transparent_34%),linear-gradient(180deg,rgba(17,21,23,0.48),rgba(17,21,23,0.84))]" />
      </motion.div>

      <div className="absolute inset-x-0 top-0 z-10 h-48 bg-gradient-to-b from-black/55 to-transparent" />

      <div className="page-shell relative z-20 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.45em] text-white/60 md:text-sm">Jamesport, New York</p>
          <h1 className="text-5xl font-bold leading-[0.95] tracking-wider text-[#DCAC74] md:text-7xl lg:text-[5.5rem]">
            Thunder Road Stables
          </h1>
          <p className="mt-6 max-w-3xl text-2xl leading-snug text-[#FAF7F2] md:text-4xl lg:text-5xl">
            Where Beauty Meets Exceptional Care
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="mt-8 text-lg leading-8 text-white/74 md:text-xl">
            108 acres. 90 stalls. Every horse still gets the personal attention as if they&apos;re the only one.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12"
        >
          <Link to="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#DCAC74] px-8 text-sm tracking-[0.18em] text-[#111517] hover:scale-[1.02] hover:bg-[#e4bc8e]">
            Come See the Farm
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
