import React, {FC, PropsWithChildren} from 'react';
import {NavLink} from "react-router-dom";
import styles from "./ActiveNavLink.module.scss"
interface ActiveNavLinkProps {
    to: string;
    isService?: boolean;
}
const ActiveNavLink:FC<PropsWithChildren<ActiveNavLinkProps>> = ({children, to, isService}) => {
    return (
        <NavLink to={`/${to}`} className={isService ? `${styles.service__nav__link} ${styles.active__nav__link}` : styles.active__nav__link}
                 style={({ isActive, isPending }) => {
                     return {
                         color: isActive ? 'var(--primary-color)' : 'var(--secondary-color)',
                     };
                 }}
        >{children}</NavLink>
    );
};

export default ActiveNavLink;