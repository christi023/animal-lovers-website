import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// assets
import kitten from '../../assets/Little Kitten.mp4';
import puppy from '../../assets/puppy.mp4';
import production from '../../assets/production.mp4';

// styles
import './Carousel.css';

export default function Carrousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
      <Carousel>
        <Carousel.Item>
          <video className="d-block w-100" src={puppy} autoPlay loop muted alt="First slide" />
          <Carousel.Caption>
            <h3 className="text-left">WELCOME TO BLENDED</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <video className="d-block w-100" src={kitten} autoPlay loop muted alt="Third slide" />

          <Carousel.Caption>
            <h3 className="text-left">WELCOME TO BLENDED</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <video className="d-block w-100" src={production} autoPlay loop muted alt="Third slide" />

          <Carousel.Caption>
            <h3 className="text-left">WELCOME TO BLENDED</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
