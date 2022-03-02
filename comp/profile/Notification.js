


export default function Notification() {
  return (
  <>
    <div className="bg-white shadow-md rounded p-4"> 
      <h4 className="mb-4">Notifications</h4>
      <hr className="mx-n4 mb-4" />
      <p className="lead text-muted mb-4">Select subscriptions to be delivered to your register Email Id.</p>
          
      <form id="notifications" method="post">
        <div className="form-check custom-control custom-checkbox">
          <input id="announcements" name="notifications" className="custom-control-input" checked="" type="checkbox" />
          <label className="custom-control-label text-3" for="announcements">Announcements</label>
          <p className="text-muted line-height-3 mt-2">Be the first to know about new features and other news.</p>
        </div>
        <hr />
        <div className="form-check custom-control custom-checkbox">
          <input id="sendPayment" name="notifications" className="custom-control-input" checked="" type="checkbox" />
          <label className="custom-control-label text-3" for="sendPayment">Mobile Recharge</label>
          <p className="text-muted line-height-3 mt-2">Send an email when I send a topup.</p>
        </div>
        <hr />
        <div className="form-check custom-control custom-checkbox">
          <input id="receiveApayment" name="notifications" className="custom-control-input" type="checkbox" />
          <label className="custom-control-label text-3" for="receiveApayment">Bill Payment</label>
          <p className="text-muted line-height-3 mt-2">Send me an email when our bill payment successfully.</p>
        </div>
        <hr />
        <div className="form-check custom-control custom-checkbox">
          <input id="requestPayment" name="notifications" className="custom-control-input" checked="" type="checkbox" />
          <label className="custom-control-label text-3" for="requestPayment">Booking</label>
          <p className="text-muted line-height-3 mt-2">Send me an email when your booking confirmed.</p>
        </div>
        <hr />
        <div className="form-check custom-control custom-checkbox">
          <input id="problemWithPayment" name="notifications" className="custom-control-input" type="checkbox" />
          <label className="custom-control-label text-3" for="problemWithPayment">Have a problem with a payment</label>
          <p className="text-muted line-height-3 mt-2">Send me an email when have a problem with a payment.</p>
        </div>
        <hr />
        <div className="form-check custom-control custom-checkbox">
          <input id="specialOffers" name="notifications" className="custom-control-input" type="checkbox" />
          <label className="custom-control-label text-3" for="specialOffers">Special Offers</label>
          <p className="text-muted line-height-3 mt-2">Receive last-minute offers from us.</p>
        </div>
        <hr />
        <div className="form-check custom-control custom-checkbox">
          <input id="reviewSurveys" name="notifications" className="custom-control-input" type="checkbox" />
          <label className="custom-control-label text-3" for="reviewSurveys">Review Surveys</label>
          <p className="text-muted line-height-3 mt-2">Share your payment experience to better inform users.</p>
        </div>
        <hr />
        <button className="btn btn-primary mt-1" type="submit">Save Changes</button>
      </form>
    </div>
  </> 
  )
}
