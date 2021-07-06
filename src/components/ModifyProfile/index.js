/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import components
import Field from 'src/components/Field';
import TextArea from 'src/components/TextArea';
import ModifyCity from 'src/containers/ModifyCity';
import ModifyMyHobbies from 'src/containers/ModifyMyHobbies';
import ProfilePrincipalInfos from 'src/components/ProfilePrincipalInfos';
import ModifyHelperSection from 'src/containers/ModifyHelperSection';
import ProfileButton from 'src/components/ProfileButton';
import Loader from 'src/components/Loader';

// == Import style
import './modifyProfile.scss';

const ModifyProfile = ({
  connectedUserData,
  changeField,
  newPassword,
  confirmedNewPassword,
  changePasswordField,
  modifyProfile,
  completeNewAddress,
  isLoaded,
  loadHobbiesList,
  loadServicesList,
  toggleModifyCityModal,
  redirection,
  isConnected,
  isMyProfileLoaded,
}) => {
  const userId = connectedUserData.id;

  useEffect(() => {
    console.log('useEffect');
    loadHobbiesList();
    loadServicesList();
  }, []);

  const [firstnameErrorMessage, setFirstnameErrorMessage] = useState('');
  const [lastnameErrorMessage, setLastnameErrorMessage] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  let name = '';
  if (connectedUserData.nickname != null) {
    name = connectedUserData.nickname;
  }
  else {
    name = `${connectedUserData.firstname} ${connectedUserData.lastname}`;
  }

  // verifications before sending the form
  const handleSubmit = (evt) => {
    evt.preventDefault();

    let myHobbiesList = [];
    connectedUserData.hobbies.map((hobby) => {
      myHobbiesList = [...myHobbiesList, hobby.id];
    });

    let myServicesList = [];
    connectedUserData.services.map((service) => {
      myServicesList = [...myServicesList, service.id];
    });

    // reset of error messages
    setFirstnameErrorMessage('');
    setLastnameErrorMessage('');
    setEmailErrorMessage('');
    setPasswordErrorMessage('');

    let nbError = 0;
    const emailFormat = new RegExp(/^\S+@\S+\.\S+$/);
    const passwordFormat = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$');

    if ((connectedUserData.firstname).trim() === '') {
      setFirstnameErrorMessage('Ce champ ne doit pas être vide');
      nbError += 1;
    }
    if (connectedUserData.lastname.trim() === '') {
      setLastnameErrorMessage('Ce champ ne doit pas être vide');
      nbError += 1;
    }
    if (connectedUserData.email.trim() === '') {
      setEmailErrorMessage('Ce champ ne doit pas être vide');
      nbError += 1;
    }
    if (!emailFormat.test(connectedUserData.email)) {
      setEmailErrorMessage('Cet email n\'est pas valide');
      nbError += 1;
    }
    if (newPassword !== '' && !passwordFormat.test(newPassword)){
      setPasswordErrorMessage('Le mot de passe doit contenir au moins 8 caractères, dont au moins une majuscule, un chiffre et un caractère spécial.');
    }
    if (newPassword !== confirmedNewPassword) {
      setPasswordErrorMessage('Les mots de passe ne correspondent pas');
      nbError += 1;
    }
    if (nbError === 0) {
      console.log('il ny a pas derreur');
      modifyProfile(userId, myHobbiesList, myServicesList);
    }
    if (nbError !== 0) {
      window.scrollTo(0, 200);
    }
  };

  

  const openModifyCityModal = () => {
    toggleModifyCityModal(true);
  };

  return (
    <>
      {isConnected === false && <Redirect to="/" />}
      {redirection && <Redirect to="/mon-profil" />}
      {isMyProfileLoaded === 'checking' && <Loader /> }
      {isMyProfileLoaded === true && (
        <div className="modifyProfile">
          <h1 className="modifyProfile__title"> Modifier mon profil </h1>
          <div className="modifyProfile__content">
            <div className="modifyProfile__principalInfos">
              <ProfilePrincipalInfos {...connectedUserData} name={name} isMyProfile />
            </div>
            <form className="modifyProfile__form" onSubmit={handleSubmit}>
              <div className="modifyProfile__form__section">
                <h2 className="modifyProfile__form__section__title"> Informations personnelles</h2>
                <div className="modifyProfile__form__subsection">
                  <h3 className="modifyProfile__form__subsection__title"> Les informations de votre compte </h3>
                  <div className="modifyProfile__form__section__content">

                    <div className="modifyProfile__form__section__fieldGroup">
                      <div className="modifyProfile__form__label">
                        {firstnameErrorMessage && (
                          <div className="modifyProfile__form__errorMessage"> {firstnameErrorMessage} </div>
                        )}
                        <div className="modifyProfile__form__label__name"> Prénom </div>
                        <Field
                          className="modifyProfile__form__field"
                          name="firstname"
                          placeholder="Ex: Martin"
                          onChange={changeField}
                          value={connectedUserData.firstname}
                        />
                      </div>
                      <div className="modifyProfile__form__label" htmlFor="lastname">
                        {lastnameErrorMessage && (
                          <div className="modifyProfile__form__errorMessage"> {lastnameErrorMessage} </div>
                        )}
                        <div className="modifyProfile__form__label__name">Nom </div>
                        <Field
                          className="modifyProfile__form__field"
                          name="lastname"
                          placeholder="Ex: Dupont"
                          onChange={changeField}
                          value={connectedUserData.lastname}
                        />
                      </div>
                    </div>

                    <div className="modifyProfile__form__label" htmlFor="nickname">
                      <div className="modifyProfile__form__label__name"> Nom d'utilisateur </div>
                      <Field
                        className="modifyProfile__form__field"
                        name="nickname"
                        placeholder="Ex: Martin88"
                        onChange={changeField}
                        value={connectedUserData.nickname !== null ? connectedUserData.nickname : ''}
                      />
                    </div>
                    <div className="modifyProfile__form__label" htmlFor="email">
                      {emailErrorMessage && (
                        <div className="modifyProfile__form__errorMessage"> {emailErrorMessage} </div>
                      )}
                      <div className="modifyProfile__form__label__name"> Email </div>
                      <Field
                        className="modifyProfile__form__field"
                        name="email"
                        placeholder="Email@exemple.com"
                        onChange={changeField}
                        value={connectedUserData.email}
                        type="email"
                      />
                    </div>
                    <div className="modifyProfile__form__section__fieldGroup">
                      
                      <div className="modifyProfile__form__label" htmlFor="password">
                        {passwordErrorMessage && (
                          <div className="modifyProfile__form__errorMessage"> {passwordErrorMessage} </div>
                        )}
                        <div className="modifyProfile__form__label__name"> Mot de passe </div>
                        <Field
                          className="modifyProfile__form__field"
                          name="newPassword"
                          placeholder="Nouveau mot de passe"
                          onChange={changePasswordField}
                          value={newPassword}
                          type="password"
                        />
                      </div>
                      <div className="modifyProfile__form__label" htmlFor="password">
                        <div className="modifyProfile__form__label__name"> Confirmer le mot de passe </div>
                        <Field
                          className="modifyProfile__form__field"
                          name="confirmedNewPassword"
                          placeholder="Confirmez votre mot de passe"
                          onChange={changePasswordField}
                          value={confirmedNewPassword}
                          type="password"
                        />
                      </div>
                    </div>

                    <div className="modifyProfile__form__label" htmlFor="phoneNumber">
                      <div className="modifyProfile__form__label__name">Numéro de téléphone </div>
                      <Field
                        className="modifyProfile__form__field"
                        name="phoneNumber"
                        placeholder="Ex: 06 34 34 34 34"
                        onChange={changeField}
                        value={connectedUserData.phoneNumber !== null ? connectedUserData.phoneNumber : ''}
                      />
                    </div>
                  </div>
                </div>

                <div className="modifyProfile__form__subsection">
                  <h3 className="modifyProfile__form__subsection__title"> Votre ville de résidence </h3>
                  <div className="modifyProfile__form__label">
                    <div className="modifyProfile__form__city">
                      {connectedUserData.cities === null && completeNewAddress.length === 0 ? 'Vous n\'avez pas renseigné votre ville de résidence' : ''}
                      {connectedUserData.cities !== null && completeNewAddress.length === 0 ? `Votre ville de résidence est ${connectedUserData.cities.name}, ${connectedUserData.cities.country.frenchName}.` : ''}
                      {completeNewAddress.length !== 0 ? `Votre ville de résidence est ${completeNewAddress[0]}, ${completeNewAddress[1]}.` : ''}
                    </div>
                    <button className="modifyProfile__form__city__button" type="button" onClick={openModifyCityModal}> Changer de ville </button>
                    <ModifyCity />
                  </div>
                </div>

              </div>
              <div className="modifyProfile__form__section">
                <h2 className="modifyProfile__form__section__title"> À propos de vous </h2>
                <div className="modifyProfile__form__section__content">

                  <div className="modifyProfile__form__subsection">
                    <h3 className="modifyProfile__form__subsection__title"> Présentation </h3>
                    <div className="modifyProfile__form__label" htmlFor="biography">
                      <TextArea
                        className="modifyProfile__form__textarea"
                        name="biography"
                        placeholder="Ecrivez-ici un petit texte de présentation, pour que nos utilisateurs apprennent à vous connaitre"
                        onChange={changeField}
                        value={connectedUserData.biography !== null ? connectedUserData.biography : ''}
                      />
                    </div>
                  </div>
                  {isLoaded && <ModifyMyHobbies />}
                </div>
              </div>
              <div id="helperSection">
                <ModifyHelperSection />
              </div>

              <div className="modifyProfile__buttons">
                <ProfileButton type="link" textContent="Annuler" color="gray" linkTo="/mon-profil" />
                <ProfileButton type="hashlink" textContent="Enregistrer mes modifications" color="blue" onClick={handleSubmit} />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

ModifyProfile.propTypes = {
  connectedUserData: PropTypes.shape(
    {
      firstname: PropTypes.string,
      lastname: PropTypes.string,
      helper: PropTypes.bool,
      nickname: PropTypes.string,
      email: PropTypes.string,
      biography: PropTypes.string,
      phoneNumber: PropTypes.string,
      cities: PropTypes.shape(
        {
          name: PropTypes.string,
          country: PropTypes.shape(
            {
              frenchName: PropTypes.string,
            },
          ),
        },
      ),
    },
  ).isRequired,
  changeField: PropTypes.func.isRequired,
  newPassword: PropTypes.string.isRequired,
  confirmedNewPassword: PropTypes.string.isRequired,
  changePasswordField: PropTypes.func.isRequired,
  modifyProfile: PropTypes.func.isRequired,
  completeNewAddress: PropTypes.array.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  loadHobbiesList: PropTypes.func.isRequired,
  loadServicesList: PropTypes.func.isRequired,
  toggleModifyCityModal: PropTypes.func.isRequired,
  redirection: PropTypes.bool.isRequired,
  isConnected: PropTypes.oneOf(['checking', true, false]).isRequired,
};

export default ModifyProfile;
