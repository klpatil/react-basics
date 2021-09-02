import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {

    constructor()
    {
        super()
        this.state = {color:"red"};
    }

  render() {
    return <h2>Hi, I am a Car from Car.js with model as {this.props.model} and color as  {this.state.color}!</h2>;
  }
}

export default Car;