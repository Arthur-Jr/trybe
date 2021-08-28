import { LOGIN_ACTION } from '../actions';

const INITIAL_STATE = {};

function loginReducer (state = INITIAL_STATE, action) {
  switch(action.type) {
    case LOGIN_ACTION:
      return { ...action.data };
    default:
      return state;
  }
}

export default loginReducer;
