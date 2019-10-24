import React from 'react';
import Stats from './components/stats';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      user: [],
      name: "jzerkk"
    }
  }

//{JSON.stringify(this.state.user)}

  componentDidMount(){
    let userId = '/search/' + this.state.name;
    fetch(userId)
    .then(res => res.json())
    .then((data) =>
      this.setState({ user: data }))
  }

  render() {
    return (
      <div>
        <Stats stats={this.state.user} />
      </div>
    );
  }
}

export default App;
