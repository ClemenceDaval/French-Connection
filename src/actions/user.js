// action type LOAD_USER_PROFILE
export const LOAD_USER_PROFILE = 'LOAD_USER_PROFILE';

// action creator loadUserProfile
export const loadUserProfile = (userId) => ({
  type: LOAD_USER_PROFILE,
  userId,
});

// action type SAVE_USER_PROFILE
export const SAVE_USER_PROFILE = 'SAVE_USER_PROFILE';

// action creator saveUserProfile
export const saveUserProfile = (userInfos) => ({
  type: SAVE_USER_PROFILE,
  userInfos,
});

// action type LOAD_USERS_CARDS
export const LOAD_USERS_CARDS = 'LOAD_USERS_CARDS';

// action creator loadUsersCards
export const loadUsersCards = () => ({
  type: LOAD_USERS_CARDS,
});

// action type SAVE_USERS_CARDS
export const SAVE_USERS_CARDS = 'SAVE_USERS_CARDS';

// action creator saveUsersCards
export const saveUsersCards = (usersList) => ({
  type: SAVE_USERS_CARDS,
  usersList,
});

// action type SAVE_USERS_REVIEWS
export const SAVE_USERS_REVIEWS = 'SAVE_USERS_REVIEWS';

// action creator saveUsersReviews
export const saveUsersReviews = (usersReviewList) => ({
  type: SAVE_USERS_REVIEWS,
  usersReviewList,
});

// action type LOAD_USERS_REVIEWS
export const LOAD_USERS_REVIEWS = 'LOAD_USERS_REVIEWS';

// action creator loadUsersCards
export const loadUsersReviews = () => ({
  type: LOAD_USERS_REVIEWS,
});

// action type RENDER_NEW_USERS_LIST
export const RENDER_NEW_USERS_LIST = 'RENDER_NEW_USERS_LIST';

// action creator renderNewUsersList
export const renderNewUsersList = (result) => ({
  type: RENDER_NEW_USERS_LIST,
  result,
});

// action type CHANGE_SEARCH_INPUT_VALUE
export const CHANGE_SEARCH_INPUT_VALUE = 'CHANGE_SEARCH_INPUT_VALUE';

// action creator changeSearchInputValue
export const changeSearchInputValue = (value) => ({
  type: CHANGE_SEARCH_INPUT_VALUE,
  value,
});

// action type SET_LOADING
export const SET_LOADING = 'SET_LOADING';

// action creator setLoading
export const setLoading = (value) => ({
  type: SET_LOADING,
  value,
});

// action type TOGGLE_HELPER_ONLY_CHECKBOX
export const TOGGLE_HELPER_ONLY_CHECKBOX = 'TOGGLE_HELPER_ONLY_CHECKBOX';

// action creator toggleHelperOnlyCheckbox
export const toggleHelperOnlyCheckbox = (value) => ({
  type: TOGGLE_HELPER_ONLY_CHECKBOX,
  value,
});
