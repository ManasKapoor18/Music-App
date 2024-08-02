import React from "react";
import Image from "next/image";
import { FaRegBell } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

type PlaylistSectionProps = {
  visible: boolean;
};

const PlaylistSection: React.FC<PlaylistSectionProps> = ({ visible }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full bg-gray-900 z-50 transform ${
        visible ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300`}
    >
      <div className="p-4 min-h-screen">
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
                src={"/images/song2.png"}
                alt="Song Thumbnail"
                width={40}
                height={40}
                className="rounded"
              />
              <div>
                <p>As It Was</p>
                <p className="text-sm text-gray-400">Harry Styles</p>
              </div>
            </div>
          </div>
          <div className="space-y-4 py-2">
            <div className="flex items-center space-x-2">
              <Image
                src={"/images/song1.png"}
                alt="Song Thumbnail"
                width={40}
                height={40}
                className="rounded"
              />
              <div>
                <p>Stick Season</p>
                <p className="text-sm text-gray-400">Noah Kahan</p>
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
                src={"/images/wave.png"}
                alt="Playlist Thumbnail"
                width={40}
                height={40}
                className="rounded"
              />
              <div>
                <p>favourites</p>
                <p className="text-sm text-gray-400">45 songs</p>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full py-2 bg-gray-300 rounded text-center font-semibold mt-16 text-black">
          Create New Playlist
        </button>
      </div>
    </div>
  );
};

export default PlaylistSection;
