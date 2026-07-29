import AboutHero from "../../components/user/about/aboutHero.component"
import AboutMission from "../../components/user/about/aboutMission.component"
import AboutTeam from "../../components/user/about/aboutTeam.component"
import AboutStats from "../../components/user/about/aboutStats.component"

const AboutPage = () => {
  return (
    <main>
      <AboutHero />
      <AboutMission />
      <AboutStats />
      <AboutTeam />
    </main>
  )
}

export default AboutPage