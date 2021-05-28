import { connect } from 'react-redux';

import LogOut from 'src/components/LogOut';

import { logOut } from 'src/actions/log';
import { toggleLogOut } from 'src/actions/modals';

// connection de props en lecture sur le state
const mapStateToProps = (state, ownProps) => ({
  logOut: state.modals.logOut,
});

// connection de props fonctions qui déclenchent des actions
const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleLogOut: (value) => {
    dispatch(toggleLogOut(value));
  },
  handleLogOut: () => {
    dispatch(logOut());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LogOut);
