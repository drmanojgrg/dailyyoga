import React from 'react'
import VideoItem from "./videoitem"





const VideoList=({videosArray,onVideoSelect})=>{
  const renderedList=videosArray.map((video)=>{
    
    return  <VideoItem video={video} onVideoSelect={onVideoSelect}/>
  })
  return(
      <div > 
        {renderedList}
      </div>
)
}

export default VideoList