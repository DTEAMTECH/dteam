import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchTendermintParams} from "../actionCreators/fetchTendermintParams";
import {TendermintParams} from "../../../models/INetworkParams";

interface TendermintParamsState {
    tendermintParamsArray: TendermintParams[];
    isTendermintParamsLoading: boolean;
    tendermintParamsError: string;
}

const initialState: TendermintParamsState = {
    tendermintParamsArray: [],
    isTendermintParamsLoading: false,
    tendermintParamsError: ""
}

export const TendermintParamsSlice = createSlice({
    name: 'tendermintParams',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchTendermintParams.fulfilled.type]: (state, action: PayloadAction<TendermintParams>) => {
            state.tendermintParamsArray.push(action.payload)
            state.isTendermintParamsLoading = false;
            state.tendermintParamsError = '';
        },
        [fetchTendermintParams.pending.type]: (state) => {
            state.isTendermintParamsLoading = true;
        },
        [fetchTendermintParams.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isTendermintParamsLoading = false;
            state.tendermintParamsError = action.payload;
        },
    }
})

export default TendermintParamsSlice.reducer