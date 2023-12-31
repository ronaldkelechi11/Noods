/* eslint-disable react/prop-types */

const Menu = () => {
    const items =
        [
            {
                "id": 1,
                "name": "Noodles and Chicken",
                "price": "2,900",
                "image": "",
                "description": "Chicken and Noods in one plate"
            },
            {
                "id": 2,
                "name": "Jollof Noodles and Chicken",
                "price": "3,000",
                "image": "/src/assets/images/jollof.jpg",
                "description": "Supmtious Nigerian Jollof Noodles"
            },
            {
                "id": 3,
                "name": "Chinese Noodles",
                "price": "3,000",
                "image": "/src/assets/images/chinese.jpg",
                "description": "Explore our Intercontinental recipe"
            },
            {
                "id": 4,
                "name": "Garnished Beef Noodles",
                "price": "2,900",
                "image": "",
                "description": "Too sweet and Savoury"
            },
            {
                "id": 5,
                "name": "Creamy Pasta",
                "price": "3,000",
                "image": "/src/assets/images/creamy.jpg",
                "description": "Explore Special Creamy Macaronni"
            },
            {
                "id": 6,
                "name": "Peppered Noodles and Chicken",
                "price": "3,000",
                "image": "",
                "description": "Ohh that's spicy"
            },
            {
                "id": 7,
                "name": "Garnished Macaroni and Chicken",
                "price": "2,500",
                "image": "",
                "description": "Sweet and Yummy"
            },
            {
                "id": 8,
                "name": "Spicy Suya Noodles",
                "price": "3,000",
                "image": "/src/assets/images/suya.jpg",
                "description": "Peppered Noodles with Suya Chunks"
            },
            {
                "id": 9,
                "name": "Native Noodles",
                "price": "1,900",
                "image": "/src/assets/images/native.jpg",
                "description": "A taste of special African Delicacy"
            },
            {
                "id": 10,
                "name": "Oriental Noodles and Chicken",
                "price": "1,900",
                "image": "/src/assets/images/oriental.jpg",
                "description": "Intercontinental Recipe"
            },
            {
                "id": 11,
                "name": "Garnished Spaghetti and Chicken",
                "price": "1,900",
                "image": "",
                "description": "Sweet and Yummy"
            }
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
    return (
        <div className="flex flex-col h-80 md:h-100">
            <img src={menuitem.image} className="h-[80%] md:h-[60%] w-full object-cover object-center" loading="eager" />

            <div className="w-full h-auto flex flex-col gap-1 justify-between p-2 text-center">
                <p className="text-3xl md:text-2xl font-billabong">{menuitem.name}</p>
                <p className="text-[11px] font-poppins text-slate-400">{menuitem.description}</p>
                <p className="font-extrabold">N{menuitem.price}</p>
            </div>
        </div>
    )
}

export default Menu
