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
    .then(user => this.setState({ user }, () => console.log(user)))
  }



  render() {
    return (
      <div>
        <ul>
          {this.state.user.map(user => <li>{ user.attack }</li>)}
        </ul>

      </div>
    );
  }
}

export default App;
