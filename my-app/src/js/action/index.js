import { ADD_ARTICLE } from '../constatnts/action_types';
export const addArticle = article => ({
    type: ADD_ARTICLE,
    payload: article
});