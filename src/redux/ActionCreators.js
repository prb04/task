import * as ActionTypes from './ActionTypes';


export const addReview = (id,author,review) => ({
    type: ActionTypes.ADD_REVIEW,
    payload: {
        id:id,
        author: author,
        review: review
    }
});