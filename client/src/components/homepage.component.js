import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Background from './background.component';

export default class Homepage extends Component {

  render() {
    return (
      <div>
        <Background />
        <main data-barba="container" data-barba-namespace="home">
          <div className="homepage heading-container">
            <div className="upper__title is-animated">
              <p className="title">
                <span>crea</span> la <br />
                tua <span>identità</span> <br />
                <span>online</span>
              </p>
            </div>
            <div className="lower__title">
              <div className="container">
                <p>Sei curioso cosa offriamo ai nostri clienti?</p>
                <Link to="/servizi" className="underline--magical">scopri di più</Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
