import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from '../hooks/useTranslation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 pt-4" aria-label="Primary">
      <div className="backdrop-blur-xl bg-white/80 rounded-3xl shadow-lg border border-white/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between h-16 px-6">
            <div className="flex items-center">
              <a href="#home" className="flex-shrink-0 flex items-center space-x-3" aria-label="FAB5 GeoSolutions home">
                <span className="text-[#F39C35]"><Logo /></span>
                <span className="text-gray-800 text-2xl font-bold">
                  FAB5 <span className="text-[#F39C35]">GeoSolutions</span>
                </span>
              </a>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-[#F39C35] transition-colors">{t('nav.home')}</a>
              <a href="#about" className="text-gray-700 hover:text-[#F39C35] transition-colors">{t('nav.about')}</a>
              <a href="#services" className="text-gray-700 hover:text-[#F39C35] transition-colors">{t('nav.services')}</a>
              <a href="#community" className="text-gray-700 hover:text-[#F39C35] transition-colors">{t('nav.community')}</a>
              <a href="#testimonials" className="text-gray-700 hover:text-[#F39C35] transition-colors">{t('nav.testimonials')}</a>
              <a href="#contact" className="bg-[#F39C35] text-white px-5 py-2.5 rounded-2xl hover:bg-[#F39C35]/80 transition-all shadow-sm">
                {t('nav.contact')}
              </a>
              <LanguageSelector />
            </div>

            <div className="md:hidden flex items-center space-x-4">
              <LanguageSelector />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-4 py-2.5 text-gray-700 hover:text-[#F39C35] rounded-xl hover:bg-gray-50 transition-all">{t('nav.home')}</a>
              <a href="#about" className="block px-4 py-2.5 text-gray-700 hover:text-[#F39C35] rounded-xl hover:bg-gray-50 transition-all">{t('nav.about')}</a>
              <a href="#services" className="block px-4 py-2.5 text-gray-700 hover:text-[#F39C35] rounded-xl hover:bg-gray-50 transition-all">{t('nav.services')}</a>
              <a href="#community" className="block px-4 py-2.5 text-gray-700 hover:text-[#F39C35] rounded-xl hover:bg-gray-50 transition-all">{t('nav.community')}</a>
              <a href="#testimonials" className="block px-4 py-2.5 text-gray-700 hover:text-[#F39C35] rounded-xl hover:bg-gray-50 transition-all">{t('nav.testimonials')}</a>
              <a href="#contact" className="block px-4 py-2.5 text-[#F39C35] font-medium rounded-xl hover:bg-gray-50 transition-all mb-2">{t('nav.contact')}</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;