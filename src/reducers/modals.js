import {
  TOGGLE_LOG_IN,
  TOGGLE_SIGN_IN,
  TOGGLE_LOG_OUT,
  TOGGLE_MODIFY_CITY_MODAL,
} from 'src/actions/modals';

const initialState = {
  logIn: false,
  signIn: false,
  logOut: false,
  modifyCity: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_LOG_IN:
      return {
        ...state,
        logIn: action.value,
      };
    case TOGGLE_SIGN_IN:
      return {
        ...state,
        signIn: action.value,

      };
    case TOGGLE_LOG_OUT:
      return {
        ...state,
        logOut: action.value,
      };
    case TOGGLE_MODIFY_CITY_MODAL:
      return {
        ...state,
        modifyCity: action.value,
      };
    default:
      return state;
  }
};
