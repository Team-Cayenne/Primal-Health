import React from 'react'

const VideoDetail= () =>{
  return (
    <div>Featured Videos
      <div>
        <div>
          Yoga
        </div>
        <iframe
          width="600"
          height="300"
          src="https://www.youtube.com/embed/Vry_VI76_Es"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
      <br/>
      <div>
        <div>
          Zumba
        </div>
        <iframe
          width="600"
          height="300"
          src="https://www.youtube.com/embed/drdrLQeXD3s"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
      <br/>
      <div>
        <div>
          Disco Funk
        </div>
        <iframe
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
  )
}

export default VideoDetail