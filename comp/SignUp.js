export default function SignUp(){
  return (
    <>
    <p className="text-4 font-weight-300 text-muted text-center mb-4">Looks like you're new here!</p>
    <form id="signupForm" method="post">
      <div className="form-group">
        <label for="fullName">Your Name</label>
        <input type="text" className="form-control border-2" id="fullName" required="" placeholder="Your Name" />
      </div>
      <div className="form-group">
        <label for="emailAddress">Email Id</label>
        <input type="email" className="form-control border-2" id="emailAddress" required="" placeholder="Email Id" />
      </div>
      <div className="form-group">
        <label for="loginPassword">Password</label>
        <input type="password" className="form-control border-2" id="loginPassword" required="" placeholder="Password" />
      </div>
      <div className="form-group my-4">
        <div className="form-check text-2 custom-control custom-checkbox">
          <input id="agree" name="agree" className="custom-control-input" type="checkbox" />
          <label className="custom-control-label" for="agree">I agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.</label>
        </div>
      </div>
      <button className="btn btn-primary btn-block my-4" style={{width: '100%'}} type="submit">Sign Up</button>
    </form>
    <div className="d-flex align-items-center my-3">
      <hr className="flex-grow-1" />
      <span className="mx-2 text-2 text-muted">Or Sign Up with Social Profile</span>
      <hr className="flex-grow-1" />
    </div>
    <div className="d-flex  flex-column align-items-center mb-3">
      <ul className="social-icons social-icons-colored social-icons-circle">
        <li className="social-icons-facebook"><a href="#" data-toggle="tooltip" data-original-title="Sign Up with Facebook"><i className="fab fa-facebook-f"></i></a></li>
        <li className="social-icons-twitter"><a href="#" data-toggle="tooltip" data-original-title="Sign Up with Twitter"><i className="fab fa-twitter"></i></a></li>
        <li className="social-icons-google"><a href="#" data-toggle="tooltip" data-original-title="Sign Up with Google"><i className="fab fa-google"></i></a></li>
        <li className="social-icons-linkedin"><a href="#" data-toggle="tooltip" data-original-title="Sign Up with Linkedin"><i className="fab fa-linkedin-in"></i></a></li>
      </ul>
    </div>
    <p className="text-2 text-center mb-0">Already have an account? <a className="btn-link" href="login">Log In</a></p>
    </>
  )
}
