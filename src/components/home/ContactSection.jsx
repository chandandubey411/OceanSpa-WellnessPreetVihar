import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { IconInstagram, IconFacebook, IconYoutube } from '../common/SocialIcons';
import { businessInfo } from '../../utils/helpers';
import { fadeLeft, fadeRight } from '../../utils/animations';

export default function ContactSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [sending, setSending] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async () => {
    setSending(true);
    await new Promise(r => setTimeout(r, 1500));
    toast.success('✉️ Message sent! We\'ll respond within 24 hours.', {
      style: {
        background: '#071e3d',
        color: '#f5f0e8',
        border: '1px solid rgba(201,162,39,0.3)',
        borderRadius: '12px',
        fontFamily: 'Poppins, sans-serif',
      },
    });
    reset();
    setSending(false);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-navy-950">
      <Toaster position="top-center" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Get In Touch</p>
          <h2 className="section-title">
            Visit <em className="text-gold-gradient not-italic">Ocean Spa</em>
          </h2>
          <div className="gold-divider mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info + Map */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            {/* Info cards */}
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { icon: MapPin, label: 'Address', value: businessInfo.address },
                { icon: Phone, label: 'Phone', value: businessInfo.phone },
                { icon: Mail, label: 'Email', value: businessInfo.email },
                { icon: Clock, label: 'Hours', value: businessInfo.hours },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="glass-card p-5 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-gold-600/10 border border-gold-700/30 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-gold-400" />
                  </div>
                  <div>
                    <p className="text-gold-600 text-xs font-sans tracking-wider uppercase mb-1">{label}</p>
                    <p className="text-cream/60 text-sm font-sans">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Embedded Map */}
            <div className="rounded-2xl overflow-hidden h-64 border border-white/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.656209594002!2d77.2929121!3d28.6400588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb24f683b431%3A0xe739af37dc1d1ccd!2sOcean%20Spa%20%26%20Wellness%20Preet%20Vihar!5e0!3m2!1sen!2sin!4v1715328144000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(200deg) saturate(0.5)' }}
                allowFullScreen
                loading="lazy"
                title="Ocean Spa Location"
              />
            </div>

            {/* Social Links */}
            <div className="glass-card p-6">
              <p className="text-cream/40 text-xs font-sans tracking-widest uppercase mb-4">Follow Us</p>
              <div className="flex gap-4">
                {[
                  { Icon: IconInstagram, label: 'Instagram' },
                  { Icon: IconFacebook, label: 'Facebook' },
                  { Icon: IconYoutube, label: 'YouTube' },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="flex items-center gap-2 text-cream/50 hover:text-gold-400 text-sm font-sans transition-colors"
                  >
                    <Icon size={16} />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="glass-card p-8 space-y-5">
              <h3 className="font-serif text-2xl text-cream mb-6">Send a Message</h3>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <input
                    {...register('name', { required: true })}
                    className="input-luxury"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">Required</p>}
                </div>
                <div>
                  <input
                    {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                    className="input-luxury"
                    placeholder="Email address"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">Valid email required</p>}
                </div>
              </div>

              <div>
                <input
                  {...register('phone', { required: true })}
                  className="input-luxury"
                  placeholder="+91 86XXX XXXXX"
                  type="tel"
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1">Phone number required</p>}
              </div>

              <textarea
                {...register('message', { required: true })}
                rows={5}
                className="input-luxury resize-none"
                placeholder="Your message..."
              />
              {errors.message && <p className="text-red-400 text-xs -mt-2">Message required</p>}

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-gold w-full flex items-center justify-center gap-3"
              >
                {sending ? 'Sending...' : <>Send Message <Send size={15} /></>}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
