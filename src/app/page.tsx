
import BusinessMilestones from "@/components/sections/BusinessMilestones";
import ClientTestimonials from "@/components/sections/ClientTestimonials";
import HeroSection from "@/components/sections/HeroSection";
import ScrollingTextSection from "@/components/sections/ScrollTextSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
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

      <BusinessMilestones/>
      <ServicesSection/>
      <WhyChooseUs/>
      <ClientTestimonials/>
      </>
   
      <Testimonial />
      <Footer />
      <IconSection />
      <Services />
      <Company />
      <About />
    </>
  );
}
