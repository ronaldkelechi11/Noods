import Navbar from "./Navbar"

const Hero = () => {
    return (
        <div className="w-screen h-screen bg-heroPattern bg-center md:bg-[url('/src/assets/4.jpg')] bg-cover">
            <div className="bg-[rgba(0,0,0,0.7)] w-full h-full">
                <Navbar />

                <div className="flex flex-row justify-center self-center w-full h-full">
                    <p></p>
                </div>

            </div>
        </div>
    )
}

export default Hero
