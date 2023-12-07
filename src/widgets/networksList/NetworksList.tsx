import React, {FC, useEffect, useMemo, useState} from 'react';
import {INetwork} from "../../app/models/INetwork";
import styles from "./NetworksList.module.scss"
import NetworkItem from "../../entities/networkItem/networkItem/NetworkItem";
import ServiceNetworkItem from "../../entities/networkItem/serviceNetworkItem/ServiceNetworkItem";

export enum NetworkTypes {
    mainnets = 'mainnet',
    testnets = 'testnet'
}

interface NetworkListProps {
    networks: INetwork[];
    searchQuery: string;
    isServicePage: boolean;
}

const NetworksList:FC<NetworkListProps> = ({networks, searchQuery, isServicePage}) => {
    const getFilteredNetworks = useMemo(() => {
        return Array.isArray(networks)
            ? networks.filter((network) => network.name.toUpperCase().includes(searchQuery.toUpperCase()))
            : [];
    }, [searchQuery, networks])

    const [filteredNetworks, setFilteredNetworks] = useState(getFilteredNetworks)

    useEffect(() => {
        setFilteredNetworks(getFilteredNetworks)
    }, [getFilteredNetworks]);

    return (
        <div className={styles.list}>
            {filteredNetworks.map(network =>
                isServicePage
                    ? <ServiceNetworkItem key={network.id} network={network}/>
                    : <NetworkItem key={network.id} network={network}/>
            )}
        </div>
    );
};

export default NetworksList;