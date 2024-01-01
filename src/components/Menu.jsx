/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

const Menu = () => {
    const items =
        [
            {
                "id": 1,
                "name": "Spicy Suya Noodles",
                "price": "3,000",
                "image": "/assets/images/suya.jpg",
                "description": "Peppered Noodles with Suya Chunks"
            },
            {
                "id": 2,
                "name": "Native Noodles",
                "price": "2,500",
                "image": "/assets/images/native.jpg",
                "description": "A taste of special African Delicacy"
            },
            {
                "id": 3,
                "name": "Jollof Noodles and Chicken",
                "price": "2,900",
                "image": "/assets/images/jollof.jpg",
                "description": "Supmtious Nigerian Jollof Noodles"
            },
            {
                "id": 4,
                "name": "Chinese Noodles and Chicken",
                "price": "3,000",
                "image": "/assets/images/chinese.jpg",
                "description": "Explore our Intercontinental recipe"
            },
            {
                "id": 5,
                "name": "Oriental Noodles and Chicken",
                "price": "3,000",
                "image": "/assets/images/oriental.jpg",
                "description": "Intercontinental Recipe"
            },
            {
                "id": 6,
                "name": "Creamy Pasta and Chicken",
                "price": "3,500",
                "image": "/assets/images/creamy.jpg",
                "description": "Explore Special Creamy Macaronni"
            },
            {
                "id": 7,
                "name": "Rotini Pasta and Chicken",
                "price": "3,500",
                "image": "/assets/images/rotini.jpg",
                "description": "A yummy delicacy that serves your taste buds"
            },

        ]



    return (
        <div className="w-screen flex flex-col p-3">
            <p className="text-center text-4xl font-billabong md:text-5xl text-black">..Our Menu..</p>

            <div className="md:grid md:grid-cols-4 gap-5 flex flex-col">
                {
                    items?.map(menuitem => {
                        return (<MenuItem menuitem={menuitem} key={menuitem.id} />)
                    })
                }
            </div>
        </div>
    )
}



function MenuItem({ menuitem }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const mainControls = useAnimation()

    useEffect(() => {
        mainControls.start('visible')
        console.log("IS IN VIEW");
    }, [isInView,])


    return (
        <div className="flex flex-col h-80 md:h-100">
            <motion.img
                ref={ref}
                variants={{
                    hidden: { x: 1000, opacity: 0 },
                    visible: { x: 0, opacity: 1 }
                }}
                initial='hidden'
                animate={mainControls}
                transition={{ duration: 0.9, delay: 0.3 }}
                src={menuitem.image}
                className="h-[70%] md:h-[60%] w-full object-cover object-center" loading="eager" />

            <div className="w-full h-auto flex flex-col gap-1 justify-between p-2 text-center">
                <p className="text-3xl md:text-2xl font-billabong">{menuitem.name}</p>
                <p className="text-[11px] font-poppins text-slate-400">{menuitem.description}</p>
                <p className="font-extrabold">N{menuitem.price}</p>
            </div>
        </div>
    )
}

export default Menu
