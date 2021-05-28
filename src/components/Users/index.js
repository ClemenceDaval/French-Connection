/* eslint-disable max-len */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from 'src/components/Loader';

import UserCard from 'src/containers/UserCard';
import './users.scss';

const Users = ({loadUsersCards, usersList, RenderNewList, newUserList, inputValue, isLoading, ChangeInputValue}) => {
  useEffect(
    loadUsersCards,
    [],
  );

  const handleInputValueChange = (evt) => {
    evt.preventDefault();
    // eslint-disable-next-line no-param-reassign
    inputValue = document.querySelector(".users__search").value;
    console.log(inputValue.toLowerCase());

    let searchResult = usersList.filter((user) => user.nickname.toLowerCase().startsWith(inputValue.toLowerCase()));

    if (searchResult.length === 0) {
      searchResult = null;
    }
    console.log(searchResult);
    RenderNewList(searchResult);
    ChangeInputValue(inputValue);
  };

  return (
    <>
      {isLoading && (<Loader />)}
      {!isLoading && (
        <div className="users">
          <div className="users__header">
            <div className="users__header__content">
              <h1 className="users__header__title"> Notre réseau</h1>
              <div>
                <p> gfsdfg sdfg sdfg sdfg sdfg sdg sdfg sdfg sdfg sdg sdgsdfg sdfg sfg sdfg sdfg sdfg sdfg sdfg sdfg sdfg </p> 
                <p> gfsdfg sdfg sdfg sdfg sdfg sdg sdfg sdfg sdfg sdg sdgsdfg sdfg sfg sdfg sdfg sdfg sdfg sdfg sdfg sdfg </p> 
                <p> gfsdfg sdfg sdfg sdfg sdfg sdg sdfg sdfg sdfg sdg sdgsdfg sdfg sfg sdfg sdfg sdfg sdfg sdfg sdfg sdfg </p> 
                <p> gfsdfg sdfg sdfg sdfg sdfg sdg sdfg sdfg sdfg sdg sdgsdfg sdfg sfg sdfg sdfg sdfg sdfg sdfg sdfg sdfg </p> 
              </div>
            </div>
            <div className="users__header__image" />
          </div>
          <div className="users__filters">
            <div className="users__filters__container">
              <form className="users__filters__searchBar" onSubmit={handleInputValueChange}>
                <input type="text" className="users__filters__searchBar__input" placeholder="Recherchez un utilisateur" onChange={handleInputValueChange} />
                <input type="submit" className="users__filters__searchBar__submitButton" value="" />
              </form>

              <label htmlFor="byStatusCheckbox" className="users__filters__byStatus__label">
                Afficher uniquement les helpers
                <input type="checkbox" className="users__filters__byStatus__checkbox" name="byStatusCheckbox" />
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
