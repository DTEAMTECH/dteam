import React, {FC} from 'react';
import {INetwork} from "../../../app/models/INetwork";
import ServicesContentContainer from "../ServicesContentContainer";

interface SnapshotContentProps {
    network: INetwork
}
const SnapshotContent:FC<SnapshotContentProps> = ({network}) => {
    return (
        <ServicesContentContainer></ServicesContentContainer>
    );
};

export default SnapshotContent;