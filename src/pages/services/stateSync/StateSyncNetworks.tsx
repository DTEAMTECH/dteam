import React, {useEffect} from 'react';
import NetworksPageContent from "../../../widgets/pageContent/networksPageContent/NetworksPageContent";

const StateSyncNetworks = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <NetworksPageContent
            isServicePage={true}
            search={true}
            selector={true}
            titleText="STATE SYNC"
        />
    );
};

export default StateSyncNetworks;