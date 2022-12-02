import React from 'react';
import { Navigator } from './Navigator';
import { Footer } from './Footer';
import { Route, Routes } from 'react-router';
const AboutUs = React.lazy(() => import('./About'));
const BikeListing = React.lazy(() => import('./BikeListing'));
const ContactUs = React.lazy(() => import('./ContactUs'));
const FAQs = React.lazy(() => import('./FAQs'));
const BikeInfo = React.lazy(() => import('./BikeInfo'));
const Main = React.lazy(() => import('./Main'));
const ManageBooking = React.lazy(() => import('./ManageBooking'));
const Profile = React.lazy(() => import('./Profile'));

export const Home = () => {
  return (
    <div>
      <Navigator />
      <Routes>
        <Route path="" element={
          <React.Suspense fallback='Loading .....'>
            <Main />
          </React.Suspense>
        } />
        <Route path="about-us" element={
          <React.Suspense fallback='Loading .....'>
            <AboutUs />
          </React.Suspense>
        } />
        <Route path="FAQs" element={
          <React.Suspense fallback='Loading .....'>
            <FAQs />
          </React.Suspense>
        } />
        <Route path="contact-us" element={
          <React.Suspense fallback='Loading .....'>
            <ContactUs />
          </React.Suspense>
        } />
        <Route path="bike-listing" element={
          <React.Suspense fallback='Loading .....'>
            <BikeListing />
          </React.Suspense>
        } />
        <Route path=":bike_name" element={
          <React.Suspense fallback='Loading .....'>
            <BikeInfo />
          </React.Suspense>
        } />
        <Route path='manage-booking/:user_id' element={
          <React.Suspense fallback='Loading .....'>
            <ManageBooking />
          </React.Suspense>
        } />
        <Route path='profile/:user_id' element={
          <React.Suspense fallback='Loading .....'>
            <Profile />
          </React.Suspense>
        }/>
      </Routes>
      <Footer />
    </div>
  )
}
