import React, {FC} from 'react';
import {INetwork} from "../../../app/models/INetwork";
import ServicesContentContainer from "../ServicesContentContainer";

interface StateSyncContentProps {
    network: INetwork
}
const StateSyncContent:FC<StateSyncContentProps> = ({network}) => {
    return (
        <ServicesContentContainer></ServicesContentContainer>
    );
};

export default StateSyncContent;