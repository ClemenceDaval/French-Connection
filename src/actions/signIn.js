// action type CHANGE_SIGN_IN_FIELD_VALUE
export const CHANGE_SIGN_IN_FIELD_VALUE = 'CHANGE_SIGN_IN_FIELD_VALUE';

// action creator changeSignInFieldValue
export const changeSignInFieldValue = (value, name) => ({
  type: CHANGE_SIGN_IN_FIELD_VALUE,
  value,
  name,
});

// action type ADD_NEW_USER
export const ADD_NEW_USER = 'ADD_NEW_USER';

// action creator addNewUser
export const addNewUser = () => ({
  type: ADD_NEW_USER,
});

// action type RESET_SIGN_IN_FIELDS
export const RESET_SIGN_IN_FIELDS = 'RESET_SIGN_IN_FIELDS';

// action creator resetSignInFields
export const resetSignInFields = () => ({
  type: RESET_SIGN_IN_FIELDS,
});
