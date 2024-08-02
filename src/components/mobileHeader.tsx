import { FaBars, FaSearch } from "react-icons/fa";

const MobileHeader = () => {
  return (
    <header className="p-4 md:hidden block">
      <div className="flex flex-row justify-between">
        <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text h-full">
          Musicify
        </div>
        <button>
          <FaBars size={24} />
        </button>
      </div>
      <div className="flex items-center h-[40px] rounded-full bg-white text-gray-700 px-4 w-full mt-4 mx-auto">
        <FaSearch className="mr-2" />
        <input
          type="text"
          placeholder="Search for artists, songs, or albums"
          className="outline-none text-sm text-gray-700 w-full md:w-64"
        />
      </div>
    </header>
  );
};

export default MobileHeader;
