import {useAppSelector} from "../app/store/hooks";
import {NetworkTypes} from "../components/networksList/NetworksList";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {INetwork} from "../app/models/INetwork";

export function useCurrentNetwork(type: string) {
    const location = useLocation();

    const {mainnets} = useAppSelector(state => state.mainnetsReducer)
    const {testnets} = useAppSelector(state => state.testnetsReducer)

    const path = String(location.pathname)
    const pathArray = path.split("/")
    const networkName = pathArray[pathArray.length - 1]

    const [network, setNetwork] = useState<INetwork | null>(null)
    const [typeState, setTypeState] = useState(type)

    const [isMainnet, setIsMainnet] = useState<boolean>(false);
    const [isTestnet, setIsTestnet] = useState<boolean>(false);


    useEffect(() => {
        if (typeState !== NetworkTypes.mainnets && typeState !== NetworkTypes.testnets) {
            setTypeState(NetworkTypes.mainnets)
        }

        mainnets.forEach(network => {
            if (network.name === networkName) {
                if (typeState === NetworkTypes.mainnets) {
                    setNetwork(network)
                }
                setIsMainnet(true)
            }
        })

        testnets.forEach(network => {
            if (network.name === networkName) {
                if (typeState === NetworkTypes.testnets) {
                    setNetwork(network)
                }
                setIsTestnet(true)
            }
        })
    }, [networkName, mainnets, testnets, typeState]);

    if (isMainnet && isTestnet) {
        return {
            typeSelector: true,
            network: network
        }
    }

    return {
        typeSelector: false,
        network: network
    }
}