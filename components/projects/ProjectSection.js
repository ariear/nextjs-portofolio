import { project } from "./project"

const ProjectSection = () => {
    return (
        <div className="text-center py-24" id="projects">
            <p className="font-ibmplex font-semibold text-2xl mb-2">Projects</p>
            <p className="font-sourcesansae text-lg mb-20 text-[#808080]">Beberapa proyek bikinan saya</p>

            <div className="grid md:grid-cols-2 gap-y-16 container justify-items-center mx-auto">
                {
                    project.map((val, index) => (
                <div key={index} className="w-[90vw] sm:w-[300px] lg:w-[370px] xl:w-[475px] font-sourcesansae">
                    <img src={val.img} className="w-[90vw] sm:w-[300px] lg:w-[370px] xl:w-[475px] rounded-lg" alt="" />
                    <p className="font-semibold text-xl mt-5 mb-2">{val.title}</p>
                    <p className="text-lg text-[#808080]">{val.desc}</p>
                </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProjectSection