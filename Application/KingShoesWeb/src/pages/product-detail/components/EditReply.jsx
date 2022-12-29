import React, { useEffect, useState } from 'react';
import { useAppContext } from '@/hooks/useAppContext';
import { useAlert } from 'react-alert';
import { useDispatch } from "react-redux";
import { updateProductReview } from '@/stores/actions';

const EditReply = ({ ...props }) => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const { index, reloadReply, waitProductReply } = props;
    const { data: editReply, setData: setEditReply } = useAppContext('edit-reply');
    const [isInputReplyValid, setIsInputReplyValid] = useState(true);
    const [input, setInput] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    const handleSubmitEditReply = async (e) => {
        e.preventDefault();

        if (!input) {
            setIsInputReplyValid(false);
        } else {
            let replies = JSON.parse(waitProductReply.reply);
            let newReply = {
                text: input,
                customerId: editReply.customerId,
                status: editReply.status,
            };
            replies[index] = newReply;
            let reviewOrigin = {
                entityId: waitProductReply.entityId,
                productId: waitProductReply.productId,
                customerId: waitProductReply.customerId,
                comment: waitProductReply.comment,
                point: waitProductReply.point,
                reply: JSON.stringify(replies)
            };
            dispatch(updateProductReview(reviewOrigin));
            setIsEditing(true)
        }
    }

    useEffect(() => {
        if (waitProductReply
            && Object.keys(waitProductReply).length !== 0
            && Object.getPrototypeOf(waitProductReply) === Object.prototype
            && isEditing) {
            setInput('')
            setEditReply({})
            setIsEditing(false)
            reloadReply()
            alert.show("Edit Reply Success!", {
                type: 'success',
            })
        }
    }, [waitProductReply])

    const closeEditReply = (e) => {
        e.preventDefault();
        setEditReply({});
    }

    const handleInputChange = (e) => {
        if (e.currentTarget.value) {
            setIsInputReplyValid(true);
        } else {
            setIsInputReplyValid(false);
        }
        setInput(e.currentTarget.value);
    }

    useEffect(() => {
        if (editReply && Object.keys(editReply).length !== 0 && Object.getPrototypeOf(editReply) === Object.prototype) {
            setInput(editReply.text)
        } else {
            setInput('')
        }
    }, [editReply])

    return (
        <div className="reply--child mb-2">
            <img src="img/user.jpg" className="img-fluid mr-3 mt-1" style={{ width: "45px" }} />
            <form>
                <div className="form-group">
                    <textarea
                        value={input}
                        onChange={handleInputChange}
                        id="message"
                        cols="30"
                        rows="5"
                        className={`form-control ${isInputReplyValid ? '' : 'is-invalid'}`}>
                    </textarea>
                    <div className="invalid-feedback">
                        Please enter your reply.
                    </div>
                </div>
                <div className="form-group mb-0">
                    <input
                        onClick={handleSubmitEditReply}
                        type="submit"
                        defaultValue="Submit"
                        className="btn btn-primary px-3"
                    />
                    <input
                        onClick={closeEditReply}
                        type="button"
                        defaultValue="Cancel"
                        className="btn btn-primary px-3 ml-2"
                    />
                </div>
            </form>
        </div>
    )
}

export default EditReply