import Image from "next/image";
import { FaRegBell } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const PlaylistSection = () => {
  return (
    <div className="bg-gray-900 p-4 min-h-screen">
      <div className="flex items-center space-x-2 pt-2 pb-8">
        <Image
          src={"/images/profile.jpg"}
          alt="Profile Picture"
          width={40}
          height={40}
          className="rounded-full"
        />
        <h2 className="font-bold">Manas Kapoor</h2>
        <div className="flex items-center pl-4">
          <FaRegBell />
          <RiArrowDropDownLine className="text-4xl" />
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <h3 className="font-semibold mb-2">Recently Played</h3>
          <p className="text-md">See all</p>
        </div>
        <div className="space-y-4 py-2">
          <div className="flex items-center space-x-2">
            <Image
              src={"/images/hothits.png"}
              alt="Song Thumbnail"
              width={40}
              height={40}
              className="rounded"
            />
            <div>
              <p>Savage</p>
              <p className="text-sm text-gray-400">Aespa</p>
            </div>
          </div>
        </div>
        <div className="space-y-4 py-2">
          <div className="flex items-center space-x-2">
            <Image
              src={"/images/risingsun.png"}
              alt="Song Thumbnail"
              width={40}
              height={40}
              className="rounded"
            />
            <div>
              <p>Love Again</p>
              <p className="text-sm text-gray-400">Baekhyun</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4">
        <div className="flex justify-between">
          <h3 className="font-semibold mb-2">My Playlist</h3>
          <p className="text-md">See all</p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Image
              src={"/images/risingsun.png"}
              alt="Playlist Thumbnail"
              width={40}
              height={40}
              className="rounded"
            />
            <div>
              <p>land of rising sun</p>
              <p className="text-sm text-gray-400">40 songs</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Image
              src={"/images/risingsun.png"}
              alt="Playlist Thumbnail"
              width={40}
              height={40}
              className="rounded"
            />
            <div>
              <p>favourites</p>
              <p className="text-sm text-gray-400">35 songs</p>
            </div>
          </div>
          {/* Repeat similar blocks for other playlists */}
        </div>
      </div>
      <button className="w-full py-2 bg-gray-300 rounded text-center font-semibold mt-16 text-black">
        Create New Playlist
      </button>
    </div>
  );
};

export default PlaylistSection;
