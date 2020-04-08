import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './css/App.css';


import Navbar from "./components/navbar.component"
import PortfolioList from "./components/portfolio-list.component";
import Homepage from "./components/homepage.component";
import ChiSiamo from "./components/chi-siamo.component";
import Servizi from "./components/servizi.component";
import Contattaci from "./components/contattaci.component";
import Dashboard from "./components/dashboard.component";


const App = () => 
    <Router>
      <div className="">
      <Navbar />
      <br/>
      <Route path="/" exact component={Homepage} />
      <Route path="/chi-siamo" exact component={ChiSiamo} />
      <Route path="/servizi" exact component={Servizi} />
      <Route path="/portfolio" exact component={PortfolioList} />
      <Route path="/contattaci" exact component={Contattaci} />
      <Route path="/dashboard" exact component={Dashboard} />
      </div>
    </Router>
;

export default App;