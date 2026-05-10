import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { teamData } from '../data/teamData';
import { fadeLeft, fadeRight, fadeUp, staggerContainer } from '../utils/animations';
import { Check } from 'lucide-react';

const values = [
  { icon: '🌿', title: 'Purity', desc: 'We use only 100% natural, organic, and ethically sourced ingredients in every treatment.' },
  { icon: '🧘', title: 'Mindfulness', desc: 'Each ritual is performed with full presence, intention, and devotion to your wellbeing.' },
  { icon: '✨', title: 'Excellence', desc: 'We hold ourselves to the highest standards of craft, service, and therapeutic outcomes.' },
  { icon: '💙', title: 'Compassion', desc: 'Every guest is welcomed with warmth, respect, and genuine care for their unique needs.' },
];

const milestones = [
  { year: '2009', event: 'Ocean Spa founded in Preet Vihar with a single treatment room and two therapists.' },
  { year: '2012', event: 'Expanded to 8 private treatment suites and introduced Thai massage certification.' },
  { year: '2016', event: 'Launched the Royal Ocean Package — now our most celebrated offering.' },
  { year: '2019', event: 'Awarded "Best Wellness Spa in East Delhi" by Times of India Health Awards.' },
  { year: '2022', event: 'Introduced Meditation Spa Day program and Couple Spa private suites.' },
  { year: '2025', event: 'Celebrating 15 years with 5,000+ happy guests and Delhi\'s most 5-star reviewed spa.' },
];

function PageHero({ title, subtitle, image }) {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden pt-20">
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-navy-950/80" />
      <div className="relative z-10 text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-label mb-4"
        >
          {subtitle}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl text-cream font-light"
        >
          {title}
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '80px' }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mx-auto mt-6 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent"
        />
      </div>
    </section>
  );
}

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <>
      <title>About | Ocean Spa – Preet Vihar, Delhi</title>
      <PageHero
        title="Our Story"
        subtitle="About Ocean Spa"
        image="https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=1600&q=85"
      />

      {/* Philosophy */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="section-label mb-4">Our Philosophy</p>
              <h2 className="font-serif text-4xl md:text-5xl text-cream font-light mb-6">
                Born from a <em className="text-gold-gradient not-italic">passion</em> for healing
              </h2>
              <div className="gold-divider mb-8" />
              <p className="text-cream/55 font-sans text-sm leading-relaxed mb-5">
                Ocean Spa was born in 2009 from founder Kavitha Nair's vision of bringing the world's most revered healing traditions to Delhi. After training in Chiang Mai, Ubud, and Kerala, she returned to Preet Vihar with a singular mission: to create a sanctuary where every guest feels truly restored.
              </p>
              <p className="text-cream/55 font-sans text-sm leading-relaxed">
                Fifteen years later, Ocean Spa has become synonymous with exceptional wellness in East Delhi — a place where cinematic luxury meets genuine therapeutic excellence, and where every treatment is crafted with artistry, knowledge, and deep care.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&q=85"
                alt="Kavitha Nair, founder of Ocean Spa"
                className="w-full h-[450px] object-cover rounded-3xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-4">What We Stand For</p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream font-light">
              Our Core <em className="text-gold-gradient not-italic">Values</em>
            </h2>
            <div className="gold-divider mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-7 text-center"
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-serif text-xl text-cream mb-3">{v.title}</h3>
                <p className="text-cream/45 text-xs font-sans leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Our Journey</p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream font-light">
              15 Years of <em className="text-gold-gradient not-italic">Excellence</em>
            </h2>
            <div className="gold-divider mx-auto mt-6" />
          </div>
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-6"
              >
                <div className="w-20 flex-shrink-0 text-right">
                  <span className="font-serif text-2xl text-gold-400">{m.year}</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                  {i < milestones.length - 1 && <div className="w-px flex-1 bg-gold-700/20 mt-2 h-12" />}
                </div>
                <div className="flex-1 glass-card p-5">
                  <p className="text-cream/60 text-sm font-sans leading-relaxed">{m.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
