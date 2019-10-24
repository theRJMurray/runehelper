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
