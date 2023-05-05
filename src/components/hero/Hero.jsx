import "./hero.less"
import PhotoGrid from "../../assets/photo-grid.png"

function Hero() {
    return (
        <section className="main-hero">
            <img src={PhotoGrid} className="hero-photo-grid" alt="Photo Grid" />
            <h1 className="hero-title">Online Experiences</h1>
            <p className="hero-paragraph">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    );
}

export default Hero