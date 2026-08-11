import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';
import { contactDetails, navLinks } from '../../content/site';
import { cn } from '../../lib/utils';
import { Logo } from '../Logo';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/' || location.pathname === import.meta.env.BASE_URL;
  const hasSolidBackground = !isHomePage || isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          hasSolidBackground
            ? 'bg-[#111517]/96 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl'
            : 'bg-transparent py-5'
        )}
      >
        <div className="page-shell flex items-center justify-between gap-6">
          <Link to="/" className="shrink-0" aria-label="Thunder Road Stables home">
            <Logo className="h-[72px] md:h-[82px]" />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" role="navigation" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'group relative py-2 text-[0.82rem] tracking-[0.22em] text-white/82 hover:text-white',
                  location.pathname === link.to && 'text-white'
                )}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute -bottom-0.5 left-0 h-px bg-[#DCAC74] transition-all duration-300',
                    location.pathname === link.to ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                  )}
                />
              </Link>
            ))}

            <a href={contactDetails.phoneHref} className="ml-2 flex items-center gap-2 text-sm tracking-wide text-[#DCAC74] hover:text-[#e4bc8e]">
              <Phone className="h-4 w-4" />
              {contactDetails.phone}
            </a>

            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#DCAC74] bg-[#DCAC74] px-6 text-sm tracking-[0.18em] text-[#111517] hover:scale-[1.02] hover:bg-[#e3b882]"
            >
              Contact
            </Link>
          </nav>

          <button
            type="button"
            className="relative z-[70] flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#111517]/80 text-white backdrop-blur-sm lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-6 bg-[#111517] lg:hidden"
        >
          <Logo className="mb-4 h-[80px]" />

          <nav className="flex w-full max-w-xs flex-col items-center gap-1" role="navigation" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'flex min-h-[52px] w-full items-center justify-center rounded-2xl text-xl tracking-wide',
                  location.pathname === link.to
                    ? 'bg-white/5 text-[#DCAC74]'
                    : 'text-white/80'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-2 flex flex-col items-center gap-4">
            <a
              href={contactDetails.phoneHref}
              className="flex min-h-[48px] items-center gap-2 text-lg text-[#DCAC74]"
            >
              <Phone className="h-5 w-5" />
              {contactDetails.phone}
            </a>

            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex min-h-[48px] items-center rounded-full bg-[#DCAC74] px-8 text-sm tracking-[0.18em] text-[#111517]"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
