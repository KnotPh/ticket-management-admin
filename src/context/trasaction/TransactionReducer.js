const TransactionReducer = (state,action) =>{
    switch(action.type){
        case "GET_TRANSACTIONS_START" :
            return {
                transacntions:[],
                isFetching:true,
                error:false,
            };
        case "GET_TRANSACTIONS_SUCCESS":
            return {
                transacntions:action.payload,
                isFetching:false,
                error:false,
            };
        case "GET_TRANSACTIONS_FAIL" :
            return {
                transacntions:[],
                isFetching:false,
                error:true,
            };
        
        default:
            return {...state};
    }
}

export default TransactionReducer;