import Link from 'next/link'
import Layout from '../../comp/layout'
import LogIn from '../../comp/LogIn'
import SignUp from '../../comp/SignUp'

export default function Home() {
  return (
  <>
    <Layout>
      <div id="content">
        <div className="container pt-5 pb-4">
          <div className="row">
            <div className="col-md-9 col-lg-7 col-xl-5 mx-auto">
              <div className="bg-white shadow-md rounded p-3 pt-sm-4 pb-sm-5 px-sm-5">
                <ul className="nav nav-tabs nav-justified mb-4" role="tablist">
                <li className="nav-item"><Link className="nav-link text-5 line-height-3 active" href="login"><a className="nav-link text-5 line-height-3 active"> Login</a></Link></li>
                  <li className="nav-item"><Link className="nav-link text-5 line-height-3 " href="signup"><a className="nav-link text-5 line-height-3 " >Sign Up</a></Link></li>
                </ul>
                <LogIn/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>      
    </>          
  )
}
