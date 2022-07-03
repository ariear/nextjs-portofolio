const Nav = () => {
    return (
        <nav className="container mx-auto font-sourcesansae flex justify-between items-center py-10" >
            <h2 className="text-2xl font-medium text-white">ARIE</h2>
            <ul className="flex items-center font-medium text-lg text-[#ffffffa1]">
                <li className="mr-7">Profile</li>
                <li className="mr-7">Skills</li>
                <li className="mr-7">Projects</li>
                <li>Contact</li>
            </ul>
            <button className="py-2 px-8 rounded-full font-medium text-[#FCE72D] border border-[#FCE72D] ">Kontak</button>
        </nav>
    )
}

export default Nav