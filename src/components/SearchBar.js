

import React from 'react';
import "./searchbar.css"


export default class SearchBar extends React.Component{
  state={text:""}
  
  searchSubmit=(e)=>{
    e.preventDefault();
     this.props.searchTextGetter(this.state.text)

   }



  render(){
    return(
           
       
      
      <form onSubmit={this.searchSubmit}>
        
     
                <div className="ui invert fluid icon input personal">
                    <input 
                        type="text" 
                        placeholder="Search for other videos"
                        value={this.state.text}
                        onChange={(e)=>{this.setState({text:e.target.value})}}
                      />
                  <i className="search big icon personal"></i>

        
                </div> 
        </form>

    )
  }
}

