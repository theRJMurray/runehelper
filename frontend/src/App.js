import React from 'react';
import Stats from './components/stats';
import Search from './components/search';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loading: true,
      user: undefined,
      name: null,
      placeholder: null,
    }
  }

  handleChange = (event) => {
    this.setState({
      placeholder: event.target.value
    })
  }

  handleSubmit = (event) => {
    this.setState({
      name: this.state.placeholder
    })
    event.preventDefault()
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.name !== prevState.name) {
      let userId = '/search/' + this.state.name;
      fetch(userId)
      .then(res => res.json())
      .then((data) =>
        this.setState({ user: data }))
    }
  }

  render() {
    return (
      <div>
        <Search name={this.state.name} handleSubmit={this.handleSubmit.bind(this)} handleChange={this.handleChange.bind(this)}/>
        <Stats stats={this.state.user} />
      </div>
    );
  }
 }

export default App;
