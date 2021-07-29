const TicketReducer = (state,action) =>{
    switch(action.type){
        case "GET_TICKETS_START" :
            return {
                tickets:[],
                isFetching:true,
                error:false,
            };
        case "GET_TICKETS_SUCCESS":
            return {
                tickets:action.payload,
                isFetching:false,
                error:false,
            };
        case "GET_TICKETS_FAIL" :
            return {
                tickets:[],
                isFetching:false,
                error:true,
            };
        case "DELETE_TICKET_START" :
            return {
                ...state,
                isFetching:true,
                error:false,
            };
        case "DELETE_TICKET_SUCCESS":
            return {
                tickets: state.tickets.filter(ticket=> ticket._id !== action.payload),
                isFetching:false,
                error:false,
            };
        case "DELETE_TICKET_FAIL" :
            return {
                ...state,
                isFetching:false,
                error:true,
            };
        case "CREATE_TICKET_START" :
            return {
                ...state,
                isFetching:true,
                error:false,
            };
        case "CREATE_TICKET_SUCCESS":
            return {
                tickets:[...state.tickets, action.payload],
                isFetching:false,
                error:false,
            };
        case "CREATE_TICKET_FAIL" :
            return {
                ...state,
                isFetching:false,
                error:true,
            };
        case "UPDATE_TICKET_START" :
            return {
                ...state,
                isFetching:true,
                error:false,
            };
        case "UPDATE_TICKET_SUCCESS":
            return {
                tickets:state.tickets.map(
                    (ticket)=>ticket._id === action.payload && action.payload
                ),
                isFetching:false,
                error:false,
            };
        case "UPDATE_TICKET_FAIL" :
            return {
                ...state,
                isFetching:false,
                error:true,
                };
        default:
            return {...state};
    }
}

export default TicketReducer;