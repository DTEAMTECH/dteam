import React, {FC} from 'react';
import {INetwork} from "../../../app/models/INetwork";
import {NetworkTypes} from "../../../widgets/networksList/NetworksList";
import styles from "../NetworkItem.module.scss";
import MainnetLinks from "../../../shared/ui/networkLinks/mainnetLinks/MainnetLinks";
import {useAppSelector} from "../../../app/store/hooks";
import {useAPR} from "../../../shared/hooks/useAPR";
import TestnetLinks from "../../../shared/ui/networkLinks/testnetLinks/TestnetLinks";

interface MainnetItemProps {
    network: INetwork
}

const NetworkItem:FC<MainnetItemProps> = ({network}) => {
    const {isTendermintAPRLoading, tendermintAPRError} = useAppSelector(state => state.tendermintAPRReducer);
    const APR = useAPR(network);

    return (
        <div className={styles.network}>
            <div className={styles.logo__wrapper}>
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

            {network.type === NetworkTypes.mainnets
                ? <MainnetLinks network={network}/>
                : <TestnetLinks network={network}/>
            }

        </div>
    );
};

export default NetworkItem;