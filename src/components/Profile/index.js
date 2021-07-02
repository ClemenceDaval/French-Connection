/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useLocation } from 'react-router-dom';

// == import local
import ProfilePrincipalInfos from 'src/components/ProfilePrincipalInfos';
import ProfileDescription from 'src/components/ProfileDescription';
import ProfileHobbies from 'src/components/ProfileHobbies';
import ProfileServices from 'src/components/ProfileServices';
import ContactMe from 'src/containers/ContactMe';
import Loader from 'src/components/Loader';

// == import style
import './profile.scss';

const Profile = ({
  loadUserProfile,
  userInfos,
  saveAvatar,
  isLoading,
}) => {
  const params = useParams();
  const userId = params.id;
  const pathName = useLocation().pathname;
  // on charge les infos du user à chaque fois que le pathname est modifié
  
  useEffect(() => {
    loadUserProfile(userId);
  }, [pathName]);

  let name = '';
  if (userInfos.nickname != null) {
    name = userInfos.nickname;
  }
  else {
    name = `${userInfos.firstname} ${userInfos.lastname}`;
  }

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="profile">
          <h1 className="profile__title"> Profil de {name} </h1>
          <div className="profile__content">
            <div className="profile__content__left">
              <ProfilePrincipalInfos {...userInfos} name={name} isMyProfile={false} saveAvatar={saveAvatar} />
              <ContactMe />
            </div>

            <div className="profile__content__right">
              <ProfileDescription {...userInfos} name={name} />
              <ProfileHobbies {...userInfos} name={name} />
              {(userInfos.helper) && <ProfileServices {...userInfos} name={name} />}

            </div>
          </div>
        </div>
      )}
    </>
  );
};

Profile.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  userInfos: PropTypes.arrayOf(
    PropTypes.shape(
      {
        // helper: PropTypes.bool.isRequired,
        firstname: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired,
        nickname: PropTypes.string,
      },
    ).isRequired,
  ).isRequired,
  loadUserProfile: PropTypes.func.isRequired,
};

export default Profile;
