import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation';
import Logo from './components/Logo';
import ImageLinkForm from './components/ImageLinkForm';
import Rank from './components/Rank';

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 1000
      }
    }
  }
  
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className = 'particles' params = {particlesOptions}/> 
        <Navigation /> 
        <Logo /> 
        <Rank /> 
        <ImageLinkForm /> 
        {/*<FaceRecognition />  */}
      </div>
    );
  }
}

export default App;
