import React from 'react';

import './results.scss';

import ResultsProfiles from 'src/containers/ResultsProfiles';
import ResultsMap from 'src/containers/ResultsMap';

const Results = () => (
  <div className="results">
    <ResultsMap />
    <ResultsProfiles />
  </div>
);

export default Results;
