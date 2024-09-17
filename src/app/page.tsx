
import HeroSection from '@/components/sections/HeroSection';
import ScrollingTextSection from '@/components/sections/ScrollTextSection';
import { Footer } from '@/components/footer/footer';
import Testimonial from '@/components/testimonial/Testimonial';

import HeroSection from "@/components/sections/HeroSection";
import ScrollingTextSection from "@/components/sections/ScrollTextSection";
import IconSection from "@/components/sections/IconSection";
import Services from "@/components/sections/Services";
import Company from "@/components/sections/Company";
import About from "@/components/sections/About";


export default function Home() {
  return (
    <>
      <HeroSection />
      <ScrollingTextSection />

      <Testimonial />
      <Footer />
      <IconSection />
      <Services />
      <Company />
      <About />
    </>
  );
}
