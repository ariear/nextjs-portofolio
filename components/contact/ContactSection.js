

const ContactSection = () => {
    return (
        <div className="bg-[#F7F7FB] container rounded-xl mx-auto flex flex-col lg:flex-row justify-between px-20 py-14">
            <aside className="mb-10 lg:mb-0">
                <p className="font-ibmplex font-semibold text-2xl mb-3">Contact</p>
                <p className="font-sourcesansae text-[#808080] text-lg mb-8">Beberapa cara menghubungi saya.</p>

                <div className="font-sourcesansae mb-4 flex items-start">
                    <img src="/asset/icons/mail.svg" className="mr-5" alt="" />
                    <div>
                    <p className="text-sm mb-1">Mail</p>
                    <p className="font-semibold text-lg">ArieMbois@gmail.com</p>
                    </div>
                </div>
                <div className="font-sourcesansae mb-4 flex items-start">
                    <img src="/asset/icons/phone.svg" className="mr-5" alt="" />
                    <div>
                    <p className="text-sm mb-1">Phone</p>
                    <p className="font-semibold text-lg">0881026233067</p>
                    </div>
                </div>
                <div className="font-sourcesansae mb-4 flex items-center">
                    <img src="/asset/icons/twitter.svg" className="mr-5" alt="" />
                    <div>
                    <p className="text-sm mb-1">Twitter</p>
                    <p className="font-semibold text-lg">@ariembois</p>
                    </div>
                </div>
            </aside>
            <aside className="font-sourcesansae font-semibold">
                <div className="flex flex-col md:flex-row md:items-center mb-8">
                    <div className="flex flex-col mr-8 md:mb-0 mb-5">
                        <label className="mb-2">Name</label>
                        <input type="text" className="w-[200px] bg-transparent border border-[#BFBFE3] p-2" />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-2">Email</label>
                        <input type="email" className="w-[200px] bg-transparent border border-[#BFBFE3] p-2" />
                    </div>
                </div>
                <div className="flex flex-col mb-8">
                    <label className="mb-2">Subject</label>
                    <input type="text" className="bg-transparent border border-[#BFBFE3] p-2" />
                </div>
                <div className="flex flex-col mb-5">
                    <label className="mb-2">Message</label>
                    <textarea cols="30" rows="5" className="bg-transparent border border-[#BFBFE3] p-2"></textarea>
                </div>
                <div className="flex justify-end">
                <button className="bg-black text-white py-2 px-9">Send</button>
                </div>
            </aside>
        </div>
    )
}

export default ContactSection