


export default function Invoice() {
  return (
  <>
    
  <div className="container-fluid invoice-container">
    <div className="row align-items-center">
      <div className="col-sm-7 text-center text-sm-left">
        <p><img src="images/logo.png" title="Quickai" /></p>
      </div>
      <div className="col-sm-5 text-center text-sm-right">
        <h4 className="mb-0">Invoice</h4>
        <p className="mb-0">Invoice Number - 17004</p>
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col-sm-6 text-sm-right order-sm-1"> <strong>Pay To:</strong>
        <address>
        Quickai Inc<br />
        2705 N. Enterprise St<br />
        Orange, CA 92865
        </address>
      </div>
      <div className="col-sm-6 order-sm-0"> <strong>Invoiced To:</strong>
        <address>
        Neil Patel<br />
        15 Hodges Mews, High Wycombe<br />
        HP12 3JL<br />
        United Kingdom
        </address>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-6"> <strong>Payment Method:</strong><br />
        <span> Credit Card </span> <br />
        <br/>
      </div>
      <div className="col-sm-6 text-sm-right"> <strong>Order Date:</strong><br/>
        <span> 05/12/2019<br/>
        <br/>
        </span> 
      </div>
    </div>
    <br/>
    <div className="card">
      <div className="card-header"> <span className="font-weight-600 text-4">Recharge Summary</span> 
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <td className="border-top-0"><strong>Description</strong></td>
                <td width="20%" className="text-center border-top-0"><strong>Operator</strong></td>
                <td width="20%" className="text-right border-top-0"><strong>Amount</strong></td>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span className="text-3">(+91) 9898989898</span> prepaid Mobile Recharge
                </td>
                <td className="text-center">Vodafone</td>
                <td className="text-right">$98.00</td>
              </tr>
              <tr>
                <td>Promotional Code: <small>TOPUP5 - 5% One Time Discount</small></td>
                <td className="text-center">-</td>
                <td className="text-right">-$4.90</td>
              </tr>
              <tr>
                <td colspan="2" className="bg-light-2 text-right"><strong>Sub Total</strong></td>
                <td colspan="2" className="bg-light-2 text-right">$93.10</td>
              </tr>
              <tr>
                <td colspan="2" className="bg-light-2 text-right"><strong>Tax</strong></td>
                <td colspan="2" className="bg-light-2 text-right">$0.00</td>
              </tr>
              <tr>
                <td colspan="2" className="bg-light-2 text-right"><strong>Total</strong></td>
                <td colspan="2" className="bg-light-2 text-right">$93.10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <br />
    <div className="table-responsive d-print-none">
      <table className="table table-bordered">
        <thead>
          <tr>
            <td className="text-center"><strong>Transaction Date</strong></td>
            <td className="text-center"><strong>Gateway</strong></td>
            <td className="text-center"><strong>Transaction ID</strong></td>
            <td className="text-center"><strong>Amount</strong></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">05/12/2019</td>
            <td className="text-center">Credit Card</td>
            <td className="text-center">3912912704</td>
            <td className="text-center">$93.10 USD</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-center text-1"><strong>NOTE :</strong> This is computer generated receipt and does not require physical signature.</p>
    <div className="text-center">
      <div className="btn-group btn-group-sm d-print-none"> <a href="javascript:window.print()" className="btn btn-light border text-black-50 shadow-none"><i className="fa fa-print"></i> Print</a> <a href="" className="btn btn-light border text-black-50 shadow-none"><i className="fa fa-download"></i> Download</a> 
      </div>
    </div>
  </div>
  <p className="text-center d-print-none"><a href="#">&laquo; Back to My Account</a></p>
      
    </>
      

      
  )
}
