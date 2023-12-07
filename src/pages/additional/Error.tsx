import React, {useEffect} from 'react';
import Title from "../../shared/ui/title/Title";

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