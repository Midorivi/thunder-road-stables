import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import { contactDetails, navLinks, springsteenLine } from '../../content/site';
import { Logo } from '../Logo';
import { SocialIcon } from '../ui/SocialIcon';

export function Footer() {
  return (
    <footer className="bg-[#111517] pb-8 pt-20 text-white">
      <div className="page-shell">
        <div className="grid gap-14 border-b border-white/10 pb-14 md:grid-cols-[1.2fr_0.9fr_0.8fr_0.95fr]">
          <div className="space-y-6">
            <Logo className="h-[76px]" />
            <p className="max-w-sm text-base leading-7 text-white/65">
              Where beauty meets exceptional care. Thunder Road Stables is built around steady work, honest horse care, and respect for the land.
            </p>
            <p className="max-w-sm text-sm italic leading-7 text-[#DCAC74]/80">{springsteenLine} <span className="not-italic text-white/50">Bruce Springsteen, Thunder Road</span></p>
          </div>

          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.38em] text-[#DCAC74]/85">Contact</p>
            <div className="flex items-start gap-3 text-white/72">
              <MapPin className="mt-1 h-5 w-5 text-[#DCAC74]" />
              <p className="leading-7">
                {contactDetails.address[0]}
                <br />
                {contactDetails.address[1]}
              </p>
            </div>
            <div className="flex items-center gap-3 text-white/72">
              <Phone className="h-5 w-5 text-[#DCAC74]" />
              <a href={contactDetails.phoneHref} className="hover:text-white">
                {contactDetails.phone}
              </a>
            </div>
          </div>

          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.38em] text-[#DCAC74]/85">Navigate</p>
            <nav className="space-y-3" role="navigation" aria-label="Footer">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} className="block text-white/72 hover:text-white">
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" className="block text-white/72 hover:text-white">
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.38em] text-[#DCAC74]/85">Follow along</p>
            <a
              href={contactDetails.instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Thunder Road Stables on Instagram"
              className="inline-flex items-center gap-3 text-white/72 hover:text-white"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/5 text-[#DCAC74]">
                <SocialIcon label="Instagram" className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm uppercase tracking-[0.2em] text-white/45">Instagram</span>
                <span className="block text-base">{contactDetails.instagramHandle}</span>
              </span>
            </a>
            <a
              href={contactDetails.facebookHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Thunder Road Stables on Facebook"
              className="inline-flex items-center gap-3 text-white/72 hover:text-white"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/5 text-[#DCAC74]">
                <SocialIcon label="Facebook" className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm uppercase tracking-[0.2em] text-white/45">Facebook</span>
                <span className="block text-base">Thunder Road Stables</span>
              </span>
            </a>
          </div>
        </div>

        <div className="pt-8 text-sm text-white/42">
          <p>© 2025 Thunder Road Stables.</p>
        </div>
      </div>
    </footer>
  );
}
