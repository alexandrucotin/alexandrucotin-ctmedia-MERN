import React, { Component } from "react";
import { Link } from "react-router-dom";
import Background from "./background.component";
import camera from "../imgs/icons/camera.svg";
import web from "../imgs/icons/web.svg";
import graphic from "../imgs/icons/graphic.svg";

export default class Servizi extends Component {
  render() {
    return (
      <div>
        <Background />
        <main data-barba="container" data-barba-namespace="home">
          <div className="servizi heading-container">
            <div className="upper__container">
              <p className="title">
                <span>servizi</span>
              </p>
            </div>
            <div className="lower__containers">
              <div className="set_containers">
                <div className="container">
                  <img src={camera} alt="" />
                  <p className="descrizione">
                    product photography, videomakig, video editing, photoshoting
                  </p>
                </div>
                <div className="container">
                  <img src={web} alt="" />
                  <p className="descrizione">
                    web design, SEO, best practices, web developer
                  </p>
                </div>
                <div className="container">
                  <img src={graphic} alt="" />
                  <p className="descrizione">
                    logo design, advertisements, graphics
                  </p>
                </div>
              </div>
              <div className="frase_sotto">
                <p>
                  Vai al nostro
                  <Link to="/portfolio" className="underline--magical">
                    {" "}
                    portfolio!
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
