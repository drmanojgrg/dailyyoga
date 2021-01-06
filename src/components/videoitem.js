import React from 'react';
import "./videoitem.css"

const VideoItem=({video,onVideoSelect})=>{
  return(
   
    <div onClick={()=>{onVideoSelect(video)}} className='ui two column grid' >
      <div class="row ui segment"> 
          <div className='twelve column' >
              <img src={video.snippet.thumbnails.high.url} />
          </div> 
          <div className='four column videolistdescription' >
              <h3>  {video.snippet.title}</h3>

              <div className='textCenter'>  

              <p> {video.snippet.description} </p></div>
            
          </div>
      </div>
    </div>
   
)
}

export default VideoItem