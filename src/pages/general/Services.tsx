import React, {useEffect} from 'react';
import Title from "../../components/UI/title/Title";
import ServicesList from "../../components/servicesList/ServicesList";

const Services = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="container">
            <Title>SERVICES</Title>
            <ServicesList/>
        </section>
    );
};

export default Services;