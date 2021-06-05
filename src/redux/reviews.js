import * as ActionTypes from "./ActionTypes"
import {REVIEWS} from '../review/initialreview'

export const Reviews = (state = REVIEWS, action) => {
        switch(action.type){
            
            case ActionTypes.ADD_REVIEW:
                var review = action.payload;
                review.id = state.length;
                console.log("Review: ",review);
                return {...state, comment:state.concat(review)};

            default:
                return state;
        
        }
}