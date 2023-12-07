import React, {useEffect} from 'react';
import Title from "../../shared/ui/title/Title";

const NotFound = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="container">
            <Title>NOT FOUND</Title>
        </section>
    );
};

export default NotFound;