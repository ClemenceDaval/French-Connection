import React from 'react';

import './results.scss';

import SearchBar from 'src/containers/SearchBar';

import ResultsProfiles from 'src/containers/ResultsProfiles';
import ResultsMap from 'src/containers/ResultsMap';

const Results = () => (
  <div className="results">
    <div className="results__searchBar">
      <SearchBar />
    </div>
    <div className="results__views">
      <ResultsMap />
      <ResultsProfiles />
    </div>
  </div>
);

export default Results;
