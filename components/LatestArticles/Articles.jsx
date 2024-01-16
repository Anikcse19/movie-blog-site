

const latestArticles = [
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

const Articles = () => {
    
  return (
    // <Center>
      
     <>
      <div className="flex my-2 border-b-2 border-gray-500 ">
        <div className="bg-gray-500 px-3 py-2 text-white font-bold">
          Latest Articles
        </div>
      </div>
      {/* content */}
      <div className="my-2 grid grid-cols-3 items-center justify-between gap-3">
      
         {
            latestArticles.map(article=>(
                <div
                
                key={article.id}
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
                
                className="flex flex-col justify-between gap-2 w-[100%] h-[300px] cursor-pointer rounded-md">
                <div className=" w-[100%] ">
                  <img className="w-[100%]" src={article.img} alt="" />
                </div>
    
                <span
                  className={`w-[300px] px-1 `}>
                  {article.title}
                </span>
                <span className="w-[300px] px-1 pb-1">
                  {article.schedule}
                </span>
              </div>
            ))
         }
        </div>
     </>
     
    // </Center>
  )
}

export default Articles
