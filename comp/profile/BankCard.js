import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BankCard() {

  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleClose = () => setOpen(false);
  const handleCloseAdd = () => setOpenAdd(false);

  return (
  <>
          <div className="bg-white shadow-md rounded p-4"> 
            <h4 className="mb-4">Credit or Debit Cards</h4>
			      <hr className="mx-n4 mb-4" />
            <div className="row">
              <div className="col-12 col-sm-6 col-lg-4 mb-4">
                <div className="account-card account-card-primary text-white rounded p-3 mb-4 mb-lg-0">
                  <p className="text-4">XXXX-XXXX-XXXX-4151</p>
                  <p className="d-flex align-items-center"> <span className="account-card-expire text-uppercase d-inline-block opacity-6 mr-2">Valid<br />
                    thru<br />
                    </span> <span className="text-4 opacity-9">07/24</span> <span className="bg-white text-0 text-body font-weight-500 rounded-pill d-inline-block px-2 line-height-4 opacity-8 ml-auto">Primary</span> </p>
                  <p className="d-flex align-items-center m-0"> <span className="text-uppercase font-weight-500">Johne Cary</span> <img className="ml-auto" src="images/payment/visa.png" alt="visa" title="" /> </p>
                  <div className="account-card-overlay rounded"> <span data-target="#edit-card-details" data-toggle="modal" className="pointer text-light btn-link mx-2" onClick={handleOpenAdd}><span className="mr-1"><i className="fas fa-edit" ></i></span>Edit</span> <a href="#" className="text-light btn-link mx-2"><span className="mr-1"><i className="fas fa-minus-circle"></i></span>Remove</a> </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-4 mb-4">
                <div className="account-card text-white rounded p-3 mb-4 mb-lg-0">
                  <p className="text-4">XXXX-XXXX-XXXX-6296</p>
                  <p className="d-flex align-items-center"> <span className="account-card-expire text-uppercase d-inline-block opacity-6 mr-2">Valid<br />
                    thru<br />
                    </span> <span className="text-4 opacity-9">07/23</span> </p>
                  <p className="d-flex align-items-center m-0"> <span className="text-uppercase font-weight-500">Johne Cary</span> <img className="ml-auto" src="images/payment/mastercard.png" alt="mastercard" title="" /> </p>
                  <div className="account-card-overlay rounded"> <span data-target="#edit-card-details" data-toggle="modal" className=" pointer text-light btn-link mx-2" onClick={handleOpenAdd}><span className="mr-1"><i className="fas fa-edit" ></i></span>Edit</span> <a href="#" className="text-light btn-link mx-2"><span className="mr-1"><i className="fas fa-minus-circle"></i></span>Remove</a> </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-4 mb-4">
                <div className="account-card text-white rounded p-3 mb-4 mb-lg-0">
                  <p className="text-4">XXXX-XXXX-XXXX-6296</p>
                  <p className="d-flex align-items-center"> <span className="account-card-expire text-uppercase d-inline-block opacity-6 mr-2">Valid<br />
                    thru<br />
                    </span> <span className="text-4 opacity-9">07/23</span> </p>
                  <p className="d-flex align-items-center m-0"> <span className="text-uppercase font-weight-500">Johne Cary</span> <img className="ml-auto" src="images/payment/mastercard.png" alt="mastercard" title="" /> </p>
                  <div className="account-card-overlay rounded"> <span data-target="#edit-card-details" data-toggle="modal" className="pointer text-light btn-link mx-2" ><span className="mr-1"><i className="fas fa-edit" ></i></span>Edit</span> <a href="#" className="text-light btn-link mx-2"><span className="mr-1"><i className="fas fa-minus-circle"></i></span>Remove</a> </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-4 mb-4"> <span onClick={handleOpenAdd}  data-target="#add-new-card-details" data-toggle="modal" className="pointer account-card-new d-flex align-items-center rounded h-100 p-3 mb-4 mb-lg-0">
                <p className="w-100 text-center line-height-4 my-4"> <span className="text-3"><i className="fas fa-plus-circle"></i></span> <span className="d-block text-body text-3">Add New Card</span> </p>
                </span> </div>
            </div>
            <div id="edit-card-details" className="modal fade" role="dialog" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title font-weight-400">Update Card</h5>
                    <button type="button" className="close font-weight-400" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                  </div>
                  <div className="modal-body p-4">
                    <form id="updateCard" method="post">
                      <div className="form-group">
                        <label for="edircardNumber">Card Number</label>
                        <div className="input-group">
                          <div className="input-group-prepend"> <span className="input-group-text"><img className="ml-auto" src="images/payment/visa.png" alt="visa" title="" /></span> </div>
                          <input type="text" className="form-control" data-bv-field="edircardNumber" id="edircardNumber" disabled="" value="XXXXXXXXXXXX4151" placeholder="Card Number" />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label for="editexpiryDate">Expiry Date</label>
                            <input id="editexpiryDate" type="text" className="form-control" data-bv-field="editexpiryDate" required="" value="07/24" placeholder="MM/YY" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label for="editcvvNumber">CVV <span className="text-info ml-1" data-toggle="tooltip" data-original-title="For Visa/Mastercard, the three-digit CVV number is printed on the signature panel on the back of the card immediately after the card's account number. For American Express, the four-digit CVV number is printed on the front of the card above the card account number."><i className="fas fa-question-circle"></i></span></label>
                            <input id="editcvvNumber" type="password" className="form-control" data-bv-field="editcvvNumber" required="" value="321" placeholder="CVV (3 digits)" />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="editcardHolderName">Card Holder Name</label>
                        <input type="text" className="form-control" data-bv-field="editcardHolderName" id="editcardHolderName" required="" value="Smith Rhodes" placeholder="Card Holder Name" />
                      </div>
                      <button className="btn btn-primary btn-block" type="submit">Update Card</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='p-0 modalBox'>
          {/* <div id="add-new-card-details block" className="modal fade" role="dialog" aria-hidden="true"> */}
              {/* <div className="modal-dialog modal-dialog-centered" role="document"> */}
                {/* <div className="modal-content"> */}
                  <div className="modal-header">
                    <h5 className="modal-title font-weight-400">Add a Card</h5>
                    <button onClick={handleClose} type="button" style={{border:'none', background:'none'}} className="close font-weight-400" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                  </div>
                  <div className="modal-body p-4">
                    <form id="addCard" method="post">
                      <div className="btn-group d-flex btn-group-toggle mb-3" data-toggle="buttons">
                        <label className="btn btn-outline-secondary btn-sm shadow-none w-100 active">
                          <input type="radio" style={{display: 'none'}} name="options" id="option1" checked="" />
                          Debit </label>
                        <label className="btn btn-outline-secondary btn-sm shadow-none w-100">
                          <input type="radio" style={{display: 'none'}} name="options" id="option2" />
                          Credit </label>
                      </div>
                      <div className="form-group">
                        <label for="cardType">Card Type</label>
                        <div>
                          <select id="cardType" className="custom-select form-select" required="">
                            <option value="">Card Type</option>
                            <option>Visa</option>
                            <option>MasterCard</option>
                            <option>American Express</option>
                            <option>Discover</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="cardNumber">Card Number</label>
                        <input type="text" className="form-control" data-bv-field="cardnumber" id="cardNumber" required="" value="" placeholder="Card Number"/>
                      </div>
                      <div className="form-row row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label for="expiryDate">Expiry Date</label>
                            <input id="expiryDate" type="text" className="form-control" data-bv-field="expiryDate" required="" value="" placeholder="MM/YY"/>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label for="cvvNumber">CVV <span className="text-info ml-1" data-toggle="tooltip" data-original-title="For Visa/Mastercard, the three-digit CVV number is printed on the signature panel on the back of the card immediately after the card's account number. For American Express, the four-digit CVV number is printed on the front of the card above the card account number."><i className="fas fa-question-circle"></i></span></label>
                            <input id="cvvNumber" type="password" className="form-control" data-bv-field="cvvnumber" required="" value="" placeholder="CVV (3 digits)"/>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="cardHolderName">Card Holder Name</label>
                        <input type="text" className="form-control" data-bv-field="cardholdername" id="cardHolderName" required="" value="" placeholder="Card Holder Name"/>
                      </div>
                      <button className="btn btn-primary btn-block mt-3" type="submit">Add Card</button>
                    </form>
                  </div>
                {/* </div> */}
              {/* </div> */}
            {/* </div> */}
        </Box>
      </Modal>
      <Modal
        open={openAdd}
        onClose={handleCloseAdd}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='p-0 modalBox'>
          {/* <div id="add-new-card-details" className="modal fade" role="dialog" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content"> */}
                  <div className="modal-header">
                    <h5 className="modal-title font-weight-400">Add a Card</h5>
                    <button type="button" onClick={handleCloseAdd} style={{border:'none', background:'none'}} className="close font-weight-400" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                  </div>
                  <div className="modal-body p-4">
                    <form id="addCard" method="post">
                      <div className="btn-group d-flex btn-group-toggle mb-3" data-toggle="buttons">
                        <label className="btn btn-outline-secondary btn-sm shadow-none w-100 active">
                          <input type="radio" name="options" id="option1" checked="" />
                          Debit </label>
                        <label className="btn btn-outline-secondary btn-sm shadow-none w-100">
                          <input type="radio" name="options" id="option2" />
                          Credit </label>
                      </div>
                      <div className="form-group">
                        <label for="cardType">Card Type</label>
                        <select id="cardType" className="custom-select form-select" required="">
                          <option value="">Card Type</option>
                          <option>Visa</option>
                          <option>MasterCard</option>
                          <option>American Express</option>
                          <option>Discover</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label for="cardNumber">Card Number</label>
                        <input type="text" className="form-control" data-bv-field="cardnumber" id="cardNumber" required="" value="" placeholder="Card Number" />
                      </div>
                      <div className="form-row row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label for="expiryDate">Expiry Date</label>
                            <input id="expiryDate" type="text" className="form-control" data-bv-field="expiryDate" required="" value="" placeholder="MM/YY" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label for="cvvNumber">CVV <span className="text-info ml-1" data-toggle="tooltip" data-original-title="For Visa/Mastercard, the three-digit CVV number is printed on the signature panel on the back of the card immediately after the card's account number. For American Express, the four-digit CVV number is printed on the front of the card above the card account number."><i className="fas fa-question-circle"></i></span></label>
                            <input id="cvvNumber" type="password" className="form-control" data-bv-field="cvvnumber" required="" value="" placeholder="CVV (3 digits)" />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="cardHolderName">Card Holder Name</label>
                        <input type="text" className="form-control" data-bv-field="cardholdername" id="cardHolderName" required="" value="" placeholder="Card Holder Name" />
                      </div>
                      <button className="btn btn-primary btn-block mt-3" type="submit">Add Card</button>
                    </form>
                  </div>
                {/* </div>
              </div>
            </div> */}
        </Box>
      </Modal>
    </div>
  </> 
  )
}
