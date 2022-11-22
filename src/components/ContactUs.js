import React from 'react'

export const ContactUs = () => {
  return (
    <div className="container py-5 mt-5" id="contactus">
    <div className="row">
      <div className="col-12">
        <h1> | Contact Us</h1>    
        <h2 className="text-center mt-3 heading2">Get In Touch</h2>
        <h4 className="text-center mb-3 heading2">Say Hi! and let`s work together!</h4>
      </div>
      <div className="col-md-6">
        <p className="mb-0 fs-5"><i className="fa fa-map-marker" aria-hidden="true" /> Address : </p>
        <p className="mb-0 fs-5">Krishan Nagar</p>
        <p className="mb-0 fs-5">Near Bank of baroda</p>
        <p className="fs-5">Dehradun, Uttarakhand</p>
        <p className="mb-0 fs-5"><i className="fa fa-envelope" aria-hidden="true" /> For support mail us :
        </p><p className="fs-5 mb-0"><a href="#">info@example.com</a></p>
        <p className="mb-0 fs-5">Or</p>
        <p className="fs-5"><a href="#">example@info.com</a></p>
        <p className="mb-0 fs-5"><i className="fa fa-phone" aria-hidden="true" /> Call us : </p>
        <p className="fs-5 mb-0"><a href>1234567890</a></p>
        <p className="fs-5 mb-0">Or</p>
        <p className="fs-5"><a href>0987654321</a></p>
      </div>
      <div className="col-md-6">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.74637221068!2d77.94709440648674!3d30.325409792457602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1615390364936!5m2!1sen!2sin" width="100%" height={450} style={{border: 0}} allowFullScreen loading="lazy" />
      </div>
    </div>
  </div>
  )
}
