import Image from 'next/image'
import Link from 'next/link'


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
                <li className="dropdown"><Link className="dropdown-toggle" href="/">Home</Link>
                </li>
                <li className="dropdown"><Link className="dropdown-toggle" href="plan">Plan</Link>
                </li>
                <li className="dropdown"><Link className="dropdown-toggle" href="order">Order</Link>
                </li>
                <li className="dropdown"><Link className="dropdown-toggle" href="email">email</Link>
                </li>
                <li className="dropdown"> <a className="dropdown-toggle" href="invoice">Invoice</a>
                </li>
                <li className="dropdown"> <a className="dropdown-toggle" href="profile">Profile</a>
                </li>
              </ul>
            </div>
          </nav>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#header-nav"> <span></span> <span></span> <span></span> </button>

		  <nav className="login-signup navbar navbar-expand separator ml-sm-2 pl-sm-2">
			<ul className="navbar-nav">
			<li><Link href="login">Login</Link></li>
            <li className="align-items-center h-auto ml-sm-2"><Link href="signup" ><a className="btn btn-sm btn-primary">Sign Up</a></Link> </li>
			</ul>
		  </nav>
        </div>
      </div>
    </div>
  </header>
    </>
  )
}