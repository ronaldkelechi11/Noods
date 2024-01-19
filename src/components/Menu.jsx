/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { animate, motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"


// Swallow Images
import okra from '../assets/images/okra.jpeg'
import AfangSoup from "../assets/images/afang.jpeg";
import EdikangKong from '../assets/images/edikang-ikong.jpeg'
import Egusi from '../assets/images/egusi.jpeg'
import ofensala from '../assets/images/ofe-nsala.jpeg'
import bitterLeaf from '../assets/images/bitterleaf.jpeg'
import ogbono from '../assets/images/ogbono.jpeg'

// Extras
import yamImage from '../assets/images/yam.jpeg'
import plantain from '../assets/images/plantain.jpeg'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";


const Menu = () => {

    const [noodlesIsOpen, setNoodleIsOpen] = useState(false)
    const noodles = [
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
            "price": "3,000",
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
    ]

    const [pastasIsOpen, setPastasIsOpen] = useState(false)
    const pastas = [
        {
            "id": 8,
            "name": "Creamy Pasta and Chicken",
            "price": "3,000",
            "image": "/assets/images/creamy.jpg",
            "description": "Explore Special Creamy Macaronni"
        },
        {
            "id": 9,
            "name": "Rotini Pasta and Chicken",
            "price": "3,000",
            "image": "/assets/images/rotini.jpg",
            "description": "A yummy delicacy that serves your taste buds"
        },
    ]

    const [ricesIsOpen, setRicesIsOpen] = useState(false)
    const rices = [
        {
            "id": 1,
            "name": "Delicous Oriental Rice and chicken with desert",
            "price": "3,000",
            "image": "/assets/images/oriental_rice.jpg",
            "description": "A taste of special African Delicacy"
        },
        {
            "id": 2,
            "name": "Well-garnished Fried rice and chicken",
            "price": "3,000",
            "image": "/assets/images/garnished_fried_rice.jpg",
            "description": "A taste of special African Delicacy"
        },
    ]

    const [extrasIsOpen, setExtrasIsOpen] = useState(false)
    const extras = [
        {
            "id": 1,
            "name": "Plantain and Egg Sauce",
            "price": "2,000",
            "image": plantain,
            "description": "A sweet and spicy meal"
        },
        {
            "id": 2,
            "name": "Yummy yam and Egg-Sauce",
            "price": "2,000",
            "image": yamImage,
            "description": "A sweet and spicy meal"
        },
    ]

    const [swallowsIsOpen, setSwallowsIsOpen] = useState(false)
    const swallows = [
        {
            "id": 1,
            "name": "Okra Soup and Chicken",
            "price": "3,500",
            "image": okra,
            "description": "Native Soup with Good Taste"
        },
        {
            "id": 2,
            "name": "Afang Soup and Chicken",
            "price": "3,500",
            "image": AfangSoup,
            "description": "Native Soup with Good Taste"
        },
        {
            "id": 3,
            "name": "Edikang-Ikong Soup with Chicken",
            "price": "3,500",
            "image": EdikangKong,
            "description": "Native Soup with Good Taste"
        },
        {
            "id": 4,
            "name": "Egusi Soup and Chicken",
            "price": "3,500",
            "image": Egusi,
            "description": "Native Soup with Good Taste"
        },
        {
            "id": 5,
            "name": "Ofe-Nsala Soup and Chicken",
            "price": "3,500",
            "image": ofensala,
            "description": "Native Soup with Good Taste"
        },
        {
            "id": 6,
            "name": "Bitter Leaf soup and Chicken",
            "price": "3,500",
            "image": bitterLeaf,
            "description": "Native Soup with Good Taste"
        },
        {
            "id": 7,
            "name": "Ogbono Soup and Chicken",
            "price": "3,500",
            "image": ogbono,
            "description": "Native Soup with Good Taste"
        },

    ]


    return (
        <div className="w-screen flex flex-col p-3">
            <p className="text-center text-5xl font-billabong md:text-5xl text-black">
                ..Our Menu..
            </p>


            {/* Noodles */}
            <div className="md:flex gap-2 flex flex-col">
                <div className="text-center text-primary font-billabong flex flex-row justify-between items-center p-3">
                    <p className="text-center text-primary text-5xl font-billabong">Noodles</p>
                    <motion.div
                        className="text-3xl"
                        whileHover={{ rotateX: '90' }}
                        transition={{ duration: 1 }}
                        onClick={() => { setNoodleIsOpen(!noodlesIsOpen) }}>
                        {noodlesIsOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                    </motion.div>
                </div>
                {
                    noodlesIsOpen &&
                    <motion.div
                        className="flex flex-col md:flex-row md:flex-wrap gap-3 justify-evenly">
                        {
                            noodles.map(menuitem => {
                                return (<MenuItem menuitem={menuitem} key={menuitem.id} />)
                            })
                        }
                    </motion.div>
                }
            </div>



            {/* Pastas */}
            <div className="md:flex gap-2 flex flex-col">
                <div className="text-center text-primary font-billabong flex flex-row justify-between items-center p-3">
                    <p className="text-center text-primary text-5xl font-billabong">Pastas</p>
                    <motion.div
                        className="text-3xl"
                        whileHover={{ rotateY: '180deg' }}
                        transition={{ duration: 0.3 }}
                        onClick={() => { setPastasIsOpen(!pastasIsOpen) }}>
                        {pastasIsOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                    </motion.div>
                </div>
                {
                    pastasIsOpen &&
                    <motion.div
                        className="flex flex-col md:flex-row md:flex-wrap gap-3 justify-evenly">
                        {
                            pastas.map(menuitem => {
                                return (<MenuItem menuitem={menuitem} key={menuitem.id} />)
                            })
                        }
                    </motion.div>
                }
            </div>


            {/* Rices */}
            <div className="md:flex gap-2 flex flex-col">
                <div className="text-center text-primary font-billabong flex flex-row justify-between items-center p-3">
                    <p className="text-center text-primary text-5xl font-billabong">Rices</p>
                    <motion.div
                        className="text-3xl"
                        whileHover={{ rotateY: '180deg' }}
                        transition={{ duration: 0.3 }}
                        onClick={() => { setRicesIsOpen(!ricesIsOpen) }}>
                        {ricesIsOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                    </motion.div>
                </div>
                {
                    ricesIsOpen &&
                    <motion.div
                        className="flex flex-col md:flex-row md:flex-wrap gap-3 justify-evenly">
                        {
                            rices.map(menuitem => {
                                return (<MenuItem menuitem={menuitem} key={menuitem.id} />)
                            })
                        }
                    </motion.div>
                }
            </div>


            {/* Swallows */}
            <div className="md:flex gap-2 flex flex-col">
                <div className="text-center text-primary font-billabong flex flex-row justify-between items-center p-3">
                    <p className="text-center text-primary text-5xl font-billabong">Swallows</p>
                    <motion.div
                        className="text-3xl"
                        whileHover={{ rotateY: '180deg' }}
                        transition={{ duration: 0.3 }}
                        onClick={() => { setSwallowsIsOpen(!swallowsIsOpen) }}>
                        {swallowsIsOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                    </motion.div>
                </div>
                {
                    swallowsIsOpen &&
                    <motion.div
                        className="flex flex-col md:flex-row md:flex-wrap gap-3 justify-evenly">
                        {
                            swallows.map(menuitem => {
                                return (<MenuItem menuitem={menuitem} key={menuitem.id} />)
                            })
                        }
                    </motion.div>
                }
            </div>


            {/* Extras */}
            <div className="md:flex gap-2 flex flex-col">
                <div className="text-center text-primary font-billabong flex flex-row justify-between items-center p-3">
                    <p className="text-center text-primary text-5xl font-billabong">Extras</p>
                    <motion.div
                        className="text-3xl"
                        whileHover={{ rotateY: '180deg' }}
                        transition={{ duration: 0.3 }}
                        onClick={() => { setExtrasIsOpen(!extrasIsOpen) }}>
                        {extrasIsOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                    </motion.div>
                </div>
                {
                    extrasIsOpen &&
                    <motion.div
                        className="flex flex-col md:flex-row md:flex-wrap gap-3 justify-evenly">
                        {
                            extras.map(menuitem => {
                                return (<MenuItem menuitem={menuitem} key={menuitem.id} />)
                            })
                        }
                    </motion.div>
                }
            </div>


        </div >
    )
}



function MenuItem({ menuitem }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const mainControls = useAnimation()

    useEffect(() => {
        mainControls.start('visible')
    }, [isInView])


    return (
        <div className="flex flex-col h-96 md:h-100">
            <motion.img
                ref={ref}
                variants={{
                    hidden: { x: 1000, opacity: 0 },
                    visible: { x: 0, opacity: 1 }
                }}
                initial='hidden'
                animate={mainControls}
                transition={{ duration: 0.4 }}
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
