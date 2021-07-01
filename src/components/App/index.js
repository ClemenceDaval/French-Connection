/* eslint-disable no-console */
// == Import npm
import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Route, Switch, useLocation, useHistory,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import jwt_decode from 'jwt-decode';

// == Import Locaux
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
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

import SignIn from 'src/containers/SignIn';
import LogIn from 'src/containers/LogIn';

// == Import Data
import DataTeam from 'src/data/DataTeam';

// == Import Style
import './styles.css';

// == Composant

const App = ({
  loadConnectedUserData, setIsConnected, saveConnectedUserId,
}) => {
  // récupération du chemin
  const pathName = useLocation().pathname;
  // console.log(pathName);

  useEffect(() => {
    const userTokenFromLocalStorage = localStorage.getItem('token');
    if (userTokenFromLocalStorage != null) {
      const decodedToken = jwt_decode(userTokenFromLocalStorage);
      // console.log(decodedToken);
      const dateNow = Math.round(Date.now() / 1000);
      // console.log(dateNow);
      if (decodedToken.exp - 600 > dateNow) {
        // loadConnectedUserData(decodedToken.id);
        saveConnectedUserId(decodedToken.id);
        console.log('je suis déjà connecté');
        setIsConnected(true);
      }
      else {
        // console.log('Token expiré');
        localStorage.removeItem('token');
      }
    }
    else {
      console.log('je ne suis pas encore connecté');
      setIsConnected(false);
    }
  }, []);

  // -- gestion du scroll
  useEffect(
    () => {
      window.scrollTo({ top: 0 });
      // console.log('le pathname a changé');
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
  loadConnectedUserData: PropTypes.func.isRequired,
  setIsConnected: PropTypes.func.isRequired,
};

// == Export
export default App;
