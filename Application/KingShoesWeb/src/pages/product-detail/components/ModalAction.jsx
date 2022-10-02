import React from 'react'

const ModalAction = ({ ...props }) => {
    const { idName, title, body, action, handleEvent } = props

    return (
        <>
            <div className="modal" id={`modal-review-${review.entityId}`}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Are you sure to delete?</h4>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                            >
                                &times;
                            </button>
                        </div>
                        <div className="modal-body">
                            {review.entityId}
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-dismiss="modal"
                                onClick={(e) => handleDeleteReview(e, review.entityId)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalAction