import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Field from 'src/components/Field';

import './signIn.scss';

const SignIn = ({
  signIn,
  toggleSignIn,
  toggleLogIn,
  firstname,
  lastname,
  email,
  password,
  confirmedPassword,
  changeField,
  handleSignIn,
}) => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (password === confirmedPassword) {
      handleSignIn();
    }
    else {
      setErrorMessage('Les mots de passe ne correspondent pas');
    }
  };

  const closeSignIn = () => {
    toggleSignIn(false);
  };

  const openLogIn = () => {
    toggleLogIn(true);
    toggleSignIn(false);
  };

  return (
    <div className={signIn ? 'signIn' : 'signIn__close'}>
      <div className="signIn__modal">
        <h1 className="signIn__modal__title"> Créez votre compte </h1>
        <button className="signIn__modal__closeButton" type="button" onClick={closeSignIn}> X </button>
        <form className="signIn__modal__form" onSubmit={handleSubmit}>
          {errorMessage && (
            <p className="error"> {errorMessage} </p>
          )}
          <Field
            className="signIn__modal__form__field"
            name="firstname"
            placeholder="Prénom"
            onChange={changeField}
            value={firstname}
          />
          <Field
            className="signIn__modal__form__field"
            name="lastname"
            placeholder="Nom"
            onChange={changeField}
            value={lastname}
          />
          <Field
            className="signIn__modal__form__field"
            name="email"
            placeholder="Email"
            onChange={changeField}
            value={email}
          />
          <Field
            className="signIn__modal__form__field"
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={changeField}
            value={password}
          />
          <Field
            className="signIn__modal__form__field"
            name="confirmedPassword"
            type="password"
            placeholder="Confirmer votre mot de passe"
            onChange={changeField}
            value={confirmedPassword}
          />

          <button className="signIn__modal__form__button" type="submit"> S'inscrire </button>
        </form>

        <button type="button" className="signIn__modal__openLogInButton" onClick={openLogIn}> Vous avez déjà un compte ?</button>
      </div>
    </div>
  );
};

SignIn.propTypes = {
  signIn: PropTypes.bool.isRequired,
  toggleSignIn: PropTypes.func.isRequired,
  toggleLogIn: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  confirmedPassword: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleSignIn: PropTypes.func.isRequired,
};

export default SignIn;
