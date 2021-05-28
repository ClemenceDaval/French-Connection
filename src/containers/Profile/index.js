import { connect } from 'react-redux';

import Profile from 'src/components/Profile';

import { loadUserProfile, setLoading } from 'src/actions/user';

// connection de props en lecture sur le state
const mapStateToProps = (state, ownProps) => ({
  userInfos: state.user.userInfos,
  isLogOutOpen: state.log.isLogOutOpen,
  isLoading: state.user.isLoading,
});

// connection de props fonctions qui déclenchent des actions
const mapDispatchToProps = (dispatch, ownProps) => ({
  loadUserProfile: (userId) => {
    dispatch(loadUserProfile(userId));
  },
  openLogOut: () => {
    dispatch(openLogOut());
  },
  setLoading: (value) => {
    dispatch(setLoading(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
