/* eslint-disable react/prop-types */

import axios from "axios"
import { useEffect, useState } from "react"

const Menu = () => {
    const [items, setItems] = useState([
        {
            "id": 1,
            "name": "Placeholder",
            "price": "9,999",
            "image": "",
            "description": "placeholder"
        },
    ])
    axios.get('/src/data/data.json')
        .then((result) => {
            setItems(result.data)
        }).catch((err) => {
            console.log(err);
        });


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
