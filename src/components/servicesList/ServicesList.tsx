import React from 'react';
import styles from "./ServicesList.module.scss"
import {Link} from "react-router-dom";

const ServicesList = () => {
    return (
        <div className={styles.list}>
            <Link className={styles.item} to="/services/installation-guide?type=mainnet">INSTALLATION GUIDE</Link>
            <Link className={styles.item} to="/services/snapshot?type=mainnet">SNAPSHOT</Link>
            <Link className={styles.item} to="/services/state-sync?type=mainnet">STATE SYNC</Link>
            <Link className={styles.item} to="/services/endpoints?type=mainnet">ENDPOINTS</Link>
        </div>
    );
};

export default ServicesList;