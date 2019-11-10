import React from 'react';
import logo from './img/logo.png';
import './App.css';
import notice from './img/notice.png';



function Page3() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src={logo} alt="logo" width = "50px"></img>
        <div className="title">
          #모나
        </div>
      </header>
      <div className="wrapper">
        <img src={notice} alt="notice" width="100%"></img>
      </div>
    </div>
  );
}

export default Page3;
