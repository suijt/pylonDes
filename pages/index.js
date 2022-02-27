import Head from 'next/head'
import Image from 'next/image'

// import OwlCarousel from 'react-owl-carousel';
import Layout from '../comp/layout'
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import ReactOwlCarousel from 'react-owl-carousel';

export default function Home() {
  // const OwlCarousel = dynamic(import("react-owl-carousel"), {ssr: false});
  return (
    <>
      <Layout>
        <div id="content">
          <div class="hero-wrap py-2 py-md-3 py-lg-5">
            <div class="hero-mask opacity-9 bg-white"></div>
            <div class="hero-bg hero-bg-scroll" style={{backgroundImage:"url('images/bg/image-6.jpg')"}}></div>
            <div class="hero-content py-3 py-lg-5 my-3 my-md-5">
              <div class="container my-5 py-4">
                <h2 class="text-14 text-center font-weight-600 mb-4">Send mobile top-up Online</h2>
                <p class="text-5 text-center mb-4 mb-md-5">Send credit to your family and friends anywhere in the world!</p>
                <form id="mobileTopup" method="post">
                  <div class="row justify-content-center">
                    <div class="col-sm-10 col-lg-8 col-xl-7">
                      <div class="row no-gutters search-input-2">
                        <div class="col-lg-9 col-xl-10 form-group">
                          <input type="tel" class="form-control shadow form-control-lg" id="mobilenumber" required="" placeholder="Enter Mobile Number" />
                        </div>
                        <div class="col-lg-3 col-xl-2 form-group">
                          <a class="btn btn-primary shadow btn-block btn-lg" href="recharge-order.html"><i class="fas fa-arrow-right"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          <section class="section bg-white">
            <div class="container my-sm-5">
              <h2 class="text-9 text-center">How does it work?</h2>
              <p class="lead text-center mb-5">Send a top-up in easy steps.</p>
              <div class="row">
                <div class="col-md-4">
                  <div class="featured-box style-4">
                    <div class="featured-box-icon bg-light-2 text-primary shadow-sm rounded-circle"> <i class="fas fa-mobile-alt"></i> </div>
                    <h3 class="text-5 font-weight-400 mb-3">Enter Mobile Number</h3>
                    <p class="text-3">Select destination from the list of countries. then, Enter the mobile number in which you want to send the top-up online.</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="featured-box style-4">
                    <div class="featured-box-icon bg-light-2 text-primary shadow-sm rounded-circle"> <i class="fas fa-location-arrow"></i> </div>
                    <h3 class="text-5 font-weight-400 mb-3">Select Top-Up Amount</h3>
                    <p class="text-3">Review all top-up amounts available online and choose a mobile top-up amount to send to friends or family.</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="featured-box style-4">
                    <div class="featured-box-icon bg-light-2 text-primary shadow-sm rounded-circle"> <i class="fas fa-money-check-alt"></i> </div>
                    <h3 class="text-5 font-weight-400 mb-3">Confirm your payment</h3>
                    <p class="text-3">Make a payment using our secure online payment process. Then, your top-up will be sent almost instantly.</p>
                  </div>
                </div>
              </div>
              <div class="text-center pt-5"> <a href="#" class="btn btn-outline-primary shadow-none">Send Top-up</a> </div>
            </div>
          </section>

          <section class="section">
            <div class="container my-sm-5">
              <h2 class="text-9 text-center">What people are saying about us</h2>
              <p class="lead text-center mb-5">Send a top-up experience people love to talk about</p>
              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="testimonial bg-white rounded shadow-sm text-center p-4">
                    <p class="text-3">“Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure.”</p>
                    <span class="text-warning"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span> <span class="d-block font-weight-500">Jay Shah from India</span> </div>
                </div>
                <div class="col-md-6 mb-4">
                  <div class="testimonial bg-white rounded shadow-sm text-center p-4">
                    <p class="text-3">“ Discovered it just recently; very easy, quick and useful service. I would def. recommend it. text of the printing and typesetting industry.”</p>
                    <span class="text-warning"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span> <span class="d-block font-weight-500">Dennis Jacques from USA</span> </div>
                </div>
                <div class="col-md-6 mb-4">
                  <div class="testimonial bg-white rounded shadow-sm text-center p-4">
                    <p class="text-3">“Quickai is very easy to use and transfers funds quickly. simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et.”</p>
                    <span class="text-warning"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span> <span class="d-block font-weight-500">Chris Tom from UK</span> </div>
                </div>
                <div class="col-md-6">
                  <div class="testimonial bg-white rounded shadow-sm text-center p-4">
                    <p class="text-3">“Very reliable service, Quickai can be blindly trusted with our info
                      I have been using this site to top up my mobile account and the service is as I said before reliable and trustworthy”</p>
                    <span class="text-warning"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></span> <span class="d-block font-weight-500">Mauri Lindberg from Australia</span> </div>
                </div>
              </div>
              <div class="text-center mt-4"><a href="#" class="btn-link text-4">See more people review<i class="fas fa-chevron-right text-2 ml-2"></i></a></div>
            </div>
          </section>
          
          <section class="section bg-white">
            <div class="container my-sm-5">
              <h2 class="text-9 text-center">Valid for 120 Countries</h2>
              <p class="lead text-center mb-5">350+ Operators, Including</p>
              <div class="row">
                <div class="col-12 text-center"> <img class="img-fluid" src="images/world-map.png" /> </div>
                <div class="col-lg-9 mx-auto mt-5">
                  <div class="owl-carousel owl-theme d-flex justify-content-center" data-autoplay="true" data-loop="true" data-margin="40" data-items-xs="4" data-items-sm="5" data-items-md="5" data-items-lg="7">
                  {/* <ReactOwlCarousel  className='owl-theme' loop margin={10} nav> */}
                    <div className="item"><a href="#"><img className="img-fluid rounded-circle border" src="images/brands/operator/operator-1.png" alt="operator 1" /></a></div>
                    <div className="item"><a href="#"><img className="img-fluid rounded-circle border" src="images/brands/operator/operator-2.png" alt="operator 2" /></a></div>
                    <div className="item"><a href="#"><img className="img-fluid rounded-circle border" src="images/brands/operator/operator-3.png" alt="operator 3" /></a></div>
                    <div className="item"><a href="#"><img className="img-fluid rounded-circle border" src="images/brands/operator/operator-4.png" alt="operator 4" /></a></div>
                    <div className="item"><a href="#"><img className="img-fluid rounded-circle border" src="images/brands/operator/operator-5.png" alt="operator 5" /></a></div>
                    <div className="item"><a href="#"><img className="img-fluid rounded-circle border" src="images/brands/operator/operator-6.png" alt="operator 6" /></a></div>
                    <div className="item"><a href="#"><img className="img-fluid rounded-circle border" src="images/brands/operator/operator-7.png" alt="operator 7" /></a></div>
                    <div className="item"><a href="#"><img className="img-fluid rounded-circle border" src="images/brands/operator/operator-2.png" alt="operator 2" /></a></div>
                  {/* </ReactOwlCarousel > */}
                    
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section class="section pb-0">
            <div class="container">
              <div class="row">
                <div class="col-md-12 col-lg-9 col-xl-8 mx-auto">
                  <div class="row">
                    <div class="col-md-5 text-center align-bottom order-1 order-md-0"> <img class="img-fluid" alt="" src="images/app-mobile-3.png" /> </div>
                    <div class="col-md-7 my-auto order-0 order-md-1 text-center text-md-left">
                      <h2 class="text-9">Get the app</h2>
                      <p class="text-4">Download our app for the fastest, most convenient way to send mobile top-up online.</p>
                      <div class="pt-2 mb-4 mb-md-0"> <a class="mr-3" href=""><img class="img-fluid" alt="" src="images/app-store.png" /></a><a href=""><img class="img-fluid" alt="" src="images/google-play-store.png" /></a> </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  )
}
