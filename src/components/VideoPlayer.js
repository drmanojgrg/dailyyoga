import React from 'react';


const VideoPlayer=({selectedVideo})=>{

    if(!selectedVideo){
        return <div> Loading  </div>
    }
 
 const videoSrc=`https://www.youtube.com/embed/${selectedVideo.id.videoId}`
  return(

         <iframe title="Video Player"  src={videoSrc} frameborder='0' allowfullscreen/>
    
)
}

export default VideoPlayer;