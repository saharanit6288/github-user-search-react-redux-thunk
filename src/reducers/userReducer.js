const initialState = {
    userData: {},
    isFetching: false,
    error: null
};

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_USER_BEGIN': 
            return {
                ...state,
                isFetching: true,
                error: null,
                userData: {}
            }
        case 'FETCH_USER_SUCCESS':
            return {
                ...state,
                isFetching: false,
                error: null,
                userData: action.data
            }
        case 'FETCH_USER_ERROR':
            return {
                ...state,
                isFetching: false,
                error: action.data,
                userData: {}
            }
        default:
            return state;
    }
}


export default userReducer;