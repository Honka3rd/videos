import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Youtube from '../APIs/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends Component {
  state = {
    vids:[],
    selectedVid:null,
    submited:false
  }

  onTermSubmit= async (term)=>{
    const response = await Youtube.get(
      '/search',{
        params:{
          q:term
        }
      }
    );

  console.log(response.data.items);

  this.setState({vids:response.data.items});
  this.setState({selectedVid:response.data.items[0]})
  this.setState({submited:false});
  }

  onSelectHandler=(vid)=>{
    console.log("selected: ", vid)
    this.setState({selectedVid:vid})
    this.setState({submited:true});
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <div className="ui grid">
          <div className="row">
            <div className="eleven wide column" style={{marginTop:'10px'}}>
              <VideoDetail video={this.state.selectedVid} onSubmited={this.state.submited}/>
            </div>
            <div className="five wide column">
              <VideoList vids={this.state.vids} onSelect={this.onSelectHandler}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
