import React from 'react';
import MainContent from './components/MainContent';
import NavList from './components/NavList';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, NavLink } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <div className="container">
            <h1 style={{marginTop:"30px"}}>Legendword Open Source</h1>
            <p className="lead">A comprehensive list of my open source projects.</p>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <NavLink 
                    to="/intro" 
                    className="list-group-item list-group-item-action" 
                    activeClassName="active"
                >
                    Introduction
                </NavLink>
                <hr />
                <NavList data={data} />
              </div>
              <div className="col-sm-9">
                <MainContent data={data} />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

const data = [
  {
    name: "legendword.github.io",
    url: "https://github.com/legendword/legendword.github.io",
    desc: "This project, obviously.",
    data: {
      StartDate: "Sep. 15, 2019",
      Version: "1.0.191129",
      Status: "Contemporary, Stable"
    }
  },
  {
    name: "snake-game",
    url: "https://github.com/legendword/snake-game",
    desc: "Singleplayer snake game.",
    data: {
      StartDate: "Oct. 29, 2019",
      Version: "1.0.191110",
      Status: "Contemporary, Stable"
    }
  },
  {
    name: "Better-Google-Translate",
    url: "https://github.com/legendword/Better-Google-Translate",
    desc: "A Tampermonkey script to enhance the Google Translate web experience.",
    data: {
      StartDate: "Nov. 27, 2019",
      Version: "0.3",
      Status: "Contemporary, Open Beta"
    }
  },
  {
    name: "LVocab",
    url: "https://github.com/legendword/LVocab",
    desc: "An online vocabulary learning tool that helps with memorizing new words as a language learner.",
    data: {
      StartDate: "Jan. 24, 2019",
      Version: "0.1.01",
      Status: "Open Beta"
    }
  }
];

export default App;
