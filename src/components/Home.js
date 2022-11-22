import React from 'react';
import { Navigator } from './Navigator';
import { Main } from './Main';
import { Footer } from './Footer';
import { Route, Routes } from 'react-router';
import { About } from './About';
import { FAQs } from './FAQs';
import { ContactUs } from './ContactUs';
import { BikeListing } from './BikeListing';
import { BikeInfo } from './BikeInfo';

export const Home = () => {
  return (
    <div>
      <Navigator />
      <Routes>
        <Route path="" element={<Main />}/>
        <Route path="about-us" element={<About />}/>
        <Route path="FAQs" element={<FAQs />}/>
        <Route path="contact-us" element={<ContactUs />}/>
        <Route path="bike-listing" element={<BikeListing />}/>
        <Route path=":bike_name" element={<BikeInfo />}/>
      </Routes>
      <Footer />
    </div>
  )
}
