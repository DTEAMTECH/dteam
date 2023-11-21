import React, {FC, useEffect, useMemo, useState} from 'react';
import {INetwork} from "../../app/models/INetwork";
import styles from "./NetworksList.module.scss"
import NetworksItem from "./NetworksItems/networksItem/NetworksItem";
import ServiceNetworksItem from "./NetworksItems/serviceNetworksItem/ServiceNetworksItem";

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
                    ? <ServiceNetworksItem key={network.id} network={network}/>
                    : <NetworksItem key={network.id} network={network}/>
            )}
        </div>
    );
};

export default NetworksList;