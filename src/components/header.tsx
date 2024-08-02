import {
  FaBars,
  FaChevronLeft,
  FaChevronRight,
  FaEllipsisH,
  FaSearch,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="p-4 md:block hidden">
      <div className="flex flex-row">
        <button className="ml-6 mr-2 ">
          <FaChevronLeft size={18} />
        </button>
        <button className="mr-6 ml-1">
          <FaChevronRight size={18} />
        </button>
        <button className="md:hidden">
          <FaBars />
        </button>
        <div className="flex items-center h-[40px] rounded-full bg-white text-gray-700 px-4 w-full md:w-[80%]">
          <FaSearch className="mr-2" />
          <input
            type="text"
            placeholder="Search for artists, songs, or albums"
            className="outline-none text-sm text-gray-700 w-full md:w-64"
          />
        </div>
        <button className="ml-4">
          <FaEllipsisH size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
