import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import defaultAvatar from 'src/assets/images/defaultAvatar.jpg';

import './resultsProfile.scss';

const ResultsProfile = ({
  id,
  firstname,
  lastname,
  nickname,
  helper,
  avatar,
  isConnected,
  toggleLogIn,
  biography
}) => {

  const openLogIn = () => {
    toggleLogIn(true);
  };

  let name = '';
  if (nickname != null) {
    name = nickname;
  }
  else {
    name = `${firstname} ${lastname}`;
  }

  return (
    <Link to={isConnected === true ? `/notre-reseau/utilisateur/${id}` : '/resultats'} className="resultsProfile" onClick={isConnected === true ? '' : openLogIn}>
      <div className="resultsProfile__picture">
        <img alt={`Avatar de ${firstname} ${lastname}`} className={avatar === null ? 'hidden' : ''} src={`http://ec2-34-239-254-34.compute-1.amazonaws.com/images/avatars/${avatar}`} />
        <img alt="Avatar par défaut" className={avatar !== null ? 'hidden' : ''} src={defaultAvatar} />
      </div>
      <div className="resultsProfile__text">
        <div className={helper ? 'resultsProfile__text__role' : 'resultsProfile__text__role resultsProfile__text__role--hidden'}> HELPER </div>
        <div className="resultsProfile__text__name">{name}</div>
        <div className="resultsProfile__text__biography">{biography != null ? biography.substring(0, 50) + ' ...'  : `${name} n'a pas rempli sa biographie.`}</div>
        <div className="resultsProfile__text__link"> Voir le profil </div>
      </div>
    </Link>
  );
};

ResultsProfile.propTypes = {
  id: PropTypes.number.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  nickname: PropTypes.string,
  helper: PropTypes.bool.isRequired,
  biography: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  isConnected: PropTypes.oneOf(['checking', true, false]).isRequired,
  toggleLogIn: PropTypes.func.isRequired,
};

ResultsProfile.defaultProps = {
  nickname: '',
  avatar: '',
};

export default ResultsProfile;
