import Head from 'next/head'
import Image from 'next/image'
import Layout from './layout'

export default function LogIn() {
  return (
    <>
      <p className="text-4 font-weight-300 text-muted text-center mb-4">We are glad to see you again!</p>
      <form id="loginForm" method="post">
        <div className="form-group">
            <label for="emailAddress">Mobile or Email</label>
            <input type="email" className="form-control" id="emailAddress" required="" placeholder="Mobile or Email" />
          </div>
        <div className="form-group">
          <label for="loginPassword">Password</label>
          <input type="password" className="form-control" id="loginPassword" required="" placeholder="Password" />
        </div>
        <div className="row my-4">
          <div className="col">
            <div className="form-check text-2 custom-control custom-checkbox">
              <input id="remember-me" name="remember" className="custom-control-input" type="checkbox" />
              <label className="custom-control-label" for="remember-me">Remember Me</label>
            </div>
          </div>
          <div className="col text-2 text-right"><a className="btn-link" href="forgot_password">Forgot Password ?</a></div>
        </div>
        <button className="btn btn-primary btn-block my-4" style={{width: '100%'}} type="submit">Login</button>
      </form>
      <div className="d-flex align-items-center my-3">
        <hr className="flex-grow-1" />
        <span className="mx-2 text-2 text-muted">Or Login with Social Profile</span>
        <hr className="flex-grow-1" />
      </div>
      <div className="d-flex  flex-column align-items-center mb-3">
        <ul className="social-icons social-icons-colored social-icons-circle">
          <li className="social-icons-facebook"><a href="#" data-toggle="tooltip" data-original-title="Log In with Facebook"><i className="fab fa-facebook-f"></i></a></li>
          <li className="social-icons-twitter"><a href="#" data-toggle="tooltip" data-original-title="Log In with Twitter"><i className="fab fa-twitter"></i></a></li>
          <li className="social-icons-google"><a href="#" data-toggle="tooltip" data-original-title="Log In with Google"><i className="fab fa-google"></i></a></li>
          <li className="social-icons-linkedin"><a href="#" data-toggle="tooltip" data-original-title="Log In with Linkedin"><i className="fab fa-linkedin-in"></i></a></li>
        </ul>
      </div>
      <p className="text-2 text-center mb-0">New to Quickai? <a className="btn-link" href="signup">Sign Up</a></p>
    </>
  )
}
