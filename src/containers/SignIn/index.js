import { connect } from 'react-redux';

import SignIn from 'src/components/SignIn';
import { closeSignIn, openLogIn } from 'src/actions/log';
 
// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  isOpen: state.log.isSignInOpen,
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  close: () => {
    dispatch(closeSignIn());
  },
  openLogIn: () => {
    dispatch(openLogIn());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
