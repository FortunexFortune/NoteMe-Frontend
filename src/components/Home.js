import React, { Component } from 'react';
import image1 from './image1.png'
import image2 from './image2.png'
import image3 from './image3.png'
import image4 from './image4.png'
import image5 from './image5.png'
import {  Carousel } from 'react-materialize'
import * as constants from "./constants.js";

class Home extends Component {

  render() {
    console.log(constants.static_IP);
    return (
      <div className="container">
        <h4 className="center"> Home  </h4>
        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <Carousel images={[
          <img src={image1} />,
          <img src={image2} />,
          <img src={image3} />,
          <img src={image4} />,
          <img src={image5} />,

        ]} />
  
        <div className="row">
          <div className="col s4">
            <div className="center promo promo-example">
              <i className="material-icons">flash_on</i>
              <p className="promo-caption">Speeds up development</p>
              <p className="light center">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components.</p>
            </div>
            </div>
          <div className="col s4">
            <div className="center promo promo-example">
              <i className="material-icons">group</i>
              <p className="promo-caption">User Experience Focused</p>
              <p className="light center">By utilizing elements and principles of Material Design, we were able to create a framework that focuses on User Experience.</p>
            </div>
          </div>
          <div className="col s4">
            <div className="center promo promo-example">
              <i className="material-icons">settings</i>
              <p className="promo-caption">Easy to work with</p>
              <p className="light center">We have provided detailed documentation as well as specific code examples to help new users get started.</p>
            </div>
          </div>
        </div>


        
      </div>

    )
  }
}

export default Home;
