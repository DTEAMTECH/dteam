import React, {useEffect} from 'react';
import './styles/index.scss'
import AppRouter from "./router/AppRouter";
import Header from "../widgets/header/Header";
import Footer from "../widgets/footer/Footer";
import {useAppDispatch} from "./store/hooks";
import {fetchMainnets} from "./store/reducers/actionCreators/fetchMainnets";
import {fetchTestnets} from "./store/reducers/actionCreators/fetchTestnets";


const App = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchMainnets())
        dispatch(fetchTestnets())
    }, [dispatch]);

    return (
        <div className="app">
            <Header/>
            <AppRouter/>
            <Footer/>
        </div>
    );
};

export default App;