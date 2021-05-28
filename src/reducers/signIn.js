import { CHANGE_SIGN_IN_FIELD_VALUE } from 'src/actions/signIn';

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmedPassword: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SIGN_IN_FIELD_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};
