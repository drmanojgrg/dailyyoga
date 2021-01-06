import React from 'react';

import ReactDOM from 'react-dom'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoPlayer from './components/VideoPlayer'
import axios from "./apis/youtube"

import "./main.css"
import Webcam from "react-webcam";


class App extends React.Component{

    //forgot to set state/very important to keep log of history of any data or search andto pass the new state
    //which rerenders component


    state={
        videosArray:[], 
        selectedVideo:null
    }
    
    componentDidMount(){
        this.searchTextGetter({text:"10 minutes yoga"})
      }

      ////////////////////
    searchTextGetter= async (searchText)=>{
        console.log(searchText, "from app.index");
       
       const res= await axios.get("/search", {
            params:{
               q:searchText, 
               type:"video"
            }
        })
 
            this.setState({
                        videosArray: res.data.items,  
                        selectedVideo: res.data.items[Math.floor(Math.random()*res.data.items.length)]
                    
            })
        
        
    
    
    }


    ////////////////////
    
    onVideoSelect=(video)=>{
       
        this.setState({
            selectedVideo:video
        })
    }


    render(){
        return(
           
    <div>  
            <h1 class="ui block header">
            10 minutes Random Yoga Daily: Stay healthy
          </h1>

                <SearchBar searchTextGetter={this.searchTextGetter}/>

      

                <div className='container-fluid'> 
                        <div className='col-sm-6'> 

                        <div className='embed-container'>  
                                <VideoPlayer selectedVideo={this.state.selectedVideo}/>

                                </div></div> 
                            

                                <div className='col-sm-6'> 
    
                                   <div className='embed-container'> 
                                   <Webcam id='video-stream'/>
                                    </div>
                                </div>
                            
                    </div> 
               
            <div className='videolist'> 

                < VideoList 
                videosArray={this.state.videosArray} 
                onVideoSelect={this.onVideoSelect}
                />

            </div>
    </div>

            
        )
    }
}

ReactDOM.render(
<App/>, document.getElementById('root'))