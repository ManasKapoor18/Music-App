"use client";
import React, { useState } from "react";
import {
  FaBars,
  FaCompass,
  FaDownload,
  FaFolder,
  FaHeart,
  FaHome,
} from "react-icons/fa";
import { MdCollectionsBookmark } from "react-icons/md";

const Sidebar = () => {
  return (
    <div>
      <div className="bg-gray-900 p-4 min-h-screen">
        <div className="flex items-center justify-between mb-6 mx-2">
          <div className="text-xl font-bold">Musicify</div>
        </div>
        <div className="mx-4">
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
      </div>
    </div>
  );
};
export default Sidebar;
