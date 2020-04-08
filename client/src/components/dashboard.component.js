import React, { Component } from "react";
import Background from "./background.component";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import EditLavori from "./components/edit-lavori.component";

const Lavoro = (props) => (
  <tr>
    <td>{props.lavoro.title}</td>
    <td>
      |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteLavoro(props.lavoro._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export default class ChiSiamo extends Component {
  constructor(props) {
    super(props);

    this.deleteLavoro = this.deleteLavoro.bind(this);

    this.state = { lavori: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/portfolio/")
      .then((response) => {
        this.setState({ lavori: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteLavoro(id) {
    axios.delete("http://localhost:5000/dashboard/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      lavori: this.state.lavori.filter((el) => el._id !== id),
    });
  }

  lavoriList() {
    return this.state.lavori.map((currentlavoro) => {
      return (
        <Lavoro
          lavoro={currentlavoro}
          deleteLavoro={this.deleteLavoro}
          key={currentlavoro._id}
        />
      );
    });
  }

  render() {
    return (
      <Router>
        <div>
        <Route path="/dashboard/lavori" exact component={EditLavori} />
          <Background />
          <main data-barba="container" data-barba-namespace="home">
            <div className="dashboard heading-container">
              <p className="title">dashboard</p>
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th>titolo</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>{this.lavoriList()}</tbody>
              </table>
            </div>
          </main>
        </div>
      </Router>
    );
  }
}
