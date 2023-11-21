import {combineReducers, configureStore} from '@reduxjs/toolkit'
import testnetsReducer from "./reducers/slices/TestnetsSlice"
import mainnetsReducer from "./reducers/slices/MainnetsSlice"
import tendermintAPRReducer from "./reducers/slices/APRSlices/TendermintAPRSlice"
import tendermintParamsReducer from "./reducers/slices/TendermintParamsSlice";

const rootReducer = combineReducers({
    testnetsReducer,
    mainnetsReducer,
    tendermintAPRReducer,
    tendermintParamsReducer
})

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch