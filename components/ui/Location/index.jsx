import React, { useEffect, useState } from "react";
import SectionWrapper from "../../SectionWrapper";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import GoogleMapsEmbed from "../GoogleMapsEmbed";

import Image1 from "../../../assets/1.jpg";
import Image2 from "../../../assets/2.jpg";
import Image3 from "../../../assets/3.jpg";
import Image4 from "../../../assets/4.jpg";
import Image5 from "../../../assets/5.jpg";
import Image6 from "../../../assets/6.jpg";

const Location = () => {
  const [swiper, setSwiper] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (swiper) {
      swiper.on("slideChange", () => {
        setCurrentSlide(swiper.activeIndex);
      });
    }
  }, [swiper]);

  const goNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  return (
    <>
      <div className="max-w-2xl sm:text-center md:mx-auto">
        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
          Localização
        </h2>
        <p className="mt-3 text-gray-600">
          Escritório profissional bem estruturado, em prédio próprio com ótima
          localização, próximo ao hospital de Cachoeirinha, shopping center e
          parque municipal com fácil acesso e estacionamento.
        </p>
      </div>
      <GoogleMapsEmbed />
      <div className="w-full relative mt-6">
        <Swiper
          modules={[Navigation, Pagination]}
          onSwiper={setSwiper}
          className="centered-slide-carousel"
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            1920: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1028: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            990: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
          }}
        >
          {[Image1, Image2, Image3, Image4, Image5, Image6].map(
            (src, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-96">
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                  />
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
        <div className="swiper-button-prev" onClick={goPrev}></div>
        <div className="swiper-button-next" onClick={goNext}></div>
      </div>
    </>
  );
};

export default Location;
