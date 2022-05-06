import React from 'react'
import './testMuneu.css'
import AVTR1 from '../../assets/alb.jpeg'
import AVTR2 from '../../assets/1.jpeg'
import AVTR3 from '../../assets/2.jpeg'
import AVTR4 from '../../assets/3.jpeg'

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar: AVTR1,
    name:'Albaron',
    review: ''
  },
  // {
  //   avatar: AVTR2,
  //   name:'Mohamed',
  //   review: 'lap lap lap'
  // },
  // {
  //   avatar: AVTR3,
  //   name:'Afra',
  //   review: 'lap lap lap'
  // },
  // {
  //   avatar: AVTR4,
  //   name:'Afoora',
  //   review: 'lap lap lap'
  // }
]

const TestMuneu = () => {
  return (
  <section id="testmuneu">
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }} >
        {
          data.map(({avatar,name,review},index) =>{
            return(
            <SwiperSlide key={index} className="testimonials">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar" />
                </div>
                    <h5 className="client__name">{name}</h5>
                    <small className="client__review">{review}</small>
          </SwiperSlide>
            )
          })
        }
      </Swiper>
  </section>
  )
}

export default TestMuneu