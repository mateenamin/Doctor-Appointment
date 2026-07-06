import Footer from "@/components/user/common/footer.component";
import AboutSection from "@/components/user/home/aboutSection.component";
import HeroSection from "@/components/user/home/heroSection.component";
import ProjectsSection from "@/components/user/home/projectsSection.component";
import ServicesSection from "@/components/user/home/serviceSection.component";

const HomePage = () => {
  return (
    <main className="overflow-y-auto scroll-smooth scrollbar-hide">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <Footer />
    </main>
  );
};

export default HomePage;
