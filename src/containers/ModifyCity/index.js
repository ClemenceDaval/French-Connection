import { connect } from 'react-redux';

import ModifyCity from 'src/components/ModifyCity';

import { toggleModifyCityModal } from 'src/actions/modals';
import { setNewAddress, saveNewAddress, resetCityField } from 'src/actions/modifyForm';

// connection de props en lecture sur le state
const mapStateToProps = (state, ownProps) => ({
  modifyCity: state.modals.modifyCity,
  address: state.log.newAddress,
  completeAddress: state.log.completeNewAddress,
});

// connection de props fonctions qui déclenchent des actions
const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleModifyCityModal: (value) => {
    dispatch(toggleModifyCityModal(value));
  },
  setNewAddress: (address) => {
    dispatch(setNewAddress(address));
  },
  saveNewAddress: (cityName, countryName, lat, lng) => {
    dispatch(saveNewAddress(cityName, countryName, lat, lng));
  },
  resetCityField: () => {
    dispatch(resetCityField());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModifyCity);
