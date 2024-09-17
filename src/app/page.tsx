

import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ScrollingTextSection from '@/components/sections/ScrollTextSection';
import Footer from "@/components/footer/Footer";
import Testimonial from '@/components/testimonial/Testimonial';
import HeroSection from "@/components/sections/HeroSection";
import IconSection from "@/components/sections/IconSection";



export default function Home() {
  return (
    <>
      <HeroSection />
      <ScrollingTextSection />
      <IconSection />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonial />
    </>
  );
}
