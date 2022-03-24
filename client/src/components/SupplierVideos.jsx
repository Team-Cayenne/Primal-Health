import React from "react";
import Masthead from "../shared/Masthead.jsx";
import { Link } from "react-router-dom";

const SupplierVideos = () => {
  return (
    <div>
      <Masthead />
      <div>
        <h2
          style={{ marginTop: "3%", marginBottom: "2%", textAlign: "center" }}
        >
          Featured Videos
        </h2>
        <div style={{ textAlign: "center" }}>
          <button className="update-user-button">
            <Link to="/meet-our-vendors">BACK</Link>
          </button>
        </div>
        <br />
        <br />
        <br />
        <h3 style={{ textAlign: "center" }}>BUSY Bee Farms</h3>
        <br />
        <iframe
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          width="600"
          height="300"
          // src="https://www.youtube.com/embed/FCEl5ro8cDw"
          src="https://www.youtube.com/embed/HOgKDQp2BHE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <br />
        <br />
        <br />
        <br />
        <h3 style={{ textAlign: "center" }}>
          Live Stream: Larry's Alpaca's at StarGazers Ranch!
        </h3>
        <br />
        <iframe
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          width="600"
          height="300"
          src="https://www.youtube.com/embed/41xXj9ZQ9n4"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
        <br />
        <br />
        <br />
        <br />
        <h3 style={{ textAlign: "center" }}>Moira Rose Fruit Wine</h3>
        <br />
        <iframe
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          width="600"
          height="300"
          src="https://www.youtube.com/embed/400HBDiy-vo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
        <br />
        <br />
        <br />
        <br />
        <h3 style={{ textAlign: "center" }}>
          Tour of Shrute Farms & Beets Hotel
        </h3>
        <br />
        <iframe
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          width="600"
          height="300"
          src="https://www.youtube.com/embed/sFkLbj789OQ"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default SupplierVideos;
