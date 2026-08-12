import { Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { useSite } from '../context/SiteContext';

export default function Footer() {
  const SITE = useSite();
  return (
    <footer className="bg-academy-green-dark text-white pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white p-1.5 rounded-md">
                <Logo size={40} />
              </div>
              <h3 className="text-xl font-serif font-bold leading-tight">{SITE.shortName}</h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {SITE.fullName} — public sector Intermediate and BS programmes. Established in {SITE.established} at Phase 6,
              Hayatabad.
            </p>
            <div className="flex space-x-4">
              <a
                href={SITE.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-academy-gold-light transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-academy-gold-light">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={SITE.hedAdmissionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white text-sm"
                >
                  KP Online Admission Portal
                </a>
              </li>
              <li>
                <Link to="/admissions" className="text-white/70 hover:text-white text-sm">
                  Admissions Information
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white/70 hover:text-white text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-academy-gold-light">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-white/70 text-sm">
                <MapPin size={18} className="text-academy-gold-light shrink-0 mt-0.5" />
                <span>
                  {SITE.addressLine}
                  <br />
                  {SITE.city}
                </span>
              </li>
              <li className="flex items-center space-x-3 text-white/70 text-sm">
                <Phone size={18} className="text-academy-gold-light shrink-0" />
                <a href={`tel:${SITE.phone.replace(/-/g, '')}`} className="hover:text-white">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3 text-white/70 text-sm">
                <Mail size={18} className="text-academy-gold-light shrink-0" />
                <a href={`mailto:${SITE.email}`} className="hover:text-white break-all">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-academy-gold-light">Stay connected</h4>
            <p className="text-white/70 text-sm mb-4">
              Official notices, events, and campus photographs are published on the college Facebook page.
            </p>
            <a
              href={SITE.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full bg-academy-gold text-academy-green-dark px-4 py-3 rounded-md text-sm font-bold hover:bg-academy-gold-light transition-colors"
            >
              Open Facebook Page
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <p className="text-white/50 text-sm font-medium text-center">
            © {new Date().getFullYear()} {SITE.fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
