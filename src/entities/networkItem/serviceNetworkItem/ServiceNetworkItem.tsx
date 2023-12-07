import React, {FC} from 'react';
import styles from "../NetworkItem.module.scss";
import {useLocation, useNavigate} from "react-router-dom";
import {INetwork} from "../../../app/models/INetwork";
import {useAppSelector} from "../../../app/store/hooks";
import {useAPR} from "../../../shared/hooks/useAPR";
import {NetworkTypes} from "../../../widgets/networksList/NetworksList";

interface ServiceItemProps {
    network: INetwork
}
const ServiceNetworkItem:FC<ServiceItemProps> = ({network}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const {isTendermintAPRLoading, tendermintAPRError} = useAppSelector(state => state.tendermintAPRReducer);
    const APR = useAPR(network);

    if (location.pathname === "/staking") {
        return (
            <a
                target="__blank"
                href={network.links.delegate}
                className={`${styles.service__network} ${styles.network}`}
            >
                <div className={`${styles.service__logo__wrapper} ${styles.logo__wrapper}`}>
                    <img className={styles.logo} src={network.logo} alt=""></img>
                </div>

                <div className={styles.right__side__wrapper}>
                    <div className={styles.text__wrapper}>
                        <h2>{network.name.toUpperCase()}</h2>
                        {network.type === NetworkTypes.mainnets
                            ?
                            <>
                                {(APR && !isTendermintAPRLoading && !tendermintAPRError) && <p className={styles.apr}>APR: {APR}</p>}
                                {isTendermintAPRLoading && <p className={styles.apr}>APR: LOADING...</p>}
                                {tendermintAPRError && <p className={styles.apr}>APR: IS NOT AVAILABLE</p>}
                            </>
                            : null
                        }
                    </div>
                </div>
            </a>
        );
    }

    return (
        <div
            className={`${styles.service__network} ${styles.network} `}
            onClick={() => navigate(`${location.pathname}/${network.name}?type=${String(new URLSearchParams(location.search).get('type'))}`)}
        >
            <div className={`${styles.service__logo__wrapper} ${styles.logo__wrapper}`}>
                <img className={styles.logo} src={network.logo} alt=""></img>
            </div>

            <div className={styles.right__side__wrapper}>
                <div className={styles.text__wrapper}>
                    <h2>{network.name.toUpperCase()}</h2>
                </div>
            </div>
        </div>
    );
};

export default ServiceNetworkItem;