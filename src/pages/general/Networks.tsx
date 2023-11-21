import NetworksPageContent from "../../components/pageContent/networksPageContent/NetworksPageContent";
import React, {useEffect} from "react";

const Networks = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <NetworksPageContent
            isServicePage={false}
            search={true}
            selector={true}
            titleText="NETWORKS"
        />
    );
};

export default Networks;