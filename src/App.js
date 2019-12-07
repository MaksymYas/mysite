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
      name: "Maksym"
    }

  }


  render () {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <Home/>
      <Footer/>
    </div>

  );
}
export default App;
