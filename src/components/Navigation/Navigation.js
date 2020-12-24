import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Navigation.module.css";
import routes from "../../routes";

const Navbar = () => {
    return(
        <nav className={styles.nav}>
            <ul>
                <li>
                    <NavLink exact to={routes.home}
                            className={styles.link}
                             activeClassName={styles.active}
                             >Home</NavLink>
                </li>
                <li>
                    <NavLink exact to={routes.movies}
                             className={styles.link}
                             activeClassName={styles.active}
                            >Movies</NavLink>
                </li>
            </ul>
        </nav>
    )
}


export default Navbar;