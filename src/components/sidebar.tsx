"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div>
      <div className="bg-gray-900 p-4 min-h-screen">
        <div className="flex items-center justify-between mb-6">
          <div className="text-xl font-bold">Musicify</div>
          <button className="md:hidden">
            <FaBars />
          </button>
        </div>
        <ul>
          <li>Home</li>
          <li>Discover</li>
          <li>Collections</li>
          <li>Download</li>
          <li>Favourites</li>
          <li>Local Files</li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
