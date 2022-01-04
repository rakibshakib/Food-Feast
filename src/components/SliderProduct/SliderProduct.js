import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {useRamen} from "../../Hooks/useRamen";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay } from "swiper/core";
import SlideCard from "./SlideCard";
import { Box } from "@mui/material";

SwiperCore.use([Autoplay]);
const SliderProduct = () => {
  const [ramen] = useRamen();
  return (
    <Box>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        slidesPerGroup={4}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 6,
          },
          426: {
            slidesPerView: 2,
            spaceBetween: 6,
          },

          769: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
        className="mySwiper"
      >
        {ramen.map((item) => (
          <SwiperSlide>
            <SlideCard key={item._id} item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default SliderProduct;
