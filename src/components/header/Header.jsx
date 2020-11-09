import React from "react";

import "./Header.scss";
import {Link} from "react-router-dom";
import {Routes} from "../../config/Routes";


const Header = () => {

    return (
        <div className="header">
            <div className="logo">
                <h2>Company</h2>
            </div>

            <nav className="navbar">
                <ul className="nav-items">
                    {
                        Routes.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to={item.path}>{item.title}</Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </nav>

        </div>
    );
}

export default Header;
