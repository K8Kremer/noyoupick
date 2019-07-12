import { combineReducers } from 'redux';
import RestaurantReducer from './reducer-Restaurants';
import LocationReducer from './reducer-Location';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  restaurants: RestaurantReducer,
  location: LocationReducer,
  form: FormReducer
});

export default rootReducer;
