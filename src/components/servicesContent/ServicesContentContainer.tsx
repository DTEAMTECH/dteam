import React, {FC, PropsWithChildren} from 'react';
import styles from "./ServicesContentContainer.module.scss"

const ServicesContentContainer:FC<PropsWithChildren> = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

export default ServicesContentContainer;