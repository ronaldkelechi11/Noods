import React from 'react'

const Footer = () => {
    return (
        <div className="h-auto md:h-[70vh] flex flex-col bg-black text-white gap-3 p-3 md:p-5" id="contactus">

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
                        <h5 className='font-lato text-center md:text-start'>

                        </h5>
                    </div>

                    <div className="flex flex-col mt-3">
                        <h4 className='font-bold font-lato text-center md:text-start'>Phone Number</h4>
                        <h5 className='font-lato text-center md:text-start'></h5>
                    </div>

                    <div className="flex flex-col mt-3">
                        <h4 className='font-bold font-lato text-center md:text-start'>Whatsapp</h4>
                        <h5 className='font-lato text-center md:text-start'></h5>
                    </div>
                </div>


                <div className="text-center flex flex-col gap-5 pb-3 mt-5 md:w-[40%]">
                    <h1 className='font-lato text-xl'>Track your payments, generate invoices and receive payments fast and swift now.</h1>
                    <div className="bg-darkPrimary text-white font-lato cursor-pointer w-full rounded-lg p-[15px_40px] hover:scale-110 transition-all">Order</div>
                </div>

            </div>


            <div className="flex flex-col gap-3">
                <hr className='' />
                <div className="text-center text-lg  md:text-2xl">© 2024 NOODS IS A  </div>
            </div>

        </div>
    )
}

export default Footer
