import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';

export function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found | Thunder Road Stables';
  }, []);

  return (
    <div className="flex min-h-screen items-center bg-[#FAF7F2] px-4 py-24">
      <div className="mx-auto w-full max-w-2xl rounded-[2rem] bg-white/92 p-10 text-center shadow-[0_28px_60px_rgba(17,21,23,0.08)] ring-1 ring-black/5 md:p-14">
        <Logo className="mx-auto h-24" />
        <p className="mt-8 text-xs uppercase tracking-[0.36em] text-[#9A7A56]">404</p>
        <h1 className="mt-4 text-4xl text-[#111517] md:text-5xl">Page not found</h1>
        <p className="mt-5 text-lg leading-8 text-[#595959]">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-10 inline-flex min-h-12 items-center justify-center rounded-full bg-[#111517] px-8 text-sm tracking-[0.18em] text-[#FAF7F2] transition hover:scale-[1.02] hover:bg-[#242323]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
