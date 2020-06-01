import React from 'react';

class SearchBar extends React.Component {
  state = {searchTerm: "Search for a video..."};

  onInputChange = (event) => {
    this.setState({ searchTerm: event.target.value});
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    //ToDo: Make Sure you call callback function from parent component
  };

  render(){
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input 
              value={this.state.searchTerm} 
              type="text"
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;