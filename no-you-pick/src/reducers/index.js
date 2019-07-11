import { combineReducers } from 'redux';
import RestaurantReducer from './reducer-Restaurants';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  restaurants: RestaurantReducer,
  form: FormReducer
});

export default rootReducer;
