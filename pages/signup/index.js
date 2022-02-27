
import Link from 'next/link'
import Layout from '../../comp/layout'

import SignUp from '../../comp/SignUp'

export default function index() {
  return (
  <>
    <Layout>
      <div id="content">
        <div class="container pt-5 pb-4">
          <div class="row">
            <div class="col-md-9 col-lg-7 col-xl-5 mx-auto">
              <div class="bg-white shadow-md rounded p-3 pt-sm-4 pb-sm-5 px-sm-5">
                <ul class="nav nav-tabs nav-justified mb-4" role="tablist">
                  <li class="nav-item"><Link class="nav-link text-5 line-height-3" href="login"><a className="nav-link text-5 line-height-3"> Login</a></Link></li>
                  <li class="nav-item"><Link class="nav-link text-5 line-height-3 active" href="signup"><a className="nav-link text-5 line-height-3 active" >Sign Up</a></Link></li>
                </ul>
                <SignUp/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
      
    </>
      

      
  )
}
