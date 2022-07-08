import { skill } from "./skill"
import Tilt from 'react-tilt'

const SkillsSection = () => {
    return (
        <div className="bg-[#F7F7FB] text-center py-28" id="skills">
            <p className="font-ibmplex font-semibold text-2xl mb-2">Skills</p>
            <p className="font-sourcesansae text-lg mb-14 text-[#808080]">Beberapa kemampuan saya</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 w-[90vw] lg:w-[930px] mx-auto gap-5">
                {
                    skill.map((skil, index) => (
                <Tilt key={index} className="flex items-center bg-white py-5 px-7 rounded-lg shadow-xl">
                    <img src={skil.img} className="rounded-full mr-5" alt="" />
                    <div className="text-start font-sourcesansae">
                        <p className="font-semibold text-lg">{skil.name}</p>
                        <p className="font-semibold text-sm text-[#A3A3A3]">Lanjutan</p>
                    </div>
                </Tilt>
                    ))
                }
            </div>
        </div>
    )
}

export default SkillsSection