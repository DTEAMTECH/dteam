import React, {FC} from 'react';
import ActiveNavLink from "../../shared/ui/activeNavLink/ActiveNavLink";
import styles from "./SelectService.module.scss"
interface SelectServiceProps {
    networkName: string
    networkType: string
}
const SelectService:FC<SelectServiceProps> = ({networkName, networkType}) => {
    return (
        <div className={styles.list}>
            <ActiveNavLink to={`services/${networkName}?type=${networkType}`} isService={true}>OVERVIEW</ActiveNavLink>
            <ActiveNavLink to={`services/installation-guide/${networkName}?type=${networkType}`} isService={true}>INSTALLATION GUIDE</ActiveNavLink>
            <ActiveNavLink to={`services/snapshot/${networkName}?type=${networkType}`} isService={true}>SNAPSHOT</ActiveNavLink>
            <ActiveNavLink to={`services/state-sync/${networkName}?type=${networkType}`} isService={true}>STATE SYNC</ActiveNavLink>
            <ActiveNavLink to={`services/useful-commands/${networkName}?type=${networkType}`} isService={true}>USEFUL COMMANDS</ActiveNavLink>
            <ActiveNavLink to={`services/faucet/${networkName}?type=${networkType}`} isService={true}>FAUCET</ActiveNavLink>
        </div>
    );
};

export default SelectService;