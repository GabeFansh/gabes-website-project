import { NavLink } from "react-router-dom";

const links = [
    {path: '/', text:'Home'},
    {path: 'about', text:'About'},
    {path: 'projects', text:'Projects'},
]

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                {links.map((link) =>{
                    return (
                        <li key={link.text} className="list-item">
                            <NavLink to={link.path}>{link.text}</NavLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
  };
  export default Navbar;
  