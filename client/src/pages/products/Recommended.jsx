import React, { useState, useEffect } from 'react'
import PerfumeCard from './PerfumeCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




const Recommended = ({ perfume }) => {



    const [perfumes, setPerfumes] = useState([])

    useEffect(() => {
        fetch("perfumes.json")
            .then(res => res.json())
            .then((data) => setPerfumes(data))
    }, [])




    return (
        <div className='py-16 max-h-24'>
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
                        <SwiperSlide className='flex' key={perfume.id} ><PerfumeCard className="max-h-20" perfume={perfume}></PerfumeCard></SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Recommended