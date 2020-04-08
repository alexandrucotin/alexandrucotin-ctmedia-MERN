import React, { Component } from "react";
import axios from "axios";
import Background from "./background.component";



const Lavoro = props => (
  <div className="container">
  <img src="imgs/thumbnail/bagel.jpg" alt="" />
  <p className="sottotitolo">{props.lavoro.title}</p>
</div>
)


export default class PortfolioList extends Component {
  constructor(props) {
    super(props);

    this.state = { lavori: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/portfolio")
      .then((response) => {
        this.setState({ lavori: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  lavoroList() {
    return this.state.lavori.map(currentlavoro => {
      return <Lavoro lavoro={currentlavoro} key={currentlavoro._id}/>;
    })
  }

  render() {
    return (
      <div>
        <Background />
        <main data-barba="container" data-barba-namespace="home">
          <div className="portfolio heading-container">
            <div className="upper__container">
              <p className="title">
                <span>portfolio</span>
              </p>
            </div>
            <div className="lower__containers">
              <div className="set_containers">
              { this.lavoroList() }
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
