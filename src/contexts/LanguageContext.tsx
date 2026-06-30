import React, { createContext, useContext, useEffect, useState } from 'react';

type Language = 'en-CA' | 'pt-BR';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'fab5-language';

const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en-CA';

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'en-CA' || stored === 'pt-BR') return stored;

  // Fall back to the browser's preferred language.
  const browser = window.navigator.language?.toLowerCase() ?? '';
  if (browser.startsWith('pt')) return 'pt-BR';
  return 'en-CA';
};

const PAGE_TITLES: Record<Language, string> = {
  'en-CA': 'FAB5 GeoSolutions | Geotechnical & Mining Engineering Consulting',
  'pt-BR': 'FAB5 GeoSolutions | Consultoria em Engenharia Geotécnica e de Mineração'
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (lang: Language) => setLanguageState(lang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    // Keep the document language and title in sync for SEO and accessibility.
    document.documentElement.lang = language;
    document.title = PAGE_TITLES[language];
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};