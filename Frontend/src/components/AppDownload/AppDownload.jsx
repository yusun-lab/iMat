import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Download <br /> iMat App
      </p>
      <div className="app-download-platforms">
        <img src={assets.playStore} alt="play store" />
        <img src={assets.appStore} alt="app store" />
      </div>
    </div>
  );
};

export default AppDownload;
