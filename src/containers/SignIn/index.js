import { connect } from 'react-redux';

import SignIn from 'src/components/SignIn';

import { toggleSignIn, toggleLogIn } from 'src/actions/modals';
import { addNewUser, changeSignInFieldValue } from 'src/actions/signIn';

// connection de props en lecture sur le state
const mapStateToProps = (state, ownProps) => ({
  signIn: state.modals.signIn,
  firstname: state.signIn.firstname,
  lastname: state.signIn.lastname,
  email: state.signIn.email,
  password: state.signIn.password,
  confirmedPassword: state.signIn.confirmedPassword,
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
