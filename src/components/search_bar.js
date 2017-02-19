import React,{Component} from 'react';

// const SearchBar = () => {
//     return <input />
// };

class SearchBar extends Component {
  //call constructor of the class and call Component's super
  constructor(props){
    super(props);

    this.state = {term: ''}; // term is set to an empty string
  }

  render() {
      return(
        <div className="search-bar">
          <input
            value={this.state.term}  //when state changes the value is changed with state's value
            onChange={(event) => this.setState({term: event.target.value})} //when user enters text, the value here then updates term with the new value which then re-rendesr the whole "render()" and then sets the value with the terms' new value
          />
        </div>
    );
  }

}

export default SearchBar;
