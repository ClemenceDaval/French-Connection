import {
  CHANGE_LOG_IN_FIELD_VALUE,
  SAVE_CONNECTED_USER_DATA,
  LOG_OUT,
  SET_IS_CONNECTED,
  SAVE_TOKEN_IN_STATE,
  CHANGE_PASSWORD_PROFILE_FORM_FIELD_VALUE,
  CHANGE_PROFILE_FORM_FIELD_VALUE,
  RESET_PASSWORD,
} from 'src/actions/log';

import {
  ADD_SELECTED_HOBBY, SAVE_SELECTED_HOBBY, REMOVE_HOBBY
} from 'src/actions/hobbies';

import {
  ADD_SELECTED_SERVICE, SAVE_SELECTED_SERVICE,
} from 'src/actions/services';

import {
  BECOME_HELPER,
  REMOVE_HELPER_STATUS,
  REDIRECT_TO_MY_PROFILE,
  SAVE_AVATAR,
  SET_NEW_ADDRESS,
  SAVE_NEW_ADDRESS,
  SAVE_MODIFIED_CONNECTED_USER_DATA,
  SAVE_AVATAR_IN_STATE,
  RESET_CITY_FIELD,
} from 'src/actions/modifyForm';

import { SET_MY_PROFILE_LOADING } from 'src/actions/loading';

const initialState = {
  isConnected: 'checking',
  email: '',
  password: '',
  connectedUserData: {},
  isLoading: true,
  selectedHobby: {},
  selectedService: {},
  newPassword: '',
  confirmedNewPassword: '',
  redirectionToMyProfile: false,
  isMyProfileLoaded: 'checking',
  newAddress: '',
  completeNewAddress: [],
  avatarFile: null,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_TOKEN_IN_STATE:
      return {
        ...state,
        token: action.userToken,
      };
    case SAVE_CONNECTED_USER_DATA:
      return {
        ...state,
        connectedUserData: action.decodedToken,
        isConnected: true,
        isLogInOpen: false,
        email: '',
        password: '',
      };
    case CHANGE_LOG_IN_FIELD_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case LOG_OUT:
      return {
        ...state,
        isConnected: false,
        isLogOutOpen: false,
        connectedUserData: '',
        token: '',
      };
    case SET_IS_CONNECTED:
      return {
        ...state,
        isConnected: action.value,
        isLoading: false,
      };
    case CHANGE_PASSWORD_PROFILE_FORM_FIELD_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case CHANGE_PROFILE_FORM_FIELD_VALUE:
      return {
        ...state,
        connectedUserData: {
          ...state.connectedUserData,
          [action.name]: action.value,
        },
      };
    case SAVE_SELECTED_HOBBY:
      return {
        ...state,
        selectedHobby: {
          ...state.selectedHobby,
          id: action.hobbyId,
          name: action.hobbyName,
        },
      };
    case ADD_SELECTED_HOBBY:
      return {
        ...state,
        connectedUserData: {
          ...state.connectedUserData,
          hobbies: [...state.connectedUserData.hobbies, action.selectedHobby],
        },
      };
    case REMOVE_HOBBY:
      return {
        ...state,
        connectedUserData: {
          ...state.connectedUserData,
          hobbies: action.newHobbiesList,
        },
      };
    case SAVE_SELECTED_SERVICE:
      return {
        ...state,
        selectedService: {
          ...state.selectedService,
          id: action.serviceId,
          name: action.serviceName,
        },
      };
    case ADD_SELECTED_SERVICE:
      return {
        ...state,
        connectedUserData: {
          ...state.connectedUserData,
          services: [...state.connectedUserData.services, action.selectedService],
        },
      };
    case RESET_PASSWORD:
      return {
        ...state,
        connectedUserData: {
          ...state.connectedUserData,
          newPassword: '',
          confirmedNewPassword: '',
        },
      };
    case BECOME_HELPER:
      return {
        ...state,
        connectedUserData: {
          ...state.connectedUserData,
          helper: true,
        },
      };
    case REMOVE_HELPER_STATUS:
      return {
        ...state,
        connectedUserData: {
          ...state.connectedUserData,
          helper: false,
          services: [],
        },
      };
    case REDIRECT_TO_MY_PROFILE:
      return {
        ...state,
        redirectionToMyProfile: action.value,
      };
    case SET_MY_PROFILE_LOADING:
      return {
        ...state,
        isMyProfileLoaded: action.value,
      };
    case SAVE_AVATAR:
      return {
        ...state,
        connectedUserData: {
          ...state.connectedUserData,
          avatar: action.avatarData,
        },
      };
    case SET_NEW_ADDRESS:
      return {
        ...state,
        newAddress: action.address,
      };
    case SAVE_NEW_ADDRESS:
      return {
        ...state,
        completeNewAddress: action.completeAddress,
      };
    case SAVE_MODIFIED_CONNECTED_USER_DATA:
      return {
        ...state,
        connectedUserData: action.modifiedData,
      };
    case SAVE_AVATAR_IN_STATE:
      return {
        ...state,
        avatarFile: action.file,
      };
    case RESET_CITY_FIELD:
      return {
        ...state,
        completeNewAddress: [],
        newAddress: '',
      };
    default:
      return state;
  }
};
