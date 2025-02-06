import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  LayoutGrid, 
  ShieldCheck, 
  Lightbulb,
  GanttChart,
  AlertTriangle
} from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Services = () => {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const services = [
    {
      icon: LayoutGrid,
      titleKey: 'services.governance.title',
      descriptionKey: 'services.governance.description'
    },
    {
      icon: ShieldCheck,
      titleKey: 'services.compliance.title',
      descriptionKey: 'services.compliance.description'
    },
    {
      icon: GanttChart,
      titleKey: 'services.advisory.title',
      descriptionKey: 'services.advisory.description'
    },
    {
      icon: Lightbulb,
      titleKey: 'services.innovation.title',
      descriptionKey: 'services.innovation.description'
    },
    {
      icon: AlertTriangle,
      titleKey: 'services.risk.title',
      descriptionKey: 'services.risk.description'
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">{t('services.title')}</h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="flex flex-col items-center space-y-8">
          {/* Top row - 3 services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#F39C35]/30 transition-all group"
              >
                <service.icon className="w-12 h-12 text-[#F39C35] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-white mb-3">{t(service.titleKey)}</h3>
                <p className="text-slate-300">{t(service.descriptionKey)}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom row - 2 services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[calc(66.666667%-1rem)]">
            {services.slice(3).map((service, index) => (
              <motion.div
                key={index + 3}
                variants={itemVariants}
                className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#F39C35]/30 transition-all group"
              >
                <service.icon className="w-12 h-12 text-[#F39C35] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-white mb-3">{t(service.titleKey)}</h3>
                <p className="text-slate-300">{t(service.descriptionKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;