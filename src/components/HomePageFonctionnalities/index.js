/* eslint-disable max-len */
import React from 'react';

import func3 from '../../assets/images/cherry-561.png';
import func2 from '../../assets/images/cherry-come-back-later.png';
import func1 from '../../assets/images/cherry-girl-on-the-beach-with-umbrella-wearing-medical-mask.png';

import './homePageFonctionnalities.scss';

const HomePageFonctionnalities = () => (
  <div className="homePageFonctionnalities">

    <div className="homePageFonctionnalities__item">
      <img className="homePageFonctionnalities__item__image" src={func1} alt="girl is waiting for you" />
      <div className="homePageFonctionnalities__item__text">
        <h3 className="homePageFonctionnalities__item__text__title"> Entrez en contact avec des helpers  </h3>
        <p className="homePageFonctionnalities__item__text__content">
          Les helpers sont des utilisateurs francophone habitant dans d’autres pays. Entrez en contact avec eux, pour faire de nouvelles rencontres et profiter de leur expérience de leur pays.
        </p>
      </div>
    </div>

    <div className="homePageFonctionnalities__item">
      <img className="homePageFonctionnalities__item__image" src={func2} alt="a woman waves you" id="minus__margin" />
      <div className="homePageFonctionnalities__item__text">
        <h3 className="homePageFonctionnalities__item__text__title"> Devenez helper  </h3>
        <p className="homePageFonctionnalities__item__text__content">
          Paramétrer votre profil et devenez helper. Faites profiter les voyageurs vos connaissances sur votre ville de résidence et proposez des services aux voyageurs.
        </p>
      </div>
    </div>

    <div className="homePageFonctionnalities__item">
      <img className="homePageFonctionnalities__item__image" src={func3} alt="a man has many questions" />
      <div className="homePageFonctionnalities__item__text">
        <h3 className="homePageFonctionnalities__item__text__title"> Trouvez des réponses à vos questions  </h3>
        <p className="homePageFonctionnalities__item__text__content">
          En cas d’interrogation, allez faire un tour sur notre foire aux questions et si vous ne trouvez pas de réponse adaptée, interrogez nos autres utilisateurs librement.
        </p>
      </div>
    </div>

  </div>

);

export default HomePageFonctionnalities;
