import axios from "axios"
import { createTicketFail, createTicketStart, createTicketSuccess, deleteTicketFail, deleteTicketStart, deleteTicketSuccess, getTicketsFail, getTicketsStart, getTicketsSuccess, updateTicketFail, updateTicketStart, updateTicketSuccess } from "./TicketAction"

export const getTickets = async (dispatch) => {
    dispatch(getTicketsStart());
    try {
        const res = await axios.get("/ticket", {
            headers:{
              token:"Bearer " + JSON.parse(localStorage.getItem("user")).accessToken},
          });
          dispatch(getTicketsSuccess(res.data))
    } catch (error) {
        dispatch(getTicketsFail())
    }
}

export const deleteTicket = async (id,dispatch) => {
    dispatch(deleteTicketStart());
    try {
        await axios.delete("/ticket/"+id, {
            headers:{
              token:"Bearer " + JSON.parse(localStorage.getItem("user")).accessToken},
          });
          dispatch(deleteTicketSuccess(id))
    } catch (error) {
        dispatch(deleteTicketFail())
    }
}

export const createTicket = async (ticket,dispatch) => {
    dispatch(createTicketStart());
    try {
        const res = await axios.post("/ticket", ticket,{
            headers:{
              token:"Bearer " + JSON.parse(localStorage.getItem("user")).accessToken},
          });
          dispatch(createTicketSuccess(res.data))
    } catch (error) {
        dispatch(createTicketFail())
    }
}

export const updateTicket = async (id,user,dispatch) => {
    dispatch(updateTicketStart());
    try {
        const res = await axios.put("/ticket/"+id, user,{
            headers:{
              token:"Bearer " + JSON.parse(localStorage.getItem("user")).accessToken},
          });
          dispatch(updateTicketSuccess(res.data))
    } catch (error) {
        dispatch(updateTicketFail())
    }
}