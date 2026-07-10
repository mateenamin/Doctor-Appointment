import HeroSection from "../../components/user/home/heroSection.component";
import SpecializationsSection from "../../components/user/home/specializationsSection.component"
import TopDoctorsSection from "../../components/user/home/topDoctorsSection.component"

const HomePage = () => {
  return (
    <main className="overflow-y-auto scroll-smooth scrollbar-hide">
      <HeroSection />
      <SpecializationsSection />
      <TopDoctorsSection />
      {/* <HowItWorksSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <CtaSection /> */}
    </main>
  )
}

export default HomePage