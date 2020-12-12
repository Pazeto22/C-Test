import React from "react";

import TextShape from "assets/images/bannershape.svg";

export default function SlideContent({ Banner, h3Content, h1Content }) {
  return (
    <div className="banner-wrapper">
      <div className="banner-text-container">
        <img src={TextShape} alt="Máscara Banner" />
        <div className="banner-text">
          <h3>{h3Content}</h3>
          <h1>{h1Content}</h1>
        </div>
      </div>
      <div className="banner-img">
        <img src={Banner} alt="Banner" />
      </div>
    </div>
  );
}
