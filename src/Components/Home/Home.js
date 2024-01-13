import React from 'react'
import Card from 'react-bootstrap/Card';
import './Home.css'
import cardinfo from './Cardslider.json'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Searchbar from '../Search bar/Searchbar';

function Home() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <main>
      <section>
          <Searchbar/>
      </section>
      <section className='container mt-5'>
        <Slider {...settings}>
          {
            cardinfo.map((cardinfo) => (
              <Card className='m-1'>
                <Card.Img variant="top" src={cardinfo.image} className={cardinfo.id} />
                <Card.Body>
                  <Card.Title className='text-center'>{cardinfo.Category}</Card.Title>
                </Card.Body>
              </Card>
            ))
          }
        </Slider>
      </section>
      <section className='mt-5'>
        <p className='text-center h1'>Top Selling Brands</p>
      </section>
    </main>
  )
}
export default Home