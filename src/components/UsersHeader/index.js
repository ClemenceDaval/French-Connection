import React, { useEffect, useState } from 'react';

const UsersHeader = () => (
  <div className="users__header">
    <div className="users__header__content">
      <h1 className="users__header__title"> Notre réseau</h1>
      <div className="users__header__text">
        <p> Découvrez le profil de nos utilisateurs. </p>
        <p>
          Vous recherchez une personne en particulier ?
          Munissez-vous de son pseudo et utilisez la barre de recherche ci-dessous.
        </p>
        <p>
          Vous pouvez également filtrer les profils pour n'afficher uniquement les helpers.
        </p>
      </div>
    </div>
    <div className="users__header__image" />
  </div>
);

export default UsersHeader;