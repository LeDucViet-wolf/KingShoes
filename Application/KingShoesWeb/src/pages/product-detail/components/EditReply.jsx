import React, {useRef} from 'react'

const EditReply = ({ ...props}) => {
    const { boxCurrentReply, inputCurrentReply} = props

    return (
        <div ref={boxCurrentReply} className="reply--child d-none">
            <img src="img/user.jpg" className="img-fluid mr-3 mt-1" style={{ width: "45px" }} />
            <form>
                <div className="form-group">
                    <textarea
                        ref={inputCurrentReply}
                        // onChange={inputEditReplyChange}
                        id="message"
                        cols="30"
                        rows="5"
                        // className={`form-control ${isInputReplyValid ? '' : 'is-invalid'}`}
                        >
                    </textarea>
                    <div className="invalid-feedback">
                        Please enter your reply.
                    </div>
                </div>
                <div className="form-group mb-0">
                    <input
                        // onClick={}
                        type="submit"
                        defaultValue="Leave Your Review"
                        className="btn btn-primary px-3"
                    />
                    <input
                        // onClick={}
                        type="button"
                        defaultValue="Cancel"
                        className="btn btn-primary px-3"
                    />
                </div>
            </form>
        </div>
    )
}

export default EditReply