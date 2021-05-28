import { connect } from 'react-redux';

import SignIn from 'src/components/SignIn';

import { toggleSignIn, toggleLogIn } from 'src/actions/modals';
import { addNewUser, changeSignInFieldValue } from 'src/actions/user';

// connection de props en lecture sur le state
const mapStateToProps = (state, ownProps) => ({
  signIn: state.modals.signIn,
  firstname: state.user.firstname,
  lastname: state.user.lastname,
  email: state.user.email,
  password: state.user.password,
  confirmedPassword: state.user.confirmedPassword,
});

// connection de props fonctions qui déclenchent des actions
const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleLogIn: (value) => {
    dispatch(toggleLogIn(value));
  },
  toggleSignIn: (value) => {
    dispatch(toggleSignIn(value));
  },
  changeField: (value, name) => {
    dispatch(changeSignInFieldValue(value, name));
  },
  handleSignIn: () => {
    dispatch(addNewUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
