// Utility functions

/**
 * Format price to Indian locale
 */
export const formatPrice = (num) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(num);

/**
 * Clamp a value between min and max
 */
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

/**
 * Generate random float between min and max
 */
export const randomBetween = (min, max) => Math.random() * (max - min) + min;

/**
 * Truncate text to n characters
 */
export const truncate = (text, n = 120) =>
  text.length > n ? text.substring(0, n) + '…' : text;

/**
 * Get initials from a name
 */
export const getInitials = (name) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

/**
 * Scroll to a section by ID
 */
export const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

/**
 * Debounce a function
 */
export const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

/**
 * Generate particles config
 */
export const generateParticles = (count = 20) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    delay: Math.random() * 6,
    duration: Math.random() * 4 + 4,
    opacity: Math.random() * 0.4 + 0.1,
  }));

/**
 * Time slots for booking
 */
export const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
  '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM',
];

/**
 * Nav links
 */
export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Booking', href: '/booking' },
  { label: 'Contact', href: '/contact' },
];

/**
 * Social links
 */
export const socialLinks = [
  { platform: 'Instagram', url: 'https://instagram.com/oceanspadelhi', icon: 'instagram' },
  { platform: 'Facebook', url: 'https://facebook.com/oceanspadelhi', icon: 'facebook' },
  { platform: 'WhatsApp', url: 'https://wa.me/919821077466', icon: 'whatsapp' },
  { platform: 'YouTube', url: 'https://youtube.com/@oceanspadelhi', icon: 'youtube' },
];

/**
 * Business info
 */
export const businessInfo = {
  name: 'Ocean Spa & Wellness Preet Vihar',
  tagline: 'Harmony For Mind & Body',
  address: 'Metro pillar no 87, 37, Vikas Marg, above Garg Property, near IDFC Bank, Defence Enclave, Swasthya Vihar, Delhi, 110092',
  phone: '+91 98210 77466',
  email: 'hello@oceanspawellness.in',
  hours: 'Mon – Sun: 9:00 AM – 9:00 PM',
  whatsapp: '919821077466',
};
