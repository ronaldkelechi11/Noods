/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"

const Menu = () => {
    const [items, setItems] = useState(
        [
            {
                "id": 1,
                "name": "Noodles and Chicken",
                "price": "2,900",
                "image": "/src/assets/1.jpg",
                "description": "lorem ipsum dolor inti bla bla bla"
            },
            {
                "id": 2,
                "name": "Jollof Noodles and Chicken",
                "price": "3,000",
                "image": "/src/assets/1.jpg",
                "description": "lorem ipsum dolor inti bla bla bla"
            },
            {
                "id": 3,
                "name": "Chinese Noodles",
                "price": "3,000",
                "image": "/src/assets/2.jpg",
                "description": "lorem ipsum dolor inti bla bla bla"
            },
            {
                "id": 4,
                "name": "Garnished Beef Noodles",
                "price": "2,900",
                "image": "/src/assets/1.jpg",
                "description": "lorem ipsum dolor inti bla bla bla"
            },
            {
                "id": 5,
                "name": "Creamy Pasta",
                "price": "3,000",
                "image": "/src/assets/1.jpg",
                "description": "lorem ipsum dolor inti bla bla bla"
            },
            {
                "id": 6,
                "name": "Peppered Noodles and Chicken",
                "price": "3,000",
                "image": "/src/assets/2.jpg",
                "description": "lorem ipsum dolor inti bla bla bla"
            },
            {
                "id": 7,
                "name": "Garnished Macaroni and Chicken",
                "price": "2,500",
                "image": "/src/assets/1.jpg",
                "description": "lorem ipsum dolor inti bla bla bla"
            },
            {
                "id": 8,
                "name": "Spicy Suya Noodles",
                "price": "3,000",
                "image": "/src/assets/1.jpg",
                "description": "lorem ipsum dolor inti bla bla bla"
            },
            {
                "id": 9,
                "name": "Native Noodles",
                "price": "1,900",
                "image": "/src/assets/1.jpg",
                "description": "lorem ipsum dolor inti bla bla bla"
            }
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
        <div className="h-80 flex flex-col">
            <img src={menuitem.image} className="h-[65%] w-full" />
            <div className="w-full flex flex-col gap-1 justify-between p-2 text-center">
                <p className="text-3xl md:text-2xl font-billabong">{menuitem.name}</p>
                <p className="text-[11px] font-poppins text-slate-400">{menuitem.description}</p>
                <p className="font-extrabold">N{menuitem.price}</p>
            </div>
        </div>
    )
}

export default Menu
