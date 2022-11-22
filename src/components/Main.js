import React from 'react'
import { NavLink } from 'react-router-dom'

export const Main = () => {
  return (
    <div className='py-5'>
    {/*     Start Carousel     */}
    <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={3} aria-label="Slide 4" />
      </div>
      <div className="carousel-inner" id="carouselmy">
        <div className="carousel-item active">
          <img src="images/carousel2.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block" id="secondcarousel">
            <span className="fs-2">" You Can Always Make Money You Can't Always Make Memories.. "</span>
          </div>
        </div>
        <div className="carousel-item">
          <img src="images/carousel1.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block" id="firstcarousel">
            <span className="fs-3">" Somewhere On Your Journey</span>
            <span className="fs-3">Don't Forget To</span>
            <span className="fs-3">Turn Around And Enjoy</span>
            <span className="fs-3">The View.. "</span>
          </div>
        </div>
        <div className="carousel-item">
          <img src="images/carousel4.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block" id="fourthcarousel">
            <span className="fs-2">" Travelling leaves you speechless and then it turns you into a storyteller.. "</span>
          </div>
        </div>
        <div className="carousel-item">
          <img src="images/carousel3.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block" id="thirdcarousel">
            <span className="fs-3">" Bike don't leak oil, they mark their territory.. "</span>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    {/*     End Carousel     */}
    {/*     Some Motivation     */}
    <div className="container pt-5 mt-md-5">
      <div className="row">
        <div className="col-md-6">
          <h5 className="heading2 text-decoration-underline">IT IS ABOUT TIME, YOU DITCH THE COMFORT ZONE</h5>
          <h1>GO RIDE</h1>
          <p>All Amped Up? So, it's time to give your air-conditioned rooms a break and set out for an adventurous
            experience.
            With awesome deals and discount coupons at your disposal, your pleasure is bound to get manifold!</p>
          <p>The orifice, the innate traveler in you has longed for is just a click away. If you are looking for an
            unprecedented experience, but naive about how to start, give us a shout out or check out our bike and cars
            hire rental packages in India.</p>
          <NavLink to='bikelisting' className="mt-md-4 btn px-md-5 btn-secondary rounded-pill booke">Book Now</NavLink>
        </div>
        <div className="col-md-6 mt-4 mt-md-0">
          <img src="images/img1.jpg" height="100%" width="100%" alt="" />
        </div>
      </div>
    </div>
    {/*     End     */}
    {/*     Why To Choose */}
    <div className="container-fluid mt-md-5">
      <div className="row">
        <div className="col">
          <img src="images/img2.PNG" className="img-fluid" alt="" />
        </div>
      </div>
    </div>
    {/*     End     */}
    {/*     Sanitize Vehicle     */}
    <div className="container mt-md-5">
      <div className="row">
        <div className="col-md-5 me-auto">
          <img src="images/img3.PNG" className="img-fluid" />
        </div>
        <div className="col-md-5">
          <h1 className="heading1">Sanitized Vehicle</h1>
          <p className="mb-0">Before your rental, we'll</p>
          <p className="mb-0">take extra care to clean the</p>
          <p className="mb-0">vehicle with disinfectant</p>
          <p className="mb-0">and sanitizer for your</p>
          <p>protection</p>
        </div>
      </div>
    </div>
    {/*     End Senitize Vehicle     */}
    {/*     Camp     */}
    <div className="container mt-md-5 pt-md-5">
      <div className="row">
        <div className="col-md-6">
          <img src="images/camp.jpg" className="img-fluid" alt="" />
        </div>
        <div className="col-md-6">
          <h1 className="mt-5">"Leh"</h1>
          <p>Leh is a dream destination for many travellers in India and even for those who are visiting from overseas. It is not just a destination for solo travelers but has so much to offer to young travellers, families and couples alike. Leh is famous for its high altitudes and numerous passes connecting various locations in this difficult terrain. To explore the best tourist places in Leh, one must visit this frozen paradise to explore its secrets and admire its breath-taking beauty.</p>
          <p>Despite its harsh weather and inaccessibility, it remains a popular tourist destination for people from all over the world. But make sure you are physically fit to endure the harsh weather and difficult terrains of Leh. You must be wondering why visit this place is perfect when the terrain is difficult to navigate. Well, you must visit this place because not only is it a pocket-friendly tourist destination, (provided you book in advance), it is sparsely crowded even during peak season and the local hosts are committed to ensuring you to have a terrific experience</p>
          <p>Leh is a dream destination for many travellers and the holy grail for the adventure enthusiasts. If you are a photography enthusiast then Leh is the paradise you have been waiting for all your life. There isn’t much to offers in terms of nature or wildlife photography, but what you can capture instead is a vast empty canvas that you can paint.</p>
          <p>The landscape here is unlike anywhere in India and worldwide and so much of it is still undiscovered and undocumented. In addition to the mesmerizing landscape, there are many turquoise blue lakes, beautifully constructed monasteries, snow-covered mountains and unimaginable sights that change every few kilometres. It’s safe, economical and you can travel here by yourself, or with your friends, families and even that someone special</p>
        </div>
      </div>
    </div>
    {/*     End Camp     */}
    {/*     Start How To Use     */}
    <div className="container-fluid mt-md-5 py-md-5">
      <img src="images/how_to_use.PNG" width="100%" />
    </div>
    {/*     End How To Use     */}
    {/*     Button     */}
    <div className="container mt-5 mt-md-0">
      <div className="row">
        <div className="col text-center">
          <NavLink to={"/bike-listing"}><button className="btn btn-success rounded-pill px-md-5 py-md-2 booke">BOOK YOUR RIDE
              HERE</button></NavLink>
        </div>
      </div>
    </div>
    {/*     End Of Button     */}
    {/*     Feedback     */}
    <div className="container pt-md-5 my-5">
      <div className="row">
        <div className="col-md-5 rounded border border-dark feedb">
          <h1 className="text-center heading1">Feedback</h1><h1>
            <form action>
              <div>
                <label className="form-label my-0 fs-4">Name<span className="text-danger">*</span></label>
                <input type="text" placeholder="Enter Your Name" className="form-control py-1 my-2" title="Please Enter Valid Name" minLength={3} pattern="^[a-zA-Z]*$" required />
              </div>
              <div>
                <label className="form-label my-0 fs-4">Email Adress<span className="text-danger">*</span></label>
                <input type="email" placeholder="Enter Your Email Adress" className="form-control py-1 my-2" title="Please Enter A Valid Email" required />
              </div>
              <div>
                <label htmlFor className="form-label fs-4">Feedback<span className="text-danger"> * </span> </label>
                <textarea className="form-control" placeholder="Message" rows={5} required defaultValue={""} />
              </div>
              <button type="submit" className="mt-3 btn btn-primary rounded-pill px-md-5">Submit</button>
            </form>
          </h1></div>
        <div className="col-md-7 mt-5 mt-md-0">
          <img src="images/feedb.jpg" className="img-fluid rounded" alt="" />
        </div>
      </div>
    </div>
    {/*     End Feedback     */}
  </div>
  )
}
