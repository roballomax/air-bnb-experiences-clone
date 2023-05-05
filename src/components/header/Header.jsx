import './header.less'
import AirbnbLogo from '../../assets/airbnb-logo.png'

function Header() {
    return (
        <header>
            <img src={AirbnbLogo} alt="Airbnb Logo" />
        </header>
    )
}

export default Header