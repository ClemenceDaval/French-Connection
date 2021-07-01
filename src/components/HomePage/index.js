import React from 'react';

import HomePageHeader from 'src/components/HomePageHeader';
import HomePageFonctionnalities from 'src/components/HomePageFonctionnalities';
import HomePageMap from 'src/components/HomePageMap';
import HomePageUsersReviews from 'src/containers/HomePageUsersReviews';

const HomePage = () => (
  <> 
    <HomePageHeader />
    <HomePageFonctionnalities />
    <HomePageMap />
    <HomePageUsersReviews />
  </>
);

export default HomePage;