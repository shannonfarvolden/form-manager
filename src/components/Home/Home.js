import React from "react";
import logo from "../../images/logo.png";

const Home = ({ config }) => {
  return (
    <div className="Home">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Broadridge Inform Config</h1>
      </header>
      <p>Best team ever!</p>
    </div>
  );
};

export default Home;
