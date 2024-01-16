import { useState } from "react";
import BannerSlider from "../Slider/BannerSlider";
// import { Carousel } from "react-responsive-carousel";

const HomeBanner = () => {
  const [isHover, setIshover] = useState({
    value: null,
    state: false,
  });

  const slides = [
    {
      id: 1,
      img: "/image/homeSlideImg1.png",
      title: "Top 23 Best Tom Cruise Movies On Netflix In 2023",
      description:
        "TO 10 best Tom Cruise movies to stream on Netflix, Prime Video and more · Rain Man · The Firm · A Few Good Men · Collateral · Jerry Maguire · Top Gun:",
      },
      {
        id: 2,
        img: "/image/homeSlider2.png",
        title: "Top 24 Best Tom Cruise Movies On Netflix In 2023",
        description:
          "TO 10 best Tom Cruise movies to stream on Netflix, Prime Video and more · Rain Man · The Firm · A Few Good Men · Collateral · Jerry Maguire · Top Gun:",
      },
      {
        id: 3,
        img: "/image/homeSlider3.png",
        title: "Top 25 Best Tom Cruise Movies On Netflix In 2023",
        description:
          "TO 10 best Tom Cruise movies to stream on Netflix, Prime Video and more · Rain Man · The Firm · A Few Good Men · Collateral · Jerry Maguire · Top Gun:",
    },
  ];
  const suggestionMovies = [
    {
      id: 1,
      img: "/image/suggestionMovie1.png",
      title: "Jack Reacher Movies In Order (How to Watch the Film Series)",
      schedule: "3rd December 2023 ",
    },
    {
      id: 2,
      img: "/image/suggestionMovie2.png",
      title: "All Shrek Movies In Order and the Notable Spin-Offs Included!",
      schedule: "3rd December 2023 ",
    },
    {
      id: 3,
      img: "/image/suggestionMovie3.png",
      title: "10 Best Jennifer Lawrence Movies of All Time",
      schedule: "3rd December 2023 ",
    },
  ];
  return (
    // <Center>
      <div className="flex items-center gap-4 my-3">
        {/* slider */}
        <div className=" w-[70%]  text-white text-[20px]  max-w-[1360px] mx-auto">
          {/* <Carousel slides={slides} /> */}
          <BannerSlider slides={slides}/>
        </div>

        {/* suggestion */}
        <div className="w-[30%] flex flex-col gap-4">
          {suggestionMovies.map((suggestionMovie) => (
            <div
              style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
              key={suggestionMovie.id}
              onMouseEnter={() =>
                setIshover({ value: suggestionMovie.id, state: true })
              }
              onMouseLeave={() => setIshover({ value: null, state: false })}
              className="flex justify-between gap-3 rounded-sm cursor-pointer">
              <div className="overflow-hidden">
                <img
                  className="w-[150px] h-[110px]"
                  src={suggestionMovie.img}
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-around gap-1">
                <div>
                  <span
                    className={`text-[18px] font-[500] ${
                      isHover.value === suggestionMovie.id && "text-red-600"
                    }`}>
                    {suggestionMovie.title}
                  </span>
                </div>
                <div className="">
                  <span className="text-gray-500 text-[12px] font-[400]">
                    {suggestionMovie.schedule}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    // </Center>
  );
};

export default HomeBanner;
