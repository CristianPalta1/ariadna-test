import React, { useState } from "react";

import { sliderList } from "../../assets/constants/Data";

//Styles
import "./styles/styles.scss";

const LIST_BTN = [
  {
    id: "0",
    text: "WATCH NOW",
  },
  {
    id: "1",
    text: "MORE INFO",
  },
];

export default function Carousel() {
  const [banner, setBanner] = useState("0");
  const [buttonActive, setButtonActive] = useState("0");

  return (
    <div className="carousel">
      <img
        src={sliderList[banner].urlImage}
        style={{ objectFit: "cover", height: "100%", width: "100%" }}
        alt = {sliderList[banner].title}
      />
      <div className="content-carousel">
        <div className="slider">
          <div className="text">
            <div className="content-text">
              <div className="container-title">
                <h1 className="title">{sliderList[banner].title}</h1>
              </div>
              <div className="container-text">
                <p className="resume">{sliderList[banner].resume} </p>
              </div>
              <div className="btn-container">
                {LIST_BTN.map((info) => (
                  <button
                  type = "button"
                    key={info.id}
                    className={buttonActive === info.id ? "active2" : ''}
                    onClick={() => {
                      setButtonActive(info.id);
                    }}
                  >
                    {info.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="change-img">
            <div className="container-switch">
              <div
                className={
                  sliderList[banner].id === sliderList[0].id ? "active3": ''
                }
                // className="container-btns active"
                onClick={() => {
                  setBanner(sliderList[0].id);
                }}
              >
                <div
                  className={
                    sliderList[banner].id === sliderList[0].id ? "active4": ''
                  }
                ></div>
              </div>
              <div
                className={
                  sliderList[banner].id === sliderList[1].id ? "active3": ''
                }
                onClick={() => {
                  setBanner(sliderList[1].id);
                }}
              >
                <div
                  className={
                    sliderList[banner].id === sliderList[1].id ? "active4": ''
                  }
                ></div>
              </div>
              <div
                className={
                  sliderList[banner].id === sliderList[2].id ? "active3": ''
                }
                onClick={() => {
                  setBanner(sliderList[2].id);
                }}
              >
                <div
                  className={
                    sliderList[banner].id === sliderList[2].id ? "active4": ''
                  }
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
