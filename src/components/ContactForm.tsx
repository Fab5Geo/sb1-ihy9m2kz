import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

interface FormData {
  fullName: string;
  email: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = t('contact.form.name.error');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contact.form.email.error');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.form.email.invalid');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact.form.message.error');
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    // Check if EmailJS is actually configured. Treat empty values and any
    // leftover placeholder (e.g. "your_public_key", "YOUR-PUBLIC-KEY-HERE")
    // as "not configured" so users see a friendly message instead of a
    // cryptic EmailJS error.
    const isPlaceholder = (value: string | undefined): boolean => {
      if (!value || !value.trim()) return true;
      const normalized = value.trim().toLowerCase();
      return normalized.includes('your') || normalized.includes('here');
    };

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (isPlaceholder(serviceId) || isPlaceholder(templateId) || isPlaceholder(publicKey)) {
      setSubmitStatus('error');
      setErrorMessage(t('contact.form.notConfigured'));
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        publicKey
      );
      
      setSubmitStatus('success');
      setFormData({ fullName: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setErrorMessage(
        error instanceof Error 
          ? `Error sending message: ${error.message}`
          : 'An unexpected error occurred. Please try again later.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 max-w-3xl mx-auto mt-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-white font-medium mb-2">
            {t('contact.form.name')}
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 bg-white/10 border ${
              errors.fullName ? 'border-red-500' : 'border-white/20'
            } rounded-xl text-white focus:outline-none focus:border-[#F39C35] transition-colors`}
            placeholder={t('contact.form.name.placeholder')}
          />
          {errors.fullName && (
            <p className="mt-1 text-red-500 text-sm">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-white font-medium mb-2">
            {t('contact.form.email')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 bg-white/10 border ${
              errors.email ? 'border-red-500' : 'border-white/20'
            } rounded-xl text-white focus:outline-none focus:border-[#F39C35] transition-colors font-mono text-sm`}
            placeholder={t('contact.form.email.placeholder')}
            style={{ minWidth: '300px' }}
          />
          {errors.email && (
            <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-white font-medium mb-2">
            {t('contact.form.message')}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className={`w-full px-4 py-2 bg-white/10 border ${
              errors.message ? 'border-red-500' : 'border-white/20'
            } rounded-xl text-white focus:outline-none focus:border-[#F39C35] transition-colors resize-none`}
            placeholder={t('contact.form.message.placeholder')}
          />
          {errors.message && (
            <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
          )}
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-[#F39C35] text-white py-3 px-6 rounded-xl flex items-center justify-center space-x-2 
              ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#F39C35]/80'} 
              transition-colors shadow-lg`}
          >
            <span>{isSubmitting ? t('contact.form.sending') : t('contact.form.send')}</span>
            <Send className="w-5 h-5" />
          </button>
        </div>

        {submitStatus === 'success' && (
          <p className="text-green-500 text-center font-medium">
            {t('contact.form.success')}
          </p>
        )}
        {submitStatus === 'error' && (
          <p className="text-red-500 text-center font-medium">
            {errorMessage || t('contact.form.error')}
          </p>
        )}
      </div>
    </motion.form>
  );
};

export default ContactForm;