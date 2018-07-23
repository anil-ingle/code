import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
    yield takeLatest('displayProducts', workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchProducts(token: any) {
    return axios({
        headers: { Authorization: 'Bearer ' + token },
        method: 'get',
        url: 'https://api.moltin.com/v2/products'
    });
}
function fetchToken() {

    // FIXME: use existing info from config
    let body = {
        client_secret: 'mWCzWSR5y3lSxFH5hFDR7Su8Sj7BUcxxxxxxxxxxxxn',
        client_id: 'FupKa5ianbEFFFqt7zuv7dvBJWMfxxxxxxxxxxxxxxxxxxxx',
        grant_type: 'client_credentials'
    };

    return axios({
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: Object.keys(body).map(
            k => `${encodeURIComponent(k)}=${encodeURIComponent(body[k])}`).join('&'),
        // data: body,
        url: 'https://api.moltin.com/oauth/access_token'
    });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
    try {
        const token = yield call(fetchToken);
        console.log('token ' + token);
        if (token.data.access_token) {
            const response = yield call(fetchProducts, token.data.access_token);
            const products = response.data;
            console.log('product ' + products.data);
            yield put({ type: 'get_products', payload: products });
        }

        // dispatch a success action to the store with the new dog

    } catch (error) {
        // dispatch a failure action to the store with the error
        // yield put({ type: "API_CALL_FAILURE", error });
    }
}