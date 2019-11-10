import React from 'react';
import logo from './img/logo.png';
import './App.css';
import Card from './Card.js';
import video1 from './img/video1.png';
import video2 from './img/video2.png';
import video3 from './img/video3.png';

import user1 from './img/user1.png';
import user2 from './img/user2.png';
import user3 from './img/user3.png';


function Page1() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src={logo} alt="logo" width = "50px"></img>
        <div className="title">
          #비모
        </div>
      </header>
      <div className="wrapper">
        <Card youtube="https://youtu.be/KRrhZ38rH9A" src={video1} profile={user1} video_title="파리여행 브이로그" name="smjlee"></Card>
        <Card youtube="https://youtu.be/awWWyq_6NTA" src={video2} profile={user2} video_title="Study with Me 카페에서 공부하기" name="gosam33"></Card>
        <Card youtube="https://youtu.be/wEC1UUF6OfE" src={video3} profile={user3} video_title="고양이한테 혼남" name="jip4md"></Card>
      </div>
    </div>
  );
}

export default Page1;
