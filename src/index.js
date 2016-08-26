import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
//API key from google 
const API_KEY = 'AIzaSyBHqkxuoJvR3osmALz-AEV9Td464pXqqdc'

class App extends Component {
  //constructor runs first and sets up everthing for component
  constructor(props) { 
  super(props)
  
  this.state = { 
    videos: [], 
    selectedVieo: null 
  };
  
  YTSearch({key: API_KEY, term: 'react js'}, (videos) => {
  this.setState({ 
    videos: videos,
    selectedVideo: videos[0]
  });
    {/* same as this.setState({ videos: videos}); when using ES6 abilities*/}
})
  
  }
  
  //always have to have render inside a component
  render() { 
  return (
    <div>
      <SearchBar />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList 
        onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
        videos= { this.state.videos } />
    </div>
  )
  }
};



      //Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />,document.querySelector('.container'));