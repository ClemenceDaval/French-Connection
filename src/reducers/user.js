import {
  SAVE_USER_PROFILE,
  SAVE_USERS_CARDS,
  RENDER_NEW_LIST,
  CHANGE_INPUTVALUE,
  SET_LOADING,
  SAVE_USERS_REVIEWS,
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
  inputValue: null,
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
    case RENDER_NEW_LIST:
      return {
        ...state,
        newUserList: action.result,
      };  
    case CHANGE_INPUTVALUE:
      return {
        ...state,
        inputValue: action.inputValue,
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
    default:
      return state;
  }
};
