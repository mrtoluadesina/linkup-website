import React from "react";
import Wedding from "../../layout/Wedding";
import weddingpic from "../../images/wedding-pic.jpg";
import weddingpic2 from "../../images/wedding-pic2.jpg";
import weddingpic3 from "../../images/wedding-pic3.jpg";
import weddingpic4 from "../../images/wedding-pic4.jpg";
import weddingpic5 from "../../images/wedding-pic5.jpg";
import weddingpic6 from "../../images/wedding-pic6.jpg";
import weddingpic7 from "../../images/wedding-pic7.jpg";
import weddingpic8 from "../../images/wedding-pic8.jpg";


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
            <img src={weddingpic8} alt="" />
          </div>
        </div>
      </div>
    </Wedding>
  );
};

export default Photos;