
const About = () => {

    return (
        <div id='about' className="w-screen flex flex-col p-3 gap-4">
            <div className="text-black font-extrabold font-billabong uppercase text-center text-5xl md:text-6xl">..About Us..</div>

            <div className="w-full h-full flex flex-col md:items-center md:flex-row">
                <div className="h-[50%] p-3 w-full md:w-[50%] bg-black md:h-full flex justify-center items-center">
                    <img src="../../src/assets/images/logo.png" alt="" />
                </div>

                <div className="h-auto w-full md:w-[50%] md:h-full">
                    <strong className="text-primary">Noods</strong> is a Quick service restaurant under MAMAMELA FOODS. You can now order your meals and have it delivered to your preferred location. We specialize on bringing goodness to your taste buds.  We are strictly into Noodles & Pasta. We offer the best. Order a meal today to satisfy your cravings
                </div>
            </div>
        </div>
    )
}

export default About
