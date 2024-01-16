import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import Center from "./Center";

const Header = () => {
  return (
    <div className="bg-white py-2">
      <Center>
        <div className="flex justify-between items-center">
          {/* logo */}
          <div>
            <img src="/image/logo.png" alt="" />
            {/* <h1>IMBD MOVIES</h1> */}
          </div>
          {/* search bar */}
          <div className="w-[40%] flex items-center border border-black rounded-md overflow-hidden">
            <input
              className="px-3 outline-none w-full"
              type="text"
              placeholder="Search here"
            />
            <span className="bg-red-600 px-4 py-2 text-white">
              <IoSearch className="text-xl" />
            </span>
          </div>
          {/* button  */}
          <div>
            <Link
              href=""
              className="bg-red-600 px-6 py-2 rounded-md text-white font-bold">
              Sign in
            </Link>
          </div>
        </div>
      </Center>
    </div>
  );
};

export default Header;
