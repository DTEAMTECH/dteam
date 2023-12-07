import React, {FC} from 'react';
import {INetwork} from "../../app/models/INetwork";
import ServicesContentContainer from "../../shared/ui/serviceContentContainer/ServicesContentContainer";

interface OverviewContentProps {
    network: INetwork
}
const OverviewContent:FC<OverviewContentProps> = ({network}) => {
    return (
        <ServicesContentContainer>
        </ServicesContentContainer>
    );
};

export default OverviewContent;