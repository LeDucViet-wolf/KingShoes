import React, { useEffect, useRef } from "react";
import { Breadcrumb } from "@/components";
import { useNavigate } from "react-router-dom";
import Tabs from "./Tabs";
import TabPanels from "./TabPanels";
import "@/assets/css/profile.css";
import styles from "./style.module.css";

const Profile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("customer-login")) {
      navigate("/");
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Breadcrumb pageNameChild="Profile" />
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-lg-12">
            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3"></span>
            </h5>
            <div className="bg-light p-30 mb-5">
              <div className={`row`}>
                <div className={`col-sm-3 col-12 ${styles['my-col']}`}>
                  <Tabs />
                </div>
                <div className={`col-sm-9 col-12`}>
                  <TabPanels />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
