import { connect } from 'react-redux';

import UserCard from 'src/components/UserCard';

import { toggleLogIn } from 'src/actions/modals';

// connection de props en lecture sur le state
const mapStateToProps = (state, ownProps) => ({
  isConnected: state.log.isConnected,
  isLoading: state.user.isLoading,
});

// connection de props fonctions qui déclenchent des actions
const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleLogIn: (value) => {
    dispatch(toggleLogIn(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserCard);
