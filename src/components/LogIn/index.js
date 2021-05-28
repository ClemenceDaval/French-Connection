import React from 'react';

import PropTypes from 'prop-types';
import Field from 'src/components/Field';

import './logIn.scss';

const LogIn = ({ logIn, toggleLogIn, toggleSignIn, email, password, changeField, handleLogin}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  const closeLogIn = () => {
    toggleLogIn(false);
  };

  const openSignIn = () => {
    toggleSignIn(true);
    toggleLogIn(false);
  };

  return (
    <div className={logIn ? 'logIn' : 'logIn__close'}>
      <div className="logIn__modal">
        <h1 className="logIn__modal__title"> Bienvenue sur French Connection </h1>
        <button className="logIn__modal__closeButton" type="button" onClick={closeLogIn}> X </button>
        <form className="logIn__modal__form" onSubmit={handleSubmit}>
          <Field
            className="logIn__modal__form__field"
            name="email"
            placeholder="Adresse Email"
            onChange={changeField}
            value={email}
          />
          <Field
            className="logIn__modal__form__field"
            type="password"
            name="password"
            placeholder="Mot de passe"
            onChange={changeField}
            value={password}
          />
          <button className="logIn__modal__form__button" type="submit"> Se connecter </button>
        </form>

        <button type="button" className="logIn__modal__openSignInButton" onClick={openSignIn}> Vous n'avez pas encore de compte ?</button>
      </div>
    </div>
  );
};

LogIn.propTypes = {
  logIn: PropTypes.bool.isRequired,
  toggleLogIn: PropTypes.func.isRequired,
  toggleSignIn: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

export default LogIn;
