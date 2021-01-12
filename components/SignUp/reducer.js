import {combineReducers} from 'redux';
import loginReducer from './Redux/reducer';

const rootReducer = combineReducers({
  loginReducer,
});

export default rootReducer;