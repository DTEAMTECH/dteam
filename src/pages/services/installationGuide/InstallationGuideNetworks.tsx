import React, {useEffect} from 'react';
import NetworksPageContent from "../../../components/pageContent/networksPageContent/NetworksPageContent";

const InstallationGuideNetworks = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <NetworksPageContent
            isServicePage={true}
            search={true}
            selector={true}
            titleText="INSTALLATION GUIDE"
        />
    );
};

export default InstallationGuideNetworks;