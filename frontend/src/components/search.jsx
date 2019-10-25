import React from 'react';

class Search extends React.Component {

  componentDidUpdate(prevProps, prevState) {

  }

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
