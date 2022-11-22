import React from 'react';
import { NavLink } from 'react-router-dom';

export const BikeListing = () => {
  return (
    <div className='py-5'>
      {/* Bike list */}
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col" id="bikelistimg">
            <h1>Bike Listing</h1>
            <h4>Home &gt; Bike Listing</h4>
          </div>
        </div>
        <div className="row py-5 fs-1 text-center  "><p>Get Ready To Ride</p></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center">
            <img src="images/bikes/royalenfield/royal1.PNG" height="100%" width="70%" alt="" />
          </div>
          <div className="col-md-6 text-center">
            <h1>Royal Enfield Bullet 350cc</h1>
            <h3>One day price</h3>
            <h3><i className="fa fa-inr" aria-hidden="true" /> 1900</h3>
            <NavLink to="/royal"><button className="btn btn-secondary">View Details</button></NavLink>
          </div>
        </div>
        <hr />
        <div className="row mt">
          <div className="col-md-6 text-center">
            <img src="images/bikes/himalayan/himalayan1.PNG" height="100%" width="70%" alt="" />
          </div>
          <div className="col-md-6 text-center">
            <h1>Royal Enfield Himalayan</h1>
            <h3>One day price</h3>
            <h3><i className="fa fa-inr" aria-hidden="true" /> 1700</h3>
            <NavLink to="/himalayan"><button className="btn btn-secondary">View Details</button></NavLink>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 text-center">
            <img src="images/bikes/tiger/tiger1.PNG" height="100%" width="70%" alt="" />
          </div>
          <div className="col-md-6 text-center">
            <h1>Triumph Tiger 800 XCX</h1>
            <h3>One day price</h3>
            <h3><i className="fa fa-inr" aria-hidden="true" /> 2500</h3>
            <NavLink to='/triumph'><button className="btn btn-secondary">View Details</button></NavLink>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 text-center">
            <img src="images/bikes/heroxpuls/heroxpuls1.PNG" height="100%" width="70%" alt="" />
          </div>
          <div className="col-md-6 text-center">
            <h1>Hero Xpulse 200</h1>
            <h3>One day price</h3>
            <h3><i className="fa fa-inr" aria-hidden="true" /> 2100</h3>
            <NavLink to={'/hero'}><button className="btn btn-secondary">View Details</button></NavLink>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 text-center">
            <img src="images/bikes/kawasaki/kawasaki1.PNG" height="100%" width="70%" alt="" />
          </div>
          <div className="col-md-6 text-center">
            <h1>Kawasaki KLX 110</h1>
            <h3>One day price</h3>
            <h3><i className="fa fa-inr" aria-hidden="true" /> 1500</h3>
            <NavLink to={'/kawasaki'}><button className="btn btn-secondary">View Details</button></NavLink>
          </div>
        </div>
      </div>
      {/* End Bike List */}
    </div>
  )
}
