import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';
import { useTranslation } from '../hooks/useTranslation';

const Contact = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">{t('contact.title')}</h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <motion.div
            variants={itemVariants}
            className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#F39C35]/30 transition-all group"
          >
            <Phone className="w-12 h-12 text-[#F39C35] mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-white mb-3">{t('contact.phone')}</h3>
            <a 
              href="tel:+17052800432" 
              className="text-slate-300 hover:text-[#F39C35] transition-colors"
            >
              +1 (705) 280-0432
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#F39C35]/30 transition-all group"
          >
            <Mail className="w-12 h-12 text-[#F39C35] mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-white mb-3">{t('contact.email')}</h3>
            <div className="flex justify-center">
              <a 
                href="mailto:fabricio.benjamim@me.com" 
                className="text-slate-300 hover:text-[#F39C35] transition-colors text-sm"
              >
                fabricio.benjamim@me.com
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#F39C35]/30 transition-all group"
          >
            <MapPin className="w-12 h-12 text-[#F39C35] mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-white mb-3">{t('contact.location')}</h3>
            <p className="text-slate-300">
              {t('contact.location.value')}
            </p>
          </motion.div>
        </div>

        <ContactForm />
      </motion.div>
    </section>
  );
};

export default Contact;