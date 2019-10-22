import React from 'react';
import Stats from './components/stats';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      user: []
    }
  }

  componentDidMount(){
    fetch('/search/jZERKk')
    .then(res => res.json())
    .then(userStats => this.setState({ userStats }))
  }

  render(){
    return (
      <div>
        <p>Working</p>
        <Stats stats={this.state.user}/>
      </div>
    );
  }
}

export default App;
