import { TypeAnimation } from "react-type-animation"
import Navbar from "./Navbar"
import { motion } from "framer-motion"

const Hero = () => {

    return (
        <div className="w-screen bg-heroPattern bg-center md:bg-[url('/src/assets/images/4.jpg')] bg-cover">
            <div className="bg-[rgba(0,0,0,0.7)] w-full h-screen flex flex-col">
                <Navbar />

                <div className="flex flex-wrap flex-col justify-center items-center w-full h-full p-3 gap-3">
                    <p className="text-white text-8xl md:text-8xl text-center font-billabong"
                    >No<span className="text-primary">ods</span></p>
                    <motion.p
                        initial={{ x: -1000, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 3, type: 'spring' }}
                        className="text-white text-4xl md:text-7xl font-billabong text-center">
                        Delicious <span className="text-primary">Special</span> Noodles
                    </motion.p>

                    <motion.p
                        initial={{ y: 1000, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 3, type: 'spring' }}
                        className="text-white font-poppins text-sm md:text-xl text-center">
                        <TypeAnimation
                            sequence={[
                                "Are you hungry for some Noodles from Noods?", 1000,
                                "Get the best noodles in town right at your finger tips", 1000,
                                "Order your Noods Noodles now ", 1000
                            ]}
                            speed={50}
                            repeat={Infinity}
                        />
                    </motion.p>

                    <div className="flex flex-row mt-5">
                        <button className="border-white border-2 border-solid text-white font-billabong text-2xl p-[10px_40px] rounded-full text-center hover:bg-white hover:text-black hover:scale-105 ">Order Now</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero
