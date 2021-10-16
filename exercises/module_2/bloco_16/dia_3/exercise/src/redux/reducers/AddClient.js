import { ADD_CLIENT, REMOVE_CLIENT } from '../actions';

const INITIAL_STATE = [];

export default function addReducer (state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_CLIENT:
      return [... state, action.client];
    case REMOVE_CLIENT:
      return [...action.clients];
    default:
      return state;
  }
}
