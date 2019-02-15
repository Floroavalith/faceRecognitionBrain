import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'c7fcd310c18c44a18d7e786a69d492bf'
 });

const particlesOptions = {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true, 
          value_area: 200,
        },
      },
    }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  calculateFaceLocation = data => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');

  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input })
    app.models.predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input
    )
    .then( response => {
      this.calculateFaceLocation(response)
      // console.log(response);
      // console.log();
    })
    .catch( err => {
      console.log(err);
      }
    )
  }

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
            onInputChange={this.onInputChange} 
            onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
