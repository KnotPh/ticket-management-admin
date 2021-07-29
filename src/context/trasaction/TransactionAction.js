export const getTransactionsStart = () => ({
    type: "GET_TRANSACTIONS_START",
});

export const getTransactionsSuccess = (transactions) => ({
    type: "GET_TRANSACTIONS_SUCCESS",
    payload: transactions,
});

export const getTransactionsFail = () => ({
    type: "GET_TRANSACTIONS_FAIL",
});
