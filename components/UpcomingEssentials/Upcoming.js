import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Upcoming = () => {
  const [isHover, setIshover] = useState({
    value: null,
    state: false,
  });
  const [firstSlide,setFirstSlide]=useState(0)
  const [secondSlide,setSecondSlide]=useState(1)
  const [thirdSlide,setThirdSlide]=useState(2)

  
  const upcomingContents = [
    {
      id: 1,
      img: "/image/upcoming1.png",
      title: "1 10 Best Romantic Comedy Movies of All Time, Ranked by Viewers",
      schedule: "6 December, 2023",
    },
    {
      id: 2,
      img: "/image/upcoming2.png",
      title: "2 10 Sci-Fi Movies Ranked by Viewers",
      schedule: "6 December, 2023",
    },
    {
      id: 3,
      img: "/image/upcoming3.png",
      title: "3 Dwayne Johnson Movies List in Order",
      schedule: "6 December, 2023",
    },
    {
      id: 4,
      img: "/image/upcoming1.png",
      title: "4 Dwayne Johnson Movies List in Order",
      schedule: "6 December, 2023",
    },
    {
      id: 5,
      img: "/image/upcoming2.png",
      title: "5 10 Sci-Fi Movies Ranked by Viewers",
      schedule: "6 December, 2023",
    },
    {
      id: 6,
      img: "/image/upcoming3.png",
      title: "6 Dwayne Johnson Movies List in Order",
      schedule: "6 December, 2023",
    },
    {
      id: 7,
      img: "/image/upcoming1.png",
      title: "7 10 Best Romantic Comedy Movies of All Time, Ranked by Viewers",
      schedule: "6 December, 2023",
    },
    {
      id: 8,
      img: "/image/upcoming2.png",
      title: "8 10 Sci-Fi Movies Ranked by Viewers",
      schedule: "6 December, 2023",
    },
    {
      id: 9,
      img: "/image/upcoming3.png",
      title: "9 Dwayne Johnson Movies List in Order",
      schedule: "6 December, 2023",
    },
  ];
  const lastIndex=upcomingContents.length-1

  const goToRight=()=>{
    let isLastIndex;
    isLastIndex=firstSlide===lastIndex
    const nextFirstIndex=isLastIndex?0:firstSlide+1
    setFirstSlide(nextFirstIndex)

    isLastIndex=secondSlide===lastIndex
    const nextSecondIndex=isLastIndex?0:secondSlide+1
    setSecondSlide(nextSecondIndex)
   
    isLastIndex=thirdSlide===lastIndex
    const nextThirdIndex=isLastIndex?0:thirdSlide+1
    setThirdSlide(nextThirdIndex)
  }

  const goToLeft=()=>{
    let isfirstIndex;
    isfirstIndex=firstSlide===0
    const prevFirstIndex=isfirstIndex?lastIndex:firstSlide-1
    setFirstSlide(prevFirstIndex)

    isfirstIndex=secondSlide===0
    const prevSecondIndex=isfirstIndex?lastIndex:secondSlide-1
    setSecondSlide(prevSecondIndex)
   
    isfirstIndex=thirdSlide===0
    const prevThirdIndex=isfirstIndex?lastIndex:thirdSlide-1
    setThirdSlide(prevThirdIndex)
  }


  
  return (
    // <Center>
      <>
       <div className="flex my-2 border-b-2 border-[#F19100] ">
        <div className="bg-[#F19100] px-3 py-2 text-white font-bold">
          Upcoming
        </div>
      </div>
      {/* content */}
      <div className="my-2 grid grid-cols-3 items-center justify-between gap-3">
      {/* first slide */}
          <div
            onMouseEnter={() =>
              setIshover({ value: upcomingContents[firstSlide].id, state: true })
            }
            onMouseLeave={() => setIshover({ value: null, state: false })}
            style={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
            
            className="flex flex-col justify-between gap-2 w-[100%] h-[300px] cursor-pointer rounded-md">
            <div className=" w-[100%] ">
              <img className="w-[100%]" src={upcomingContents[firstSlide].img} alt="" />
            </div>

            <span
              className={`w-[300px] px-1 ${
                isHover.value === upcomingContents[firstSlide].id && "text-red-600"
              }`}>
              {upcomingContents[firstSlide].title}
            </span>
            <span className="w-[300px] px-1 pb-1">
              {upcomingContents[firstSlide].schedule}
            </span>
          </div>

          {/* second slide */}
          <div
            onMouseEnter={() =>
              setIshover({ value: upcomingContents[secondSlide].id, state: true })
            }
            onMouseLeave={() => setIshover({ value: null, state: false })}
            style={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
            
            className="flex flex-col justify-between gap-2 w-[100%] h-[300px] cursor-pointer rounded-md">
            <div className=" w-[100%] ">
              <img className="w-[100%]" src={upcomingContents[secondSlide].img} alt="" />
            </div>

            <span
              className={`w-[300px] px-1 ${
                isHover.value === upcomingContents[secondSlide].id && "text-red-600"
              }`}>
              {upcomingContents[secondSlide].title}
            </span>
            <span className="w-[300px] px-1 pb-1">
              {upcomingContents[secondSlide].schedule}
            </span>
          </div>

          {/* third slide */}
          <div
            onMouseEnter={() =>
              setIshover({ value: upcomingContents[thirdSlide].id, state: true })
            }
            onMouseLeave={() => setIshover({ value: null, state: false })}
            style={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
            
            className="flex flex-col justify-between gap-2 w-[100%] h-[300px] cursor-pointer rounded-md">
            <div className=" w-[100%] ">
              <img className="w-[100%]" src={upcomingContents[thirdSlide].img} alt="" />
            </div>

            <span
              className={`w-[300px] px-1 ${
                isHover.value === upcomingContents[thirdSlide].id && "text-red-600"
              }`}>
              {upcomingContents[thirdSlide].title}
            </span>
            <span className="w-[300px] px-1 pb-1">
              {upcomingContents[thirdSlide].schedule}
            </span>
          </div>
        
      </div>
      <div className="my-2 flex items-center">
        <FaAngleLeft
          onClick={goToLeft}
          className="text-4xl font-bold text-red-600  cursor-pointer"
        />
        <FaAngleRight
          onClick={goToRight}
          className="text-4xl font-bold text-red-600 cursor-pointer"
        />
      </div>
      </>
     
    // </Center>
  );
};

export default Upcoming;
