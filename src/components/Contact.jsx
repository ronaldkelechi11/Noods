import { useState } from "react"
import { FaFacebook, FaMailchimp, FaPhone, FaWhatsapp } from "react-icons/fa6"

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [telephone, setTelephone] = useState("")
    const [message, setMessage] = useState("")

    function submitContactForm() {

    }
    return (
        <div id="contact" className="w-screen h-[80vh] flex flex-col p-3">
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
        </div>
    )
}

export default Contact
