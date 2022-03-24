import React from 'react'
import Masthead from '../shared/Masthead.jsx'
import {Link}  from "react-router-dom";

const SupplierVideos= () =>{
  return (

    <div>
      <Masthead />
      <div>Featured Videos
          <button>
            <Link to="/meet-our-vendors">BACK</Link>
          </button>
        <h2>
          Live Stream: Larry's Alpaca's at StarGazers Ranch!
        </h2>
        <iframe
          width="600"
          height="300"
          src="https://www.youtube.com/embed/41xXj9ZQ9n4"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
        <br/>
        <h2>
          Moira Rose Fruit Wine
        </h2>
        <iframe
          width="600"
          height="300"
          src="https://www.youtube.com/embed/400HBDiy-vo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
        <br/>
        <h2>
          Tour of Shrute Farms & Beets Hotel
        </h2>
        <iframe
          width="600"
          height="300"
          src="https://www.youtube.com/embed/sFkLbj789OQ"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
        <br/>
        <h2>
          BUSY Bee Farms
        </h2>
        <iframe
          width="600"
          height="300"
          src="https://www.youtube.com/embed/FCEl5ro8cDw"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </div>
  )
}

export default SupplierVideos