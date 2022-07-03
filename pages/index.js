import HeadHTML from "../components/Head"
import HeroSection from "../components/home/HeroSection"
import ProfileSection from "../components/profile/ProfileSection"
import SkillsSection from "../components/skills/SkillsSection"

const Home = () => {
  return (
    <div>
      <HeadHTML />
      <HeroSection />
      <ProfileSection />
      <SkillsSection />
    </div>
  )
}


export default Home