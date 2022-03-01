


export default function Password() {
  return (
  <>
      <div class="bg-white shadow-md rounded p-4"> 
        <h4 class="mb-4">Change Password</h4>
        <hr class="mx-n4 mb-4" />
        <div class="row">
          <div class="col-lg-8">
            <form id="changePassword" method="post">
              <div class="form-group">
                <label for="existingPassword">Existing Password</label>
                <input type="text" class="form-control" data-bv-field="existingpassword" id="existingPassword" required="" placeholder="Existing Password" />
              </div>
              <div class="form-group">
                <label for="newPassword">New Password</label>
                <input type="text" class="form-control" data-bv-field="newpassword" id="newPassword" required="" placeholder="New Password" />
              </div>
              <div class="form-group">
                <label for="existingPassword">Confirm Password</label>
                <input type="text" class="form-control" data-bv-field="confirmgpassword" id="confirmPassword" required="" placeholder="Confirm Password" />
              </div>
              <button class="btn btn-primary mt-3" type="submit">Update Password</button>
            </form>
          </div>
          <div class="col-lg-4 mt-4 mt-lg-0 ">
            <div class="bg-light-2 rounded p-4">
			        <h3 class="text-4 mb-2">We value your Privacy</h3>
              <p class="mb-0">We will not sell or distribute your contact information. Read our <a href="#">Privacy Policy</a>.</p>
              <hr class="mx-n4" />
			        <h3 class="text-4 mb-3">Billing Enquiries</h3>
              <p class="mb-0">Do not hesitate to reach our <a href="#">support team</a> if you have any queries.</p>
            </div>
          </div>
        </div>
      </div>
  </> 
  )
}
