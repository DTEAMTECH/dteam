import React, {FC} from 'react';
import styles from "../NetworksLinks.module.scss"
import {INetwork} from "../../../app/models/INetwork";
import {useNavigate} from "react-router-dom";

interface MainnetLinksProps {
    network: INetwork
}
const MainnetLinks:FC<MainnetLinksProps> = ({network}) => {
    const navigate = useNavigate();
    return (
        <div className={styles.links}>
            <a target="__blank" href={network.links.delegate} className={`${styles.stake__link} ${styles.link}`}>STAKE</a>

            <button className={styles.link} onClick={() => navigate(`/services/${network.name}?type=${network.type}`)}>SERVICES</button>
            <button className={`coming__soon ${styles.link}`} disabled>EXPLORER(COMING SOON)</button>

            <a target="__blank" href={network.links.website} className={styles.link}>WEBSITE</a>
        </div>
    );
};

export default MainnetLinks;