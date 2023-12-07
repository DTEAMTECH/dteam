import React, {FC} from 'react';
import {INetwork} from "../../app/models/INetwork";
import ServicesContentContainer from "../../shared/ui/serviceContentContainer/ServicesContentContainer";

interface SnapshotContentProps {
    network: INetwork
}
const SnapshotContent:FC<SnapshotContentProps> = ({network}) => {
    return (
        <ServicesContentContainer></ServicesContentContainer>
    );
};

export default SnapshotContent;