import HistoryTab from "./HistoryTab";



export default function OrderHistory() {
  return (
  <>
        <div class="bg-white shadow-md rounded p-4"> 
          <h4 class="mb-4">Orders History</h4>
		      <hr class="mx-n4" />
          <HistoryTab />
          {/* <ul class="nav nav-tabs mb-4" id="myTab" role="tablist">
            <li class="nav-item"> <a class="nav-link active" id="first-tab" data-toggle="tab" href="#first" role="tab" aria-controls="first" aria-selected="true">All</a> </li>
            <li class="nav-item"> <a class="nav-link" id="second-tab" data-toggle="tab" href="#second" role="tab" aria-controls="second" aria-selected="false">Recharge & Bill Payment</a> </li>
            <li class="nav-item"> <a class="nav-link" id="third-tab" data-toggle="tab" href="#third" role="tab" aria-controls="third" aria-selected="false">Booking</a> </li>
          </ul>
          <div class="tab-content my-3" id="myTabContent">
            <div class="tab-pane fade show active" id="first" role="tabpanel" aria-labelledby="first-tab">
              <div class="table-responsive-md">
                <table class="table table-hover border">
                  <thead class="thead-light">
                    <tr>
                      <th>Date</th>
                      <th>Description</th>
                      <th>Order ID</th>
                      <th class="text-center">Status</th>
                      <th class="text-right">Amount</th>
                      <th class="text-center"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="align-middle">06/06/2018</td>
                      <td class="align-middle"><img src="images/brands/operator/vodafone.jpg" class="img-thumbnail d-inline-flex mr-1" /> <span class="text-1 d-inline-flex">Recharge of Vodafone Mobile 9696969696</span></td>
                      <td class="align-middle">5286977475</td>
                      <td class="align-middle text-center"><i class="fas fa-check-circle text-4 text-success" data-toggle="tooltip" data-original-title="Your order is Successful"></i></td>
                      <td class="align-middle text-right">$150</td>
                      <td class="align-middle text-center"><a href="#" data-toggle="tooltip" data-original-title="Repeat Order"><i class="fas fa-redo-alt"></i></a></td>
                    </tr>
                    <tr>
                      <td class="align-middle">02/06/2018</td>
                      <td class="align-middle"><img src="images/brands/flights/indigo.png" class="img-thumbnail d-inline-flex mr-1" /> <span class="text-1 d-inline-flex">Booking of Delhi to Sydney flight</span></td>
                      <td class="align-middle">5136907172</td>
                      <td class="align-middle text-center"><i class="fas fa-check-circle text-4 text-success" data-toggle="tooltip" data-original-title="Your order is Successful"></i></td>
                      <td class="align-middle text-right">$980</td>
                      <td class="align-middle text-center"><a href="#" data-toggle="tooltip" data-original-title="Repeat Order"><i class="fas fa-redo-alt"></i></a></td>
                    </tr>
                    <tr>
                      <td class="align-middle">31/05/2018</td>
                      <td class="align-middle"><img src="images/brands/operator/vodafone.jpg" class="img-thumbnail d-inline-flex mr-1" /> <span class="text-1 d-inline-flex">Bill Payment of Vodafone Mobile 9898989898</span></td>
                      <td class="align-middle">1072317951</td>
                      <td class="align-middle text-center"><i class="fas fa-ellipsis-h text-4 text-info" data-toggle="tooltip" data-original-title="Your order is in Progress"></i></td>
                      <td class="align-middle text-right">$99</td>
                      <td class="align-middle text-center"></td>
                    </tr>
                    <tr>
                      <td class="align-middle">25/05/2018</td>
                      <td><div class="d-lg-flex align-items-center"> <span class="img-thumbnail d-inline-flex text-8 p-2 mr-2"><i class="fas fa-bus"></i></span> <span class="text-1 d-inline-flex">Booking of Mumbai to Surat Bus</span> </div></td>
                      <td class="align-middle">4103520927</td>
                      <td class="align-middle text-center"><i class="fas fa-check-circle text-4 text-success" data-toggle="tooltip" data-original-title="Your order is Successful"></i></td>
                      <td class="align-middle text-right">$450</td>
                      <td class="align-middle text-center"><a href="#" data-toggle="tooltip" data-original-title="Repeat Order"><i class="fas fa-redo-alt"></i></a></td>
                    </tr>
                    <tr>
                      <td class="align-middle">21/05/2018</td>
                      <td class="align-middle"><img src="images/brands/operator/vodafone.jpg" class="img-thumbnail d-inline-flex mr-1" /> <span class="text-1 d-inline-flex">Recharge of Vodafone Mobile 9898989898</span></td>
                      <td class="align-middle">3079317986</td>
                      <td class="align-middle text-center"><i class="fas fa-times-circle text-4 text-danger" data-toggle="tooltip" data-original-title="Your order is Failed"></i></td>
                      <td class="align-middle text-right">$280</td>
                      <td class="align-middle text-center"><a href="#" data-toggle="tooltip" data-original-title="Retry Order"><i class="fas fa-redo-alt "></i></a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="text-center pt-3"><a href="#" class="btn btn-outline-primary shadow-none">View More</a></div>
            </div>
            <div class="tab-pane fade" id="second" role="tabpanel" aria-labelledby="second-tab">
              <div class="table-responsive-md">
                <table class="table table-hover border">
                  <thead class="thead-light">
                    <tr>
                      <th>Date</th>
                      <th>Description</th>
                      <th>Order ID</th>
                      <th class="text-center">Status</th>
                      <th class="text-right">Amount</th>
                      <th class="text-center"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="align-middle">06/06/2018</td>
                      <td class="align-middle"><img src="images/brands/operator/vodafone.jpg" class="img-thumbnail d-inline-flex mr-1" /> <span class="text-1 d-inline-flex">Recharge of Vodafone Mobile 9696969696</span></td>
                      <td class="align-middle">5286977475</td>
                      <td class="align-middle text-center"><i class="fas fa-check-circle text-4 text-success" data-toggle="tooltip" data-original-title="Your order is Successful"></i></td>
                      <td class="align-middle text-right">$150</td>
                      <td class="align-middle text-center"><a href="#" data-toggle="tooltip" data-original-title="Repeat Order"><i class="fas fa-redo-alt"></i></a></td>
                    </tr>
                    <tr>
                      <td class="align-middle">31/05/2018</td>
                      <td class="align-middle"><img src="images/brands/operator/vodafone.jpg" class="img-thumbnail d-inline-flex mr-1" /> <span class="text-1 d-inline-flex">Recharge of Vodafone Mobile 9898989898</span></td>
                      <td class="align-middle">1072317951</td>
                      <td class="align-middle text-center"><i class="fas fa-ellipsis-h text-4 text-info" data-toggle="tooltip" data-original-title="Your order is in Progress"></i></td>
                      <td class="align-middle text-right">$99</td>
                      <td class="align-middle text-center"></td>
                    </tr>
                    <tr>
                      <td class="align-middle">21/05/2018</td>
                      <td class="align-middle"><img src="images/brands/operator/vodafone.jpg" class="img-thumbnail d-inline-flex mr-1" /> <span class="text-1 d-inline-flex">Recharge of Vodafone Mobile 9898989898</span></td>
                      <td class="align-middle">3079317986</td>
                      <td class="align-middle text-center"><i class="fas fa-times-circle text-4 text-danger" data-toggle="tooltip" data-original-title="Your order is Failed"></i></td>
                      <td class="align-middle text-right">$280</td>
                      <td class="align-middle text-center"><a href="#" data-toggle="tooltip" data-original-title="Retry Order"><i class="fas fa-redo-alt "></i></a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="tab-pane fade" id="third" role="tabpanel" aria-labelledby="third-tab">
              <div class="table-responsive-md">
                <table class="table table-hover border">
                  <thead class="thead-light">
                    <tr>
                      <th>Date</th>
                      <th>Description</th>
                      <th>Order ID</th>
                      <th class="text-center">Status</th>
                      <th class="text-right">Amount</th>
                      <th class="text-center"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="align-middle">02/06/2018</td>
                      <td class="align-middle"><img src="images/brands/flights/indigo.png" class="img-thumbnail d-inline-flex mr-1" /> <span class="text-1 d-inline-flex">Booking of Delhi to Sydney flight</span></td>
                      <td class="align-middle">5136907172</td>
                      <td class="align-middle text-center"><i class="fas fa-check-circle text-4 text-success" data-toggle="tooltip" data-original-title="Your order is Successful"></i></td>
                      <td class="align-middle text-right">$980</td>
                      <td class="align-middle text-center"><a href="#" data-toggle="tooltip" data-original-title="Repeat Order"><i class="fas fa-redo-alt"></i></a></td>
                    </tr>
                    <tr>
                      <td class="align-middle">25/05/2018</td>
                      <td><div class="d-lg-flex align-items-center"> <span class="img-thumbnail d-inline-flex text-8 p-2 mr-2"><i class="fas fa-bus"></i></span> <span class="text-1 d-inline-flex">Booking of Mumbai to Surat Bus</span> </div></td>
                      <td class="align-middle">4103520927</td>
                      <td class="align-middle text-center"><i class="fas fa-check-circle text-4 text-success" data-toggle="tooltip" data-original-title="Your order is Successful"></i></td>
                      <td class="align-middle text-right">$450</td>
                      <td class="align-middle text-center"><a href="#" data-toggle="tooltip" data-original-title="Repeat Order"><i class="fas fa-redo-alt"></i></a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div> */}
        </div>
  </> 
  )
}
