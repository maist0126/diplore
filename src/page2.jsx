import React from 'react';
import logo from './img/logo.png';
import './App.css';
import Card from './Card.js';
import video1 from './img/video1.png';
import video2 from './img/video2.png';
import video3 from './img/video3.png';
import video4 from './img/video4.png';
import video5 from './img/video5.png';

import user1 from './img/user1.png';
import user2 from './img/user2.png';
import user3 from './img/user3.png';
import user4 from './img/user4.png';



function Page2() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src={logo} alt="logo" width = "50px"></img>
        <div className="title">
          #토리도
        </div>
      </header>
      <div className="wrapper">
        <Card youtube="https://youtu.be/qCggoEhJOyk" src={video4} profile={user4} video_title="직접 구운 와플 먹어보기" name="yoriASMR"></Card>
        <Card youtube="https://youtu.be/AtvcsaUGU5A" src={video5} profile={user2} video_title="13가지 라탄바구니 소리" name="gosam33"></Card>
      </div>
    </div>
  );
}

export default Page2;
