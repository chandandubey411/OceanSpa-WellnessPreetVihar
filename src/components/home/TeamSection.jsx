import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IconInstagram, IconFacebook, IconYoutube } from '../common/SocialIcons';
import { teamData } from '../../data/teamData';
import { staggerContainer, fadeUp } from '../../utils/animations';

function TeamCard({ member, index }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative glass-card overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden rounded-t-[20px]">
        <motion.img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />

        {/* Social Icons (reveal on hover) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 left-0 right-0 flex justify-center gap-3"
        >
          {Object.entries(member.social).map(([platform, url]) => {
            const Icon = platform === 'instagram' ? IconInstagram : platform === 'facebook' ? IconFacebook : IconYoutube;
            return (
              <a
                key={platform}
                href={url}
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-full bg-navy-950/80 backdrop-blur border border-gold-700/40 flex items-center justify-center text-cream/70 hover:text-gold-400 hover:border-gold-500 transition-all"
              >
                <Icon size={14} />
              </a>
            );
          })}
        </motion.div>
      </div>

      {/* Info */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-serif text-xl text-cream mb-1">{member.name}</h3>
            <p className="text-gold-500 text-xs font-sans tracking-wider">{member.title}</p>
          </div>
          <div className="text-cream/30 text-xs font-sans text-right mt-1 flex-shrink-0">
            {member.experience}
          </div>
        </div>
        <p className="text-cream/40 text-xs font-sans mt-3 leading-relaxed line-clamp-2">{member.bio}</p>

        {/* Specialty tag */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="text-[10px] font-sans tracking-wider bg-gold-600/10 text-gold-500 px-3 py-1 rounded-full border border-gold-700/20">
            {member.specialty}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function TeamSection() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="team" className="py-28 relative overflow-hidden bg-navy-950">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">The Healers</p>
          <h2 className="section-title">
            Meet Our <em className="text-gold-gradient not-italic">Expert Team</em>
          </h2>
          <div className="gold-divider mx-auto mt-6 mb-6" />
          <p className="text-cream/50 font-sans text-sm max-w-xl mx-auto">
            Each therapist is hand-selected for their mastery, intuition, and compassion — bringing decades of healing wisdom to every session.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {teamData.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
