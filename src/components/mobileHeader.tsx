"use client";
import React, { useState } from "react";
import { FaBars, FaSearch, FaMusic } from "react-icons/fa";
import Sidebar from "./sidebar";
import PlaylistSection from "./playlistSection";

const MobileHeader = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [playlistVisible, setPlaylistVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
    if (playlistVisible) setPlaylistVisible(false); 
  };

  const togglePlaylist = () => {
    setPlaylistVisible(!playlistVisible);
    if (sidebarVisible) setSidebarVisible(false);
  };

  return (
    <>
      <header className="p-4 md:hidden block">
        <div className="flex flex-row justify-between">
          <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text h-full">
            Musicify
          </div>
          <div className="flex space-x-4">
            <button onClick={toggleSidebar}>
              <FaBars size={24} />
            </button>
            <button onClick={togglePlaylist}>
              <FaMusic size={24} />
            </button>
          </div>
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
      <Sidebar visible={sidebarVisible} />
      <PlaylistSection visible={playlistVisible} />
      {(sidebarVisible || playlistVisible) && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => {
            setSidebarVisible(false);
            setPlaylistVisible(false);
          }}
        ></div>
      )}
    </>
  );
};

export default MobileHeader;
