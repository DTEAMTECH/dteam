import React, {FC, Suspense, useMemo, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {useAppSelector} from "../../../app/store/hooks";
import {useCurrentNetwork} from "../../../hooks/useCurrentNetwork";
import {useNetworkType} from "../../../hooks/useNetworkType";
import {NetworkTypes} from "../../networksList/NetworksList";
import Loading from "../../../pages/additional/Loading";
import Error from "../../../pages/additional/Error";
import Title from "../../UI/title/Title";
import SelectService from "../../selectService/SelectService";
import styles from "../PageContent.module.scss"
import LoadingContent from "../../servicesContent/content/LoadingContent";
import OverviewContent from "../../servicesContent/content/OverviewContent";
import {useNetworkParams} from "../../../hooks/useNetworkParams";
import ErrorContent from "../../servicesContent/content/ErrorContent";

const InstallationGuideContent = React.lazy(() => import("../../servicesContent/content/InstallationGuideContent"))
const StateSyncContent = React.lazy(() => import("../../servicesContent/content/StateSyncContent"))
const SnapshotContent = React.lazy(() => import("../../servicesContent/content/SnapshotContent"))
const EndpointsContent = React.lazy(() => import("../../servicesContent/content/EndpointsContent"))

interface ServicesPageContentProps {
    title: string;
}

const ServicesPageContent:FC<ServicesPageContentProps> = ({title}) => {
    const location = useLocation()
    const navigate = useNavigate()

    const {isMainnetsLoading, mainnetsError} = useAppSelector(state => state.mainnetsReducer)
    const {isTestnetsLoading, testnetsError} = useAppSelector(state => state.testnetsReducer)

    const currentNetwork  = useCurrentNetwork(String(new URLSearchParams(location.search).get('type')))
    const {chainId, nodeVersion} = useNetworkParams(currentNetwork.network)

    const [networkType, setNetworkType] = useState(useNetworkType());

    const getNetworkType = useMemo(() => (type: NetworkTypes, isButtonPressed: boolean) => {
        if (isButtonPressed && type !== String(new URLSearchParams(location.search).get('type'))) {
            navigate(`${location.pathname}?type=${type}`);
        }
        setNetworkType(type);
    }, [location.pathname, location.search, navigate]);


    if (isMainnetsLoading || isTestnetsLoading || currentNetwork.network === null) {
        return <Loading/>
    }

    if (mainnetsError || testnetsError) {
        return <Error/>
    }

    return (
        <section className="container">
            <Title
                name={currentNetwork.network.name}
                type={networkType}
                selector={currentNetwork.typeSelector}
                getNetworkType={getNetworkType}
            >{title}</Title>

            <div className={styles.wrapper}>
                <SelectService networkName={currentNetwork.network.name} networkType={networkType}/>

                {(chainId && nodeVersion) && (chainId !== "ERROR" && nodeVersion !== "ERROR")
                    ?
                    <Suspense fallback={<LoadingContent/>}>
                        {title === "OVERVIEW" && <OverviewContent network={currentNetwork.network}/>}
                        {title === "INSTALLATION GUIDE" && <InstallationGuideContent network={currentNetwork.network} nodeVersion={nodeVersion} chainId={chainId}/>}
                        {title === "STATE SYNC" && <StateSyncContent network={currentNetwork.network}/>}
                        {title === "SNAPSHOT" && <SnapshotContent network={currentNetwork.network}/>}
                        {title === "ENDPOINTS" && <EndpointsContent network={currentNetwork.network}/>}
                    </Suspense>
                    :
                    chainId === "LOADING" && nodeVersion === "LOADING"
                    ? <LoadingContent/>
                    : <ErrorContent/>
                }

            </div>
        </section>
    );
};

export default ServicesPageContent;