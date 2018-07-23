import { combineReducers } from 'redux';

const INITIAL_STATE = {
    userName: 'ghgh',
    password: ''
};

type Action = {
    type: string, payload: { userName: string, password: string }
};

export const displayReducer = (info = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case 'display_user':
            // console.log(action.payload.userName);
            // console.log(action.payload.password);
            return ({
                ...action.payload
            });
        case 'get_user':
            var { payload } = action;
            return ({
                ...payload,
                fetching: false,
                fetched: true
            });

        default:
            return info;
    }
};

// export default combineReducers({
//     data: displayReducer
// });