import { saveAs } from "file-saver"

const Footer = () => {
    const apkUrl = "/assets/apk/Noods.apk"

    function downloadApk() {
        saveAs(apkUrl, 'Noods.apk')
    }

    return (
        <div className="w-screen flex flex-col bg-black text-white gap-3 p-3 md:p-5">

            <div className="flex flex-col md:flex-row justify-center items-center h-full">

                <div className="md:w-[50%]">
                    <div className="flex flex-col gap-3">
                        <img src="/assets/images/logo.png" className='h-32 w-56 self-center' />
                        <h3 className='font-lato font-bold text-2xl text-center'>
                            Noods
                        </h3>
                    </div>

                    <div className="flex flex-col mt-3">
                        <h4 className='font-bold font-lato text-center md:text-start'>Email</h4>
                        <a href='mailto:noodsnigeria@gmail.com' className='font-lato text-center md:text-start'>
                            noodsnigeria@gmail.com
                        </a>
                    </div>

                    <div className="flex flex-col mt-3">
                        <h4 className='font-bold font-lato text-center md:text-start'>Phone Number</h4>
                        <a href="tel:+2347065006308" className='font-lato text-center md:text-start'>
                            +234 7065 006 308
                        </a>
                    </div>

                    <div className="flex flex-col mt-3">
                        <a href='https://wa.me/+2349136309200' className='font-bold font-lato text-center md:text-start'>Whatsapp</a>
                        <h5 className='font-lato text-center md:text-start'>+234 9136 309 200</h5>
                    </div>

                    {/* Available on Playstore button */}
                    <div className="flex flex-col mt-3">
                        <h5 className='font-bold font-lato text-center md:text-start'>
                            Our app is now available for download
                        </h5>
                        <div className='self-center md:self-start' onClick={downloadApk} >
                            <img src="/assets/images/google-play-badge.png" className="w-full h-32 cursor-pointer" />
                        </div>
                    </div>

                </div>


                <div className="text-center flex flex-col gap-5 pb-3 mt-5 md:w-[40%]">
                    <h1 className='font-lato text-xl'>Get premium meals right at your tips fingerprint</h1>

                    <a href='https://wa.me/+2349136309200'
                        className="border-white border-2 border-solid text-white font-billabong text-2xl p-[10px_40px] rounded-full text-center hover:bg-white hover:text-black hover:scale-105">
                        Order now
                    </a>
                </div>

            </div>


            <div className="flex flex-col gap-3">
                <hr className='' />
                <div className="text-center text-lg  md:text-2xl">© 2024 <br /> NOODS IS UNDER MAMAMELA FOOD VENTURES</div>
            </div>

        </div>
    )
}

export default Footer
