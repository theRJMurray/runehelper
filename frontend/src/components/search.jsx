import React from 'react';

class Search extends React.Component {

  render() {
    return(
      <form onSubmit={this.props.handleSubmit}>
        <input type="text" onChange={this.props.handleChange}/>
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default Search;
