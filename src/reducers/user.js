import {
  SAVE_USER_PROFILE,
  SAVE_USERS_CARDS,
  RENDER_NEW_USERS_LIST,
  CHANGE_SEARCH_INPUT_VALUE,
  SET_LOADING,
  SAVE_USERS_REVIEWS,
  TOGGLE_HELPER_ONLY_CHECKBOX,
} from 'src/actions/user';

const initialState = {
  isHelper: false,
  userInfos: [],
  usersList: [],
  address: '',
  userAddress: '',
  userCityCenter: '',
  isLoading: true,
  newUserList: null,
  usersReviewList: [],
  myHobbies: {},
  searchValue: '',
  helperOnly: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER_PROFILE:
      return {
        ...state,
        userInfos: action.userInfos,
      };
    case SAVE_USERS_CARDS:
      return {
        ...state,
        usersList: action.usersList,
      };
    case RENDER_NEW_USERS_LIST:
      return {
        ...state,
        newUserList: action.result,
      };
    case CHANGE_SEARCH_INPUT_VALUE:
      return {
        ...state,
        searchValue: action.value,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.value,
      };
    case SAVE_USERS_REVIEWS:
      return {
        ...state,
        usersReviewList: action.usersReviewList,
      };
    case TOGGLE_HELPER_ONLY_CHECKBOX:
      return {
        ...state,
        helperOnly: !state.helperOnly,
      };
    default:
      return state;
  }
};
