import {createStore} from 'redux';
import { reviews } from './reviews'

export const ConfigureStore = () => {
    const store = createStore(
        reviews, // reducer

    );

    return store;
}