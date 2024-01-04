import { useState } from "react"

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [telephone, setTelephone] = useState("")
    const [message, setMessage] = useState("")

    function submitContactForm() {

    }
    return (
        <div id="contact" className="w-screen flex flex-col p-3">
            <div className="text-black text-center uppercase font-poppins text-3xl md:text-5xl">Contact Us</div>
            <div className="text-gray-400 text-sm font-poppins text-center">Feel free to contact us to order some noods.</div>


            <div className="w-full h-full flex flex-col justify-evenly">

                <input className="h-[60px] p-2 font-poppins border-b border-gray-300 text-lg text-black placeholder:text-gray-400 outline-none" type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />


                <input className="h-[60px] p-2 font-poppins border-b border-gray-300 text-lg text-black placeholder:text-gray-400 outline-none" type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />

                <input className="h-[60px] p-2 font-poppins border-b border-gray-300 text-lg text-black placeholder:text-gray-400 outline-none" type="tel" placeholder="Telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} />

                <textarea className="h-[90px] p-2 font-poppins border-b border-gray-300 text-lg text-black placeholder:text-gray-400 outline-none" cols="8" placeholder="Message"
                    value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

                <button className="bg-primary h-[60px] uppercase rounded-xl shadow-sm font-extrabold text-white" onClick={submitContactForm} type="submit">Done</button>
            </div>

            <div className="w-full p-3">
                <a href="https://wa.me/+2349136309200" className="flex flex-row items-center justify-center cursor-pointer">
                    <img src="/assets/images/whatsapp-button.png" className="w-[30%] h-[60%]" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Contact
