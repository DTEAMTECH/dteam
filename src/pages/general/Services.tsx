import React, {useEffect} from 'react';
import Title from "../../shared/ui/title/Title";
import ServicesList from "../../widgets/servicesList/ServicesList";
import PageContainer from "../../shared/ui/pageContainer/PageContainer";

const Services = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <PageContainer>
            <Title>SERVICES</Title>
            <ServicesList/>
        </PageContainer>
    );
};

export default Services;