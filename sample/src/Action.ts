type RequestPayload = {
    type: string, payload: { username: string, password: string }
};
// action object
type Actions<P> = {
    type: string,
    payload: P,

};

export const displayUser = (payload: RequestPayload): Actions<RequestPayload> => ({ type: 'display_user', payload });
export default displayUser;