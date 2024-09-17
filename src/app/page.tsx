import BusinessMilestones from "@/components/sections/BusinessMilestones";
import ClientTestimonials from "@/components/sections/ClientTestimonials";
import HeroSection from "@/components/sections/HeroSection";
import ScrollingTextSection from "@/components/sections/ScrollTextSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";


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
     
  );
}
