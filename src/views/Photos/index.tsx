import React from "react";
import Wedding from "../../layout/Wedding";
import weddingpic from "../../images/wedding-pic.png";
import weddingpic2 from "../../images/wedding-pic2.png";
import weddingpic3 from "../../images/weddingpic3.png";
import weddingpic4 from "../../images/weddingpic4.png";
import weddingpic5 from "../../images/wedding-pic5.png";
import weddingpic6 from "../../images/weddingpic6.png";
import weddingpic7 from "../../images/wedding-pic7.png";


import "./index.scss";

const Photos = () => {
  return (
    <Wedding>
      <div className="wrapper">
        <div className="container-grid">
          <div className="horizontal">
            <img src={weddingpic} alt="" />
          </div>
          <div className="vertical">
            <img src={weddingpic2} alt="" />
          </div>
          <div>
            <img src={weddingpic3} alt="" />
          </div>
          <div className="horizontal">
            <img src={weddingpic4} alt="" />
          </div>
          <div className="horizontal">
            <img src={weddingpic6} alt="" />
          </div>
          <div className="vertical">
            <img src={weddingpic5} alt="" />
          </div>
          <div className="vertical">
            <img src={weddingpic7} alt="" />
          </div>
          <div className="horizontal">
            <img src={weddingpic6} alt="" />
          </div>
        </div>
      </div>
    </Wedding>
  );
};

export default Photos;