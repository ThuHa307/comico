import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        login: {
            currentUser: null,
            isFetching: false, //Loading
            error: false,
        },
        register: {
            currentUser: null,
            isFetching: false, //Loading
            error: false,
        },
    },
    reducers: {
        loginStart: (state) => {
            state.login.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.login.currentUser = action.payload;
            state.login.isFetching = false;
            state.login.error = false;
        },
        loginFailure: (state, action) => {
            state.login.isFetching = false;
            state.login.error = true;
        },
        registerStart: (state) => {
            state.register.isFetching = true;
        },
        registerSuccess: (state, action) => {
            state.register.currentUser = action.payload;
            state.register.isFetching = false;
            state.register.error = false;
        },
        registerFailure: (state, action) => {
            state.register.isFetching = false;
            state.register.error = true;
        },
    },
});

export const { loginStart, loginFailure, loginSuccess, registerFailure, registerStart, registerSuccess } =
    authSlice.actions;
export default authSlice.reducer;
