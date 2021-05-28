import { connect } from 'react-redux';

import NavBar from 'src/components/NavBar';

import { toggleLogIn } from 'src/actions/modals';

// connection de props en lecture sur le state
const mapStateToProps = (state, ownProps) => ({
  isConnected: state.log.isConnected,
});

// connection de props fonctions qui déclenchent des actions
const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleLogIn: () => {
    dispatch(toggleLogIn(true));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
