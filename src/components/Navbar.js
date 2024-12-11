import React, { Component } from "react";
import { Menuitems } from "./Menuitems";

import "./Navbar.css";

class Navbar extends Component {

    state = { clicked: false }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return(
            <nav className="NavbarItems">
                <ul className={this.state.clicked ? "nav-menu active": "nav-menu"}>
                    {Menuitems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}
export default Navbar;