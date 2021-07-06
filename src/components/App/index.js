/* eslint-disable no-console */

// == Import npm
import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import jwt_decode from 'jwt-decode';

// == Import Locaux
import Header from 'src/components/Header';
import SignIn from 'src/containers/SignIn';
import LogIn from 'src/containers/LogIn';
import HomePage from 'src/components/HomePage';
import Results from 'src/components/Results';
import Page404 from 'src/components/Page404';
import Page403 from 'src/components/Page403';
import Profile from 'src/containers/Profile';
import MyProfile from 'src/containers/MyProfile';
import Users from 'src/containers/Users';
import ModifyProfile from 'src/containers/ModifyProfile';
import LegalsMentions from 'src/components/LegalsMentions';
import SiteMap from 'src/components/SiteMap';
import AboutUs from 'src/components/AboutUs';
import Footer from 'src/components/Footer';

// == Import Data
import DataTeam from 'src/data/DataTeam';

// == Import Style
import './styles.css';

// == Composant
const App = ({
  setIsConnected, saveConnectedUserId,
}) => {
	
  // URL recuperation
  const pathName = useLocation().pathname;

  // TOKEN verification
  useEffect(() => {
    const userTokenFromLocalStorage = localStorage.getItem('token');
    if (userTokenFromLocalStorage != null) {
      const decodedToken = jwt_decode(userTokenFromLocalStorage);
      const dateNow = Math.round(Date.now() / 1000);
      if (decodedToken.exp - 600 > dateNow) {
        saveConnectedUserId(decodedToken.id);
        console.log('je suis déjà connecté');
        setIsConnected(true);
      }
      else {
        localStorage.removeItem('token');
        console.log('je ne suis pas connecté');
      }
    }
    else {
      setIsConnected(false);
      console.log('je ne suis pas connecté');
    }
  }, []);

  // -- scroll management
  useEffect(
    () => {
      window.scrollTo({ top: 0 });
    },
    [pathName],
  );

  return (
    <div className="app">
      <Header />
      <LogIn />
      <SignIn />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/resultats" exact>
          <Results />
        </Route>
        <Route path="/notre-reseau" exact>
          <Users />
        </Route>
        <Route path="/notre-reseau/utilisateur/:id" exact>
          <Profile />
        </Route>
        <Route path="/mon-profil" exact>
          <MyProfile />
        </Route>
        <Route path="/mon-profil/modifier" exact>
          <ModifyProfile />
        </Route>
        <Route path="/plan-du-site">
          <SiteMap />
        </Route>
        <Route path="/mentions-legales">
          <LegalsMentions />
        </Route>
        <Route path="/a-propos">
          <AboutUs dataTeam={DataTeam} />
        </Route>
        <Route path="/403">
          <Page403 />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
      <ToastContainer autoClose={2000} />
      <Footer />
    </div>
  );
};

App.propTypes = {
  setIsConnected: PropTypes.func.isRequired,
  saveConnectedUserId: PropTypes.func.isRequired,
};

// == Export
export default App;
