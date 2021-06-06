import * as ActionTypes from "./ActionTypes"
import {REVIEWS} from '../review/initialreview'

export const reviews = (state = REVIEWS, action) => {
        switch(action.type){
            
            case ActionTypes.ADD_REVIEW:
                var review = action.payload;
                review.id = state.length;
                console.log("Review: ",review);
                return state.concat(review);

            default:
                return state;
        
        }
}