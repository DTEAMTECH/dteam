import React, {useEffect} from 'react';
import NetworksPageContent from "../../components/pageContent/networksPageContent/NetworksPageContent";

const StakingNetworks = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <NetworksPageContent
            isServicePage={true}
            search={true}
            selector={false}
            titleText="STAKE"
        />
    );
};

export default StakingNetworks;