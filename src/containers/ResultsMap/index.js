import { connect } from 'react-redux';

import ResultsMap from 'src/components/ResultsMap';
import { setSelected, setNewMarker, saveUsersCity, setNewCenter, setNewAdress } from 'src/actions/map';
 
// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  center: state.map.center,
  markers: state.map.markers,
  markerSelected: state.map.markerSelected,
  usersCities: state.map.usersCities,
  listLoading: state.map.listLoading,
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSelected: (marker) => {
    dispatch(setSelected(marker));
  },
  // AddNewMarker(e)
  setMarker: (marker) => {
    dispatch(setNewMarker(marker));
  },
  selectCity: (users, cityName) => {
    dispatch(saveUsersCity(users, cityName));
  },
  setCenter: (center) => {
    dispatch(setNewCenter(center));
  },
  setAdress: (adress) => {
    dispatch(setNewAdress(adress));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsMap);
