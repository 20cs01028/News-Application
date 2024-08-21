import React from "react";
import { Link } from "react-router-dom";
import '../CSS/NavBar2.css';

function NavBar2() {
    return (
        <div className="nav-link">
            <Link className="nav-link" to={`/`}>
                Home
            </Link>
            <Link className="nav-link" to={`/Entertainment`}>
                Entertainment
            </Link>
            <Link className="nav-link" to={`/Technology`}>
                Technology
            </Link>
            <Link className="nav-link" to={`/Sports`}>
                Sports
            </Link>
            <Link className="nav-link" to={`/Business`}>
                Business
            </Link>
            <Link className="nav-link" to={`/Health`}>
                Health
            </Link>
            <Link className="nav-link" to={`/Science`}>
                Science
            </Link>
        </div>
    );
}

export default NavBar2;
