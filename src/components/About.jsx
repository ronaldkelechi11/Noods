
const About = () => {
    return (
        <div id='about' className="w-screen h-[70vh] flex flex-col p-3 gap-4">

            <h1 className="font-billabong text-center text-5xl">..About <span className="text-primary">Noods</span>..</h1>

            <div className="w-full h-full flex flex-row p-5">
                <div className="w-[50%] h-full">
                    <h1 className="font-billabong text-2xl">Our Story</h1>

                </div>


                <div className="w-[50%] h-full">
                    <h1 className="font-billabong text-2xl text-end">Our Vision</h1>

                </div>
            </div>
        </div>
    )
}

export default About
