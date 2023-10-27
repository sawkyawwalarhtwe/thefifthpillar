'use client'
import NewsCard from "./newsCard";
import {isMobile} from 'react-device-detect';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function MainNews(){
    return(
        <div className="py-12 px-4 md:px-24 z-20 ">
        <h1 className="md:mx-12 text-xl md:text-2xl font-bold mb-10 text-gray-700">News</h1>
        <Swiper
        slidesPerView={isMobile?1:3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <NewsCard img="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/vivo/live/images/2023/9/19/568cc890-8579-4f26-9549-06ec69c2243c.jpg" width={""}/>
        </SwiperSlide>
        <SwiperSlide>
            <NewsCard img="https://ychef.files.bbci.co.uk/1600x900/p0gf9pyn.png" width="400"/>
        </SwiperSlide>
        <SwiperSlide>
            <NewsCard img="https://ychef.files.bbci.co.uk/960_540/p0g96kqs.jpg" width="400"/>
        </SwiperSlide>
        <SwiperSlide>
            <NewsCard img="https://ichef.bbci.co.uk/news/573/cpsprodpb/10B8/production/_131008240_mediaitem131007991.jpg" width="400"/>
        </SwiperSlide>
        <SwiperSlide>
            <NewsCard img="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/vivo/live/images/2023/9/10/d7123780-547e-4e04-8069-87673fa33c77.jpg" width="400"/>
        </SwiperSlide>
        <SwiperSlide>
            <NewsCard img="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/vivo/live/images/2023/9/10/136da543-dba3-4c1b-94f6-d0b9feb04253.png" width="400"/>
        </SwiperSlide>
      </Swiper>
        {/* <div className="flex justify-around">
            <NewsCard img="https://ichef.bbci.co.uk/news/573/cpsprodpb/10B8/production/_131008240_mediaitem131007991.jpg"/>
            <NewsCard img="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/vivo/live/images/2023/9/10/d7123780-547e-4e04-8069-87673fa33c77.jpg"/>
            <NewsCard img="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/vivo/live/images/2023/9/10/136da543-dba3-4c1b-94f6-d0b9feb04253.png"/>
        </div> */}
        <h1 className="text-right mt-10 cursor-pointer underline opacity-75">See all</h1>
        </div>
    )
}