import {createAsyncThunk} from "@reduxjs/toolkit";
import {INetwork} from "../../../models/INetwork";
import axios from "axios";
import {
    IInflation,
    ITokensPool,
    ITotalSupply,
    ITotalSupplyItem,
    IValidator,
    IValidatorList
} from "../../../models/IAPR";

export const fetchTendermintAPR = createAsyncThunk (
    'networks/fetchTendermintAPR',
    async (network:INetwork, thunkAPI) => {
        try {
            let totalSupplyNativeTokens = 0, validatorCommission = 0

            if (!network.links.inflation) {
                return {
                    id: network.id,
                    apr: 0.00.toFixed(2) + "%"
                }
            }

            const inflationResponse = await axios.get<IInflation>(network.links.inflation);
            const tokensPoolResponse =  await axios.get<ITokensPool>(`https://api.${network.type}.${network.name}.dteam.tech/cosmos/staking/v1beta1/pool`)
            const totalSupplyResponse = await axios.get<ITotalSupply>(`https://api.${network.type}.${network.name}.dteam.tech/cosmos/bank/v1beta1/supply`)
            const validatorsListResponse = await axios.get<IValidatorList>(`https://api.${network.type}.${network.name}.dteam.tech/cosmos/staking/v1beta1/validators`)

            const inflation = inflationResponse.data.inflation;
            const bondedTokes = tokensPoolResponse.data.pool.bonded_tokens;
            const totalSupplyTokensList = totalSupplyResponse.data.supply;
            const validatorsList = validatorsListResponse.data.validators;

            totalSupplyTokensList.forEach((item:ITotalSupplyItem) => {
                if (item.denom === network.price.denom) {
                    totalSupplyNativeTokens = item.amount
                }
            })

            validatorsList.forEach((validator: IValidator) => {
                if(validator.operator_address === network.service.valoper_address) {
                    validatorCommission = validator.commission.commission_rates.rate
                }
            })


            if (!inflation) {
                return {
                    id: network.id,
                    apr: 0.00.toFixed(2) + "%"
                }
            }

            return {
                id: network.id,
                apr: (inflation * (totalSupplyNativeTokens / bondedTokes) * (1 - validatorCommission) * 100).toFixed(2) + "%"
            }

        } catch (e) {
            return thunkAPI.rejectWithValue("ERROR")
        }
    }
)