import axios from "axios"
import { getTransactionsFail, getTransactionsStart, getTransactionsSuccess } from "./TransactionAction";

export const getTransactions = async (id,dispatch) => {
    dispatch(getTransactionsStart());
    try {
        const res = await axios.get("/transaction/ticket/" +id, {
            headers:{
              token:"Bearer " + JSON.parse(localStorage.getItem("user")).accessToken},
          });
          dispatch(getTransactionsSuccess(res.data))
    } catch (error) {
        dispatch(getTransactionsFail())
    }
}