import React from 'react'

const About = () => {
  return (
    <div className="container py-5 mt-5" id="aboutus">
      <div className="row mb-5">
        <div className="col-md-6">
          <h1> | About Us</h1>
          <p className="fs-5">We are team of enthusiastic and hard working people working towards excellence and perfection.
            We try to provide the best of bikes and services.
            We have a team of young , well trained and educated people in our crew. We provide bikes along with many
            accessories for bikes
            . We have a beautiful cafe for our customers to sit and relax while hiring or returing bikes and provide on
            road services and assistance to our customers for free if they face any problem .
            We have very easy and safe bike hiring process. Rest you can test by hiring a bike from us. Just hire our
            bikes and roam like a free bird!
          </p>
        </div>
        <div className="col-md-6" id="aboutusimg">
          <h3>“ The world is a book and those who do not travel read only one page.. ”</h3>
        </div>
      </div>
      <div className="row pb-3 pb-md-5">
        <div className="col">
          <h1>| Our Team</h1>
        </div>
      </div>
      <div className="row mb-5 justify-content-between" id="ourimages">
        <div className="col-md-3" id="ourcaption">
          <img src="images/bipintiwari.jpeg" alt="" />
          <div className="captionour">
            <h3 className="my-5">Bipin Tiwari</h3>
            <h5><i className="fa fa-phone" /> 12345678</h5>
            <h5><i className="fa fa-map-marker" aria-hidden="true" /> Khandwa naka, indore(mp)</h5>
            <h5> Connect : </h5>
            <h5><a href><i className="fa fa-facebook" aria-hidden="true" /> </a>
              <a href className="ms-4"><i className="fa fa-twitter" aria-hidden="true" /> </a>
              <a href className="ms-4"><i className="fa fa-linkedin" aria-hidden="true" /> </a>
            </h5>
            <h4>( Admin Module )</h4>
          </div>
        </div>
        <div className="col-md-3 mt-5 mt-md-0" id="ourcaption">
          <img src="images/Pushpendra.jpg" alt="" />
          <div className="captionour">
            <h3 className="my-5">Pushpendra Sapkale</h3>
            <h5><i className="fa fa-phone"> </i> 12345678</h5>
            <h5><i className="fa fa-map-marker" aria-hidden="true" /> Khandwa naka, indore(mp)</h5>
            <h5> Connect : </h5>
            <h5><a href><i className="fa fa-facebook" aria-hidden="true" /> </a>
              <a href className="ms-4"><i className="fa fa-twitter" aria-hidden="true" /> </a>
              <a href className="ms-4"><i className="fa fa-linkedin" aria-hidden="true" /> </a>
            </h5>
            <h4>( User Module )</h4>
          </div>
        </div>
        <div className="col-md-3 mt-5 mt-md-0" id="ourcaption">
          <img src="images/shubham.jpg" alt="" />
          <div className="captionour">
            <h3 className="my-5">Shubham Tiwari</h3>
            <h5><i className="fa fa-phone" /> 12345678</h5>
            <h5><i className="fa fa-map-marker" aria-hidden="true" /> Khandwa naka, indore(mp)</h5>
            <h5 className> Connect : </h5>
            <h5><a href><i className="fa fa-facebook" aria-hidden="true" /> </a>
              <a href className="ms-4"><i className="fa fa-twitter" aria-hidden="true" /> </a>
              <a href className="ms-4"><i className="fa fa-linkedin" aria-hidden="true" /> </a>
            </h5>
            <h4>( Back-end )</h4>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <h1 className="fs-2 text-start heading1">| How We Rent - </h1>
          <h1 className="fs-3 heading1">| Enquire For Bike |</h1>
          <p className="fs-5">Visit our office or website, choose your bike and Security deposit for your bike.</p>
          <h1 className="fs-3 mt-5 heading1">| Get bike from office |</h1>
          <p className="fs-5">Customer should come to our office and get their bike.</p>
          <h1 className="fs-3 mt-5 heading1">| Return your Ride |</h1>
          <p className="fs-5">At the time of receiving bike, security money and documents will be returned to the customer
            after complete inspection of the bike.</p>
          <h1 className="fs-3 mt-5 heading1">| What if you face any problem during ride ? |</h1>
          <p className="fs-5">Don’t worry for that! We will provide you free assistance within 90kms for free for any internal
            issue of the bike or will replace bike for free at your location . For any external issue we can still provide
            you assistance and on road services but that will be payable.</p>
        </div>
      </div>
    </div>
  )
}

export default About;