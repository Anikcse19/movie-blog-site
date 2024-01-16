import "swiper/css";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

export default function SectionSlider({ slides }) {
  console.log(slides);
  return (
    <>
      <Swiper
      centeredSlides={true} 
      autoplay={{
        delay:2000
      }}
      modules={[Autoplay]}
      className="mySwiper">
        {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
             <div className="flex flex-col items-center w-[100%] gap-2 ">
        <div className="w-[100%] h-[400px] self-baseline">
          <img
            className="w-[100%] h-full"
            src={slide?.img}
            alt=""
          />
        </div>
        <div className="flex flex-col self-start w-[100%]">
          <span className="p-1">
            <h1 className="text-black font-bold text-[28px]">
              {slide?.title}
            </h1>
          </span>
          <span className="text-black text-[16px] p-1">
            {slide?.description}
          </span>
        </div>
      </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
