import store from '../store';

export const fetch_user = () => {
    return {
        type: 'FETCH_USER_BEGIN'
    }
};

export const fetch_user_success = (data) => {
    return {
        type: 'FETCH_USER_SUCCESS',
        data
    }
};

export const fetch_user_error = (error) => {
    return {
        type: 'FETCH_USER_ERROR',
        data: error
    }
};

export const thunk_fetch_user_action = username => {
    const user = username.replace(/\s/g, ""); 
    //begin
    store.dispatch(fetch_user());
    return function(dispatch, getState) {
        return fetch(`https://api.github.com/users/${user}`)
        .then(data => data.json())
        .then(data => { 
            if(data.message === 'Not Found') {
                throw new Error("No such user found!!");
            }
            else {
                dispatch(fetch_user_success(data));
            }
        })
        .catch(err => {
            dispatch(fetch_user_error(err));
        });
    }
}

