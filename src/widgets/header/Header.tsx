import React from 'react';
import {Link, NavLink} from "react-router-dom";
import styles from "./Header.module.scss"

import ActiveNavLink from "../../shared/ui/activeNavLink/ActiveNavLink";
const Header = () => {
    return (
        <header>
            <div className={styles.dteam__logo__wrapper}>
                <Link className="title__text" to="/">DTEAM</Link>
            </div>

            <ul className={styles.nav__links}>
                <li><ActiveNavLink to="">ABOUT US</ActiveNavLink></li>
                <li><ActiveNavLink to="features">FEATURES</ActiveNavLink> </li>
                <li><ActiveNavLink to="networks?type=mainnet">NETWORKS</ActiveNavLink></li>
                <li><ActiveNavLink to="services">SERVICES</ActiveNavLink></li>
            </ul>

            <div className={styles.btn__wrapper}>
                <NavLink to="staking"
                         className={({ isActive, isPending }) => {
                             return isActive
                                 ? `${styles.active__stake__btn} ${styles.stake__btn}`
                                 : `${styles.stake__btn}`
                         }}
                >
                    STAKE NOW
                </NavLink>
            </div>
        </header>
    );
};

export default Header;