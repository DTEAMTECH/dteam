import React, {useEffect} from 'react';
import Title from "../../components/UI/title/Title";

const Loading = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="container">
            <Title>LOADING</Title>
        </section>
    );
};

export default Loading;