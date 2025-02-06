import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe2, Shield, Award } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Hero = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[#0F172A]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(243, 156, 53, 0.15) 2px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-transparent to-[#0F172A]" />
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                <span className="text-[#F39C35]">Geo</span>technical<br />
                Excellence<br />
                <span className="text-slate-300">Redefined</span>
              </h1>
              <p className="text-xl text-slate-300 max-w-xl leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <a 
                href="#services" 
                className="group bg-[#F39C35] text-white px-8 py-4 rounded-xl flex items-center hover:bg-[#F39C35]/90 transition-all shadow-lg hover:shadow-[#F39C35]/20 hover:translate-y-[-2px]"
              >
                {t('hero.cta.services')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="group px-8 py-4 rounded-xl flex items-center border-2 border-white/10 hover:border-[#F39C35]/50 text-white transition-all hover:bg-white/5"
              >
                {t('hero.cta.contact')}
              </a>
              <div className="flex items-center border-l-2 border-white/10 pl-4 ml-2">
                <div>
                  <div className="text-[#F39C35] text-3xl font-bold">15+</div>
                  <div className="text-slate-400 text-sm">{t('hero.stats.years')}</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Features */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="grid gap-6">
              <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-[#F39C35]/30 transition-all">
                <Globe2 className="w-8 h-8 text-[#F39C35] mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{t('hero.features.global.title')}</h3>
                <p className="text-slate-300">{t('hero.features.global.description')}</p>
              </div>
              
              <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-[#F39C35]/30 transition-all">
                <Shield className="w-8 h-8 text-[#F39C35] mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{t('hero.features.standards.title')}</h3>
                <p className="text-slate-300">{t('hero.features.standards.description')}</p>
              </div>
              
              <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-[#F39C35]/30 transition-all">
                <Award className="w-8 h-8 text-[#F39C35] mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{t('hero.features.excellence.title')}</h3>
                <p className="text-slate-300">{t('hero.features.excellence.description')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;