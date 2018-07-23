import axios from 'axios';

const getToken = async () => {
    try {
        return await axios.get('https://api.moltin.com/oauth/access_token');
    } catch (error) {
        console.error(error);
        return;
    }
};
// FIXME: no useless logs
console.log('token' + this.getToken);

export default getToken;