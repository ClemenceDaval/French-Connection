import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

// == import local
import LogOut from 'src/containers/LogOut';
import ProfilePrincipalInfos from 'src/components/ProfilePrincipalInfos';
import ProfilePersonalInfos from 'src/components/ProfilePersonalInfos';
import ProfileDescription from 'src/components/ProfileDescription';
import ProfileHobbies from 'src/components/ProfileHobbies';
import ProfileServices from 'src/components/ProfileServices';
import ProfileButton from 'src/components/ProfileButton';
import Loader from 'src/components/Loader';

// == import style
import './myProfile.scss';

const MyProfile = ({
  connectedUserData,
  toggleLogOut,
  redirect,
  isConnected,
  isMyProfileLoaded,
  loadConnectedUserData,
  connectedUserId,
}) => {
  useEffect(() => {
    console.log('useEffect1');
    redirect(false);
    console.log(connectedUserId);

    if (connectedUserId !== '') {
      loadConnectedUserData(connectedUserId);
      console.log('connectedUserId n\'est pas nul');
    }
  }, []);

  useEffect(() => {
    console.log('isConnected change');
    if (connectedUserId !== '') {
      loadConnectedUserData(connectedUserId);
    }
  }, [isConnected]);

  let name = '';
  if (connectedUserData.nickname != null) {
    name = connectedUserData.nickname;
  }
  else {
    name = `${connectedUserData.firstname} ${connectedUserData.lastname}`;
  }

  const openLogOut = () => {
    toggleLogOut(true);
  };

  return (
    <>
      {isMyProfileLoaded === 'checking' && <Loader /> }

      {isMyProfileLoaded === true && (

        <div className="myProfile">

          <LogOut />

          <h1 className="myProfile__title"> Mon profil </h1>

          <div className="myProfile__content">
            <div className="myProfile__content__left">
              <ProfilePrincipalInfos {...connectedUserData} name={name} isMyProfile />
              <ProfilePersonalInfos {...connectedUserData} />
            </div>
            <div className="myProfile__content__right">
              <ProfileDescription {...connectedUserData} isMyProfile name={name} />
              <ProfileHobbies {...connectedUserData} isMyProfile name={name} />
              <ProfileServices {...connectedUserData} isMyProfile name={name} />
              <div className="myProfile__buttons">
                <ProfileButton type="link" textContent="Me déconnecter" color="blue" linkTo="/mon-profil" onClick={openLogOut} />
                <ProfileButton type="hashlink" textContent="Devenez helper" color="red" linkTo="/mon-profil/modifier/#helperSection" />
                <ProfileButton type="link" textContent="Modifier mon profil" color="red" linkTo="/mon-profil/modifier" />
              </div>
            </div>
          </div>
        </div>
      )}

      {isConnected === false && <Redirect to="/" />}

    </>
  );
};

MyProfile.propTypes = {
  connectedUserData: PropTypes.shape(
    {
      nickname: PropTypes.string,
      firstname: PropTypes.string,
      lastname: PropTypes.string,
    },
  ).isRequired,
  toggleLogOut: PropTypes.func.isRequired,
  redirect: PropTypes.func.isRequired,
  isConnected: PropTypes.oneOf(['checking', true, false]).isRequired,
  isMyProfileLoaded: PropTypes.oneOf(['checking', true, false]).isRequired,
};


export default MyProfile;
