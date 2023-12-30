import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FaX } from "react-icons/fa6";

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    function toggleNav() {
        setIsOpen(!isOpen)
    }
    return (
        <div className='h-auto z-50 w-full p-4 flex flex-wrap items-center justify-between sticky top-0 '>
            <NavLink reloadDocument className="text-white text-3xl md:text-5xl font-billabong"
            >
                <img src="/src/assets/images/logo.png" className="w-15 h-10" />
            </NavLink>

            <div className="hidden md:flex flex-row gap-5 text-primary">
                <NavLinks />
            </div>

            <div className="md:hidden p-2 transition-all cursor-pointer text-white" onClick={toggleNav}>{isOpen ?
                <FaX color="currentColor" size={24} /> :
                <AiOutlineMenu color="currentColor" size={24} />
            }
            </div>

            {isOpen &&
                <>
                    <div className="text-primary basis-full md:hidden">
                        <NavLinks />
                    </div>
                </>
            }
        </div>
    )
}

function NavLinks() {
    const navbarStyling = "hover:scale-[1.1] hover:text-orange-300 font-poppins text-[14px] cursor-pointer transition-all bg-primary md:bg-transparent w-full text-center"
    return (
        <div className='text-2xl font- text-white flex flex-col justify-center md:flex-row gap-4 items-center'>
            <Link reloadDocument className={navbarStyling}>Home</Link>
            <a className={navbarStyling} href="#about">About</a>
            <a className={navbarStyling} href="#contact">Contact</a>
        </div >
    )
}

export default Navbar
