import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './resultsProfile.scss';

const ResultsProfile = ({
  id,
  firstname,
  biography,
  nickname,
  lastname,
  avatar,
  isConnected,
  toggleLogIn,
}) => {
  const openLogIn = () => {
    toggleLogIn(true);
  };

  return (
    <Link to={isConnected === true ? `/notre-reseau/utilisateur/${id}` : '/resultats'} className="resultsProfile__Card" onClick={isConnected === true ? '' : openLogIn}>
      <div className="resultsProfile">
        <div className="resultsProfile__picture">
          <img src={`http://ec2-34-239-254-34.compute-1.amazonaws.com/images/avatars/${avatar}`} alt={`avatar de ${firstname} ${lastname}`} className="resultsProfile__Picture" />
        </div>
        <div className="resultsProfile__text">
          <div className="resultsProfile__name">{nickname != null ? nickname : `${firstname} ${lastname}`}</div>
          <div className="resultsProfile__biography">{biography}</div>
          <div className="resultsProfile__link"> Voir le profil </div>
        </div>
      </div>
    </Link>
  );
};

ResultsProfile.propTypes = {
  id: PropTypes.number.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  biography: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isConnected: PropTypes.oneOf(['checking', true, false]).isRequired,
  toggleLogIn: PropTypes.func.isRequired,
};

export default ResultsProfile;
