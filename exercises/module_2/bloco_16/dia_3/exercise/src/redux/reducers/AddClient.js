import { ADD_CLIENT } from '../actions';

const INITIAL_STATE = [];

export default function addReducer (state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_CLIENT:
      return [... state, action.client];
    default:
      return state;
  }
}
