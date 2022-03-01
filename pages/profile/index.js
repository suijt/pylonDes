import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import Layout from '../../comp/layout'
import BankCard from '../../comp/profile/BankCard'
import Favourite from '../../comp/profile/Favourite'
import Notification from '../../comp/profile/Notification'
import OrderHistory from '../../comp/profile/OrderHistory'
import Password from '../../comp/profile/Password'
import PersonalInfo from '../../comp/profile/PersonalInfo'

// import OwlCarousel from 'react-owl-carousel';

// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import ReactOwlCarousel from 'react-owl-carousel';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Home() {
  // const OwlCarousel = dynamic(import("react-owl-carousel"), {ssr: false});
  const [value, setValue] = React.useState(0);
  const change=(index)=>{
    setValue(index)
  }
  return (
    <>
      <Layout>
        <section className="page-header page-header-text-light bg-secondary">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8">
                <h1>My Profile</h1>
              </div>
              <div className="col-md-4">
                <ul className="breadcrumb justify-content-start justify-content-md-end mb-0">
                  <li><a href="index.html">Home</a></li>
                  <li className="active">My Profile</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div id="content">
          <div className="container">
            <div className="row">
              <div className="col-lg-3"> 
                <ul className="nav nav-pills alternate flex-lg-column sticky-top">
                  <li className="nav-item"><a className={`nav-link ${value == 0 ? 'active': ''}`} onClick={()=>{change(0)}}><i className="fas fa-user"></i>Personal Information</a></li>
                  <li className="nav-item"><a className={`nav-link ${value == 1 ? 'active': ''}`} onClick={()=>{change(1)}} ><i className="fas fa-bookmark"></i>Favourites</a></li>
                  <li className="nav-item"><a className={`nav-link ${value == 2 ? 'active': ''}`} onClick={()=>{change(2)}} ><i className="fas fa-history"></i>Orders History</a></li>
                  <li className="nav-item"><a className={`nav-link ${value == 3 ? 'active': ''}`} onClick={()=>{change(3)}} ><i className="fas fa-credit-card"></i>Credit or Debit Cards</a></li>
                  <li className="nav-item"><a className={`nav-link ${value == 4 ? 'active': ''}`} onClick={()=>{change(4)}} ><i className="fas fa-key"></i>Change Password</a></li>
                  <li className="nav-item"><a className={`nav-link ${value == 5 ? 'active': ''}`} onClick={()=>{change(5)}} ><i className="fas fa-bell"></i>Notifications</a></li>
                </ul>
              </div>
              <div className="col-lg-9">
              <TabPanel value={value} index={0}>
                <PersonalInfo/>
               </TabPanel>
              <TabPanel value={value} index={1}>
                <Favourite />
               </TabPanel>
              <TabPanel value={value} index={2}>
                <OrderHistory />
               </TabPanel>
              <TabPanel value={value} index={3}>
                <BankCard />
               </TabPanel>
              <TabPanel value={value} index={4}>
                <Password />
               </TabPanel>
              <TabPanel value={value} index={5}>
                <Notification />
               </TabPanel>
              </div>
               
             
             
             
             
             
             
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
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
