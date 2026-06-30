import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';
import { useTranslation } from '../hooks/useTranslation';

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const serviceLinks = [
    { href: '#services', label: t('services.governance.title') },
    { href: '#services', label: t('services.compliance.title') },
    { href: '#services', label: t('services.advisory.title') },
    { href: '#services', label: t('services.innovation.title') },
    { href: '#services', label: t('services.risk.title') }
  ];

  const companyLinks = [
    { href: '#about', label: t('nav.about') },
    { href: '#community', label: t('nav.community') },
    { href: '#contact', label: t('nav.contact') }
  ];

  return (
    <footer className="relative border-t border-white/10 bg-[#0F172A]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-[#F39C35]"><Logo /></span>
              <span className="text-white text-xl font-bold">
                FAB5 <span className="text-[#F39C35]">GeoSolutions</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Services */}
          <nav aria-label={t('footer.services')}>
            <h2 className="text-white font-semibold mb-4">{t('footer.services')}</h2>
            <ul className="space-y-2">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-[#F39C35] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label={t('footer.company')}>
            <h2 className="text-white font-semibold mb-4">{t('footer.company')}</h2>
            <ul className="space-y-2">
              {companyLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-[#F39C35] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="text-white font-semibold mb-4">{t('footer.contact')}</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+17052800432"
                  className="flex items-center gap-2 text-slate-400 hover:text-[#F39C35] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#F39C35] shrink-0" />
                  +1 (705) 280-0432
                </a>
              </li>
              <li>
                <a
                  href="mailto:fabricio.benjamim@me.com"
                  className="flex items-center gap-2 text-slate-400 hover:text-[#F39C35] transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-[#F39C35] shrink-0" />
                  fabricio.benjamim@me.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-[#F39C35] shrink-0" />
                {t('contact.location.value')}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm text-center sm:text-left">
            © {year} FAB5 GeoSolutions. {t('footer.rights')}
          </p>
          <p className="text-slate-500 text-sm text-center sm:text-right">
            {t('footer.builtIn')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
