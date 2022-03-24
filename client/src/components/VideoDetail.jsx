
import React from 'react'
import Masthead from '../shared/Masthead.jsx'
import {Link}  from "react-router-dom";


const VideoDetail = () => {
  return (
    <div>
      <Masthead />
      <div>
        <h2 className="video-detail-title">Featured Videos</h2>
        <br />
        <div className="video-detail-intro">
          At Primal Health, a fitness focused, health conscious lifestyle is the number one priority for both ourselves and our community. Below are some of our favorite fitness videos! Enjoy!
          <button>
            <Link to="/nutrition-health">BACK</Link>
          </button>

        </div>
        <br />
        <div className="video">
          <br />
          <h3 style={{ textAlign: "center" }}>Yoga</h3>
          <br />
          <iframe
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            width="600"
            height="300"
            src="https://www.youtube.com/embed/Vry_VI76_Es"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
          <br />
          <br />
        </div>
        <br />
        <div>
          <br />
          <h3 style={{ textAlign: "center" }}>Zumba</h3>
          <br />
          <iframe
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            width="600"
            height="300"
            src="https://www.youtube.com/embed/drdrLQeXD3s"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
          <br />
          <br />
        </div>
        <br />
        <div>
          <br />
          <h3 style={{ textAlign: "center" }}>Disco Funk</h3>
          <br />
          <iframe
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            width="600"
            height="300"
            src="https://www.youtube.com/embed/cgDppkLnImI"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </div>
      <br /><br /><br /><br />
    </div>
  );
};

export default VideoDetail;
