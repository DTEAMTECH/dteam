import {useAppDispatch, useAppSelector} from "../app/store/hooks";
import {useEffect, useState} from "react";
import {APRItem} from "../app/models/IAPR";
import {NetworkTypes} from "../components/networksList/NetworksList";
import {fetchTendermintAPR} from "../app/store/reducers/actionCreators/fetchTendermintAPR";
import {INetwork} from "../app/models/INetwork";

export function useAPR(network: INetwork) {
    const dispatch = useAppDispatch();
    const {tendermintAPRArray} = useAppSelector(state => state.tendermintAPRReducer);
    const [APR, setAPR] = useState<string>("LOADING...")

    const getAprById = (APRArray : APRItem[], id : number)  => {
        const item : APRItem | undefined = APRArray.find(item  => item.id === id);
        return item ? item.apr : "LOADING...";
    }

    useEffect(() => {
        if (network.type === NetworkTypes.mainnets) {
            if (tendermintAPRArray.length === 0) {
                dispatch(fetchTendermintAPR(network))
            }
            setAPR(getAprById(tendermintAPRArray, network.id))
        }
    }, [network, tendermintAPRArray,  dispatch]);

    return APR
}