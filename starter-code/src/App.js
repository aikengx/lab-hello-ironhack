import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navContainer">
        <div className="navIcon">
          <img src="./images/ironhack-logo.png"></img>
        </div>
        <div className="navIcon">
          <img src="./images/hamburger.png"></img>
        </div>
        </div>
        <div className="mainContainer">
         <div className="mainContent">
          <h1>Say hello to ReactJS</h1>
          <p>You will learn a Frontend framework from scratch, to become a Ninja Developer.</p>
          <button>Awesome!</button>
         </div>
          
        </div>
        <div className="footer">
          <div>
            <img src="./images/icon1.png"></img>
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div>
            <img src="./images/icon2.png"></img>
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div>
            <img src="./images/icon3.png"></img>
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the components.</p>
          </div>
          <div>
            <img src="./images/icon4.png"></img>
            <h3>JSX</h3>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;