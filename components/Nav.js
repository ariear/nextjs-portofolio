import { useState } from "react"

const Nav = () => {
    const [open,setOpen] = useState(false)

    return (
        <nav className="container mx-auto font-sourcesansae flex justify-between items-center py-10 px-9 md:px-5 lg:px-10 2xl:px-0" >
            <h2 className="text-2xl font-medium text-white">ARIE</h2>
            <ul className="hidden md:flex items-center font-medium text-lg text-[#ffffffa1]">
                <li className="mr-7"><a href="#profile">Profile</a></li>
                <li className="mr-7"><a href="#skills">Skills</a></li>
                <li className="mr-7"><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <button className="md:block hidden py-2 px-8 rounded-full font-medium text-[#FCE72D] border border-[#FCE72D] ">Kontak</button>
            <div className="md:hidden block relative">
            <img src="/asset/icons/menu.svg" onClick={() => setOpen(!open)} className="w-[9px]" alt="" />
            {
                open &&
            <ul className="bg-white rounded-lg px-5 py-2 absolute -left-24 -bottom-36 text-lg">
                <li className="mb-1"><a href="#profile">Profile</a></li>
                <li className="mb-1"><a href="#skills">Skills</a></li>
                <li className="mb-1"><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            }
            </div>
        </nav>
    )
}

export default Nav