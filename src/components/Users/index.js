/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Loader from 'src/components/Loader';
import reset from 'src/assets/images/recycle.png';

import UsersHeader from 'src/components/UsersHeader';
import UserCard from 'src/containers/UserCard';

import './users.scss';

const Users = ({
  usersList,
  loadUsersCards,
  newUserList,
  renderNewUsersList,
  searchValue,
  changeInputValue,
  helperOnly,
  toggleHelperOnlyCheckbox,
  isLoading,
}) => {
  useEffect(() => {
    loadUsersCards();
    setErrorMessage('');
  }, []);

  const [errorMessage, setErrorMessage] = useState('');

  const filterUsers = (inputValue, filterByStatus) => {
    let searchResult = [];

    // no filter
    if (inputValue === '' && filterByStatus === false) {
      renderNewUsersList(usersList);
    }

    // helper only
    if (filterByStatus && inputValue === '') {
      searchResult = usersList.filter((user) => (
        user.helper === true
      ));
      searchResult.length === 0 ? setErrorMessage('Aucun utilisateur trouvé') : setErrorMessage('');
      renderNewUsersList(searchResult);
    }

    // filter by name
    if (inputValue !== '' && filterByStatus === false) {
      searchResult = usersList.filter((user) => {
        if (user.nickname === null) {
          return (
            (user.firstname.toLowerCase().startsWith(inputValue.toLowerCase())
            || user.lastname.toLowerCase().startsWith(inputValue.toLowerCase()))
          );
        }
        return (user.nickname.toLowerCase().startsWith(inputValue.toLowerCase()));
      });
      searchResult.length === 0 ? setErrorMessage('Aucun utilisateur trouvé') : setErrorMessage('');
      renderNewUsersList(searchResult);
    }

    // helper only & filter by name
    if (filterByStatus && inputValue !== '') {
      searchResult = usersList.filter((user) => {
        if (user.nickname === null) {
          return (
            (user.firstname.toLowerCase().startsWith(inputValue.toLowerCase())
            || user.lastname.toLowerCase().startsWith(inputValue.toLowerCase()))
            && user.helper === true
          );
        }
        return (user.nickname.toLowerCase().startsWith(inputValue.toLowerCase())
          && user.helper === true);
      });
      searchResult.length === 0 ? setErrorMessage('Aucun utilisateur trouvé') : setErrorMessage('');
      renderNewUsersList(searchResult);
    }

    
    
  };

  const handleChangeInput = (evt) => {
    const inputValue = evt.target.value;
    changeInputValue(inputValue);
    filterUsers(inputValue, helperOnly);
  };

  const handleChangeCheckbox = () => {
    toggleHelperOnlyCheckbox(!helperOnly);
    filterUsers(searchValue, !helperOnly);
  };

  const resetFilters = () => {
    toggleHelperOnlyCheckbox(false);
    changeInputValue('');
    setErrorMessage('');
  }

  return (
    <div className="users">
      <UsersHeader />
      <div className="users__filters">
        <div className="users__filters__container">
          <div className="users__filters__searchBar">
            <input
              type="text"
              className="users__filters__searchBar__input"
              id="search"
              value={searchValue}
              placeholder="Recherchez un utilisateur"
              onChange={handleChangeInput}
            />
            <input type="button" className="users__filters__searchBar__submitButton" value="" />
          </div>
          <label htmlFor="byStatusCheckbox" className="users__filters__byStatus__label">
            Afficher uniquement les helpers
            <input type="checkbox" className="users__filters__byStatus__checkbox" name="byStatusCheckbox" checked={helperOnly} onChange={handleChangeCheckbox} />
          </label>
        </div>
      </div>
      {isLoading && (<Loader />)}
      {errorMessage !== '' && (
          <div> 
            {errorMessage}
            <button className='resetSearchButton' type="button" onClick={resetFilters}><img src={reset}/></button>          
          </div>
      )}
      {!isLoading && (
        <ul className="users__list">
          {newUserList.length !== 0 || newUserList.length ===0 && errorMessage !== ''
            ? newUserList.map((userCard) => <UserCard key={userCard.id} {...userCard} />)
            : usersList.map((userCard) => <UserCard key={userCard.id} {...userCard} />)}
        </ul>
      )}
    </div>
  );
};

Users.propTypes = {
  usersList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  loadUsersCards: PropTypes.func.isRequired,
  newUserList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  renderNewUsersList: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  changeInputValue: PropTypes.func.isRequired,
  helperOnly: PropTypes.bool.isRequired,
  toggleHelperOnlyCheckbox: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Users;
