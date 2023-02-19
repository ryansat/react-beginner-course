import { Link } from "react-router-dom";

const Navbar = ({totalCounters}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/products">Products</Link>
            </li>
            <li>
                <Link to="/posts/2018/06">Posts</Link>
            </li>
            <li>
                <Link to="/admin">Admin</Link>
            </li>
            <li>
            <   Link to="/movies">Movies</Link>
            </li>
            </ul>
            <ul>
                <a className="navbar-brand">Navbar {" "}
                    <span className="badge badge-spill badge-secondary">
                        {totalCounters}
                    </span>
                </a>
            </ul>
        </nav>
    );
}
 
export default Navbar;