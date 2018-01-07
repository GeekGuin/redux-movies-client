import {FILTER_MOVIES, GET_MOVIES} from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case FILTER_MOVIES:
      console.log(action.payload);
      return action.payload;

    case GET_MOVIES:
      console.log(action.payload);
      return action.payload;

    default:
      return state;
  } 
}