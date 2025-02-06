import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={() => setLanguage('en-CA')}
        className={`transition-all duration-200 hover:scale-110 focus:outline-none ${
          language === 'en-CA' ? 'opacity-100' : 'opacity-50 hover:opacity-75'
        }`}
        aria-label="Switch to Canadian English"
      >
        <img
          src="https://flagcdn.com/w40/ca.png"
          srcSet="https://flagcdn.com/w80/ca.png 2x"
          width="30"
          height="20"
          alt="Canadian flag"
          className="rounded shadow-sm"
        />
      </button>
      <button
        onClick={() => setLanguage('pt-BR')}
        className={`transition-all duration-200 hover:scale-110 focus:outline-none ${
          language === 'pt-BR' ? 'opacity-100' : 'opacity-50 hover:opacity-75'
        }`}
        aria-label="Mudar para Português Brasileiro"
      >
        <img
          src="https://flagcdn.com/w40/br.png"
          srcSet="https://flagcdn.com/w80/br.png 2x"
          width="30"
          height="20"
          alt="Bandeira do Brasil"
          className="rounded shadow-sm"
        />
      </button>
    </div>
  );
};

export default LanguageSelector;