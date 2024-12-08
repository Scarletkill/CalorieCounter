import './Navbar.css'
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className='nav'>
            <div className="nav-logo">Calorie-Count</div>
            <ul className="nav-menu">
                <li><Link to='/'><p>Home</p></Link></li>
                <li><Link to='/calculate'><p>Calculate</p></Link></li>
                <li><Link to='/about'><p>About Us</p></Link></li>
                <li><Link to='/contact'><p>Contact</p></Link>
                </li>
            </ul>
        </div>
    );
}
export default Navbar;