/* eslint-disable no-console */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from 'src/components/Loader';

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
  }, []);

  const filterUsers = (inputValue, filterByStatus) => {
    let searchResult = [];
    if (filterByStatus && inputValue === '') {
      console.log('helper only');
      searchResult = usersList.filter((user) => (
        user.helper === true
      ));
      renderNewUsersList(searchResult);
    }
    if (filterByStatus && inputValue !== '') {
      console.log('helper only & tri par nom');
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
      renderNewUsersList(searchResult);
    }
    if (inputValue !== '' && filterByStatus === false) {
      console.log('tout le monde & tri par nom');
      searchResult = usersList.filter((user) => {
        if (user.nickname === null) {
          return (
            (user.firstname.toLowerCase().startsWith(inputValue.toLowerCase())
            || user.lastname.toLowerCase().startsWith(inputValue.toLowerCase()))
          );
        }
        return (user.nickname.toLowerCase().startsWith(inputValue.toLowerCase()));
      });
      renderNewUsersList(searchResult);
    }
    if (inputValue === '' && filterByStatus === false) {
      console.log('pas de tri');
      console.log(usersList);
      renderNewUsersList(usersList);
    }
    console.log(searchResult);
  };

  const handleChangeInput = (evt) => {
    const inputValue = evt.target.value;
    changeInputValue(inputValue);
    console.log(inputValue);
    filterUsers(inputValue, helperOnly);
  };

  const handleChangeCheckbox = () => {
    toggleHelperOnlyCheckbox(!helperOnly);
    filterUsers(searchValue, !helperOnly);
  };

  return (
    <div className="users">
      <div className="users__header">
        <div className="users__header__content">
          <h1 className="users__header__title"> Notre réseau</h1>
          <div className="users__header__text">
            <p> Découvrez le profil de nos utilisateurs. </p>
            <p>
              Vous recherchez une personne en particulier ?
              Munissez-vous de son pseudo et utilisez la barre de recherche ci-dessous.
            </p>
            <p>
              Vous pouvez également filtrer les profils pour n'afficher uniquement les helpers.
            </p>
          </div>
        </div>
        <div className="users__header__image" />
      </div>
      <div className="users__filters">
        <div className="users__filters__container">
          <form className="users__filters__searchBar">
            <input
              type="text"
              className="users__filters__searchBar__input"
              id="search"
              value={searchValue}
              placeholder="Recherchez un utilisateur"
              onChange={handleChangeInput}
            />
            <input type="submit" className="users__filters__searchBar__submitButton" value="" />
          </form>
          <label htmlFor="byStatusCheckbox" className="users__filters__byStatus__label">
            Afficher uniquement les helpers
            <input type="checkbox" className="users__filters__byStatus__checkbox" name="byStatusCheckbox" checked={helperOnly} onChange={handleChangeCheckbox} />
          </label>
        </div>
      </div>
      {isLoading && (<Loader />)}
      {!isLoading && (
      <ul className="users__list">
        {newUserList.length !== 0
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
