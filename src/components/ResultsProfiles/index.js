/* eslint-disable max-len */
import React from 'react';
import ResultsProfile from 'src/containers/ResultsProfile';
import PropTypes from 'prop-types';
import './resultsProfiles.scss';

const ResultsProfiles = ({ usersList, usersByCity, cityName }) => {
  const nbProfile = usersByCity.length;

  return (
    <div className="resultsProfiles">
      { usersList && (
        <div className="resultsProfiles__Header">
          <h1 className="resultsProfiles__City">{cityName}</h1>
          <h2 className="resultsProfiles__SearchResult">{nbProfile} profil(s) trouvé(s)</h2>
        </div>
      )}
      <ul className="resultsProfiles__List">
        {usersByCity ? usersByCity.map((profileData) => <ResultsProfile key={profileData.id} {...profileData} />) : usersList.map((profileData) => <ResultsProfile key={profileData.id} {...profileData} />)}
      </ul>
    </div>
  );
};

ResultsProfiles.propTypes = {
  usersList: PropTypes.array.isRequired,
  usersByCity: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
      },
    ).isRequired,
  ).isRequired,
  cityName: PropTypes.string.isRequired,
};

export default ResultsProfiles;
