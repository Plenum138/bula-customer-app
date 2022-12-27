import { createSlice } from "@reduxjs/toolkit";
import axiosRequest from "../constants/axiosRequest";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoading: false,
        user: {},
        logout: false
    },
    reducers: {
        userTokenDataReducer: (state, action) => {
            state.user = action.payload
            state.isLoading = false
            state.logout = false
        },
        authIsLoadingReducer: (state, action) => {
            state.isLoading = action.payload
        },
        logoutReducer: (state, action) => {
            state.logout = true;
        },
    }
})

export const { userTokenDataReducer, authIsLoadingReducer, logoutReducer } = authSlice.actions;
export default authSlice.reducer;



export function login(paramData) {
    return async dispatch => {
        try {

            console.log('api calling', paramData)
            // authIsLoadingReducer(true);
            // let { data } = axiosRequest.post("/login", paramData);
            // console.log(data)
        } catch (error) {
            console.log('catch error', error)
        }
    }
}

