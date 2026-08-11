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

  const isHomePage = location.pathname === '/';
  const hasSolidBackground = !isHomePage || isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
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

        <nav className="hidden items-center gap-8 lg:flex">
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

        <button className="relative z-50 text-white lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={cn(
          'fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[#111517] px-6 transition-transform duration-300 lg:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <Logo className="h-[76px]" />
        {navLinks.map((link) => (
          <Link key={link.to} to={link.to} className={cn('text-center text-2xl text-white/82', location.pathname === link.to && 'text-[#DCAC74]')}>
            {link.label}
          </Link>
        ))}
        <a href={contactDetails.phoneHref} className="flex items-center gap-2 text-lg text-[#DCAC74]">
          <Phone className="h-5 w-5" />
          {contactDetails.phone}
        </a>
        <Link to="/contact" className="inline-flex min-h-12 items-center rounded-full border border-[#DCAC74] bg-[#DCAC74] px-7 text-sm tracking-[0.18em] text-[#111517]">
          Contact
        </Link>
      </div>
    </header>
  );
}
