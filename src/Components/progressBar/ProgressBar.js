import React from "react";
import "./ProgressBar.css";
const ProgressBar = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="progress blue">
              <span className="progress-left">
                <span className="progress-bar"></span>
              </span>

              <span className="progress-right">
                <span className="progress-bar"></span>
              </span>
              <div className="progress-value">90%</div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="progress blue">
              <span className="progress-left">
                <span className="progress-bar"></span>
              </span>
              <span className="progress-right">
                <span className="progress-bar"></span>
              </span>
              <div className="progress-value">70%</div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="progress blue">
              <span className="progress-left">
                <span className="progress-bar"></span>
              </span>
              <span className="progress-right">
                <span className="progress-bar"></span>
              </span>
              <div className="progress-value">45%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
