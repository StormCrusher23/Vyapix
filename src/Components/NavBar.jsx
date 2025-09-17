import "./components.css"
import { useNavigate } from "react-router-dom";
function NavBar({logo}) {
    const navigate = useNavigate();
    return (
        
        <nav className="navbar">
            <div className="flex items-center">
                <img src={logo} alt="LOGO"  className=" h-10 md:h-15" />
                <h1 className="brand">Vyapix</h1>
            </div>

            <ul className="nav-links">
                <li>About</li>
                <li>Features</li>
                <button className="btn p-1 pl-1.5 pr-1.5 md:p-2.5 md:pl-5 md:pr-5 text-l md:text-xl" onClick={() => navigate('/login')}>Login</button>

            </ul>
        </nav>
    )
}
export default NavBar;