import { combineReducers } from 'redux';
import RestaurantReducer from './reducer-Restaurants';

const rootReducer = combineReducers({
  restaurants: RestaurantReducer
});

export default rootReducer;
