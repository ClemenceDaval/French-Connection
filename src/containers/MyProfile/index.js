import { connect } from 'react-redux';

import MyProfile from 'src/components/MyProfile';

import { toggleLogOut } from 'src/actions/modals';
import { loadUserProfile } from 'src/actions/user';
import { redirectToMyProfile } from 'src/actions/modifyForm';

// connection de props en lecture sur le state
const mapStateToProps = (state, ownProps) => ({
  connectedUserData: state.log.connectedUserData,
  userInfos: state.user.userInfos,
  isConnected: state.log.isConnected,
  isMyProfileLoaded: state.log.isMyProfileLoaded,
});

// connection de props fonctions qui déclenchent des actions
const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleLogOut: (value) => {
    dispatch(toggleLogOut(value));
  },
  loadUserProfile: (userId) => {
    dispatch(loadUserProfile(userId));
  },
  redirect: (value) => {
    dispatch(redirectToMyProfile(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
