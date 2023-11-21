import React, {useEffect} from 'react';
import NetworksPageContent from "../../../components/pageContent/networksPageContent/NetworksPageContent";

const SnapshotNetworks = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <NetworksPageContent
            isServicePage={true}
            search={true}
            selector={true}
            titleText="SNAPSHOT"
        />
    );
};

export default SnapshotNetworks;