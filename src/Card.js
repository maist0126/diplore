import React, { useState } from 'react';
import love_y from './img/love_y.png';
import love_n from './img/love_n.png';
import './App.css';

function Component(props) {
    const [toggle, setToggle] = useState(true);

  return (
    <div className="component">
        <a href={props.youtube}>
            <img src={props.src} alt="thumnails" width="100%"></img>
        </a>
        <div className="infomation">
            <img className="profile" src={props.profile} alt="profile" width="38px"></img>
            <div className="user">
                <div className="video_title">
                    {props.video_title}
                </div>
                <div className="name">
                    {props.name}
                </div>
            </div>
            <div className="love" onClick={()=>{setToggle(!toggle); console.log(toggle)}}>
                <img src={love_n} alt="profile" width="32px" style={{display: toggle ? "block" : "none"}}></img>
                <img src={love_y} alt="profile" width="32px" style={{display: toggle ? "none" : "block"}}></img>
            </div>
        </div>
    </div>
  );
}

export default Component;
