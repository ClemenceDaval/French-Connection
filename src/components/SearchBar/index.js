import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { withRouter, useHistory } from 'react-router-dom';
import './searchBar.scss';

const SearchBar = ({adress, setAdress, setCenter, saveUserAddress, loadUsersByCountry}) => {
  // Methode gérant le clic sur une suggestion
  // on transforme le nom saisi en coordonées
  // on met à jour la valeur de l'input dans le state
  // le center est utile pour /resultats
  const handleSelect = async (value) => {
    const results = await geocodeByAddress(adress);
    const latLng = await getLatLng(results[0]);
    const addressComponents = results[0].address_components;
    console.log(addressComponents);
    const city = addressComponents.find(
      (component) => component.types.includes('locality'),
    );
    const cityName = city.long_name;
    console.log(cityName);
    const country = addressComponents.find(
      (component) => component.types.includes('country'),
    );
    const countryName = country.long_name;
    console.log(countryName);


    const userAddress = [cityName, countryName];
    console.log(userAddress);

    saveUserAddress(userAddress);
    setAdress(value);
    setCenter(latLng);
  };

  // on crée une instance de useHistory
  const history = useHistory();

  const handleSubmitClick = (evt) => {
    evt.preventDefault();
    // On force le changement d'url vers /resultats
    loadUsersByCountry();
    history.push('/resultats');
  };

  return (
    <div className="searchBar">
      <PlacesAutocomplete
        value={adress}
        onChange={setAdress}
        onSelect={handleSelect}
        searchOptions={{ types: ['geocode'] }}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <>
            <form className="searchBar__form">
              <input className="searchBar__mainInput" {...getInputProps({ placeholder: "Sélectionner une ville où vous souhaitez voyager" })} />
              <input type="submit" className="searchBar__submitButton" value="" onClick={handleSubmitClick}/>
            </form>
            <div className="autocomplete-dropdown-container">
              {loading ? <div>...loading</div> : null}

              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "#96CDEF" : "#fff",
                  fontSize: "1.1rem",
                  textAlign: "left",
                  paddingTop:"0.5rem",
                  paddingLeft:"1.2rem",
                };

                return (
                  <div className="autocomplete-dropdown-suggestion" {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </PlacesAutocomplete>
    </div>
  );
};
export default withRouter(SearchBar);
