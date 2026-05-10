import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import FeaturedProgram from '../components/home/FeaturedProgram';
import GallerySection from '../components/home/GallerySection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import TeamSection from '../components/home/TeamSection';
import PricingSection from '../components/home/PricingSection';
import FAQSection from '../components/home/FAQSection';
import BookingSection from '../components/home/BookingSection';
import ContactSection from '../components/home/ContactSection';

export default function Home() {
  return (
    <>
      <title>Ocean Spa | Luxury Wellness & Massage – Preet Vihar, Delhi</title>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedProgram />
      <GallerySection />
      <TestimonialsSection />
      <TeamSection />
      <PricingSection />
      <FAQSection />
      <BookingSection />
      <ContactSection />
    </>
  );
}
