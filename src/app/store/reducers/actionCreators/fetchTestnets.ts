import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {INetwork} from "../../../models/INetwork";

export const fetchTestnets = createAsyncThunk (
    'networks/fetchTestnets',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<INetwork[]>('http://95.216.102.121:5100/network/testnet')
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue("ERROR")
        }
    }
)