import React, {useEffect} from 'react';
import NetworksPageContent from "../../../widgets/pageContent/networksPageContent/NetworksPageContent";

const EndpointsNetworks = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <NetworksPageContent
            isServicePage={true}
            search={true}
            selector={true}
            titleText="ENDPOINTS"
        />
    );
};

export default EndpointsNetworks;