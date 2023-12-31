import { TypeAnimation } from "react-type-animation"
import Navbar from "./Navbar"
import { motion } from "framer-motion"

const Hero = () => {

    return (
        <div className="w-screen bg-heroPattern bg-center md:bg-[url('/src/assets/images/4.jpg')] bg-cover">
            <div className="bg-[rgba(0,0,0,0.7)] w-full h-screen flex flex-col">
                <Navbar />

                <div className="flex flex-wrap flex-col justify-center items-center w-full h-full p-3 gap-3">

                    <motion.img
                        initial={{ y: -1000, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 4, type: 'spring' }}
                        src="/assets/images/logo.png" alt="" />


                    <motion.p
                        initial={{ x: -1000, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 4, type: 'spring' }}
                        className="text-white text-4xl md:text-7xl font-billabong text-center">
                        Delicious <span className="text-primary">Special</span> Delicacies
                    </motion.p>

                    <motion.p
                        initial={{ y: 1000, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 4, type: 'spring' }}
                        className="text-white font-poppins text-sm md:text-xl text-center">
                        <TypeAnimation
                            sequence={[
                                "Are you hungry for some Delicacies from Noods?", 1000,
                                "Get the best noodles in town right at your finger tips", 1000,
                                "Order your Noods Delicacies now ", 1000
                            ]}
                            speed={50}
                            repeat={Infinity}
                        />
                    </motion.p>

                    <motion.div
                        initial={{ x: 1000, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 4, type: 'spring' }}
                        className="flex flex-row mt-5">
                        <a href='https://wa.me/+2349136309200' className="border-white border-2 border-solid text-white font-billabong text-2xl p-[10px_40px] rounded-full text-center hover:bg-white hover:text-black hover:scale-105 ">Order Now</a>
                    </motion.div>
                </div>

            </div>
        </div>
    )
}

export default Hero
