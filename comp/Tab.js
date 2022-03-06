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

export default function TabPlan() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue)
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs className="tab" value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab className="nav-item" label="Popular" {...a11yProps(0)} />
          <Tab className="nav-item" label="Topup" {...a11yProps(1)} />
          <Tab className="nav-item" label="Special Recharge" {...a11yProps(2)} />
          <Tab className="nav-item" label="Full Talktime" {...a11yProps(3)} />
          <Tab className="nav-item" label="Data" {...a11yProps(4)} />
          <Tab className="nav-item" label="Unlimited Talktime" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <div className="tab-pane fade show active" id="oneTab" role="tabpanel" aria-labelledby="one-tab">
                <div className="row">
          	<div className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card text-center">
              <div className="card-header">
                <h5 className="card-title text-4 mb-0">Talktime</h5>
              </div>
              <div className="card-body">
              <ul className="list-unstyled">
              <li className="mb-3">Talktime $8, 7 D</li>
              <li className="mb-3 text-black-50">Validity 7 Days</li>
              <li><a className="btn-link text-1" data-toggle="modal" data-target="#plan-detail" href="#">More Details</a></li>
              </ul>
              <button className="btn btn-sm btn-block btn-outline-primary text-5 py-1 font-weight-500 shadow-none" type="submit">$ 10</button>
              </div>
              </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                  <div className="card text-center">
              <div className="card-header">
                <h5 className="card-title text-4 mb-0">Talktime</h5>
              </div>
              <div className="card-body">
              <ul className="list-unstyled">
              <li className="mb-3">Talktime Rs. 47 &, 28 D</li>
              <li className="mb-3 text-black-50">Validity 28 Days</li>
              <li><a className="btn-link text-1" data-toggle="modal" data-target="#plan-detail" href="#">More Details</a></li>
              </ul>
              <button className="btn btn-sm btn-block btn-outline-primary text-5 py-1 font-weight-500 shadow-none" type="submit">$ 50</button>
              </div>
              </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                  <div className="card text-center">
              <div className="card-header">
                <h5 className="card-title text-4 mb-0">Talktime</h5>
              </div>
              <div className="card-body">
              <ul className="list-unstyled">
              <li className="mb-3">Local min 92 & 10 SMS, 28 D</li>
              <li className="mb-3 text-black-50">Validity 28 Days</li>
              <li><a className="btn-link text-1" data-toggle="modal" data-target="#plan-detail" href="#">More Details</a></li>
              </ul>
              <button className="btn btn-sm btn-block btn-outline-primary text-5 py-1 font-weight-500 shadow-none" type="submit">$ 100</button>
              </div>
              </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                  <div className="card text-center">
              <div className="card-header bg-secondary">
                <h5 className="card-title text-4 text-white mb-0">Unlimited</h5>
              </div>
              <div className="card-body">
              <ul className="list-unstyled">
              <li className="mb-3">Unlimited Talktime</li>
              <li className="mb-3 text-black-50">Validity 90 Days</li>
              <li><a className="btn-link text-1" data-toggle="modal" data-target="#plan-detail" href="#">More Details</a></li>
              </ul>
              <button className="btn btn-sm btn-block btn-outline-primary text-5 py-1 font-weight-500 shadow-none" type="submit">$ 499</button>
              </div>
              </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                  <div className="card text-center">
              <div className="card-header">
                <h5 className="card-title text-4 mb-0">Talktime</h5>
              </div>
              <div className="card-body">
              <ul className="list-unstyled">
              <li className="mb-3">Talktime $143 & 50 SMS, 60 D</li>
              <li className="mb-3 text-black-50">Validity 60 Days</li>
              <li><a className="btn-link text-1" data-toggle="modal" data-target="#plan-detail" href="#">More Details</a></li>
              </ul>
              <button className="btn btn-sm btn-block btn-outline-primary text-5 py-1 font-weight-500 shadow-none" type="submit">$ 150</button>
              </div>
              </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                  <div className="card text-center">
              <div className="card-header bg-secondary">
                <h5 className="card-title text-4 text-white mb-0">Unlimited</h5>
              </div>
              <div className="card-body">
              <ul className="list-unstyled">
              <li className="mb-3">Unlimited Talktime</li>
              <li className="mb-3 text-black-50">Validity 28 Days</li>
              <li><a className="btn-link text-1" data-toggle="modal" data-target="#plan-detail" href="#">More Details</a></li>
              </ul>
              <button className="btn btn-sm btn-block btn-outline-primary text-5 py-1 font-weight-500 shadow-none" type="submit">$ 199</button>
              </div>
              </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                  <div className="card text-center">
              <div className="card-header">
                <h5 className="card-title text-4 mb-0">Full Talktime</h5>
              </div>
              <div className="card-body">
              <ul className="list-unstyled">
              <li className="mb-3">$220 Full Talktime, 28 D</li>
              <li className="mb-3 text-black-50">Validity 28 Days</li>
              <li><a className="btn-link text-1" data-toggle="modal" data-target="#plan-detail" href="#">More Details</a></li>
              </ul>
              <button className="btn btn-sm btn-block btn-outline-primary text-5 py-1 font-weight-500 shadow-none" type="submit">$ 220</button>
              </div>
              </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                  <div className="card text-center">
              <div className="card-header">
                <h5 className="card-title text-4 mb-0">Full Talktime</h5>
              </div>
              <div className="card-body">
              <ul className="list-unstyled">
              <li className="mb-3">Full Talktime $250</li>
              <li className="mb-3 text-black-50">Validity 64 Days</li>
              <li><a className="btn-link text-1" data-toggle="modal" data-target="#plan-detail" href="#">More Details</a></li>
              </ul>
              <button className="btn btn-sm btn-block btn-outline-primary text-5 py-1 font-weight-500 shadow-none" type="submit">$ 250</button>
              </div>
              </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                  <div className="card text-center">
              <div className="card-header bg-secondary">
                <h5 className="card-title text-4 text-white mb-0">Unlimited</h5>
              </div>
              <div className="card-body">
              <ul className="list-unstyled">
              <li className="mb-3">Unlimited Talktime</li>
              <li className="mb-3 text-black-50">Validity 90 Days</li>
              <li><a className="btn-link text-1" data-toggle="modal" data-target="#plan-detail" href="#">More Details</a></li>
              </ul>
              <button className="btn btn-sm btn-block btn-outline-primary text-5 py-1 font-weight-500 shadow-none" type="submit">$ 399</button>
              </div>
              </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                  <div className="card text-center">
              <div className="card-header">
                <h5 className="card-title text-4 mb-0">Full Talktime</h5>
              </div>
              <div className="card-body">
              <ul className="list-unstyled">
              <li className="mb-3">Full Talktime $510, 180 D</li>
              <li className="mb-3 text-black-50">Validity 180 Days</li>
              <li><a className="btn-link text-1" data-toggle="modal" data-target="#plan-detail" href="#">More Details</a></li>
              </ul>
              <button className="btn btn-sm btn-block btn-outline-primary text-5 py-1 font-weight-500 shadow-none" type="submit">$ 501</button>
              </div>
              </div>
                  </div>
                  
                  
                </div>
              </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className="tab-pane fade show active" id="twoTab" role="tabpanel" aria-labelledby="two-tab">
                <div className="row">
          	<div className="col-sm-3 mb-4">
            <div className="card text-center">
        <div className="card-header">
        	<h5 className="card-title text-4 mb-0">Talktime</h5>
        </div>
        <div className="card-body">
        <ul className="list-unstyled">
        <li className="mb-3">Talktime $8, 0 D</li>
        <li className="mb-3 text-black-50">Validity 0 Days</li>
        <li><a className="btn-link text-1" data-toggle="modal" data-target="#plan-detail" href="#">More Details</a></li>
        </ul>
        <button className="btn btn-sm btn-block btn-outline-primary text-5 py-1 font-weight-500 shadow-none" type="submit">$ 10</button>
        </div>
        </div>
            </div>
            <div className="col-sm-3 mb-4">
            <div className="card text-center">
        <div className="card-header">
        	<h5 className="card-title text-4 mb-0">Regular Talktime</h5>
        </div>
        <div className="card-body">
        <ul className="list-unstyled">
        <li className="mb-3">Regular Talktime $38.50</li>
        <li className="mb-3 text-black-50">Validity 0 Days</li>
        <li><a className="btn-link text-1" data-toggle="modal" data-target="#plan-detail" href="#">More Details</a></li>
        </ul>
        <button className="btn btn-sm btn-block btn-outline-primary text-5 py-1 font-weight-500 shadow-none" type="submit">$ 50</button>
        </div>
        </div>
            </div>
            <div className="col-sm-3 mb-4">
            <div className="card text-center">
        <div className="card-header">
        	<h5 className="card-title text-4 mb-0">Full Talktime</h5>
        </div>
        <div className="card-body">
        <ul className="list-unstyled">
        <li className="mb-3">Talktime Rs. 100</li>
        <li className="mb-3 text-black-50">Validity 0 Days</li>
        <li><a className="btn-link text-1" data-toggle="modal" data-target="#plan-detail" href="#">More Details</a></li>
        </ul>
        <button className="btn btn-sm btn-block btn-outline-primary text-5 py-1 font-weight-500 shadow-none" type="submit">$ 100</button>
        </div>
        </div>
            </div>
            
          </div>
              </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className="tab-pane fade show active" id="threeTab" role="tabpanel" aria-labelledby="three-tab">
                <div className="row">
          	<div className="col-sm-3 mb-4">
            <div className="card text-center">
        <div className="card-header">
        	<h5 className="card-title text-4 mb-0">Validity</h5>
        </div>
        <div className="card-body">
        <ul className="list-unstyled">
        <li className="mb-3">Talktime $0</li>
        <li className="mb-3 text-black-50">Validity 1 Days</li>
        <li><a className="btn-link text-1" data-toggle="modal" data-target="#plan-detail" href="#">More Details</a></li>
        </ul>
        <button className="btn btn-sm btn-block btn-outline-primary text-5 py-1 font-weight-500 shadow-none" type="submit">$ 9</button>
        </div>
        </div>
            </div>
            <div className="col-sm-3 mb-4">
            <div className="card text-center">
        <div className="card-header">
        	<h5 className="card-title text-4 mb-0">Talktime</h5>
        </div>
        <div className="card-body">
        <ul className="list-unstyled">
        <li className="mb-3">Talktime Rs. 26 & @ 2.5p/sec</li>
        <li className="mb-3 text-black-50">Validity 28 Days</li>
        <li><a className="btn-link text-1" data-toggle="modal" data-target="#plan-detail" href="#">More Details</a></li>
        </ul>
        <button className="btn btn-sm btn-block btn-outline-primary text-5 py-1 font-weight-500 shadow-none" type="submit">$ 35</button>
        </div>
        </div>
            </div>
            <div className="col-sm-3 mb-4">
            <div className="card text-center">
        <div className="card-header">
        	<h5 className="card-title text-4 mb-0">Talktime</h5>
        </div>
        <div className="card-body">
        <ul className="list-unstyled">
        <li className="mb-3">Talktime Rs. 47 &, 28 D</li>
        <li className="mb-3 text-black-50">Validity 28 Days</li>
        <li><a className="btn-link text-1" data-toggle="modal" data-target="#plan-detail" href="#">More Details</a></li>
        </ul>
        <button className="btn btn-sm btn-block btn-outline-primary text-5 py-1 font-weight-500 shadow-none" type="submit">$ 50</button>
        </div>
        </div>
            </div>
            <div className="col-sm-3 mb-4">
            <div className="card text-center">
        <div className="card-header">
        	<h5 className="card-title text-4 mb-0">Talktime</h5>
        </div>
        <div className="card-body">
        <ul className="list-unstyled">
        <li className="mb-3">Local min 92 & 10 SMS, 28 D</li>
        <li className="mb-3 text-black-50">Validity 28 Days</li>
        <li><a className="btn-link text-1" data-toggle="modal" data-target="#plan-detail" href="#">More Details</a></li>
        </ul>
        <button className="btn btn-sm btn-block btn-outline-primary text-5 py-1 font-weight-500 shadow-none" type="submit">$ 100</button>
        </div>
        </div>
            </div>
            <div className="col-sm-3 mb-4">
            <div className="card text-center">
        <div className="card-header">
        	<h5 className="card-title text-4 mb-0">Talktime</h5>
        </div>
        <div className="card-body">
        <ul className="list-unstyled">
        <li className="mb-3">Talktime $143 & 50 SMS, 60 D</li>
        <li className="mb-3 text-black-50">Validity 60 Days</li>
        <li><a className="btn-link text-1" data-toggle="modal" data-target="#plan-detail" href="#">More Details</a></li>
        </ul>
        <button className="btn btn-sm btn-block btn-outline-primary text-5 py-1 font-weight-500 shadow-none" type="submit">$ 150</button>
        </div>
        </div>
            </div>
            <div className="col-sm-3 mb-4">
            <div className="card text-center">
        <div className="card-header bg-secondary">
        	<h5 className="card-title text-white text-4 mb-0">Unlimited</h5>
        </div>
        <div className="card-body">
        <ul className="list-unstyled">
        <li className="mb-3">Unlimited Talktime</li>
        <li className="mb-3 text-black-50">Validity 28 Days</li>
        <li><a className="btn-link text-1" data-toggle="modal" data-target="#plan-detail" href="#">More Details</a></li>
        </ul>
        <button className="btn btn-sm btn-block btn-outline-primary text-5 py-1 font-weight-500 shadow-none" type="submit">$ 199</button>
        </div>
        </div>
            </div>
            <div className="col-sm-3 mb-4">
            <div className="card text-center">
        <div className="card-header">
        	<h5 className="card-title text-4 mb-0">Full Talktime</h5>
        </div>
        <div className="card-body">
        <ul className="list-unstyled">
        <li className="mb-3">$220 Full Talktime, 28 D</li>
        <li className="mb-3 text-black-50">Validity 28 Days</li>
        <li><a className="btn-link text-1" data-toggle="modal" data-target="#plan-detail" href="#">More Details</a></li>
        </ul>
        <button className="btn btn-sm btn-block btn-outline-primary text-5 py-1 font-weight-500 shadow-none" type="submit">$ 220</button>
        </div>
        </div>
            </div>
            
            
            
            
            
          </div>
              </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div className="tab-pane fade show active" id="fourTab" role="tabpanel" aria-labelledby="four-tab">
                <div className="row">
            <div className="col-sm-3 mb-4">
            <div className="card text-center">
        <div className="card-header">
        	<h5 className="card-title text-4 mb-0">Full Talktime</h5>
        </div>
        <div className="card-body">
        <ul className="list-unstyled">
        <li className="mb-3">$220 Full Talktime, 28 D</li>
        <li className="mb-3 text-black-50">Validity 28 Days</li>
        <li><a className="btn-link text-1" data-toggle="modal" data-target="#plan-detail" href="#">More Details</a></li>
        </ul>
        <button className="btn btn-sm btn-block btn-outline-primary text-5 py-1 font-weight-500 shadow-none" type="submit">$ 220</button>
        </div>
        </div>
            </div>
            <div className="col-sm-3 mb-4">
            <div className="card text-center">
        <div className="card-header">
        	<h5 className="card-title text-4 mb-0">Full Talktime</h5>
        </div>
        <div className="card-body">
        <ul className="list-unstyled">
        <li className="mb-3">Full Talktime $250</li>
        <li className="mb-3 text-black-50">Validity 64 Days</li>
        <li><a className="btn-link text-1" data-toggle="modal" data-target="#plan-detail" href="#">More Details</a></li>
        </ul>
        <button className="btn btn-sm btn-block btn-outline-primary text-5 py-1 font-weight-500 shadow-none" type="submit">$ 250</button>
        </div>
        </div>
            </div>
            <div className="col-sm-3 mb-4">
            <div className="card text-center">
        <div className="card-header">
        	<h5 className="card-title text-4 mb-0">Full Talktime</h5>
        </div>
        <div className="card-body">
        <ul className="list-unstyled">
        <li className="mb-3">Full Talktime $510, 180 D</li>
        <li className="mb-3 text-black-50">Validity 180 Days</li>
        <li><a className="btn-link text-1" data-toggle="modal" data-target="#plan-detail" href="#">More Details</a></li>
        </ul>
        <button className="btn btn-sm btn-block btn-outline-primary text-5 py-1 font-weight-500 shadow-none" type="submit">$ 501</button>
        </div>
        </div>
            </div>
            
          </div>
              </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <div className="tab-pane fade show active" id="fiveTab" role="tabpanel" aria-labelledby="five-tab">
                <div className="row">
            <div className="col-sm-3 mb-4">
            <div className="card text-center">
        <div className="card-header">
        	<h5 className="card-title text-4 mb-0">Data</h5>
        </div>
        <div className="card-body">
        <ul className="list-unstyled">
        <li className="mb-3">500 MB Data</li>
        <li className="mb-3 text-black-50">Validity 14 Days</li>
        <li><a className="btn-link text-1" data-toggle="modal" data-target="#plan-detail" href="#">More Details</a></li>
        </ul>
        <button className="btn btn-sm btn-block btn-outline-primary text-5 py-1 font-weight-500 shadow-none" type="submit">$ 39</button>
        </div>
        </div>
            </div>
            
            <div className="col-sm-3 mb-4">
            <div className="card text-center">
        <div className="card-header">
        	<h5 className="card-title text-4 mb-0">Data</h5>
        </div>
        <div className="card-body">
        <ul className="list-unstyled">
        <li className="mb-3">4.5 GB Data</li>
        <li className="mb-3 text-black-50">Validity 28 Days</li>
        <li><a className="btn-link text-1" data-toggle="modal" data-target="#plan-detail" href="#">More Details</a></li>
        </ul>
        <button className="btn btn-sm btn-block btn-outline-primary text-5 py-1 font-weight-500 shadow-none" type="submit">$ 49</button>
        </div>
        </div>
            </div>
            <div className="col-sm-3 mb-4">
            <div className="card text-center">
        <div className="card-header">
        	<h5 className="card-title text-4 mb-0">Data</h5>
        </div>
        <div className="card-body">
        <ul className="list-unstyled">
        <li className="mb-3">6 GB Data</li>
        <li className="mb-3 text-black-50">Validity 28 Days</li>
        <li><a className="btn-link text-1" data-toggle="modal" data-target="#plan-detail" href="#">More Details</a></li>
        </ul>
        <button className="btn btn-sm btn-block btn-outline-primary text-5 py-1 font-weight-500 shadow-none" type="submit">$ 99</button>
        </div>
        </div>
            </div>
            <div className="col-sm-3 mb-4">
            <div className="card text-center">
        <div className="card-header">
        	<h5 className="card-title text-4 mb-0">Data</h5>
        </div>
        <div className="card-body">
        <ul className="list-unstyled">
        <li className="mb-3">8 GB Data</li>
        <li className="mb-3 text-black-50">Validity 90 Days</li>
        <li><a className="btn-link text-1" data-toggle="modal" data-target="#plan-detail" href="#">More Details</a></li>
        </ul>
        <button className="btn btn-sm btn-block btn-outline-primary text-5 py-1 font-weight-500 shadow-none" type="submit">$ 149</button>
        </div>
        </div>
            </div>
          </div>
              </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <div className="tab-pane fade show active" id="sevenTab" role="tabpanel" aria-labelledby="seven-tab">
                <div className="row">
            <div className="col-sm-3 mb-4">
            <div className="card text-center">
        <div className="card-header bg-secondary">
        	<h5 className="card-title text-4 text-white mb-0">Unlimited</h5>
        </div>
        <div className="card-body">
        <ul className="list-unstyled">
        <li className="mb-3">Unlimited Talktime</li>
        <li className="mb-3 text-black-50">Validity 90 Days</li>
        <li><a className="btn-link text-1" data-toggle="modal" data-target="#plan-detail" href="#">More Details</a></li>
        </ul>
        <button className="btn btn-sm btn-block btn-outline-primary text-5 py-1 font-weight-500 shadow-none" type="submit">$ 499</button>
        </div>
        </div>
            </div>
            <div className="col-sm-3 mb-4">
            <div className="card text-center">
        <div className="card-header bg-secondary">
        	<h5 className="card-title text-4 text-white mb-0">Unlimited</h5>
        </div>
        <div className="card-body">
        <ul className="list-unstyled">
        <li className="mb-3">Unlimited Talktime</li>
        <li className="mb-3 text-black-50">Validity 28 Days</li>
        <li><a className="btn-link text-1" data-toggle="modal" data-target="#plan-detail" href="#">More Details</a></li>
        </ul>
        <button className="btn btn-sm btn-block btn-outline-primary text-5 py-1 font-weight-500 shadow-none" type="submit">$ 199</button>
        </div>
        </div>
            </div>
            <div className="col-sm-3 mb-4">
            <div className="card text-center">
        <div className="card-header bg-secondary">
        	<h5 className="card-title text-4 text-white mb-0">Unlimited</h5>
        </div>
        <div className="card-body">
        <ul className="list-unstyled">
        <li className="mb-3">Unlimited Talktime</li>
        <li className="mb-3 text-black-50">Validity 90 Days</li>
        <li><a className="btn-link text-1" data-toggle="modal" data-target="#plan-detail" href="#">More Details</a></li>
        </ul>
        <button className="btn btn-sm btn-block btn-outline-primary text-5 py-1 font-weight-500 shadow-none" type="submit">$ 399</button>
        </div>
        </div>
            </div>
          </div>
              </div>
      </TabPanel>

    </Box>
  );
}
