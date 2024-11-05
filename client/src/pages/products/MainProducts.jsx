import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import PerfumeCard from './PerfumeCard';


const MainProducts = () => {

  const [perfumes, setPerfumes] = useState([])

  useEffect(() => {
    fetch("perfumes.json")
      .then(res => res.json())
      .then((data) => setPerfumes(data))
  }, [])

  console.log(perfumes)


  return (
    <div>
      <Navbar />
      
      {/* <div className='h-full w-full mt-8 grid grid-cols-3 grid-flow-row-dense'> */}
      {/* <div className='container lg mx-auto mt-16 grid grid-cols-4 grid-flow-row-dense'> */}
      <div className='container lg mx-auto mt-16 flex flex-wrap'>
        {
          perfumes.map((perfume, id) => (
            <PerfumeCard perfume={perfume}></PerfumeCard>

          ))
        }
      </div>


        <div className='py-16'>
          <h2 className='text-lg font-semibold mb-6'>Recommended For You</h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1180: {
                slidesPerView: 3,
                spaceBetween: 50,
              }
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >

            {
              perfumes.length > 0 && perfumes.slice(8, 15).map((perfume, id) => (
                <SwiperSlide className='flex' key={perfume.id} ><PerfumeCard perfume={perfume}></PerfumeCard></SwiperSlide>
              ))
            }
          </Swiper>

        </div>

            {/* <p>        // "description" : "the invention of this water is most probably related to the Black Death epidemic that ravaged Europe between 1346 and 1350 caused by a bacterial infection. This could potentially be due to the antibacterial effects found in the wine or brandy and rosemary that was used to make the water.",</p> */}
     


    </div>
  )
}

export default MainProducts