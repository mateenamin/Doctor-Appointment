import HeroSection from "../../components/user/home/heroSection.component";
import SpecializationsSection from "../../components/user/home/specializationsSection.component"
import TopDoctorsSection from "../../components/user/home/topDoctorsSection.component"
import HowItWorksSection from "../../components/user/home/howItWorksSection.component"
import FeaturesSection from "../../components/user/home/featuresSection.component"
import StatsSection from "../../components/user/home/statsSection.component"
import TestimonialsSection from "../../components/user/home/testimonialsSection.component"
import CtaSection from "../../components/user/home/ctaSection.component"

const HomePage = () =>{
  return (
    <main className="overflow-y-auto scroll-smooth scrollbar-hide">
      <HeroSection />
      <SpecializationsSection />
      <TopDoctorsSection />
      <HowItWorksSection />
      <FeaturesSection />
      <StatsSection />
       <TestimonialsSection />
       <CtaSection />
    </main>
  )
}

export default HomePage