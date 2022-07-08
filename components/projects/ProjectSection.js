import { project } from "./project"

const ProjectSection = () => {
    return (
        <div className="text-center py-24" id="projects">
            <p className="font-ibmplex font-semibold text-2xl mb-2">Projects</p>
            <p className="font-sourcesansae text-lg mb-20 text-[#808080]">Beberapa proyek bikinan saya</p>

            <div className="grid md:grid-cols-2 gap-y-16 container justify-items-center mx-auto">
                {
                    project.map((val, index) => (
                <div key={index} className="w-[90vw] sm:w-[300px] lg:w-[370px] xl:w-[475px] font-sourcesansae group">
                    <div className="relative">
                    <img src={val.img} className="w-[90vw] sm:w-[300px] lg:w-[370px] xl:w-[475px] rounded-lg" alt="" />
                    <div className="group-hover:opacity-100 duration-300 rounded-xl opacity-0 absolute left-0 top-0 w-full h-full bg-[#0000008a] transition-all flex justify-center items-center">
                        <div className="flex items-center">
                            <a href={val.github}><img src="/asset/icons/github-white.png" className="mr-10" alt="" /></a>
                            <a href={val.live}><img src="/asset/icons/monitor-white.png" alt="" /></a>
                        </div>
                    </div>
                    </div>
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