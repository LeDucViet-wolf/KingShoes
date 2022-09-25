import React from "react"
import PropTypes from "prop-types"
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
} from "reactstrap"
import axios from "axios"
const ProductDelete = props => {

  const { isOpen, toggle, id } = props
  const handleDelete = () => {
      axios.post('http://localhost:3113/disable-product',{id})
        .then(function (response) {
          toggle()
        })
        .catch(function (error) {
          console.log(error)
        });
  }
  return (
    <Modal
      isOpen={isOpen}
      role="dialog"
      autoFocus={true}
      centered={true}
      className="exampleModal"
      tabIndex="-1"
      toggle={toggle}
      style={{textAlign:'center', width:'400px'}}
    >
      <div className="modal-content">
        <ModalBody>
          <h1 className="mb-2" style={{fontWeight:'bold', padding: '0 0 10px 0'}}>
            Delete category?
          </h1>
          <p className="mb-4">
            If you delete this category, all the products of this category will disappear from frontstore
          </p>
          <div className="table-responsive">
          </div>
        </ModalBody>
        <ModalFooter>
          <Button type="button" color="secondary" onClick={toggle}>
            Close
          </Button>
          <Button type="button" color="danger" onClick={handleDelete}>
            Delete
          </Button>
        </ModalFooter>
      </div>
    </Modal>
  )
}

ProductDelete.propTypes = {
  toggle: PropTypes.func,
  isOpen: PropTypes.bool,
}

export default ProductDelete
