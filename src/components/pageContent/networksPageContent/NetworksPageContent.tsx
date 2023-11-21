import React, {FC, useMemo, useState} from 'react';
import {useAppSelector} from "../../../app/store/hooks";
import NetworksList, {NetworkTypes} from "../../networksList/NetworksList";
import Loading from "../../../pages/additional/Loading";
import Error from "../../../pages/additional/Error";
import Title from "../../UI/title/Title";
import {useNetworkType} from "../../../hooks/useNetworkType";
import {useLocation, useNavigate} from "react-router-dom";

interface NetworksPageContentProps {
    search: boolean;
    selector: boolean;
    isServicePage: boolean;
    titleText: string;
}

const NetworksPageContent:FC<NetworksPageContentProps> = ({search, selector, titleText, isServicePage}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const {mainnets, isMainnetsLoading, mainnetsError} = useAppSelector(state => state.mainnetsReducer)
    const {testnets, isTestnetsLoading, testnetsError} = useAppSelector(state => state.testnetsReducer)

    const [searchQuery, setSearchQuery] = useState<string>("")
    const [networkType, setNetworkType] = useState(useNetworkType());

    const getSearchQuery = (query: string) => {
        setSearchQuery(query);
    }

    const getNetworkType = useMemo(() => (type: NetworkTypes, isButtonPressed: boolean) => {
        if (isButtonPressed && type !== String(new URLSearchParams(location.search).get('type'))) {
            navigate(`${location.pathname}?type=${type}`);
        }
        setNetworkType(type);
    }, [location.pathname, location.search, navigate]);


    if (isMainnetsLoading || isTestnetsLoading) {
        return <Loading/>
    }

    if (mainnetsError || testnetsError) {
        return <Error/>
    }

    return (
        <section className="container">
            <Title
                search={search}
                selector={selector}
                type={networkType}
                getNetworkType={getNetworkType}
                getSearchQuery={getSearchQuery}
            >{titleText}</Title>

            <NetworksList
                isServicePage={isServicePage}
                networks={networkType === NetworkTypes.mainnets ? mainnets : testnets}
                searchQuery={searchQuery}
            />
        </section>
    );
};

export default NetworksPageContent;