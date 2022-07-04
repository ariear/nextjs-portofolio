const ProfileSection = () => {
    return (
        <div className="text-center py-28" id="profile" >
            <p className="font-ibmplex font-semibold text-2xl mb-2">Profile</p>
            <p className="font-sourcesansae text-lg mb-14 text-[#808080]">Mengenal saya secara singkat</p>

            <div className="flex flex-col lg:flex-row items-center justify-center container mx-auto">
            <aside className="relative lg:mb-0 mb-20">
                <img src="/asset/square-back.png" className="absolute -bottom-5 -left-5" alt="" />
                <img src="/asset/human.png" className="relative" alt="" />
            </aside>
            <aside className="md:w-[493px] font-sourcesansae text-lg lg:ml-20 text-start px-5 md:px-0">
                <p className="mb-4"> Aliquam blandit leo lorem, nec vehicula mi accumsan posuere. Duis condimentum ornare ante a posuere. Aliquam sem magna, sodales quis congue vel, congue nec nisi. Aenean nec lorem et dolor aliquet ullamcorper eu at sapien. Sed pretium mauris dui. Phasellus mollis accumsan tempus. Proin laoreet hendrerit ligula, id lacinia eros. Aenean consequat, felis eu malesuada lobortis, augue nisl faucibus ligula, id viverra mi erat at nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas ac aliquet eros.</p>
                <p>Aliquam a fringilla metus. Fusce ut tortor ut sem sagittis convallis. Morbi et augue sed nisl fermentum dictum eget ut nisl. Mauris ut dolor posuere augue porta lobortis nec sed lacus. Curabitur dignissim ac lorem in tempor. Morbi id dui quis ex malesuada mattis. Suspendisse potenti. Nulla euismod diam ut risus mollis, id vehicula nulla dictum.</p>
            </aside>
            </div>
        </div>
    )
}

export default ProfileSection