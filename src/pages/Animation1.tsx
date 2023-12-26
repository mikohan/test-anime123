import { FunctionComponent } from "react";
import "./Animation1.css";

const Animation1: FunctionComponent = () => {
  return (
    <div className="animation">
      <div className="stone">STONE</div>
      <div className="stone1">STONE</div>
      <img className="layer-10-icon" alt="" src="/layer-10@2x.png" />
      <div className="animation-child" />
      <img className="layer-1-icon" alt="" src="/layer-1@2x.png" />
      <img className="layer-11-icon" alt="" src="/layer-11@2x.png" />
      <div className="logo-parent">
        <div className="logo">LOGO</div>
        <img className="group-child" alt="" src="/vector-1@2x.png" />
      </div>
      <div className="home">HOME</div>
      <div className="about">ABOUT</div>
      <div className="products">PRODUCTS</div>
      <div className="contacts">CONTACTS</div>
      <div className="ellipse-parent">
        <div className="group-item" />
        <div className="en">EN</div>
      </div>
      <div className="animation-item" />
      <img className="animation-inner" alt="" src="/group-3@2x.png" />
      <div className="rectangle-parent">
        <div className="group-inner" />
        <div className="bring-it-to">BRING IT TO ME</div>
      </div>
    </div>
  );
};

export default Animation1;
