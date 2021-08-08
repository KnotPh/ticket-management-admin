import axios from "axios"
import { createUserFail, createUserStart, createUserSuccess, deleteUserFail, deleteUserSuccess, deleteUsertStart, getUsersFail, getUsersStart, getUsersSuccess, updateUserFail, updateUserStart, updateUserSuccess } from "./UserAction";

export const getUsers = async (dispatch) => {
    dispatch(getUsersStart());
    try {
        const res = await axios.get("/user", {
            headers:{
              token:"Bearer " + JSON.parse(localStorage.getItem("user")).accessToken},
          });
          dispatch(getUsersSuccess(res.data))
    } catch (error) {
        dispatch(getUsersFail())
    }
}

export const deleteUser = async (id,dispatch) => {
    dispatch(deleteUsertStart());
    try {
        await axios.delete("/user/"+id, {
            headers:{
              token:"Bearer " + JSON.parse(localStorage.getItem("user")).accessToken},
          });
          dispatch(deleteUserSuccess(id))
    } catch (error) {
        dispatch(deleteUserFail())
    }
}

export const createUser = async (user,dispatch) => {
    dispatch(createUserStart());
    try {
        const res = await axios.post("/auth/register", user,{
            headers:{
              token:"Bearer " + JSON.parse(localStorage.getItem("user")).accessToken},
          });
          dispatch(createUserSuccess(res.data))
    } catch (error) {
        dispatch(createUserFail())
    }
}

export const updateUser = async (id,user,dispatch) => {
    dispatch(updateUserStart());
    try {
        const res = await axios.put("/user/"+id, user,{
            headers:{
              token:"Bearer " + JSON.parse(localStorage.getItem("user")).accessToken},
          });
          dispatch(updateUserSuccess(res.data))
    } catch (error) {
        dispatch(updateUserFail())
    }
}