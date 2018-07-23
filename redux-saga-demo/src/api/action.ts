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
    data?: any
};
// action object
type Actions<P> = {
    type: string,
    payload: P,

};
export const displayProducts = (payload: RequestPayload): Actions<RequestPayload> => ({ type: 'displayProducts', payload });
export default displayProducts;