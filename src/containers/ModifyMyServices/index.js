import { connect } from 'react-redux';

import ModifyMyServices from 'src/components/ModifyMyServices';

import { saveSelectedService, addSelectedService, removeService } from 'src/actions/services';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  servicesList: state.services.servicesList,
  myServices: state.log.connectedUserData.services,
  helper: state.log.connectedUserData.helper,
  selectedService: state.log.selectedService,
  // services: state.log.connectedUserData.services,
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  saveSelectedService: (serviceId, serviceName) => {
    dispatch(saveSelectedService(serviceId, serviceName));
  },
  addSelectedService: (service) => {
    dispatch(addSelectedService(service));
  },
  removeService: (newServicesList) => {
    dispatch(removeService(newServicesList));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModifyMyServices);
