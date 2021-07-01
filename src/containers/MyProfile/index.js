import { connect } from 'react-redux';

import MyProfile from 'src/components/MyProfile';

import { toggleLogOut } from 'src/actions/modals';
import { loadConnectedUserData } from 'src/actions/log';
import { redirectToMyProfile } from 'src/actions/modifyForm';

// connection de props en lecture sur le state
const mapStateToProps = (state, ownProps) => ({
  connectedUserData: state.log.connectedUserData,
  userInfos: state.user.userInfos,
  isConnected: state.log.isConnected,
  isMyProfileLoaded: state.log.isMyProfileLoaded,
  connectedUserId: state.log.connectedUserId,
});

// connection de props fonctions qui déclenchent des actions
const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleLogOut: (value) => {
    dispatch(toggleLogOut(value));
  },
  loadConnectedUserData: (userId) => {
    dispatch(loadConnectedUserData(userId));
  },
  redirect: (value) => {
    dispatch(redirectToMyProfile(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
