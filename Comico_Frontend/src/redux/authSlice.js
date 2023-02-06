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
        logout: {
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
        loginFailure: (state) => {
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
        registerFailure: (state) => {
            state.register.isFetching = false;
            state.register.error = true;
        },
        logoutStart: (state) => {
            state.login.isFetching = true;
        },
        logoutSuccess: (state) => {
            state.login.currentUser = null;
            state.login.isFetching = false;
            state.login.error = false;
        },
        logoutFailure: (state) => {
            state.login.isFetching = false;
            state.login.error = true;
        },
    },
});

export const {
    loginStart,
    loginFailure,
    loginSuccess,
    registerFailure,
    registerStart,
    registerSuccess,
    logoutFailure,
    logoutSuccess,
    logoutStart,
} = authSlice.actions;
export default authSlice.reducer;
