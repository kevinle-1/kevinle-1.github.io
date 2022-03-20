import React from 'react';
import '../assets/styles/home.scss';
import Fade from 'react-reveal/Fade';

import { Link } from "react-router-dom";

function Home() {
  const links = [
    ["mailto:contact@kevinle.com.au", "Email"],
    ["https://twitter.com/kevinle_1", "Twitter"],
    ["https://github.com/kevinle-1", "GitHub"],
    ["https://www.linkedin.com/in/kevinle14", "LinkedIn"],
  ]

  return (
    <div className="home">
      <Fade left cascade duration={400}>

      <div className="title">
        <div className="name accent">Kevin Le</div>
        <div className="tag">Software</div>
        <div className="tag2">Engineer</div>
      </div>

      <div className="content">
        <div>
          <div><Link to="/blog">Blog</Link></div>

          <div className="links">
            {
              links.map(function (l) {
                return <div>
                  <a href={l[0]} target="_blank">
                    {l[1]}
                  </a>
              </div>
              })
            }
          </div>

          <div><a href="#">Resume</a></div>
        </div>
      </div>
      </Fade>
    </div>
  )
}

export default Home
