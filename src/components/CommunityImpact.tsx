import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, GraduationCap, Heart, Users } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const CommunityImpact = () => {
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
    <section id="community" className="py-20 relative">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">{t('community.title')}</h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            {t('community.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            variants={itemVariants}
            className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10"
          >
            <Trophy className="w-12 h-12 text-[#F39C35] mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-4">{t('community.athletic.title')}</h3>
            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 mb-6">
                {t('community.athletic.description')}
              </p>
              <div className="bg-white/5 p-6 rounded-xl mb-6">
                <blockquote className="text-slate-300 italic border-l-4 border-[#F39C35] pl-4">
                  {t('community.athletic.quote')}
                  <footer className="text-white mt-2">{t('community.athletic.quote.author')}</footer>
                </blockquote>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10"
          >
            <GraduationCap className="w-12 h-12 text-[#F39C35] mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-4">{t('community.scholarship.title')}</h3>
            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 mb-4">
                {t('community.scholarship.description')}
              </p>
              <ul className="text-slate-300 list-disc pl-6 mb-6">
                <li>{t('community.scholarship.fields.geo')}</li>
                <li>{t('community.scholarship.fields.env')}</li>
                <li>{t('community.scholarship.fields.geology')}</li>
                <li>{t('community.scholarship.fields.civil')}</li>
              </ul>
              <p className="text-slate-300">
                {t('community.scholarship.note')}
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 mb-12"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
            <Heart className="w-8 h-8 text-[#F39C35] mr-3" />
            {t('community.criteria.title')}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-white mb-3">{t('community.criteria.athletic.title')}</h4>
              <ul className="text-slate-300 space-y-2">
                <li>• {t('community.criteria.athletic.criteria1')}</li>
                <li>• {t('community.criteria.athletic.criteria2')}</li>
                <li>• {t('community.criteria.athletic.criteria3')}</li>
                <li>• {t('community.criteria.athletic.criteria4')}</li>
                <li>• {t('community.criteria.athletic.criteria5')}</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white mb-3">{t('community.criteria.academic.title')}</h4>
              <ul className="text-slate-300 space-y-2">
                <li>• {t('community.criteria.academic.criteria1')}</li>
                <li>• {t('community.criteria.academic.criteria2')}</li>
                <li>• {t('community.criteria.academic.criteria3')}</li>
                <li>• {t('community.criteria.academic.criteria4')}</li>
                <li>• {t('community.criteria.academic.criteria5')}</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-white mb-6 flex items-center justify-center">
            <Users className="w-8 h-8 text-[#F39C35] mr-3" />
            {t('community.future.title')}
          </h3>
          <p className="text-slate-300 max-w-3xl mx-auto mb-8">
            {t('community.future.description')}
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10">
              <p className="text-white font-semibold mb-2">{t('community.future.mentorship.title')}</p>
              <p className="text-slate-300 text-sm">{t('community.future.mentorship.description')}</p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10">
              <p className="text-white font-semibold mb-2">{t('community.future.stem.title')}</p>
              <p className="text-slate-300 text-sm">{t('community.future.stem.description')}</p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10">
              <p className="text-white font-semibold mb-2">{t('community.future.events.title')}</p>
              <p className="text-slate-300 text-sm">{t('community.future.events.description')}</p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center bg-[#F39C35] text-white px-8 py-3 rounded-xl hover:bg-[#F39C35]/80 transition-colors shadow-lg"
          >
            {t('community.cta')}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CommunityImpact;