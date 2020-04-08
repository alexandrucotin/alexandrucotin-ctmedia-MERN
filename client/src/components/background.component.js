import React, { Component } from "react";
import Cerchio_Verde from '../imgs/svg/Cerchio_Verde.svg';
import Quadrato_Rosa from '../imgs/svg/Quadrato_Rosa.svg';
import Uguale_Rosa from '../imgs/svg/Uguale_Rosa.svg';
import Triangolo_Blu from '../imgs/svg/Triangolo_Blu.svg';
import Uguale_Verde from '../imgs/svg/Uguale_Verde.svg';
import Triangolo_Rosa from '../imgs/svg/Triangolo_Rosa.svg';
import Quadrato_Giallo from '../imgs/svg/Quadrato_Giallo.svg';
import Quadrato_Blu from '../imgs/svg/Quadrato_Blu.svg';
import Cerchio_Giallo from '../imgs/svg/Cerchio_Giallo.svg';
import Croce_Blu from '../imgs/svg/Croce_Blu.svg';
import Croce_Verde from '../imgs/svg/Croce_Verde.svg';

export default class Background extends Component {
  render() {
    return (
        <div className="background">
          <div className="set">
            <div className="first">
              <img src={Cerchio_Verde} alt="" />
            </div>
            <div className="second">
              <img src={Quadrato_Rosa} alt="" />
            </div>
            <div className="third">
            <img src={Uguale_Rosa} alt="" />
            </div>
            <div className="first">
              <img src={Triangolo_Blu} alt="" />
            </div>
            <div className="first">
              <img src={Uguale_Verde} alt="" />
            </div>
            <div className="second">
              <img src={Triangolo_Rosa} alt="" />
            </div>
            <div className="third">
              <img src={Quadrato_Giallo} alt="" />
            </div>
            <div className="third">
              <img src={Quadrato_Blu} alt="" />
            </div>
            <div className="first">
              <img src={Cerchio_Giallo} alt="" />
            </div>
            <div className="second">
              <img src={Croce_Blu} alt="" />
            </div>
            <div className="nineth">
              <img src={Croce_Verde} alt="" />
            </div>
          </div>
        </div>
    );
  }
}
