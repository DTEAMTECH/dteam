import React, {FC, PropsWithChildren} from 'react';
import Search from "../../search/Search";
import TypeSelector from "../../typeSelector/TypeSelector";
import styles from "./Title.module.scss";
import {NetworkTypes} from "../../networksList/NetworksList";

interface TitleProps {
    search?: boolean;
    selector?: boolean;
    type?: string;
    name?: string
    getSearchQuery?: (searchQuery: string) => void;
    getNetworkType?: (type: NetworkTypes, isButtonPressed: boolean) => void;
}

const Title:FC<PropsWithChildren<TitleProps>> = ({search, selector, type, getSearchQuery, getNetworkType, children, name}) => {

    if (search && selector && type && getSearchQuery && getNetworkType) {
        return (
            <div className={styles.title__wrapper}>
                <div className={styles.__blank}></div>

                <h1 className={`${styles.title} title__text`}>{children} <span style={{color: "var(--secondary-color)"}}>/ {type.toUpperCase()}</span></h1>

                <div className={styles.right__side__wrapper}>
                    <Search getSearchQuery={getSearchQuery}/>
                    <TypeSelector getNetworkType={getNetworkType}/>
                </div>
            </div>
        );
    }

    if (name && type && selector && getNetworkType) {
        return (
            <div className={styles.title__wrapper}>
                <div className={styles.__blank}></div>

                <h1 className={`${styles.title} title__text`}>{children} <span style={{color: "var(--secondary-color)"}}>/ {name.toUpperCase()} / {type.toUpperCase()}</span></h1>

                <div className={styles.right__side__wrapper}>
                    <TypeSelector getNetworkType={getNetworkType}/>
                </div>
            </div>
        );
    }

    if (search && !selector && getSearchQuery) {
        return (
            <div className={styles.title__wrapper}>
                <div className={styles.__blank}></div>

                <h1 className={`${styles.title} title__text`}>{children}</h1>

                <div className={styles.right__side__wrapper}>
                    <Search getSearchQuery={getSearchQuery}/>
                </div>
            </div>
        );
    }

    if (name && type && !selector) {
        return (
            <div className={styles.title__wrapper}>
                <h1 className={`${styles.title} title__text`}>{children} <span style={{color: "var(--secondary-color)"}}>/ {name.toUpperCase()} / {type.toUpperCase()}</span></h1>
            </div>
        );
    }

    return (
        <div className={styles.title__wrapper}>
            <h1 className={`${styles.title} title__text`}>{children}</h1>
        </div>
    );
};

export default Title;