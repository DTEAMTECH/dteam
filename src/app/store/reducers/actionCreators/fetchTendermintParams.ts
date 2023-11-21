import {createAsyncThunk} from "@reduxjs/toolkit";
import {INetwork} from "../../../models/INetwork";
import axios from "axios";
import {IChainId, INodeVersion} from "../../../models/INetworkParams";

export const fetchTendermintParams = createAsyncThunk (
    'networks/fetchTendermintParams',
    async (network:INetwork, thunkAPI) => {
        try {
            const netResponse = await axios.get<IChainId>(`https://rpc.${network.type}.${network.name}.dteam.tech/net_info?`);
            const abciResponse = await axios.get<INodeVersion>(`https://rpc.${network.type}.${network.name}.dteam.tech/abci_info?`);

            const chainId = netResponse.data.result.peers[0].node_info.network
            const nodeVersion = abciResponse.data.result.response.version

            return {
                id: network.id,
                chainId: chainId,
                nodeVersion: nodeVersion
            }

        } catch (e) {
            return thunkAPI.rejectWithValue("ERROR")
        }
    }
)