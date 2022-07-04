import ContactSection from "../components/contact/ContactSection"
import Footer from "../components/Footer"
import HeroSection from "../components/home/HeroSection"
import ProfileSection from "../components/profile/ProfileSection"
import ProjectSection from "../components/projects/ProjectSection"
import SkillsSection from "../components/skills/SkillsSection"

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ProfileSection />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </div>
  )
}


export default Home