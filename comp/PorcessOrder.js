import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PaymentTab from './PaymentTab';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';

const steps = ['Order', 'Summary', 'Payment', 'Done'];



export default function PorcessOrder() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [ativeCollaps, setAtiveCollaps] = React.useState('');
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
  const changeCollaps=(value)=>{
    // if(ativeCollaps && ativeCollaps == value  ){
    //   setAtiveCollaps('')
    // }else{
      
    // }
    setAtiveCollaps(value)
    
  }

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
            
          );
        })}
      </Stepper>
      <React.Fragment>
        <TabPanel value={activeStep} index={0}>
          <div className="col-md-10 col-lg-8 mx-auto mt-5">
            <p className="text-4">Enter the receiver mobile number</p>
            <form id="mobileTopup" method="post">
              <div className="row no-gutters search-input-2 mb-4">
                <div className="col-lg-9 col-xl-10 form-group">
                  <IntlTelInput
                    containerClassName="intl-tel-input"
                    inputClassName="form-control"
                  />
                  {/* <input type="text" className="form-control shadow form-control-lg" id="mobilenumber" required="" placeholder="Enter Mobile Number" /> */}
                </div>
                <div className="col-lg-3 col-xl-2 form-group">
                  <button className="btn btn-primary shadow btn-block btn-lg" type="submit"><i className="fas fa-arrow-right"></i></button>
                </div>
              </div>
              </form>
                <div className="accordion accordion-alternate" id="accordionDefault">
            
            <div className="card">
              <div className="card-header" id="headingTwo">
                <h5 className="mb-0"> <a onClick={()=>{changeCollaps(0)}} className="pointer collapsed text-4" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Operator Detected (Vodafone)</a> </h5>
              </div>
              <TabPanel value={ativeCollaps} index={0}>
                <div id="collapseTwo" className="" aria-labelledby="headingTwo" data-parent="#accordionDefault">
                  <div className="card-body pt-4">
                    <div className="row operator-selection">
                      <div className="col-4 col-sm-3 col-lg-2 mb-4">
                        <div className="custom-radio">
                          <input id="operator1" name="operatorSelection" className="custom-control-input" required="" type="radio" />
                          <label className="custom-control-label" for="operator1"><img className="img-fluid rounded-circle border" src="images/brands/operator/operator-1.png" alt="operator 1" /></label>
                        </div>
                      </div>
                      <div className="col-4 col-sm-3 col-lg-2 mb-4">
                        <div className="custom-radio">
                          <input id="operator2" name="operatorSelection" className="custom-control-input" required="" type="radio" />
                          <label className="custom-control-label" for="operator2"><img className="img-fluid rounded-circle border" src="images/brands/operator/operator-2.png" alt="operator 2" /></label>
                        </div>
                      </div>
                      
                      <div className="col-4 col-sm-3 col-lg-2 mb-4">
                        <div className="custom-radio">
                          <input id="operator3" name="operatorSelection" className="custom-control-input" required="" type="radio" />
                          <label className="custom-control-label" for="operator3"><img className="img-fluid rounded-circle border" src="images/brands/operator/operator-3.png" alt="operator 3" /></label>
                        </div>
                      </div>
                      
                      <div className="col-4 col-sm-3 col-lg-2 mb-4">
                        <div className="custom-radio">
                          <input id="operator4" name="operatorSelection" className="custom-control-input" required="" type="radio" />
                          <label className="custom-control-label" for="operator4"><img className="img-fluid rounded-circle border" src="images/brands/operator/operator-4.png" alt="operator 4" /></label>
                        </div>
                      </div>
                      
                      <div className="col-4 col-sm-3 col-lg-2 mb-4">
                        <div className="custom-radio">
                          <input id="operator5" name="operatorSelection" className="custom-control-input" required="" type="radio"/>
                          <label className="custom-control-label" for="operator5"><img className="img-fluid rounded-circle border" src="images/brands/operator/operator-5.png" alt="operator 5" /></label>
                        </div>
                      </div>
                      
                      <div className="col-4 col-sm-3 col-lg-2 mb-4">
                        <div className="custom-radio">
                          <input id="operator6" name="operatorSelection" className="custom-control-input" checked="" required="" type="radio" />
                          <label className="custom-control-label" for="operator6"><img className="img-fluid rounded-circle border" src="images/brands/operator/operator-6.png" alt="operator 6" /></label>
                        </div>
                      </div>
                      
                      <div className="col-4 col-sm-3 col-lg-2 mb-4">
                        <div className="custom-radio">
                          <input id="operator7" name="operatorSelection" className="custom-control-input" required="" type="radio" />
                          <label className="custom-control-label" for="operator7" ><img className="img-fluid rounded-circle border" src="images/brands/operator/operator-7.png" alt="operator 7" /></label>
                        </div>
                      </div>
              
                    </div>
                  </div>
                </div>
              </TabPanel>
              
            </div>
            
            <div className="card">
              <div className="card-header" id="headingThree">
                <h5 className="mb-0"> <a onClick={()=>{changeCollaps(1)}}  className="pointer collapsed text-4" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Select Top-up (5.10 USD)</a> </h5>
              </div>
              <TabPanel value={ativeCollaps} index={1}>
              <div id="collapseThree" className="" aria-labelledby="headingThree" data-parent="#accordionDefault">
                <div className="card-body pt-4">
                  <div className="row">
                    <div className="col-sm-6 col-md-4 mb-4">
                    <div className="bg-white border rounded text-center p-3">
                      <h5 className="card-title text-5 font-weight-500 mb-4 mt-2">3.98 USD</h5>
                      <hr className="mx-n3" />
                    <p className="mb-0 text-3">199.00 INR</p>
                    <p className="mb-3 text-black-50">Mobile Top Up</p>
                    <button className="btn btn-sm btn-block btn-outline-primary shadow-none stretched-link" type="submit">Choose</button>
                    </div>
                        </div>
                    <div className="col-sm-6 col-md-4 mb-4">
                    <div className="bg-white border rounded text-center p-3">
                      <h5 className="card-title text-5 font-weight-500 mb-4 mt-2">4.90 USD</h5>
                      <hr className="mx-n3" />
                    <p className="mb-0 text-3">245.00 INR</p>
                    <p className="mb-3 text-black-50">Mobile Top Up</p>
                    <button className="btn btn-sm btn-block btn-outline-primary shadow-none stretched-link" type="submit">Choose</button>
                    </div>
                        </div>
                    <div className="col-sm-6 col-md-4 mb-4">
                    <div className="bg-white border rounded text-center border-success p-3">
                      <h5 className="card-title text-5 font-weight-500 mb-4 mt-2">5.10 USD</h5>
                      <hr className="mx-n3" />
                    <p className="mb-0 text-3">255.00 INR</p>
                    <p className="mb-3 text-black-50">Mobile Top Up</p>
                    <button className="btn btn-sm btn-block btn-outline-primary shadow-none stretched-link" type="submit">Choose</button>
                    </div>
                        </div>
                    <div className="col-sm-6 col-md-4 mb-4">
                    <div className="bg-white border rounded text-center p-3">
                      <h5 className="card-title text-5 font-weight-500 mb-4 mt-2">6.98 USD</h5>
                      <hr className="mx-n3" />
                    <p className="mb-0 text-3">349.00 INR</p>
                    <p className="mb-3 text-black-50">Mobile Top Up</p>
                    <button className="btn btn-sm btn-block btn-outline-primary shadow-none stretched-link" type="submit">Choose</button>
                    </div>
                        </div>
                    <div className="col-sm-6 col-md-4 mb-4">
                    <div className="bg-white border rounded text-center p-3">
                      <h5 className="card-title text-5 font-weight-500 mb-4 mt-2">10.22 USD</h5>
                      <hr className="mx-n3" />
                    <p className="mb-0 text-3">511.00 INR</p>
                    <p className="mb-3 text-black-50">Mobile Top Up</p>
                    <button className="btn btn-sm btn-block btn-outline-primary shadow-none stretched-link" type="submit">Choose</button>
                    </div>
                        </div>
                    <div className="col-sm-6 col-md-4 mb-4">
                    <div className="bg-white border rounded text-center p-3">
                      <h5 className="card-title text-5 font-weight-500 mb-4 mt-2">20.00 USD</h5>
                      <hr className="mx-n3" />
                    <p className="mb-0 text-3">1000.00 INR</p>
                    <p className="mb-3 text-black-50">Mobile Top Up</p>
                    <button className="btn btn-sm btn-block btn-outline-primary shadow-none stretched-link" type="submit">Choose</button>
                    </div>
                        </div>
                  </div>
                  <div className="text-center"><a href="#" className="btn-link text-3">See more Top Up<i className="fas fa-chevron-right text-2 ml-2"></i></a></div>
                </div>
              </div>
              </TabPanel>
              
            </div>
            
          </div>
        <p className="text-center mt-4 mb-0"><a onClick={()=>{setActiveStep(1)}}  className=" pointer btn btn-primary">Proceesd to checkout</a></p>
          
          </div>
        </TabPanel>
        <TabPanel value={activeStep} index={1}>
          <div class="col-lg-12 text-center mt-5">
            <h2 class="text-8">Order Summary</h2>
            <p class="lead">Confirm recharge details</p>
          </div>
          <div class="col-md-8 col-lg-6 col-xl-5 mx-auto">
            <div class="bg-white shadow-sm rounded p-3 p-sm-4 mb-0 mb-sm-4">
              <div class="row">
                <p class="col-sm text-muted mb-0 mb-sm-3">Mobile Number:</p>
                <p class="col-sm text-sm-right font-weight-500">(+91) 9898989898</p>
              </div>            
              <div class="row">
                <p class="col-sm text-muted mb-0 mb-sm-3">Operator/Circle:</p>
                <p class="col-sm text-sm-right font-weight-500">Vodafone | Gujarat</p>
              </div>
              <div class="row">
                <p class="col-sm text-muted mb-0 mb-sm-3">Plan:</p>
                <p class="col-sm text-sm-right font-weight-500">Mobile top-up</p>
              </div>
              <div class="row">
                <p class="col-sm text-muted mb-0 mb-sm-3">Validity:</p>
                <p class="col-sm text-sm-right font-weight-500">Talktime</p>
              </div>
              <div class="row">
                <p class="col-sm text-muted mb-0 mb-sm-3">Amount:</p>
                <p class="col-sm text-sm-right font-weight-500">$150</p>
              </div>
              <div class="row">
                <p class="col-12 text-muted mb-0">Plan Description:</p>
                <p class="col-12 text-1">Local calls free & STD calls free & Roaming Incoming & Outgoing calls free & 300 Local & National SMS & 1 GB 3G/4G Data & Data Validity 28 day(s) & For 3G/4G user - T&C apply</p>
              </div>
              
              
              <div class="bg-light-4 rounded p-3">
                <div class="row">
                  <div class="col-sm text-3 font-weight-600">Payment Amount</div>
                  <div class="col-sm text-sm-right text-5 font-weight-500">$150</div>
                </div>
              </div>
              
              <p class="text-center my-4"><a class="btn-link" data-toggle="collapse" href="#couponCode" aria-expanded="false" aria-controls="couponCode">Apply a Coupon Code</a></p>
              <div id="couponCode" class="bg-light-3 p-4 rounded collapse">
              <h3 class="text-4">Coupon Code</h3>
              <div class="input-group form-group mb-0">
                  <input class="form-control" placeholder="Coupon Code" aria-label="Promo Code" type="text" />
                  <span class="input-group-append">
                  <button class="btn btn-secondary" type="submit">APPLY</button>
                  </span> </div>
              </div>
              
              
              <p class="mt-4 mb-0" ><a onClick={()=>{setActiveStep(2)}} class="pointer btn btn-primary btn-block" style={{width:'100%'}}>Make Payment</a></p>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={activeStep} index={2}>
          <div class="col-lg-12 text-center mt-5">
            <h2 class="text-8">Select a Payment Mode</h2>
          </div>
          <div class="col-lg-11 col-xl-9 mx-auto mt-3">
            <div class="bg-white shadow-sm rounded p-4">
              <div class="row">
                <div class="col-md-7 col-lg-7 order-1 order-md-0">
                  {/* <ul class="nav nav-tabs mb-4 nav-fill" id="myTab" role="tablist">
                    <li class="nav-item"> <a class="nav-link active" id="first-tab" data-toggle="tab" href="#firstTab" role="tab" aria-controls="firstTab" aria-selected="true">Credit/Debit Cards</a> </li>
                    <li class="nav-item"> <a class="nav-link" id="second-tab" data-toggle="tab" href="#secondTab" role="tab" aria-controls="secondTab" aria-selected="false">PayPal</a> </li>
                  </ul> */}
                  
                  <div class="tab-content my-3" id="myTabContentVertical"> 
                  <PaymentTab  handleClick={()=>{setActiveStep(3)}}/>
                  </div>
                </div>
                <div class="col-md-5 col-lg-5 order-0 order-md-1"> 
                  <div class="bg-light-2 rounded p-4 mb-4">
                    <h3 class="text-4 mb-4">Payable Amount</h3>
                    <ul class="list-unstyled">
                      <li class="mb-2">Amount <span class="float-right text-4 font-weight-500 text-dark">$150</span></li>
                      <li class="mb-2">Discount <span class="text-success">(10% Off!)</span> <span class="float-right text-4 font-weight-500 text-dark">-$15</span></li>
                    </ul>
                    <hr/>
                    <div class="text-dark text-4 font-weight-500 py-1"> Total Amount<span class="float-right text-7">$135</span></div>
                  </div>
                  <div class="bg-light-2 rounded p-4 d-none d-md-block">
                    <h3 class="text-4 mb-3">We value your Privacy.</h3>
                    <p class="mb-0">We will not sell or distribute your information. Read our <a href="#">Privacy Policy</a>.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={activeStep} index={3}>
          <div class="col-lg-12 text-center mt-5">
            <p class="text-success text-16 line-height-07"><i class="fas fa-check-circle"></i></p>
              <h2 class="text-8">Recharge Successful</h2>
              <p class="lead">We are processing the same and you will be notified via email.</p>
          </div>
          <div class="col-md-8 col-lg-6 col-xl-5 mx-auto">
            <div class="bg-white shadow-sm rounded p-3 p-sm-4 mb-4">
              <div class="row">
                <div class="col-sm text-muted">Transactions ID</div>
                <div class="col-sm text-sm-right font-weight-600">PHDF173076359</div>
              </div>            
              <hr />
              <div class="row">
                <div class="col-sm text-muted">Date</div>
                <div class="col-sm text-sm-right font-weight-600">06-Feb-2019</div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm text-muted">Mode of Payment</div>
                <div class="col-sm text-sm-right font-weight-600">Credit Card</div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm text-muted">Transaction Status</div>
                <div class="col-sm text-sm-right font-weight-600 text-success">Success</div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm text-muted">Customer Name</div>
                <div class="col-sm text-sm-right font-weight-600">Johne Cary</div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm text-muted">Mobile No</div>
                <div class="col-sm text-sm-right font-weight-600">(+91) 9898989898</div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm text-muted">Subject</div>
                <div class="col-sm text-sm-right font-weight-600">Mobile Recharge</div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm text-muted">Payment Amount</div>
                <div class="col-sm text-sm-right text-6 font-weight-500">$135</div>
              </div>
            </div>
        
            <div class="text-center">
              <a href="#" class="btn-link text-muted mx-3 my-2 align-items-center d-inline-flex"><span class="text-5 mr-2"><i class="far fa-file-pdf"></i></span>Save as PDF</a>
              <a href="#" class="btn-link text-muted mx-3 my-2 align-items-center d-inline-flex"><span class="text-5 mr-2"><i class="fas fa-print"></i></span>Print Receipt</a>
              <a href="#" class="btn-link text-muted mx-3 my-2 align-items-center d-inline-flex"><span class="text-5 mr-2"><i class="far fa-envelope"></i></span>Email Receipt</a>
              <p class="mt-4 mb-0"><span onClick={()=>{setActiveStep(0)}}  className="btn btn-primary">Make another Recharge</span></p>
            </div>
          </div>
        </TabPanel>
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />

          <Button onClick={handleNext}>
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Box>
      </React.Fragment>
    </Box>
  );
}


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}