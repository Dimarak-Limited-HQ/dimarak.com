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
      <IconSection />
      <Services />
      <Company />
      <About />
    </>
  );
}
