import React from 'react'

const ModalAction = ({ ...props }) => {
    const { idName, title, body, action, handleEvent } = props

    return (
        <div className="modal" id={idName} key={`modal-${idName}`}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">{title}</h4>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                        >
                            &times;
                        </button>
                    </div>
                    <div className="modal-body">
                        {body}
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
                            {
                            ...
                            action == 'delete'
                                ? { onClick: handleEvent }
                                : {}
                            }
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalAction