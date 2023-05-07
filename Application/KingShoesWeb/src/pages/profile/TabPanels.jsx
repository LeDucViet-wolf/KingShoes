import React from "react";
import TabAccount from "./TabAccount";
import TabEdit from "./TabEdit";

const TabPanels = () => {
    const customer = localStorage.getItem("customer-login")
        ? JSON.parse(localStorage.getItem("customer-login"))[0]
        : null;
   
    return (
        <div className="tab-content" id="profile-tab-content">
            <div
                className="tab-pane fade show active"
                id="v-pills-account"
                role="tabpanel"
                aria-labelledby="v-pills-account-tab"
            >
                <TabAccount customer={customer} />
            </div>
            <div
                className="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
            >
                bbb
            </div>
            <div
                className="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
            >
                ccc
            </div>
            <div
                className="tab-pane fade"
                id="v-pills-edit-profile"
                role="tabpanel"
                aria-labelledby="v-pills-edit-profile-tab"
            >
                <TabEdit/>
            </div>
        </div>
    );
}

export default TabPanels;