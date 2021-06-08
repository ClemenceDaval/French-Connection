import { connect } from 'react-redux';

import ModifyProfile from 'src/components/ModifyProfile';

import { loadUserProfile } from 'src/actions/user';
import { toggleModifyCityModal } from 'src/actions/modals';
import { changePasswordProfileFormFieldValue, changeProfileFormFieldValue } from 'src/actions/log';

import { loadHobbiesList } from 'src/actions/hobbies';
import { loadServicesList } from 'src/actions/services';
import { modifyProfile } from 'src/actions/modifyForm';


// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  connectedUserData: state.log.connectedUserData,
  userAddress: state.log.newAddress,
  hobbiesList: state.hobbies.hobbiesList,
  servicesList: state.services.servicesList,
  isLoaded: state.hobbies.isLoaded && state.services.isLoaded,
  redirection: state.log.redirectionToMyProfile,
  isConnected: state.log.isConnected,
  newPassword: state.log.newPassword,
  confirmedNewPassword: state.log.confirmedNewPassword,
  completeNewAddress: state.log.completeNewAddress,
  isMyProfileLoaded: state.log.isMyProfileLoaded,
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  loadUserProfile: (userId) => {
    dispatch(loadUserProfile(userId));
  },
  changeField: (value, name) => {
    dispatch(changeProfileFormFieldValue(value, name));
  },
  modifyProfile: (userId, myHobbiesList, myServicesList) => {
    dispatch(modifyProfile(userId, myHobbiesList, myServicesList));
  },
  toggleModifyCityModal: (value) => {
    dispatch(toggleModifyCityModal(value));
  },
  loadHobbiesList: () => {
    dispatch(loadHobbiesList());
  },
  loadServicesList: () => {
    dispatch(loadServicesList());
  },
  changePasswordField: (value, name) => {
    dispatch(changePasswordProfileFormFieldValue(value, name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModifyProfile);
