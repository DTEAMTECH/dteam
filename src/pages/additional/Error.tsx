import React, {useEffect} from 'react';
import Title from "../../components/UI/title/Title";

const Error = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="container">
            <Title>ERROR</Title>
        </section>
    );
};

export default Error;