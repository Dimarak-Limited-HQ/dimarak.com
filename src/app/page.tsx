import HeroSection from '@/components/sections/HeroSection';
import ScrollingTextSection from '@/components/sections/ScrollTextSection';
import { Footer } from '@/components/footer/footer';
import Testimonial from '@/components/testimonial/Testimonial';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ScrollingTextSection />
      <Testimonial />
      <Footer />
    </>
  );
}
