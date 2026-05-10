import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, Sparkles, ArrowRight } from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import { timeSlots } from '../../utils/helpers';
import { fadeLeft, fadeRight } from '../../utils/animations';

export default function BookingSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [selectedSlot, setSelectedSlot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    toast.success('🌿 Booking confirmed! We\'ll contact you shortly.', {
      duration: 5000,
      style: {
        background: '#071e3d',
        color: '#f5f0e8',
        border: '1px solid rgba(201,162,39,0.3)',
        borderRadius: '12px',
        fontFamily: 'Poppins, sans-serif',
        fontSize: '14px',
      },
    });
    reset();
    setSelectedSlot('');
    setIsSubmitting(false);
  };

  return (
    <section id="booking" className="py-28 relative overflow-hidden bg-navy-900">
      <Toaster position="top-center" />

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(201,162,39,0.3), transparent 70%)' }} />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <p className="section-label mb-4">Reserve Your Serenity</p>
            <h2 className="section-title mb-6">
              Book Your <em className="text-gold-gradient not-italic">Treatment</em>
            </h2>
            <div className="gold-divider mb-8" />
            <p className="text-cream/50 font-sans text-sm leading-relaxed mb-10">
              Your journey to tranquility begins with a single step. Fill in the form to reserve your preferred date and time, and our team will confirm your booking within 24 hours.
            </p>

            {/* Features */}
            {[
              { icon: '✓', text: 'Complimentary welcome tea & foot soak with every booking' },
              { icon: '✓', text: 'Flexible rescheduling up to 24 hours before your session' },
              { icon: '✓', text: 'Premium robes, slippers, and personal lockers provided' },
              { icon: '✓', text: 'Expert therapist matched to your specific needs' },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-3 mb-4"
              >
                <span className="text-gold-500 text-sm mt-0.5 flex-shrink-0">✦</span>
                <span className="text-cream/50 font-sans text-sm">{f.text}</span>
              </motion.div>
            ))}

            {/* Spa image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-10 relative rounded-2xl overflow-hidden h-64 border border-gold-700/20 shadow-gold group"
            >
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80"
                alt="Ocean Spa treatment room"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-6 pointer-events-none">
                <p className="text-gold-400 font-serif text-2xl font-light">Award-Winning Spa</p>
                <p className="text-cream/70 font-sans text-xs tracking-[0.2em] uppercase mt-1">Delhi's Finest</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass-card p-8 space-y-6"
            >
              <div className="flex items-center gap-2 mb-6">
                <Sparkles size={18} className="text-gold-500" />
                <h3 className="font-serif text-2xl text-cream">Reserve Your Session</h3>
              </div>

              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-cream/50 text-xs font-sans tracking-wider mb-2 flex items-center gap-2">
                    <User size={12} className="text-gold-600" /> Full Name
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    className="input-luxury"
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="text-cream/50 text-xs font-sans tracking-wider mb-2 flex items-center gap-2">
                    <Mail size={12} className="text-gold-600" /> Email
                  </label>
                  <input
                    {...register('email', { required: 'Email required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })}
                    className="input-luxury"
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              {/* Phone + Service */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-cream/50 text-xs font-sans tracking-wider mb-2 flex items-center gap-2">
                    <Phone size={12} className="text-gold-600" /> Phone
                  </label>
                  <input
                    {...register('phone', { required: 'Phone required' })}
                    className="input-luxury"
                    placeholder="+91 XXXXX XXXXX"
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                </div>
                <div>
                  <label className="text-cream/50 text-xs font-sans tracking-wider mb-2">Service</label>
                  <select
                    {...register('service', { required: 'Please select a service' })}
                    className="input-luxury appearance-none cursor-pointer"
                  >
                    <option value="" style={{ background: '#071e3d' }}>Select service</option>
                    {servicesData.map(s => (
                      <option key={s.id} value={s.title} style={{ background: '#071e3d' }}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                  {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>}
                </div>
              </div>

              {/* Date */}
              <div>
                <label className="text-cream/50 text-xs font-sans tracking-wider mb-2 flex items-center gap-2">
                  <Calendar size={12} className="text-gold-600" /> Preferred Date
                </label>
                <input
                  type="date"
                  {...register('date', { required: 'Date required' })}
                  className="input-luxury"
                  min={new Date().toISOString().split('T')[0]}
                />
                {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date.message}</p>}
              </div>

              {/* Time Slots */}
              <div>
                <label className="text-cream/50 text-xs font-sans tracking-wider mb-3 flex items-center gap-2">
                  <Clock size={12} className="text-gold-600" /> Preferred Time
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`py-2 rounded-xl text-xs font-sans transition-all duration-200 ${
                        selectedSlot === slot
                          ? 'bg-gold-500 text-navy-950 shadow-gold'
                          : 'glass-card text-cream/50 hover:text-cream hover:border-gold-700/40'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-cream/50 text-xs font-sans tracking-wider mb-2 flex items-center gap-2">
                  <MessageSquare size={12} className="text-gold-600" /> Special Requests
                </label>
                <textarea
                  {...register('message')}
                  rows={3}
                  className="input-luxury resize-none"
                  placeholder="Any allergies, preferences, or special requests..."
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-gold w-full flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-navy-950/40 border-t-navy-950 rounded-full"
                    />
                    Confirming...
                  </>
                ) : (
                  <>
                    Confirm Booking <ArrowRight size={16} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
