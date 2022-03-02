import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function PaymentTab(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue)
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab className="nav-item" label="Credit/Debit Card" {...a11yProps(0)} />
          <Tab className="nav-item" label="PayPal" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="tab-pane fade show active" id="firstTab" role="tabpanel" aria-labelledby="first-tab">
          <h3 className="text-4 mb-4">Enter Card Details</h3>
          <form id="payment" method="post">
            <div className="form-group">
              <label for="cardNumber">Enter Debit / Credit Card Number</label>
              <input type="text" className="form-control" data-bv-field="cardnumber" id="cardNumber" required="" placeholder="Card Number" />
            </div>
            <div className="form-row row">
              <div className="col-lg-4">
                <div className="form-group">
                  <label for="expiryMonth">Expiry Month</label>
                  <select id="expiryMonth" className="custom-select form-select" required="">
                    <option value="">Expiry Month</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="1">April</option>
                    <option value="1">May</option>
                    <option value="1">June</option>
                    <option value="1">July</option>
                    <option value="1">August</option>
                    <option value="1">September</option>
                    <option value="1">October</option>
                    <option value="1">November</option>
                    <option value="1">December</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label for="expiryYear">Expiry Year</label>
                  <select id="expiryYear" className="custom-select form-select" required="">
                    <option value="">Expiry Year</option>
                    <option>2018</option>
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                    <option>2026</option>
                    <option>2027</option>
                    <option>2028</option>
                    <option>2029</option>
                    <option>2030</option>
                    <option>2031</option>
                    <option>2032</option>
                    <option>2033</option>
                    <option>2034</option>
                    <option>2035</option>
                    <option>2036</option>
                    <option>2037</option>
                    <option>2038</option>
                    <option>2039</option>
                    <option>2040</option>
                    <option>2041</option>
                    <option>2042</option>
                    <option>2043</option>
                    <option>2044</option>
                    <option>2045</option>
                    <option>2046</option>
                    <option>2047</option>
                    <option>2048</option>
                    <option>2049</option>
                    <option>2050</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label for="cvvNumber">CVV</label>
                  <input type="text" className="form-control" data-bv-field="cvvnumber" id="cvvNumber" required="" placeholder="CVV Number" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label for="cardHolderName">Card Holder Name</label>
              <input type="text" className="form-control" data-bv-field="cardholdername" id="cardHolderName" required="" placeholder="Card Holder Name" />
            </div>
            <div className="form-group custom-control custom-checkbox">
              <input id="save-card" name="savecard" className="custom-control-input" type="checkbox" />
              <label className="custom-control-label" for="save-card">Save my card Details.</label>
            </div>
            <sapn onClick={()=>{props.handleClick()}} className="btn btn-primary btn-block"  style={{width:'100%'}}>Proceed to Pay $135</sapn>
          </form>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="tab-pane fade show active" id="secondTab" role="tabpanel" aria-labelledby="second-tab"> <img className="img-fluid" src="images/paypal-logo.png" alt="Paypal Logo" title="Pay easily, fast and secure with PayPal." />
          <p className="lead">Pay easily, fast and secure with PayPal.</p>
          <p className="text-info mb-4"><i className="fas fa-info-circle"></i> You will be redirected to PayPal to complete your payment securely.</p>
          <a className="btn btn-primary btn-block d-flex align-items-center justify-content-center" href="recharge-payment-success.html"><i className="fab fa-paypal fa-2x mr-2"></i> Pay via PayPal</a> 
        </div>
      </TabPanel>
      
    </Box>
  );
}
