import React from 'react';
import '../assets/styles/home.scss';

import Logo from '../assets/img/k.svg?component'; // Import SVG as Component
import Leaves from '../assets/img/leaves-c.png';

function Home() {
  return (
    <div className="home">

      <div className="title">
        <div className="logo">
          <Logo fill="pink"/>
        </div>

        <div className="name">Kevin Le</div>
        <div className="tag">Software<br/>Engineer</div>
      </div>

      <div className="content">
        <div>
          <ul>
            <li>Blog</li>
            <div className="links">
              <li>Email</li>
              <li>Twitter</li>
              <li>GitHub</li>
              <li>LinkedIn</li>
            </div>
            <li>Resume</li>
          </ul>
        </div>
      </div>

      <img id="leaves" src={Leaves}/>
      <div className="switch">OFF</div>
    </div>
  )
}

export default Home
