import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Rocket, Target } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const About = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
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
    <section id="about" className="py-20 relative">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">{t('about.title')}</h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <motion.div 
          variants={itemVariants} 
          className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 mb-12"
        >
          <div className="prose prose-invert max-w-none">
            <h3 className="text-2xl font-semibold text-white mb-6">{t('about.executive.title')}</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              {t('about.executive.p1')}
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              {t('about.executive.p2')}
            </p>
            <p className="text-slate-300 leading-relaxed">
              {t('about.executive.p3')}
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            variants={itemVariants}
            className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#F39C35]/30 transition-all"
          >
            <Award className="w-12 h-12 text-[#F39C35] mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">{t('about.education.title')}</h3>
            <ul className="text-slate-300 space-y-2">
              <li>{t('about.education.degree1')}</li>
              <li>{t('about.education.degree2')}</li>
              <li>{t('about.education.degree3')}</li>
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#F39C35]/30 transition-all"
          >
            <Rocket className="w-12 h-12 text-[#F39C35] mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">{t('about.expertise.title')}</h3>
            <ul className="text-slate-300 space-y-2">
              <li>{t('about.expertise.skill1')}</li>
              <li>{t('about.expertise.skill2')}</li>
              <li>{t('about.expertise.skill3')}</li>
              <li>{t('about.expertise.skill4')}</li>
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#F39C35]/30 transition-all"
          >
            <Target className="w-12 h-12 text-[#F39C35] mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">{t('about.impact.title')}</h3>
            <ul className="text-slate-300 space-y-2">
              <li>{t('about.impact.region1')}</li>
              <li>{t('about.impact.region2')}</li>
              <li>{t('about.impact.region3')}</li>
              <li>{t('about.impact.region4')}</li>
            </ul>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center bg-[#F39C35] text-white px-8 py-3 rounded-xl hover:bg-[#F39C35]/80 transition-colors shadow-lg"
          >
            {t('about.cta')}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;