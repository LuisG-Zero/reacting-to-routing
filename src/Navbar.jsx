import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand"> Studio Ghibli </Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to={"/films"} className="nav-link"> View Films </Link>
                        <Link to={"/people"} className="nav-link"> View People </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

