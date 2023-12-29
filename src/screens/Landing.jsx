import About from "../components/About"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import Menu from "../components/Menu"

const Landing = () => {
    return (
        <div className='w-screen flex flex-col justify-center items-center'>
            <Hero />
            <Menu />
            <About />
            <Contact />
        </div>
    )
}

export default Landing
