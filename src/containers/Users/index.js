import { connect } from 'react-redux';

import Users from 'src/components/Users';
import { loadUsersCards, renderNewUsersList, changeSearchInputValue, toggleHelperOnlyCheckbox } from 'src/actions/user';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  usersList: state.user.usersList,
  newUserList: state.user.newUserList,
  searchValue: state.user.searchValue,
  isLoading: state.user.isLoading,
  helperOnly: state.user.helperOnly,
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  loadUsersCards: () => {
    dispatch(loadUsersCards());
  },
  renderNewUsersList: (result) => {
    dispatch(renderNewUsersList(result));
  },
  onChange: (value) => {
    dispatch(changeSearchInputValue(value));
  },
  toggleHelperOnlyCheckbox: () => {
    dispatch(toggleHelperOnlyCheckbox());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
