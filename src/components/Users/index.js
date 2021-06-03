/* eslint-disable max-len */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from 'src/components/Loader';

import UserCard from 'src/containers/UserCard';
import './users.scss';

const Users = ({
  loadUsersCards, usersList, renderNewUsersList, newUserList, searchValue, isLoading, onChange, helperOnly, toggleHelperOnlyCheckbox,
}) => {
  useEffect(() => {
    loadUsersCards();
  }, []);

  const filterUsers = (value) => {
    const searchResult = usersList.filter((user) => (
      user.nickname === null ? user.firstname.toLowerCase().startsWith(value.toLowerCase()) || user.lastname.toLowerCase().startsWith(value.toLowerCase()) : user.nickname.toLowerCase().startsWith(value.toLowerCase())
    ));
    console.log(searchResult);
    renderNewUsersList(searchResult);
  };

  const handleChange = (evt) => {
    const inputValue = evt.target.value;
    onChange(inputValue);
    console.log(inputValue);
    filterUsers(inputValue);
  };

  return (
    <>
      {isLoading && (<Loader />)}
      {!isLoading && (
        <div className="users">
          <div className="users__header">
            <div className="users__header__content">
              <h1 className="users__header__title"> Notre réseau</h1>
              <div className="users__header__text">
                <p> Découvrez le profil de nos utilisateurs. </p>
                <p> Vous recherchez une personne en particulier ? Munissez-vous de son pseudo et utilisez la barre de recherche ci-dessous. </p>
                <p> Vous pouvez également filtrer les profils pour n'afficher uniquement les helpers.</p>
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
                  onChange={handleChange}
                />
                <input type="submit" className="users__filters__searchBar__submitButton" value="" />
              </form>
              <label htmlFor="byStatusCheckbox" className="users__filters__byStatus__label">
                Afficher uniquement les helpers
                <input type="checkbox" className="users__filters__byStatus__checkbox" name="byStatusCheckbox" checked={helperOnly} onChange={toggleHelperOnlyCheckbox} />
              </label>
            </div>
          </div>
          <ul className="users__list">
            {newUserList ? newUserList.map((userCard) => <UserCard key={userCard.id} {...userCard} />) : usersList.map((userCard) => <UserCard key={userCard.id} {...userCard} />)}
          </ul>
        </div>
      )}
    </>
  );
};

Users.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  loadUsersCards: PropTypes.func.isRequired,
  usersList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Users;
