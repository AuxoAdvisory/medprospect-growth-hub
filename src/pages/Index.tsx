import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import StatsStrip from "@/components/home/StatsStrip";
import SocialProof from "@/components/home/SocialProof";
import WhoWeWorkWith from "@/components/home/WhoWeWorkWith";
import IndustriesSection from "@/components/home/IndustriesSection";
import ProcessSection from "@/components/home/ProcessSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BookingSection from "@/components/home/BookingSection";

const Index = () => (
  <Layout>
    <HeroSection />
    <StatsStrip />
    <SocialProof />
    <WhoWeWorkWith />
    <IndustriesSection />
    <ProcessSection />
    <FeaturesSection />
    <TestimonialsSection />
    <BookingSection />
  </Layout>
);

export default Index;
