import Link from "next/link";

const WebSeriesSubNav = () => {
  const categories = [
    "Action",
    "Comedy",
    "Romance",
    "Sci-Fi",
    "Thriller",
    "10 Best",
    "Movie Likes",
  ];
  return (
    // <Center>
      <div className="flex my-2 border-b-2 border-blue-600 ">
        <div className="bg-blue-600 px-3 py-2 text-white font-bold">
          Web Series
        </div>
        <div className="flex-grow px-12 py-2 flex justify-evenly items-center">
          {categories.map((category, index) => (
            <Link className="font-[500]" key={index} href="">
              {category}
            </Link>
          ))}
        </div>
      </div>
    // </Center>
  );
};

export default WebSeriesSubNav;
