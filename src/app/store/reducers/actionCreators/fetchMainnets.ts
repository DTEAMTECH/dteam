import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {INetwork} from "../../../models/INetwork";

export const fetchMainnets = createAsyncThunk (
    'networks/fetchMainnets',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<INetwork[]>('http://95.216.102.121:5100/network/mainnet')
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue("ERROR")
        }
    }
)