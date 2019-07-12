import { combineReducers } from 'redux';
import RestaurantReducer from './reducer-Restaurants';
import CheckOneReducer from './reducer-checkOne';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  restaurants: RestaurantReducer,
  form: FormReducer,
  onlyOneLeft: CheckOneReducer
});

export default rootReducer;
