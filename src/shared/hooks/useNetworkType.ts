import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {NetworkTypes} from "../../widgets/networksList/NetworksList";

export function useNetworkType() {
    const location = useLocation();
    const navigate = useNavigate()

    const [networkType, setNetworkType] = useState<string>(String(new URLSearchParams(location.search).get('type')));

    useEffect(() => {
        if (networkType === NetworkTypes.mainnets || networkType === NetworkTypes.testnets) {
            setNetworkType(String(new URLSearchParams(location.search).get('type')))
        } else if (location.pathname !== "/staking") {
            navigate(`${location.pathname}?type=${NetworkTypes.mainnets}`);
            setNetworkType(NetworkTypes.mainnets)
        }
    }, [location.search, location.pathname, networkType, navigate]);

    if (location.pathname === "/staking" || (networkType !== NetworkTypes.mainnets && networkType !== NetworkTypes.testnets)) {
        return NetworkTypes.mainnets
    }

    return networkType
}