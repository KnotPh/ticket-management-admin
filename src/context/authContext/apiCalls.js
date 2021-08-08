import axios from "axios";
import { loginFail, loginStart, loginSuccess } from "./AuthAction";

export const login = async(user, dispatch) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("auth/login", user)
        dispatch(loginSuccess(res.data));
    } catch (err) {
        alert(err.response.data);
        dispatch(loginFail());
    }
};