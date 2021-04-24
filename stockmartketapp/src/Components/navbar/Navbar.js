import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar_container">
            
            <nav className="pl-5">
                <div className="container-fluid pl-5 pb-1">
                    <NavLink style={{textDecoration:"none"}}to="/">
                    <span className="d-block pt-4 pb-0 mb-0 h1 nav_style">Quikie</span>
                    <small className="ml-5 mt-0 pt-0 pl-5 pb-5">Apps</small>
                    </NavLink>
                </div>
            </nav>
        </div>

    )
}

export default Navbar;