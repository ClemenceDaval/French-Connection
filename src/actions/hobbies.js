// action type LOAD_HOBBIES_LIST
export const LOAD_HOBBIES_LIST = 'LOAD_HOBBIES_LIST';

// action creator loadHobbiesList
export const loadHobbiesList = () => ({
  type: LOAD_HOBBIES_LIST,
});

// action type SAVE_HOBBIES_LIST
export const SAVE_HOBBIES_LIST = 'SAVE_HOBBIES_LIST';

// action creator saveHobbiesList
export const saveHobbiesList = (hobbiesList) => ({
  type: SAVE_HOBBIES_LIST,
  hobbiesList,
});

// action type SET_LOADING
export const SET_LOADING_HOBBIES = 'SET_LOADING_HOBBIES';

// action creator setLoadingHobbies
export const setLoadingHobbies = (value) => ({
  type: SET_LOADING_HOBBIES,
  value,
});

// action type SAVE_SELECTED_HOBBY
export const SAVE_SELECTED_HOBBY = 'SAVE_SELECTED_HOBBY';

// action creator saveSelectedHobby
export const saveSelectedHobby = (hobbyId, hobbyName) => ({
  type: SAVE_SELECTED_HOBBY,
  hobbyId,
  hobbyName,
});

// action type ADD_SELECTED_HOBBY
export const ADD_SELECTED_HOBBY = 'ADD_SELECTED_HOBBY';

// action creator addSelectedHobby
export const addSelectedHobby = (selectedHobby) => ({
  type: ADD_SELECTED_HOBBY,
  selectedHobby,
});

// action type REMOVE_HOBBY
export const REMOVE_HOBBY = 'REMOVE_HOBBY';

// action creator removeHobby
export const removeHobby = (newHobbiesList) => ({
  type: REMOVE_HOBBY,
  newHobbiesList,
});
