import React from 'react';
import MainContent from './components/MainContent';
import NavList from './components/NavList';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

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
    id: 1,
    name: "legendword.github.io",
    desc: "This project, obviously."
  },
  {
    id: 2,
    name: "snake-game",
    desc: "Singleplayer snake game."
  }
];

export default App;
