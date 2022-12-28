import React, { useState } from "react";
import { useAppContext } from "@/hooks/useAppContext"
import EditReply from "./EditReply";

const ReplyItem = ({ ...props }) => {
    const { item, index, customerLogin } = props;
    const { data: editReply, setData: setEditReply } = useAppContext('edit-reply');

    const openEditReply = (e) => {
        e.preventDefault();
        setEditReply({ ...item, customer: customerLogin[0], index: index });
    }

    return (
        <div key={index} className="reply--child reply--child__done p-0">
            <img src="img/user.jpg" className="img-fluid mr-3 mt-1" style={{ width: "45px" }} />
            <div className="information">
                {
                    item.customer
                        ? <h6 className="title" key={`customer-${customerLogin[0].entityId}`}>
                            <span className="name">{`${item.customer.firstName} ${item.customer.lastName}`}</span>
                            {
                                customerLogin && customerLogin[0].entityId === item.customerId
                                    ? <div className="tools" key={`tool-${customerLogin[0].entityId}`}>
                                        <div className="dropdown tool-comment">
                                            <button className="dropdown-toggle"
                                                type="button" id="dropdownMenuButton"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false">
                                                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#" onClick={openEditReply}>Edit</a>
                                                <a
                                                    data-toggle="modal"
                                                    className="dropdown-item"
                                                    href="#"
                                                    data-target={`#modal-reply-${index}`}
                                                >
                                                    Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    : ''
                            }
                        </h6>
                        : ''
                }
                <p>{item.text}</p>
            </div>
        </div>
    )
}

export default ReplyItem