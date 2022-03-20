import { useState } from 'react'
import Fade from 'react-reveal/Fade';

import '../assets/styles/blog.scss';

function Blog() {
  return (
    <div className="blog">
      <div>Blog</div>

      <div className="entries">
        <ul>
          <li className="entry first">
            <div className="date">2022-03-20</div>
            <div className="title"><a href="">Using an xbox tv tuner with tvheadend and plex on debian</a></div>
          </li>
          <li className="entry">
            <div className="date">2022-03-20</div>
            <div className="title"><a href="">monitoring a fronius solar inverter via grafana using telegraf and influxdb </a></div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Blog
