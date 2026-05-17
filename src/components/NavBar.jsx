import {NavLink} from "react-router-dom";

function NavBar() {
    return(
        <nav>
            <NavLink to="/" end className={({isActive}) =>(isActive ? "active" : "")}>Home</NavLink>
            <NavLink to="/novels" className={({isActive}) => (isActive ? "active" : "")}>Novels</NavLink>
            <NavLink to="/add-novel" className={({isActive}) => (isActive ? "active" : "")}>Add Novel</NavLink>
        </nav>
    );
}
export default NavBar;