/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Menu = () => {

    return (
        <div className="w-screen flex flex-col p-3">
            <p className="text-center text-5xl font-billabong md:text-5xl text-black">
                ..Our Menu..
            </p>

            <div className="grid grid-cols-2 gap-3 w-full">
                <MenuCard title={'Noodles'} link={'noodles'} />
                <MenuCard title={'Pastas'} link={'pastas'} />
                <MenuCard title={'Rices'} link={'rices'} />
                <MenuCard title={'Small Chops'} link={''} />
                <MenuCard title={'Extras'} link={'extras'} />
                <MenuCard title={'Swallows'} link={'swallows'} />
            </div>
        </div >
    )
}


function MenuCard({ image, title, link }) {
    let background = "h-48 bg-lightPrimary flex flex-col justify-center items-center rounded-xl gap-3"

    switch (title) {
        case 'Noodles':
            background = "h-48 bg-noodlesPattern bg-center bg-no-repeat bg-cover rounded-xl gap-3"
            break;
        case 'Pastas':
            background = "h-48 bg-pastasPattern bg-center bg-no-repeat bg-cover rounded-xl gap-3"
            break;
        case 'Rices':
            background = "h-48 bg-ricesPattern bg-center bg-no-repeat bg-cover rounded-xl gap-3"
            break;
        case 'Swallows':
            background = "h-48 bg-swallowsPattern bg-center bg-no-repeat bg-cover rounded-xl gap-3"
            break;
        case 'Small Chops':
            background = "h-48 bg-black bg-center bg-no-repeat bg-cover rounded-xl gap-3"
            break;
        case 'Extras':
            background = "h-48 bg-extrasPattern bg-center bg-no-repeat bg-covers rounded-xl gap-3"
            break;
        default:
            break;
    }



    return (
        <Link to={link} className={background}>
            <motion.div
                className="bg-[rgba(0,0,0,0.5)] w-full h-full rounded-xl flex flex-col justify-center items-center">
                <p className="font-billabong text-4xl mt-12 text-white">{title}</p>
            </motion.div>
        </Link>
    )
}


export default Menu
