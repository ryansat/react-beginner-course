const Navbar = ({totalCounters}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar {" "}
                <span className="badge badge-spill badge-secondary">
                    {totalCounters}
                </span>
            </a>
        </nav>
    );
}
 
export default Navbar;