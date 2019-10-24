import React from 'react';
// import Stats from './components/stats';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      user: []
    }
  }

  componentDidMount(){
    // let userId = '/search/' + this.state.name
    fetch('/search/jZERKk')
    .then(res => res.json())
    .then((data) =>
      this.setState({ user: data }))
  }

  render() {
    return (
      <div>

        {JSON.stringify(this.state.user)}
      </div>
    );
  }
}

export default App;
