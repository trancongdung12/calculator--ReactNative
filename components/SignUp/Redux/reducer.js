import * as LoginTypes from './actionTypes';
const INITIAL_STATE = {
  loading: true,
  data: null,
  error: null,
};
const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LoginTypes.LOADING:
      return { ...state, loading: true };
    case LoginTypes.CLEAR_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
  
};

export default loginReducer;

