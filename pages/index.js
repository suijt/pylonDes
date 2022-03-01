import Head from 'next/head'
import Image from 'next/image'
import Layout from '../comp/layout'
// import intlTelInput from 'intl-tel-input';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';

export default function Home() {
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
                      
                        <div class="col-lg-9 col-xl-10 form-group p-0">
                        {/* <IntlTelInput
                          containerClassName="intl-tel-input"
                          inputClassName="form-control"
                        /> */}
                          <select className="custom-select form-select m-0" id="inputCountry" name="country_id">
                            <option value=""> --- Please Select --- </option>
                            <option value="244">Aaland Islands</option>
                            <option value="1">Afghanistan</option>
                            <option value="2">Albania</option>
                            <option value="3">Algeria</option>
                            <option value="4">American Samoa</option>
                            <option value="5">Andorra</option>
                            <option value="6">Angola</option>
                            <option value="7">Anguilla</option>
                            <option value="8">Antarctica</option>
                            <option value="9">Antigua and Barbuda</option>
                            <option value="10">Argentina</option>
                            <option value="11">Armenia</option>
                            <option value="12">Aruba</option>
                            <option value="252">Ascension Island (British)</option>
                            <option value="13">Australia</option>
                            <option value="14">Austria</option>
                            <option value="15">Azerbaijan</option>
                            <option value="16">Bahamas</option>
                            <option value="17">Bahrain</option>
                            <option value="18">Bangladesh</option>
                            <option value="19">Barbados</option>
                            <option value="20">Belarus</option>
                            <option value="21">Belgium</option>
                            <option value="22">Belize</option>
                            <option value="23">Benin</option>
                            <option value="24">Bermuda</option>
                            <option value="25">Bhutan</option>
                            <option value="26">Bolivia</option>
                            <option value="245">Bonaire, Sint Eustatius and Saba</option>
                            <option value="27">Bosnia and Herzegovina</option>
                            <option value="28">Botswana</option>
                            <option value="29">Bouvet Island</option>
                            <option value="30">Brazil</option>
                            <option value="31">British Indian Ocean Territory</option>
                            <option value="32">Brunei Darussalam</option>
                            <option value="33">Bulgaria</option>
                            <option value="34">Burkina Faso</option>
                            <option value="35">Burundi</option>
                            <option value="36">Cambodia</option>
                            <option value="37">Cameroon</option>
                            <option value="38">Canada</option>
                            <option value="251">Canary Islands</option>
                            <option value="39">Cape Verde</option>
                            <option value="40">Cayman Islands</option>
                            <option value="41">Central African Republic</option>
                            <option value="42">Chad</option>
                            <option value="43">Chile</option>
                            <option value="44">China</option>
                            <option value="45">Christmas Island</option>
                            <option value="46">Cocos (Keeling) Islands</option>
                            <option value="47">Colombia</option>
                            <option value="48">Comoros</option>
                            <option value="49">Congo</option>
                            <option value="50">Cook Islands</option>
                            <option value="51">Costa Rica</option>
                            <option value="52">Cote D'Ivoire</option>
                            <option value="53">Croatia</option>
                            <option value="54">Cuba</option>
                            <option value="246">Curacao</option>
                            <option value="55">Cyprus</option>
                            <option value="56">Czech Republic</option>
                            <option value="237">Democratic Republic of Congo</option>
                            <option value="57">Denmark</option>
                            <option value="58">Djibouti</option>
                            <option value="59">Dominica</option>
                            <option value="60">Dominican Republic</option>
                            <option value="61">East Timor</option>
                            <option value="62">Ecuador</option>
                            <option value="63">Egypt</option>
                            <option value="64">El Salvador</option>
                            <option value="65">Equatorial Guinea</option>
                            <option value="66">Eritrea</option>
                            <option value="67">Estonia</option>
                            <option value="68">Ethiopia</option>
                            <option value="69">Falkland Islands (Malvinas)</option>
                            <option value="70">Faroe Islands</option>
                            <option value="71">Fiji</option>
                            <option value="72">Finland</option>
                            <option value="74">France, Metropolitan</option>
                            <option value="75">French Guiana</option>
                            <option value="76">French Polynesia</option>
                            <option value="77">French Southern Territories</option>
                            <option value="126">FYROM</option>
                            <option value="78">Gabon</option>
                            <option value="79">Gambia</option>
                            <option value="80">Georgia</option>
                            <option value="81">Germany</option>
                            <option value="82">Ghana</option>
                            <option value="83">Gibraltar</option>
                            <option value="84">Greece</option>
                            <option value="85">Greenland</option>
                            <option value="86">Grenada</option>
                            <option value="87">Guadeloupe</option>
                            <option value="88">Guam</option>
                            <option value="89">Guatemala</option>
                            <option value="256">Guernsey</option>
                            <option value="90">Guinea</option>
                            <option value="91">Guinea-Bissau</option>
                            <option value="92">Guyana</option>
                            <option value="93">Haiti</option>
                            <option value="94">Heard and Mc Donald Islands</option>
                            <option value="95">Honduras</option>
                            <option value="96">Hong Kong</option>
                            <option value="97">Hungary</option>
                            <option value="98">Iceland</option>
                            <option value="99">India</option>
                            <option value="100">Indonesia</option>
                            <option value="101">Iran (Islamic Republic of)</option>
                            <option value="102">Iraq</option>
                            <option value="103">Ireland</option>
                            <option value="254">Isle of Man</option>
                            <option value="104">Israel</option>
                            <option value="105">Italy</option>
                            <option value="106">Jamaica</option>
                            <option value="107">Japan</option>
                            <option value="257">Jersey</option>
                            <option value="108">Jordan</option>
                            <option value="109">Kazakhstan</option>
                            <option value="110">Kenya</option>
                            <option value="111">Kiribati</option>
                            <option value="113">Korea, Republic of</option>
                            <option value="253">Kosovo, Republic of</option>
                            <option value="114">Kuwait</option>
                            <option value="115">Kyrgyzstan</option>
                            <option value="116">Lao People's Democratic Republic</option>
                            <option value="117">Latvia</option>
                            <option value="118">Lebanon</option>
                            <option value="119">Lesotho</option>
                            <option value="120">Liberia</option>
                            <option value="121">Libyan Arab Jamahiriya</option>
                            <option value="122">Liechtenstein</option>
                            <option value="123">Lithuania</option>
                            <option value="124">Luxembourg</option>
                            <option value="125">Macau</option>
                            <option value="127">Madagascar</option>
                            <option value="128">Malawi</option>
                            <option value="129">Malaysia</option>
                            <option value="130">Maldives</option>
                            <option value="131">Mali</option>
                            <option value="132">Malta</option>
                            <option value="133">Marshall Islands</option>
                            <option value="134">Martinique</option>
                            <option value="135">Mauritania</option>
                            <option value="136">Mauritius</option>
                            <option value="137">Mayotte</option>
                            <option value="138">Mexico</option>
                            <option value="139">Micronesia, Federated States of</option>
                            <option value="140">Moldova, Republic of</option>
                            <option value="141">Monaco</option>
                            <option value="142">Mongolia</option>
                            <option value="242">Montenegro</option>
                            <option value="143">Montserrat</option>
                            <option value="144">Morocco</option>
                            <option value="145">Mozambique</option>
                            <option value="146">Myanmar</option>
                            <option value="147">Namibia</option>
                            <option value="148">Nauru</option>
                            <option value="149">Nepal</option>
                            <option value="150">Netherlands</option>
                            <option value="151">Netherlands Antilles</option>
                            <option value="152">New Caledonia</option>
                            <option value="153">New Zealand</option>
                            <option value="154">Nicaragua</option>
                            <option value="155">Niger</option>
                            <option value="156">Nigeria</option>
                            <option value="157">Niue</option>
                            <option value="158">Norfolk Island</option>
                            <option value="112">North Korea</option>
                            <option value="159">Northern Mariana Islands</option>
                            <option value="160">Norway</option>
                            <option value="161">Oman</option>
                            <option value="162">Pakistan</option>
                            <option value="163">Palau</option>
                            <option value="247">Palestinian Territory, Occupied</option>
                            <option value="164">Panama</option>
                            <option value="165">Papua New Guinea</option>
                            <option value="166">Paraguay</option>
                            <option value="167">Peru</option>
                            <option value="168">Philippines</option>
                            <option value="169">Pitcairn</option>
                            <option value="170">Poland</option>
                            <option value="171">Portugal</option>
                            <option value="172">Puerto Rico</option>
                            <option value="173">Qatar</option>
                            <option value="174">Reunion</option>
                            <option value="175">Romania</option>
                            <option value="176">Russian Federation</option>
                            <option value="177">Rwanda</option>
                            <option value="178">Saint Kitts and Nevis</option>
                            <option value="179">Saint Lucia</option>
                            <option value="180">Saint Vincent and the Grenadines</option>
                            <option value="181">Samoa</option>
                            <option value="182">San Marino</option>
                            <option value="183">Sao Tome and Principe</option>
                            <option value="184">Saudi Arabia</option>
                            <option value="185">Senegal</option>
                            <option value="243">Serbia</option>
                            <option value="186">Seychelles</option>
                            <option value="187">Sierra Leone</option>
                            <option value="188">Singapore</option>
                            <option value="189">Slovak Republic</option>
                            <option value="190">Slovenia</option>
                            <option value="191">Solomon Islands</option>
                            <option value="192">Somalia</option>
                            <option value="193">South Africa</option>
                            <option value="194">South Georgia &amp; South Sandwich Islands</option>
                            <option value="248">South Sudan</option>
                            <option value="195">Spain</option>
                            <option value="196">Sri Lanka</option>
                            <option value="249">St. Barthelemy</option>
                            <option value="197">St. Helena</option>
                            <option value="250">St. Martin (French part)</option>
                            <option value="198">St. Pierre and Miquelon</option>
                            <option value="199">Sudan</option>
                            <option value="200">Suriname</option>
                            <option value="201">Svalbard and Jan Mayen Islands</option>
                            <option value="202">Swaziland</option>
                            <option value="203">Sweden</option>
                            <option value="204">Switzerland</option>
                            <option value="205">Syrian Arab Republic</option>
                            <option value="206">Taiwan</option>
                            <option value="207">Tajikistan</option>
                            <option value="208">Tanzania, United Republic of</option>
                            <option value="209">Thailand</option>
                            <option value="210">Togo</option>
                            <option value="211">Tokelau</option>
                            <option value="212">Tonga</option>
                            <option value="213">Trinidad and Tobago</option>
                            <option value="255">Tristan da Cunha</option>
                            <option value="214">Tunisia</option>
                            <option value="215">Turkey</option>
                            <option value="216">Turkmenistan</option>
                            <option value="217">Turks and Caicos Islands</option>
                            <option value="218">Tuvalu</option>
                            <option value="219">Uganda</option>
                            <option value="220">Ukraine</option>
                            <option value="221">United Arab Emirates</option>
                            <option value="222">United Kingdom</option>
                            <option selected="selected" value="223">United States</option>
                            <option value="224">United States Minor Outlying Islands</option>
                            <option value="225">Uruguay</option>
                            <option value="226">Uzbekistan</option>
                            <option value="227">Vanuatu</option>
                            <option value="228">Vatican City State (Holy See)</option>
                            <option value="229">Venezuela</option>
                            <option value="230">Viet Nam</option>
                            <option value="231">Virgin Islands (British)</option>
                            <option value="232">Virgin Islands (U.S.)</option>
                            <option value="233">Wallis and Futuna Islands</option>
                            <option value="234">Western Sahara</option>
                            <option value="235">Yemen</option>
                            <option value="238">Zambia</option>
                            <option value="239">Zimbabwe</option>
                          </select>
                          {/* <input type="tel" class="form-control shadow form-control-lg" id="mobilenumber" required="" placeholder="Enter Mobile Number" /> */}
                        </div>
                        <div class="col-lg-3 col-xl-2 form-group p-0">
                          <a class="btn btn-primary shadow btn-block btn-lg searchbtn" href="#"><i class="fas fa-arrow-right"></i></a>
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
