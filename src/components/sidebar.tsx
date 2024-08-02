"use client";
import React from "react";
import {
  FaCompass,
  FaDownload,
  FaFolder,
  FaHeart,
  FaHome,
} from "react-icons/fa";
import { MdCollectionsBookmark } from "react-icons/md";

type SidebarProps = {
  visible: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({ visible }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-900 z-50 transform ${
        visible ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300`}
    >
      <div className="flex items-center justify-between mb-6 mx-2 p-4">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          Musicify
        </div>
      </div>
      <div className="mx-4 px-4 md:mb-12">
        <p className="text-sm text-gray-400 mb-2">Features</p>
        <ul>
          <div className="flex items-center space-x-2 mb-1">
            <FaHome className="text-blue-500" />
            <li className="text-blue-500">Home</li>
          </div>
          <div className="flex items-center space-x-2 mb-1">
            <FaCompass />
            <li>Discover</li>
          </div>
          <div className="flex items-center space-x-2 mb-1">
            <MdCollectionsBookmark />
            <li>Collections</li>
          </div>
        </ul>
        <p className="text-sm text-gray-400 mb-2 mt-4">Library</p>
        <ul>
          <div className="flex items-center space-x-2 mb-1">
            <FaDownload />
            <li>Download</li>
          </div>
          <div className="flex items-center space-x-2 mb-1">
            <FaHeart />
            <li>Favourites</li>
          </div>
          <div className="flex items-center space-x-2 mb-1">
            <FaFolder />
            <li>Local files</li>
          </div>
        </ul>
      </div>
      <div className="w-full bg-[rgb(11,15,26)] text-2xl font-bold text-white items-center justify-center text-center p-20 md:block hidden">
        As It Was
      </div>
    </div>
  );
};

export default Sidebar;
