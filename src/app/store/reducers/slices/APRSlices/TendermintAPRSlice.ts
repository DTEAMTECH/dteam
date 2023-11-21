import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchTendermintAPR} from "../../actionCreators/fetchTendermintAPR";
import {APRItem} from "../../../../models/IAPR";

interface TendermintAPRState {
    tendermintAPRArray: APRItem[] ;
    isTendermintAPRLoading: boolean;
    tendermintAPRError: string;
}

const initialState: TendermintAPRState= {
    tendermintAPRArray: [],
    isTendermintAPRLoading: false,
    tendermintAPRError: ""
}

export const TendermintAPRSlice = createSlice({
    name: 'tendermintAPR',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchTendermintAPR.fulfilled.type]: (state, action: PayloadAction<APRItem>) => {
            state.tendermintAPRArray.push(action.payload)
            state.isTendermintAPRLoading = false;
            state.tendermintAPRError = '';
        },
        [fetchTendermintAPR.pending.type]: (state) => {
            state.isTendermintAPRLoading = true;
        },
        [fetchTendermintAPR.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isTendermintAPRLoading = false;
            state.tendermintAPRError = action.payload;
        },
    }
})

export default TendermintAPRSlice.reducer