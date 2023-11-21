import React, {FC} from 'react';
import styles from "../NetworksLinks.module.scss"
import {INetwork} from "../../../app/models/INetwork";
import {useNavigate} from "react-router-dom";

interface TestnetLinksProps {
    network: INetwork
}
const TestnetLinks:FC<TestnetLinksProps> = ({network}) => {
    const navigate = useNavigate();
    return (
        <div className={styles.links}>
            <button className={styles.link} onClick={() => navigate(`/services/${network.name}?type=${network.type}`)}>SERVICES</button>
            <button className={`coming__soon ${styles.link}`} disabled>EXPLORER(COMING SOON)</button>

            <a target="__blank" href={network.links.website} className={styles.link}>WEBSITE</a>
        </div>
    );
};

export default TestnetLinks;