import React from "react"
import PropTypes from "prop-types"
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Table,
} from "reactstrap"
import img7 from "../../../assets/images/product/img-7.png"
import img4 from "../../../assets/images/product/img-4.png"

const EcommerceOrdersModal = props => {
  const { isOpen, toggle } = props
  return (
    <Modal
      isOpen={isOpen}
      role="dialog"
      autoFocus={true}
      centered={true}
      className="exampleModal"
      tabIndex="-1"
      toggle={toggle}
    >
      <div className="modal-content">
        <ModalHeader toggle={toggle}>Bet Details</ModalHeader>
        <ModalBody>
          <p className="mb-2">
            Product id: <span className="text-primary">#BET2540</span>
          </p>
          <p className="mb-2">
            Billing Name: <span className="text-primary">Neal Matthews</span>
          </p>
          <p className="mb-2">
            Date: <span className="text-primary success">06/11/2022</span>
          </p>
          <p className="mb-2">
            Payment Status: <span className="font-size-12 badge-soft-success badge bg-secondary rounded-pill">Paid</span>
          </p>
          <p className="mb-2">
            Payment Method: <span><i className="fab fa-cc-mastercard me-1"></i> Mastercard</span>
          </p>
          <p className="mb-4">
          Transaction ID: <span className="text-primary success">VeHasdipqMbde</span>
          </p>
          <div className="table-responsive">
            <Table className="table align-middle table-nowrap">
              <thead>
                <tr>
                  <th scope="col">User Name</th>
                  <th scope="col">Bettors</th>
                  <th scope="col">Currency</th>
                  <th scope="col">Amount</th>
                  <th scope="col">City</th>
                  <th scope="col">State</th>
                  <th scope="col">Country</th>
                  <th scope="col">ODD</th>
                  <th scope="col">COUNTER</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div>
                      <h5 className="text-truncate font-size-14">
                        Bruno O.
                      </h5>
                    </div>
                  </td>
                  <td>
                   YES
                  </td>
                  <td>$</td>
                  <td>10,000.00</td>
                  <td>Fort Worth</td>
                  <td>Texas</td>
                  <td>USA</td>
                  <td>
                    <Button type="button" color="success">
                      150
                    </Button>
                  </td>
                  <td>
                    <Button type="button" color="success">
                      CHALLENGED
                    </Button>
                  </td>
                </tr>
                <tr></tr>
                <tr>
                  <td colSpan="8">
                    <h6 className="m-0 text-end">Sub Total:</h6>
                  </td>
                  <td>$ 400</td>
                </tr>
                <tr>
                  <td colSpan="8">
                    <h6 className="m-0 text-end">Shipping:</h6>
                  </td>
                  <td>Free</td>
                </tr>
                <tr>
                  <td colSpan="8">
                    <h6 className="m-0 text-end">Total:</h6>
                  </td>
                  <td>$ 400</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button type="button" color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </div>
    </Modal>
  )
}

EcommerceOrdersModal.propTypes = {
  toggle: PropTypes.func,
  isOpen: PropTypes.bool,
}

export default EcommerceOrdersModal
