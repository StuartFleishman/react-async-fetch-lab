// create your App component here

import React from 'react';

class App extends React.Component {

  state = {
    numer: 0,
    message: "",
    people: [{
      name: "",
      craft: ""
    }]
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(data => this.setState({data}))
  }

  render() {
    return(
      <div>hi</div>
    )
  }
}

export default App 