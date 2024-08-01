"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div>
      <aside
        className={`fixed h-full bg-gray-900 p-4 transform transition-transform md:translate-x-0 md:static w-64`}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="text-xl font-bold">Musicify</div>
          <button className="md:hidden">
            <FaBars />
          </button>
        </div>
        <ul className="space-y-4 overflow-y-auto h-full">
          <li>Home</li>
          <li>Discover</li>
          <li>Collections</li>
          <li>Download</li>
          <li>Favourites</li>
          <li>Local Files</li>
        </ul>
      </aside>
    </div>
  );
};
export default Sidebar;
