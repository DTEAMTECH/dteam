import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchTestnets} from "../actionCreators/fetchTestnets";
import {INetwork} from "../../../models/INetwork";

interface TestnetsState {
    testnets: INetwork[];
    isTestnetsLoading: boolean;
    testnetsError: string;
}

const initialState: TestnetsState = {
    testnets: [],
    isTestnetsLoading: false,
    testnetsError: ''
}

export const testnetsSlice = createSlice({
    name: 'testnets',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchTestnets.fulfilled.type]: (state, action: PayloadAction<INetwork[]>) => {
            state.testnets = action.payload;
            state.isTestnetsLoading = false;
            state.testnetsError = ''
        },
        [fetchTestnets.pending.type]: (state) => {
            state.isTestnetsLoading = true;
        },
        [fetchTestnets.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isTestnetsLoading = false;
            state.testnetsError = action.payload
        },
    }
})

export default testnetsSlice.reducer