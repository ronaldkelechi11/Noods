/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"

const Menu = () => {
    const [items, setItems] = useState(
        [
            {
                "id": 1,
                "name": "Noodles and Chicken",
                "price": "2,900",
                "image": "../assets/images/1.jpg",
                "description": "Chicken and Noods in one plate"
            },
            {
                "id": 2,
                "name": "Jollof Noodles and Chicken",
                "price": "3,000",
                "image": "/src/assets/images/1.jpg",
                "description": "Supmtious Nigerian Jollof Noodles"
            },
            {
                "id": 3,
                "name": "Chinese Noodles",
                "price": "3,000",
                "image": "/src/assets/images/2.jpg",
                "description": "Explore our Intercontinental recipe"
            },
            {
                "id": 4,
                "name": "Garnished Beef Noodles",
                "price": "2,900",
                "image": "/src/assets/images/1.jpg",
                "description": "Too sweet and Savoury"
            },
            {
                "id": 5,
                "name": "Creamy Pasta",
                "price": "3,000",
                "image": "/src/assets/images/1.jpg",
                "description": "Explore Special Creamy Macaronni"
            },
            {
                "id": 6,
                "name": "Peppered Noodles and Chicken",
                "price": "3,000",
                "image": "/src/assets/images/2.jpg",
                "description": "Ohh that's spicy"
            },
            {
                "id": 7,
                "name": "Garnished Macaroni and Chicken",
                "price": "2,500",
                "image": "/src/assets/images/1.jpg",
                "description": "Sweet and Yummy"
            },
            {
                "id": 8,
                "name": "Spicy Suya Noodles",
                "price": "3,000",
                "image": "/src/assets/images/1.jpg",
                "description": "Peppered Noodles with Suya Chunks"
            },
            {
                "id": 9,
                "name": "Native Noodles",
                "price": "1,900",
                "image": "/src/assets/images/1.jpg",
                "description": "A taste of special African Delicacy"
            },
            {
                "id": 10,
                "name": "Oriental Noodles and Chicken",
                "price": "1,900",
                "image": "/src/assets/images/1.jpg",
                "description": "Intercontinental Recipe"
            },
            {
                "id": 11,
                "name": "Garnished Spaghetti and Chicken",
                "price": "1,900",
                "image": "/src/assets/images/1.jpg",
                "description": "Sweet and Yummy"
            },
        ]
    )
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
    return (
        <div className="flex flex-col h-80">
            <img src={menuitem.image} className="h-[60%] w-full" />

            <div className="w-full h-full flex flex-col gap-1 justify-between p-2 text-center">
                <p className="text-3xl md:text-2xl font-billabong">{menuitem.name}</p>
                <p className="text-[11px] font-poppins text-slate-400">{menuitem.description}</p>
                <p className="font-extrabold">N{menuitem.price}</p>
            </div>
        </div>
    )
}

export default Menu
