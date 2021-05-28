// action type TOGGLE_HELPER_CHECKBOX
export const TOGGLE_HELPER_CHECKBOX = 'TOGGLE_HELPER_CHECKBOX';

// action creator toggleHelperCheckbox
export const toggleHelperCheckbox = (helper) => ({
  type: TOGGLE_HELPER_CHECKBOX,
  helper,
});

// action type BECOME_HELPER
export const BECOME_HELPER = 'BECOME_HELPER';

// action creator becomeHelper
export const becomeHelper = () => ({
  type: BECOME_HELPER,
});

// action type MODIFY_PROFILE
export const MODIFY_PROFILE = 'MODIFY_PROFILE';

// action creator modifyProfile
export const modifyProfile = (userId, myHobbiesList, myServicesList) => ({
  type: MODIFY_PROFILE,
  userId,
  myHobbiesList,
  myServicesList,
});

// action type REMOVE_HELPER_STATUS
export const REMOVE_HELPER_STATUS = 'REMOVE_HELPER_STATUS';

// action creator removeHelperStatus
export const removeHelperStatus = () => ({
  type: REMOVE_HELPER_STATUS,
});

// action type REDIRECT_TO_PROFILE
export const REDIRECT_TO_MY_PROFILE = 'REDIRECT_TO_PROFILE';

// action creator redirectToMyProfile
export const redirectToMyProfile = (value) => ({
  type: REDIRECT_TO_MY_PROFILE,
  value,
});

// action type SAVE_AVATAR
export const SAVE_AVATAR = 'SAVE_AVATAR';

// action creator setLoading
export const saveAvatar = (avatarData) => ({
  type: SAVE_AVATAR,
  avatarData,
});

export const SET_NEW_ADDRESS = 'SET_NEW_ADDRESS';

export const setNewAddress = (address) => ({
  type: SET_NEW_ADDRESS,
  address,
});

// action type SAVE_NEW_ADDRESS
export const SAVE_NEW_ADDRESS = 'SAVE_NEW_ADDRESS';

// action creator saveNewAddress
export const saveNewAddress = (completeAddress) => ({
  type: SAVE_NEW_ADDRESS,
  completeAddress,
});

// action type SAVE_MODIFIED_CONNECTED_USER_DATA
export const SAVE_MODIFIED_CONNECTED_USER_DATA = 'SAVE_MODIFIED_CONNECTED_USER_DATA';

// action creator saveModifiedConnectedUserData
export const saveModifiedConnectedUserData = (modifiedData) => ({
  type: SAVE_MODIFIED_CONNECTED_USER_DATA,
  modifiedData,
});

// action type SAVE_AVATAR_IN_STATE
export const SAVE_AVATAR_IN_STATE = 'SAVE_AVATAR_IN_STATE';

// action creator saveAvatarInState
export const saveAvatarInState = (file) => ({
  type: SAVE_AVATAR_IN_STATE,
  file,
});

// action type RESET_CITY_FIELD
export const RESET_CITY_FIELD = 'RESET_CITY_FIELD';

// action creator resetCityField
export const resetCityField = () => ({
  type: RESET_CITY_FIELD,
});
