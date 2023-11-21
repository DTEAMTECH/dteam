import {INetwork} from "../app/models/INetwork";
import {useAppDispatch, useAppSelector} from "../app/store/hooks";
import {useEffect, useState} from "react";
import {TendermintParams} from "../app/models/INetworkParams";
import {NetworkTypes} from "../components/networksList/NetworksList";
import {fetchTendermintParams} from "../app/store/reducers/actionCreators/fetchTendermintParams";

export function useNetworkParams(network: INetwork | null) {
    const dispatch = useAppDispatch();
    const {tendermintParamsArray} = useAppSelector(state => state.tendermintParamsReducer);
    const [params, setParams] = useState<{chainId : string, nodeVersion: string}>({chainId: "LOADING...", nodeVersion: "LOADING..."})

    const getParamsById = (ParamsArray : TendermintParams[], id : number)  => {
        const item : TendermintParams | undefined = ParamsArray.find(item  => item.id === id);
        return item ? {
            chainId: item.chainId,
            nodeVersion: item.nodeVersion
        } : {
            chainId: "LOADING",
            nodeVersion: "LOADING"
        };
    }

    useEffect(() => {
        if (network !== null) {
            if (network.type === NetworkTypes.mainnets) {
                if (tendermintParamsArray.length === 0) {
                    dispatch(fetchTendermintParams(network))
                }
                setParams(getParamsById(tendermintParamsArray, network.id))
            }
        }
    }, [network, tendermintParamsArray,  dispatch]);

    if (network === null) {
        return {
            chainId: "ERROR",
            nodeVersion: "ERROR"
        }
    }

    return {
        chainId: params.chainId,
        nodeVersion: params.nodeVersion
    }
}