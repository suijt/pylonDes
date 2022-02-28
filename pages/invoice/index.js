
import Link from 'next/link'
import Layout from '../../comp/layout'
import LogIn from '../../comp/LogIn'
import SignUp from '../../comp/SignUp'

export default function Invoice() {
  return (
  <>
    
  <div class="container-fluid invoice-container">
    <div class="row align-items-center">
      <div class="col-sm-7 text-center text-sm-left">
        <p><img src="images/logo.png" title="Quickai" /></p>
      </div>
      <div class="col-sm-5 text-center text-sm-right">
        <h4 class="mb-0">Invoice</h4>
        <p class="mb-0">Invoice Number - 17004</p>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-sm-6 text-sm-right order-sm-1"> <strong>Pay To:</strong>
        <address>
        Quickai Inc<br />
        2705 N. Enterprise St<br />
        Orange, CA 92865
        </address>
      </div>
      <div class="col-sm-6 order-sm-0"> <strong>Invoiced To:</strong>
        <address>
        Neil Patel<br />
        15 Hodges Mews, High Wycombe<br />
        HP12 3JL<br />
        United Kingdom
        </address>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6"> <strong>Payment Method:</strong><br />
        <span> Credit Card </span> <br />
        <br/>
      </div>
      <div class="col-sm-6 text-sm-right"> <strong>Order Date:</strong><br/>
        <span> 05/12/2019<br/>
        <br/>
        </span> 
      </div>
    </div>
    <br/>
    <div class="card">
      <div class="card-header"> <span class="font-weight-600 text-4">Recharge Summary</span> 
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <td class="border-top-0"><strong>Description</strong></td>
                <td width="20%" class="text-center border-top-0"><strong>Operator</strong></td>
                <td width="20%" class="text-right border-top-0"><strong>Amount</strong></td>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="text-3">(+91) 9898989898</span> prepaid Mobile Recharge
                </td>
                <td class="text-center">Vodafone</td>
                <td class="text-right">$98.00</td>
              </tr>
              <tr>
                <td>Promotional Code: <small>TOPUP5 - 5% One Time Discount</small></td>
                <td class="text-center">-</td>
                <td class="text-right">-$4.90</td>
              </tr>
              <tr>
                <td colspan="2" class="bg-light-2 text-right"><strong>Sub Total</strong></td>
                <td colspan="2" class="bg-light-2 text-right">$93.10</td>
              </tr>
              <tr>
                <td colspan="2" class="bg-light-2 text-right"><strong>Tax</strong></td>
                <td colspan="2" class="bg-light-2 text-right">$0.00</td>
              </tr>
              <tr>
                <td colspan="2" class="bg-light-2 text-right"><strong>Total</strong></td>
                <td colspan="2" class="bg-light-2 text-right">$93.10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <br />
    <div class="table-responsive d-print-none">
      <table class="table table-bordered">
        <thead>
          <tr>
            <td class="text-center"><strong>Transaction Date</strong></td>
            <td class="text-center"><strong>Gateway</strong></td>
            <td class="text-center"><strong>Transaction ID</strong></td>
            <td class="text-center"><strong>Amount</strong></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-center">05/12/2019</td>
            <td class="text-center">Credit Card</td>
            <td class="text-center">3912912704</td>
            <td class="text-center">$93.10 USD</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="text-center text-1"><strong>NOTE :</strong> This is computer generated receipt and does not require physical signature.</p>
    <div class="text-center">
      <div class="btn-group btn-group-sm d-print-none"> <a href="javascript:window.print()" class="btn btn-light border text-black-50 shadow-none"><i class="fa fa-print"></i> Print</a> <a href="" class="btn btn-light border text-black-50 shadow-none"><i class="fa fa-download"></i> Download</a> 
      </div>
    </div>
  </div>
  <p class="text-center d-print-none"><a href="#">&laquo; Back to My Account</a></p>
      
    </>
      

      
  )
}
