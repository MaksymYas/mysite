import React, { Component } from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import './App.css';

class App extends Component  {
  constructor() {
    super()
    this.state= {
      img: 'https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg'
    }
    console.log (this.state)

  }

onChangeImg = () => {
  const element = document.getElementById('home-img');

  this.setState({img:element.src},  () => (console.log("state 2", this.state.img)))

console.log("state 1", this.state.img)
 element.src=this.state.img


// element.src='https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg';
  // this.state ({
  //   require('../img/mobile_version.jpg')
  // }

  // )
}

  render () {
  return (
    <div className="App">
      <Header/>
      <Menu onMax={this.onChangeImg} yuliya=",dfsd,fsdfsdfsljf"/>
      <Home/>
      <Footer/>

    </div>

  );
  }
}
export default App;
