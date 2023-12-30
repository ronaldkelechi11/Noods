
const About = () => {
    return (
        <div id='about' className="w-screen flex flex-col p-3 gap-4">
            <div className="text-black font-extrabold font-billabong uppercase text-center text-5xl md:text-6xl">..About Us..</div>

            <div className="w-full h-full flex flex-col md:items-center md:flex-row">
                <div className="h-[50%] w-full md:w-[50%] md:h-full flex justify-center items-center">
                    <img src="../../src/assets/images/logo.png" alt="" />
                </div>

                <div className="h-auto w-full md:w-[50%] md:h-full">
                    <strong className="text-primary">Noods</strong>
                </div>
            </div>
        </div>
    )
}

export default About
