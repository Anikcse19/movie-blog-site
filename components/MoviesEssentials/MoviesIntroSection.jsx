import { useState } from "react";
import SectionSlider from "../Slider/SectionSlider";

const MoviesIntroSection = () => {
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
      img: "/image/moviesIntroSuggesstionPic.png",
      title: "10 Best Jennifer Lawrence Movies of All Time, Ranked by Viewers",
    },
    {
      id: 2,
      img: "/image/moviesIntroSuggesstionPic.png",
      title: "10 Best Jennifer Lawrence Movies of All Time, Ranked by Viewers",
    },
    {
      id: 3,
      img: "/image/moviesIntroSuggesstionPic.png",
      title: "10 Best Jennifer Lawrence Movies of All Time, Ranked by Viewers",
    },
    {
      id: 4,
      img: "/image/moviesIntroSuggesstionPic.png",
      title: "10 Best Jennifer Lawrence Movies of All Time, Ranked by Viewers",
    },
    {
      id: 5,
      img: "/image/moviesIntroSuggesstionPic.png",
      title: "10 Best Jennifer Lawrence Movies of All Time, Ranked by Viewers",
    },
  ];
  return (
    // <Center>
      <div className="my-2 flex items-center justify-between gap-3">
        {/* slider */}
        <div className="w-[60%] bg-white p-2 rounded">
          {/* <SectionCarousel slides={slides}/> */}
          <SectionSlider slides={slides}/>
        </div>



        {/* suggestion */}
        <div className=" w-[40%] flex flex-col gap-2">
          {suggestionMovies.map((suggestionMovie) => (
            <div
              onMouseEnter={() =>
                setIshover({ value: suggestionMovie.id, state: true })
              }
              onMouseLeave={() => setIshover({ value: null, state: false })}
              style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
              key={suggestionMovie.id}
              className="h-[110px] flex items-center gap-2 rounded-md cursor-pointer">
              <div className="h-full w-[150px]">
                <img className="h-full w-full" src={suggestionMovie.img} alt="" />
              </div>
              <div className="px-2">
                <span
                  className={`text-[18px] font-[500] ${
                    isHover.value === suggestionMovie.id && "text-red-600"
                  }`}>
                  {suggestionMovie.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    // </Center>
  );
};

export default MoviesIntroSection;
