import { combineReducers } from 'redux';
import addReducer from './AddClient';
import loginReducer from './LoginReducer';

const rootReducer = combineReducers({ loginReducer, addReducer });

export default rootReducer;
