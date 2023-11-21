import React, {FC} from 'react';
import {INetwork} from "../../../app/models/INetwork";
import ServicesContentContainer from "../ServicesContentContainer";

interface EndpointsContentProps {
    network: INetwork
}
const EndpointsContent:FC<EndpointsContentProps> = ({network}) => {
    return (
        <ServicesContentContainer></ServicesContentContainer>
    );
};

export default EndpointsContent;