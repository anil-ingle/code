import { combineReducers } from 'redux';

const INITIAL_STATE = {
    data: [],
    fetching: true,
    fetched: false,
};

// FIXME: Kindly use the existing Action type
type Action = {
    type: string, payload: {}
};

export const reducer = (info = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        //  FIXME: avoid using constants
        case 'display_products':
            return ({
                ...action.payload
            });

        case 'get_products':
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