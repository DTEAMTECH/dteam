import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchMainnets} from "../actionCreators/fetchMainnets";
import {INetwork} from "../../../models/INetwork";

interface MainnetsState {
    mainnets: INetwork[];
    isMainnetsLoading: boolean;
    mainnetsError: string;
}

const initialState: MainnetsState = {
    mainnets: [],
    isMainnetsLoading: false,
    mainnetsError: ''
}

export const mainnetsSlice = createSlice({
    name: 'mainnets',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchMainnets.fulfilled.type]: (state, action: PayloadAction<INetwork[]>) => {
            state.mainnets = action.payload;
            state.isMainnetsLoading = false;
            state.mainnetsError = ''
        },
        [fetchMainnets.pending.type]: (state) => {
            state.isMainnetsLoading = true;
        },
        [fetchMainnets.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isMainnetsLoading = false;
            state.mainnetsError = action.payload
        },
    }
})

export default mainnetsSlice.reducer