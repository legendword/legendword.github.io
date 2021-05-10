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
    name: "blog",
    url: "https://github.com/legendword/blog",
    desc: "Open-source, elegant blogging system made with Quasar. Features all core functionalities of publishing blog posts, browsing posts, and interacting with authors.",
    data: {
      StartDate: "Feb. 24, 2021",
      Version: "0.2.1",
      Status: "Contemporary, Open Beta"
    }
  },
  {
    name: "games",
    url: "https://github.com/legendword/games",
    desc: "Legendword Games, multiplayer card games created with Quasar and SocketIO.",
    data: {
      StartDate: "Mar. 31, 2021",
      Version: "1.1.1",
      Status: "Contemporary, Open Beta"
    }
  },
  {
    name: "arcade",
    url: "https://github.com/legendword/arcade",
    desc: "Legendword Arcade is an online mini-game platform written with React. I intended to collect several popular mini-games in one place for easy access to all of them. When finished, this platform will be capable of adding others as friends and competing online.",
    data: {
      StartDate: "Nov. 23, 2019",
      Version: "0.2.1",
      Status: "Contemporary"
    }
  },
  {
    name: "legendword.github.io",
    url: "https://github.com/legendword/legendword.github.io",
    desc: "Source code for this GitHub pages site.",
    data: {
      StartDate: "Sep. 15, 2019",
      Version: "1.0.210510",
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
