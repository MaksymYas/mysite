import React, { Component } from 'react';
import '../stylesheets/Menu.css';

const Menu = (props) => {
  // console.log(props);
  return (

      <div className="Menu">
          <h4 onClick={props.onMax}>PROJECTS</h4>
          <h4><a href="expirience">EXPIRIENCE</a></h4>
          <h4><a href="about">ABOUT</a></h4>
          <h4><a href="home">HOME</a></h4>
          <h4><a href="contact">CONTACT</a></h4>
      </div>
  );
}
export default Menu;
