import { CHECK_ONE_LEFT } from "../actions";

// checks for one restaurant choice left
export default function (state = {}, action){
  switch (action.type) {
    case CHECK_ONE_LEFT:
    if (Object.keys(state).length == 1){
      console.log('One left!')
      return {...state, onlyOneLeft: !state.onlyOneleft}
    }
    return state;
    default:
      return state;
  }
}
