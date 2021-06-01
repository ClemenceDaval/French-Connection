import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import defaultAvatar from 'src/assets/images/defaultAvatar.jpg';

import './userCard.scss';

const UserCard = ({
  id,
  firstname,
  lastname,
  nickname,
  helper,
  cities,
  avatar,
  isConnected,
  toggleLogIn,
  createdAt
}) => {
  let localisation = '';
  if (cities != null) {
    localisation = `${cities.name} , ${cities.country.frenchName}`;
  }
  else {
    localisation = 'Non précisé';
  }

  let creationDate = new Date(createdAt);
  // console.log(creationDate);
  creationDate = `${creationDate.getDate()}/${creationDate.getMonth() + 1}/${creationDate.getFullYear()}`;
  // console.log(creationDate.getMonth());

  const openLogIn = () => {
    toggleLogIn(true);
  };

  return (
    <Link to={isConnected ? `/notre-reseau/utilisateur/${id}` : 'notre-reseau'} className="userCard" onClick={isConnected ? '' : openLogIn}>
      <div className="userCard__picture">
        <img alt={`Avatar de ${firstname} ${lastname}`} className={avatar === null ? 'hidden' : ''} src={`http://ec2-34-239-254-34.compute-1.amazonaws.com/images/avatars/${avatar}`} />
        <img alt="Avatar par défaut" className={avatar !== null ? 'hidden' : ''} src={defaultAvatar} />
      </div>
      <div className="userCard__text">
        <div className={helper ? 'userCard__text__role' : 'userCard__text__role userCard__text__role--hidden'}> HELPER </div>
        <div className="userCard__text__name">{nickname != null ? nickname : `${firstname} ${lastname}`}</div>
        <div className="userCard__text__localisation">{localisation}</div>
        <div className="userCard__text__date">Membre depuis le {creationDate}</div>
        <div className="userCard__text__link"> Voir le profil </div>
      </div>
    </Link>
  );
};

UserCard.propTypes = {
  id: PropTypes.number.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  nickname: PropTypes.string,
  helper: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
  cities: PropTypes.shape(
    {
      name: PropTypes.string,
      country: PropTypes.shape(
        {
          frenchName: PropTypes.string.isRequired,
        },
      ),
    },
  ),
  isConnected: PropTypes.bool.isRequired,
  toggleLogIn: PropTypes.func.isRequired,
};

UserCard.defaultProps = {
  nickname: '',
  cities: '',
  avatar: '',
};

export default UserCard;
