import React, { Component } from "react";
import Background from "./background.component";

export default class ChiSiamo extends Component {
  render() {
    return (
      <div>
        <Background />
        <main data-barba="container" data-barba-namespace="home">
          <div className="chi-siamo heading-container">
            <div className="upper__title">
              <p className="title">
                <span>c</span>hi<br />
                siamo
              </p>
            </div>
            <div className="lower__title">
              <div className="container">
                <p>
                  ctmedia è un’azienda creativa e dinamica capace di creare da
                  zero l’identità di cui il cliente ha bisogno.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
