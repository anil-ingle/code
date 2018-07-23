type QueryParam = {
    include?: string[] | string,
    sort?: string,
    limit?: string,
    offset?: string,
    filter?: string,
};

type RequestPayload = {
    body?: any,
    id?: string,
    params?: QueryParam,
    cart_reference?: string,
    path?: string,
    token?: string,
    // FIXME: add trailing comma
    data?: any
};
// action object
type Action<P> = {
    type: string,
    payload?: P,
};

type ActionCreator<P> = (payload?: P) => { type: string, payload?: P };

export const displayProducts: ActionCreator<RequestPayload> = () =>
    ({ type: 'displayProducts' });

export const sagasActions = {
    displayProducts,
};

export default { sagasActions };
