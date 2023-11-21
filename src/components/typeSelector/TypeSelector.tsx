import React, {FC, useEffect, useState} from 'react';
import styles from "./TypeSelector.module.scss"
import {NetworkTypes} from "../networksList/NetworksList";
import {useLocation} from "react-router-dom";
import {useNetworkType} from "../../hooks/useNetworkType";

interface TypeSelectorProps {
    getNetworkType: (type: NetworkTypes, isButtonPressed: boolean) => void;
}
const TypeSelector:FC<TypeSelectorProps> = ({getNetworkType}) => {
    const location = useLocation();

    const [networkType, setNetworkType] = useState<string | NetworkTypes>(useNetworkType())

    useEffect(() => {
        getNetworkType(String(new URLSearchParams(location.search).get('type')) === NetworkTypes.mainnets ? NetworkTypes.mainnets : NetworkTypes.testnets, false)
    }, [getNetworkType, location.search]);

    return (
        <div className={styles.choose}>
            <button
                style={networkType === NetworkTypes.mainnets
                    ? {color: "var(--primary-color)"}
                    : {color: "var(--secondary-color)"}}
                onClick={() => {
                    setNetworkType(NetworkTypes.mainnets)
                    getNetworkType(NetworkTypes.mainnets, true)
                }}
            >MAINNET</button>
            /
            <button
                style={networkType === NetworkTypes.testnets
                    ? {color: "var(--primary-color)"}
                    : {color: "var(--secondary-color)"}}
                onClick={() => {
                    setNetworkType(NetworkTypes.testnets)
                    getNetworkType(NetworkTypes.testnets, true)
                }}
            >TESTNET</button>
        </div>
    );
};

export default TypeSelector;