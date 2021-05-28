import { connect } from 'react-redux';

import LogIn from 'src/components/LogIn';

import { changeLogInFieldValue, logIn } from 'src/actions/log';
import { toggleLogIn, toggleSignIn } from 'src/actions/modals';

// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  logIn: state.modals.logIn,
  signIn: state.modals.signIn,
  email: state.log.email,
  password: state.log.password,
});

// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleLogIn: (value) => {
    dispatch(toggleLogIn(value));
  },
  toggleSignIn: (value) => {
    dispatch(toggleSignIn(value));
  },
  changeField: (value, name) => {
    dispatch(changeLogInFieldValue(value, name));
  },
  handleLogin: () => {
    // eslint-disable-next-line no-console
    console.log('Allez, on se logge');
    dispatch(logIn());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
