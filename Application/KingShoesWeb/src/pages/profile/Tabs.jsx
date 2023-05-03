import React from "react";

const Tabs = () => {
    return (
        <div
            className="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
        >
            <a
                className={`nav-link active my-nav-link`}
                id="v-pills-account-tab"
                data-toggle="pill"
                href="#v-pills-account"
                role="tab"
                aria-controls="v-pills-account"
                aria-selected="true"
            >
                My Account
            </a>
            <a
                className={`nav-link my-nav-link`}
                id="v-pills-profile-tab"
                data-toggle="pill"
                href="#v-pills-profile"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
            >
                My Orders
            </a>
            <a
                className={`nav-link my-nav-link`}
                id="v-pills-messages-tab"
                data-toggle="pill"
                href="#v-pills-messages"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
            >
                My Wish List
            </a>
            <hr />
            <a
                className={`nav-link my-nav-link`}
                id="v-pills-edit-profile-tab"
                data-toggle="pill"
                href="#v-pills-edit-profile"
                role="tab"
                aria-controls="v-pills-edit-profile"
                aria-selected="false"
            >
                Account Information
            </a>
        </div>
    );
}

export default Tabs;