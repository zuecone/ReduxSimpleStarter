import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBqkuRI4j0Uf7P0Lnv6PyWwWgU7VYnoEz0';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    //remembering this happens asynchronously, so its populated once completed.
    YTSearch({key: API_KEY, term: 'drones'}, (videos) => {
//this is setting the state above this.state section so whatever comes back gets populated above.
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      //this.setState ({videos:videos});
    });
  }

  render() {
    return (
    <div>
      <SearchBar />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />

    </div>
  );
  }
}
//video is a variable that gets sent as a parameter to the child class in this case VideoDetail
//videos is a variable like the same as above except this child is VideoList
//<VideoList videos={this.state.videos} />
//the params that is passed above is called props

ReactDOM.render(<App />, document.querySelector('.container'));
