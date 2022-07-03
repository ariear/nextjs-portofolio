import Nav from "../Nav"
import ContentHome from "./ContentHome"

const HeroSection = () => {
    return (
        <div>
            <div className="bg-hero h-[700px] md:h-[600px] xl:h-[712px] 2xl:h-[950px]">
            <Nav />
            <ContentHome />
            </div>
        </div>
    )
}

export default HeroSection