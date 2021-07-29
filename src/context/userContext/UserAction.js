export const getUsersStart = () => ({
    type: "GET_USER_START",
});

export const getUsersSuccess = (users) => ({
    type: "GET_USER_SUCCESS",
    payload: users,
});

export const getUsersFail = () => ({
    type: "GET_USER_FAIL",
});

// Delete
export const deleteUsertStart = () => ({
    type: "DELETE_USER_START",
});

export const deleteUserSuccess = (id) => ({
    type: "DELETE_USER_SUCCESS",
    payload: id,
});

export const deleteUserFail = () => ({
    type: "DELETE_USER_FAIL",
});

//Add
export const createUserStart = () => ({
    type: "CREATE_USER_START",
});

export const createUserSuccess = (user) => ({
    type: "CREATE_USER_SUCCESS",
    payload: user,
});

export const createUserFail = () => ({
    type: "CREATE_USER_FAIL",
});

//Update
export const updateUserStart = () => ({
    type: "UPDATE_USER_START",
});

export const updateUserSuccess = (user) => ({
    type: "UPDATE_USER_SUCCESS",
    payload: user,
});

export const updateUserFail = () => ({
    type: "UPDATE_USER_FAIL",
});