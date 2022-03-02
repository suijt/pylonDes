import Head from 'next/head'
import Image from 'next/image'
import Layout from '../comp/layout'
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import countryList from 'react-select-country-list'
import Select, { components } from "react-select";
import { useMemo, useState } from 'react'

export function CountryFlag(props) {
  return (
    <span
      className={"flag-icon flag-icon-" + props.code}
      style={{ fontSize: props.size || "20px" }}
    />
  );
}
export const CountryFlagSelectOption = (props) => {
  return (
    <components.Option {...props}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <CountryFlag size={props.flagSize} code={props.value.toLowerCase()} />
        {props.label}
      </div>
    </components.Option>
  );
};

export const CountryFlagValueContainer = ({ children, ...props }) => {
  const code = (props.hasValue && props.getValue()[0].value) || false;

  return (
    <div style={{ display: "flex", flexGrow: 1 }}>
      {(code && <CountryFlag code={code.toLowerCase()} />) || null}
      <components.ValueContainer {...props}>
        {children}
      </components.ValueContainer>
    </div>
  );
};


export default function Home() {
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }
  return (
    <>
      <Layout>
        <div id="content">
          <div className="hero-wrap py-2 py-md-3 py-lg-5">
            <div className="hero-mask opacity-9 bg-white"></div>
            <div className="hero-bg hero-bg-scroll" style={{backgroundImage:"url('images/bg/image-6.jpg')"}}></div>
            <div className="hero-content py-3 py-lg-5 my-3 my-md-5">
              <div className="container my-5 py-4">
                <h2 className="text-14 text-center font-weight-600 mb-4">Send mobile top-up Online</h2>
                <p className="text-5 text-center mb-4 mb-md-5">Send credit to your family and friends anywhere in the world!</p>
                <form id="mobileTopup" method="post">
                  <div className="row justify-content-center">
                    <div className="col-sm-10 col-lg-8 col-xl-9">
                      <div className="row no-gutters search-input-2">
                      
                        <div className="col-lg-9 col-xl-10 form-group ">
                        {/* <IntlTelInput
                          containerClassName="intl-tel-input"
                          inputClassName="form-control"
                        /> */}

                          {/* <input type="tel" className="form-control shadow form-control-lg" id="mobilenumber" required="" placeholder="Enter Mobile Number" /> */}
                          <Select 
                          className={ "is-invalid form-add-input form-group height"}
                          options={options}
                          value={value} 
                          onChange={changeHandler}
                          components={{
                            Option: CountryFlagSelectOption,
                            ValueContainer: CountryFlagValueContainer
                          }}
                          />
                        </div>
                        <div className="col-lg-3 col-xl-2 form-group">
                          <a className="btn btn-primary shadow btn-block btn-lg searchbtn" href="#"><i className="fas fa-arrow-right"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          <section className="section bg-white">
            <div className="container my-sm-5">
              <h2 className="text-9 text-center">How does it work?</h2>
              <p className="lead text-center mb-5">Send a top-up in easy steps.</p>
              <div className="row">
                <div className="col-md-4">
                  <div className="featured-box style-4">
                    <div className="featured-box-icon bg-light-2 text-primary shadow-sm rounded-circle"> <i className="fas fa-mobile-alt"></i> </div>
                    <h3 className="text-5 font-weight-400 mb-3">Enter Mobile Number</h3>
                    <p className="text-3">Select destination from the list of countries. then, Enter the mobile number in which you want to send the top-up online.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="featured-box style-4">
                    <div className="featured-box-icon bg-light-2 text-primary shadow-sm rounded-circle"> <i className="fas fa-location-arrow"></i> </div>
                    <h3 className="text-5 font-weight-400 mb-3">Select Top-Up Amount</h3>
                    <p className="text-3">Review all top-up amounts available online and choose a mobile top-up amount to send to friends or family.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="featured-box style-4">
                    <div className="featured-box-icon bg-light-2 text-primary shadow-sm rounded-circle"> <i className="fas fa-money-check-alt"></i> </div>
                    <h3 className="text-5 font-weight-400 mb-3">Confirm your payment</h3>
                    <p className="text-3">Make a payment using our secure online payment process. Then, your top-up will be sent almost instantly.</p>
                  </div>
                </div>
              </div>
              <div className="text-center pt-5"> <a href="#" className="btn btn-outline-primary shadow-none">Send Top-up</a> </div>
            </div>
          </section>

          <section className="section">
            <div className="container my-sm-5">
              <h2 className="text-9 text-center">What people are saying about us</h2>
              <p className="lead text-center mb-5">Send a top-up experience people love to talk about</p>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="testimonial bg-white rounded shadow-sm text-center p-4">
                    <p className="text-3">“Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure.”</p>
                    <span className="text-warning"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span> <span className="d-block font-weight-500">Jay Shah from India</span> </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="testimonial bg-white rounded shadow-sm text-center p-4">
                    <p className="text-3">“ Discovered it just recently; very easy, quick and useful service. I would def. recommend it. text of the printing and typesetting industry.”</p>
                    <span className="text-warning"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span> <span className="d-block font-weight-500">Dennis Jacques from USA</span> </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="testimonial bg-white rounded shadow-sm text-center p-4">
                    <p className="text-3">“Quickai is very easy to use and transfers funds quickly. simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et.”</p>
                    <span className="text-warning"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span> <span className="d-block font-weight-500">Chris Tom from UK</span> </div>
                </div>
                <div className="col-md-6">
                  <div className="testimonial bg-white rounded shadow-sm text-center p-4">
                    <p className="text-3">“Very reliable service, Quickai can be blindly trusted with our info
                      I have been using this site to top up my mobile account and the service is as I said before reliable and trustworthy”</p>
                    <span className="text-warning"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i></span> <span className="d-block font-weight-500">Mauri Lindberg from Australia</span> </div>
                </div>
              </div>
              <div className="text-center mt-4"><a href="#" className="btn-link text-4">See more people review<i className="fas fa-chevron-right text-2 ml-2"></i></a></div>
            </div>
          </section>
          
          <section className="section bg-white">
            <div className="container my-sm-5">
              <h2 className="text-9 text-center">Valid for 120 Countries</h2>
              <p className="lead text-center mb-5">350+ Operators, Including</p>
              <div className="row">
                <div className="col-12 text-center"> <img className="img-fluid" src="images/world-map.png" /> </div>
                <div className="col-lg-9 mx-auto mt-5">
                  <div className="owl-carousel owl-theme d-flex justify-content-center" data-autoplay="true" data-loop="true" data-margin="40" data-items-xs="4" data-items-sm="5" data-items-md="5" data-items-lg="7">
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
          
          <section className="section pb-0">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-9 col-xl-8 mx-auto">
                  <div className="row">
                    <div className="col-md-5 text-center align-bottom order-1 order-md-0"> <img className="img-fluid" alt="" src="images/app-mobile-3.png" /> </div>
                    <div className="col-md-7 my-auto order-0 order-md-1 text-center text-md-left">
                      <h2 className="text-9">Get the app</h2>
                      <p className="text-4">Download our app for the fastest, most convenient way to send mobile top-up online.</p>
                      <div className="pt-2 mb-4 mb-md-0"> <a className="mr-3" href=""><img className="img-fluid" alt="" src="images/app-store.png" /></a><a href=""><img className="img-fluid" alt="" src="images/google-play-store.png" /></a> </div>
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
