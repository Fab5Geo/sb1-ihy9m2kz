import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return { t };
};