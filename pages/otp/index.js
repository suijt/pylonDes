// import 'react-intl-tel-input/dist/main.css';
// import countryList from 'react-select-country-list'
// import Select, { components } from "react-select";
// import { useMemo, useState } from 'react'
// import Layout from '../../comp/layout';
// import React, { Component } from 'react';
// import OtpInput from 'react-otp-input';




// export default function Home() {
//   const [otp, setOTP] = useState('')

//   const changeHandler = value => {
//     setOTP(value)
//   }

//   const handleChange = (otp) =>{
//     console.log(otp)
//     setOTP({ otp })
//   };

//   return (
//     <>
//       <Layout>
//         <div id="content">
//           <div class="container pt-5 pb-4">
//             <div class="row">
//               <div class="col-md-9 col-lg-7 col-xl-5 mx-auto">
//                 <div class="bg-white shadow-md rounded p-3 pt-sm-4 pb-sm-5 px-sm-5">
//                   <h3 class="text-center mt-3 mb-4">Two-Step Verification</h3>
//                   <p class="text-center"><img class="img-fluid" src="images/otp-icon.png" alt="verification"/></p>
//                   <p class="text-muted text-3 text-center">Please enter the OTP (one time password) to verify your account. A Code has been sent to <span class="text-dark text-4">+1*******179</span></p>
//                   <OtpInput
//                     className="otp"
//                     style={{justifyContent: 'space-between'}}
//                     value={otp}
//                     onChange={handleChange}
//                     numInputs={4}
//                     separator={<span>-</span>}
//                   />
                  
//                   <p class="text-2 text-center">Not received your code? <a style={{width: '100%'}} class="btn-link" href="#">Resend code</a></p>
//                   <p class="text-2 text-center mb-0"><a class="btn-link" href="#">Call me</a></p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Layout>
//     </>
//   )
// }



import React, { Component } from 'react';
import OtpInput from 'react-otp-input';
import Layout from '../../comp/layout';

export default class App extends Component {
  state = { otp: '' };

  handleChange = (otp) => this.setState({ otp });

  render() {
    return (
      <Layout>
        <div id="content">
          <div class="container pt-5 pb-4">
            <div class="row">
              <div class="col-md-9 col-lg-7 col-xl-5 mx-auto">
                <div class="bg-white shadow-md rounded p-3 pt-sm-4 pb-sm-5 px-sm-5">
                  <h3 class="text-center mt-3 mb-4">Two-Step Verification</h3>
                  <p class="text-center"><img class="img-fluid" src="images/otp-icon.png" alt="verification"/></p>
                  <p class="text-muted text-3 text-center">Please enter the OTP (one time password) to verify your account. A Code has been sent to <span class="text-dark text-4">+1*******179</span></p>
                  <OtpInput
                    className="otp"
                      value={this.state.otp}
                      onChange={this.handleChange}
                      numInputs={6}
                      separator={<span>-</span>}
                    />
                     <button class="btn btn-primary btn-block shadow-none my-4" style={{width: '100%'}}  type="submit">Verify</button>
                  <p class="text-2 text-center">Not received your code? <a style={{width: '100%'}} class="btn-link" href="#">Resend code</a></p>
                  <p class="text-2 text-center mb-0"><a class="btn-link" href="#">Call me</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      
    );
  }
}
