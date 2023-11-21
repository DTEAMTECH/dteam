import React from 'react';
import {Link} from "react-router-dom"
import styles from "./Footer.module.scss"

const Footer = () => {
    return (
        <footer>
            <p>COPYRIGHT © 2023 DTEAM.TECH</p>
            <div className={styles.links__container}>

                <div className={styles.links}>
                    <h2>TENDERMINT CHAIN SERVICES</h2>
                    <ul>
                        <li><Link to="/services/installation-guide?type=mainnet">INSTALLATION GUIDE</Link></li>
                        <li><Link to="/services/snapshot?type=mainnet">SNAPSHOT</Link></li>
                        <li><Link to="/services/state-sync?type=mainnet">STATE SYNC</Link></li>
                        <li><Link to="/services/endpoints?type=mainnet">ENDPOINTS</Link></li>
                    </ul>
                </div>

                <div className={styles.links}>
                    <h2>OTHER CHAIN SERVICES</h2>
                    <ul>
                        <li className="coming__soon">COMING SOON</li>
                    </ul>
                </div>

                <div className={styles.links}>
                    <h2>WEBSITE NAV</h2>
                    <ul>
                        <li><Link to="/">ABOUT US</Link></li>
                        <li><Link to="/features">FEATURES</Link></li>
                        <li><Link to="/networks?type=mainnet">NETWORKS</Link></li>
                        <li><Link to="/services">SERVICES</Link></li>
                        <li><Link to="/staking">STAKING</Link></li>
                    </ul>
                </div>

                <div className={styles.links}>
                    <h2>OUR COMMUNITY</h2>
                    <ul>
                        <li><a target="__blank" href="https://twitter.com/dteamtech">TWITTER</a></li>
                        <li><a target="__blank" href="https://t.me/dteam_en">TELEGRAM</a></li>
                        <li><a target="__blank" href="https://discord.gg/aFfJH3zW4M">DISCORD</a></li>
                        <li><a target="__blank" href="https://github.com/DTEAMTECH">GITHUB</a></li>
                    </ul>
                </div>

                <div className={styles.links}>
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li><a target="__blank" href="https://twitter.com/dteamtech">TWITTER</a></li>
                        <li><a target="__blank" href="https://t.me/+5wPfvrA0pudmYjQy">TELEGRAM</a></li>
                        <li><a target="__blank" href="mailto:contact@dteam.tech">EMAIL</a></li>
                    </ul>
                </div>

            </div>
        </footer>
    );
};

export default Footer;