import axios from 'axios';
import {
    loginFailure,
    loginStart,
    loginSuccess,
    registerFailure,
    registerStart,
    registerSuccess,
    logoutFailure,
    logoutStart,
    logoutSuccess,
} from './authSlice';

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post('http://localhost:8000/auth/login', user, {
            withCredentials: true,
            credentials: 'include',
        });
        dispatch(loginSuccess(res.data));
        navigate('/');
    } catch (err) {
        dispatch(loginFailure());
    }
};

export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try {
        const res = await axios.post('http://localhost:8000/auth/register', user);
        dispatch(registerSuccess(res.data));
        navigate('/login');
    } catch (err) {
        dispatch(registerFailure());
    }
};

export const logoutUser = async (dispatch, id, axiosJWT, accessToken, navigate) => {
    dispatch(logoutStart());
    try {
        await axiosJWT.post('http://localhost:8000/auth/logout', id, {
            headers: { token: `Bearer ${accessToken}` },
            withCredentials: true,
            credentials: 'include',
        });
        dispatch(logoutSuccess());
        navigate('/');
    } catch (error) {
        dispatch(logoutFailure());
    }
};
