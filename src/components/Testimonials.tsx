import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Testimonials = () => {
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

  // Replace these slots with real, attributable client quotes when available.
  const testimonials = [1, 2, 3].map((n) => ({
    quote: t(`testimonials.${n}.quote`),
    author: t(`testimonials.${n}.author`),
    role: t(`testimonials.${n}.role`)
  }));

  return (
    <section id="testimonials" className="py-20 relative">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">{t('testimonials.title')}</h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.figure
              key={index}
              variants={itemVariants}
              className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#F39C35]/30 transition-all flex flex-col"
            >
              <Quote className="w-10 h-10 text-[#F39C35] mb-4" aria-hidden="true" />
              <blockquote className="text-slate-300 leading-relaxed flex-1">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-white/10">
                <p className="text-white font-semibold">{item.author}</p>
                <p className="text-[#F39C35] text-sm">{item.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
