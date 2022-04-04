import React from "react";
import "./Que.css";
import { useState } from "react";

export default function Que() {
  const [changeColorCode, setchangeColorCode] = useState(true);
  const [changeColorSubmit, setchangeColorSubmit] = useState(true);
  const handleClick = () => {
    if (changeColorCode) {
      setchangeColorCode(false);
    } else {
      setchangeColorCode(true);
    }
  };
  const handleClick2 = () => {
    if (changeColorSubmit) {
      setchangeColorSubmit(false);
    } else {
      setchangeColorSubmit(true);
    }
  };
  return (
    <div className="container-wrapper">
      <div className="container-fluid ">
        <div className="row ">
          <div className="col-sm-12 col-md-12 col-lg-12 ">
            <h3>ASK THE COMMUNITY</h3>
            <a href="###">
              <p>Go To Questions</p>
            </a>
          </div>
          <div className="text-area-wrapper">
            <div className="title">
              <div className=" col-sm-12 col-md-12 col-lg-12  ">
                <textarea
                  placeholder="Your question title here"
                  rows="2"
                  maxLength="70"
                ></textarea>
              </div>
            </div>
            <div className="Description">
              <div className=" col-sm-12 col-md-12 col-lg-12 ">
                <textarea
                  placeholder=" question description"
                  rows="4"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="button-area">
            <div className=" col-sm-12 col-md-6 col-lg-6">
              <button
                className="color"
                // {
                //   changeColorCode ? "colorBlueCode" : "colorOrangeCode"
                // }
                // onClick={handleClick}
                type="button"
              >
                Code Block
              </button>
            </div>
            <div className=" col-sm-12 col-md-6 col-lg-6">
              <button
                className="color"
                // {
                //   changeColorSubmit ? "colorBlueSubmit" : "colorOrangeSubmit"
                // }
                // onClick={handleClick2}
                type="button"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
