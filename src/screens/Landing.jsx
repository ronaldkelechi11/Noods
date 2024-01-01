import About from "../components/About"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Menu from "../components/Menu"

const Landing = () => {
    return (
        <div className='w-screen flex flex-col justify-center items-center'>
            <Hero />
            <Menu />
            <About />
            <Contact />
            <Footer />
        </div>
    )
}

export default Landing
