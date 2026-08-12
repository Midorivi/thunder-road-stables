import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { asset } from '../../lib/utils';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#111517]">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img src={asset("/gallery/fb-cover.jpg")} alt="Aerial view of Thunder Road Stables" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 z-10 bg-black/45" />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_40%,rgba(220,172,116,0.15),transparent_40%),linear-gradient(180deg,rgba(17,21,23,0.42),rgba(17,21,23,0.78))]" />
      </motion.div>

      <div className="absolute inset-x-0 top-0 z-10 h-48 bg-gradient-to-b from-black/55 to-transparent" />

      <div className="page-shell relative z-20 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="mx-auto text-5xl font-bold leading-[0.9] tracking-[0.03em] text-[#DCAC74] sm:text-6xl md:text-7xl lg:text-[7rem] xl:text-[8rem]">
            Thunder Road<br className="hidden sm:inline" /> Stables
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mx-auto mt-6 max-w-3xl text-[1.35rem] leading-snug text-[#FAF7F2] sm:text-2xl md:text-3xl lg:text-4xl">
            Where Beauty Meets Exceptional Care
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
            108 acres. 90 stalls. Every horse still gets the personal attention as if they&apos;re the only one.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            to="/contact"
            className="mt-10 inline-flex min-h-14 items-center justify-center rounded-full bg-[#DCAC74] px-10 text-base tracking-[0.18em] text-[#111517] transition hover:scale-[1.02] hover:bg-[#e4bc8e]"
          >
            Come See the Farm
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
