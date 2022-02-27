import Image from 'next/image'


export default  function Header(){
  return (
    <>
    <header id="header">
    <div className="container">
      <div className="header-row">
        <div className="header-column justify-content-start"> 
          
          <div className="logo"> 
            <a href="index.html" className="d-flex" title="Quickai - HTML Template">
              <img src="images/logo.png" alt="Quickai" />
            </a> 
          </div>
          
          
        </div>
        <div className="header-column justify-content-end"> 
          
          <nav className="primary-menu navbar navbar-expand-lg">
            <div id="header-nav" className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="dropdown"> <a className="dropdown-toggle" href="#">Home</a>
                </li>
                <li className="dropdown"> <a className="dropdown-toggle" href="#">About</a>
                </li>
                <li className="dropdown"> <a className="dropdown-toggle" href="#">Service</a>
                </li>
                <li className="dropdown"> <a className="dropdown-toggle" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#header-nav"> <span></span> <span></span> <span></span> </button>

		  <nav className="login-signup navbar navbar-expand separator ml-sm-2 pl-sm-2">
			<ul className="navbar-nav">
			<li><a href="login.html">Login</a> </li>
            <li className="align-items-center h-auto ml-sm-2"><a className="btn btn-sm btn-primary" href="signup.html">Sign Up</a></li>
			</ul>
		  </nav>
        </div>
      </div>
    </div>
  </header>
    </>
  )
}