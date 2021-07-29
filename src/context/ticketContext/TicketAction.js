export const getTicketsStart = () => ({
    type: "GET_TICKETS_START",
});

export const getTicketsSuccess = (tickets) => ({
    type: "GET_TICKETS_SUCCESS",
    payload: tickets,
});

export const getTicketsFail = () => ({
    type: "GET_TICKETS_FAIL",
});

// Delete
export const deleteTicketStart = () => ({
    type: "DELETE_TICKET_START",
});

export const deleteTicketSuccess = (id) => ({
    type: "DELETE_TICKET_SUCCESS",
    payload: id,
});

export const deleteTicketFail = () => ({
    type: "DELETE_TICKET_FAIL",
});

//Add
export const createTicketStart = () => ({
    type: "CREATE_TICKET_START",
});

export const createTicketSuccess = (ticket) => ({
    type: "CREATE_TICKET_SUCCESS",
    payload: ticket,
});

export const createTicketFail = () => ({
    type: "CREATE_TICKET_FAIL",
});

//Update
export const updateTicketStart = () => ({
    type: "UPDATE_TICKET_START",
});

export const updateTicketSuccess = (ticket) => ({
    type: "UPDATE_TICKET_SUCCESS",
    payload: ticket,
});

export const updateTicketFail = () => ({
    type: "UPDATE_TICKET_FAIL",
});