import Head from 'next/head'
import Image from 'next/image'
// import intlTelInput from 'intl-tel-input';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import Layout from '../../comp/layout';
import PorcessOrder from '../../comp/PorcessOrder';

export default function Home() {
  return (
    <>
      <Layout>
      

        <div id="content">
          <div className="container">
          
            <div className="row my-5">
              <div className="col-lg-11 mx-auto">
              <PorcessOrder />
              
            </div>
          </div>
        </div>
      </div>
      </Layout>
    </>
  )
}
