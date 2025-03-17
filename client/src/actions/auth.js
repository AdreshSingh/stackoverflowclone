import * as api from '../api';
import { setCurrentUser } from './currentUser';

export const signup = (authdata, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signup(authdata);
        dispatch({ type: "AUTH", data });
        dispatch(setCurrentUser(JSON.stringify(localStorage.getItem("profile"))))
        navigate("/")
    } catch (err) {
        console.log(`signup error: ${err.message}`)
    }
}

export const login = (authdata, navigate) => async (dispatch) => {
    try {
        const { data } = await api.login(authdata);
        dispatch({ type: "AUTH", data });
        dispatch(setCurrentUser(JSON.stringify(localStorage.getItem("profile"))))
        navigate("/")
    } catch (err) {
        console.log(`login error: ${err.message}`)
    }
}