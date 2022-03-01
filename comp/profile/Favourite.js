


export default function Favourite() {
  return (
  <>
      <div class="bg-white shadow-md rounded p-4"> 
        <h4 class="mb-4">Your Saved Connections</h4>
        <hr class="mx-n4 mb-4" />
        <div class="table-responsive-lg">
          <table class="table table-hover border">
            <tbody>
              <tr>
                <td class="text-center align-middle"><img class="border p-1 rounded bg-white" src="images/brands/operator/vodafone.jpg" alt="" /></td>
                <td class="text-center align-middle">9898989898</td>
                <td class="text-center align-middle">Vodafone</td>
                <td class="align-middle">
                  <div class="d-flex justify-content-end">
                    <button class="btn btn-sm btn-outline-primary shadow-none text-nowrap" type="submit">Recharge Now</button>
                    <button class="btn btn-sm btn-outline-secondary shadow-none ml-1" type="submit" data-toggle="tooltip" data-original-title="Edit"><i class="fas fa-edit"></i></button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="text-center align-middle"><img class="border p-1 rounded bg-white" alt="" src="images/brands/operator/vodafone.jpg" /></td>
                <td class="text-center align-middle">9696969696</td>
                <td class="text-center align-middle">Vodafone</td>
                <td class="align-middle">
                  <div class="d-flex justify-content-end">
                    <button class="btn btn-sm btn-outline-primary shadow-none text-nowrap" type="submit">Recharge Now</button>
                    <button class="btn btn-sm btn-outline-secondary shadow-none ml-1" type="submit" data-toggle="tooltip" data-original-title="Edit"><i class="fas fa-edit"></i></button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  </> 
  )
}
