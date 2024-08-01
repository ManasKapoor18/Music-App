// components/MusicPlayer.tsx
import React from "react";
import {
  FaMicrophone,
  FaPause,
  FaPlay,
  FaShareAlt,
  FaVolumeUp,
} from "react-icons/fa";

import { FaForwardStep, FaBackwardStep } from "react-icons/fa6";

const MusicPlayer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 flex items-center justify-between shadow-lg rounded-t-lg">
      <div className="flex items-center space-x-4">
        <div className="bg-gray-700 p-2 rounded">
          <FaPlay className="text-xl" />
        </div>
        <div>
          <h3 className="text-lg font-bold">Song Title</h3>
          <p className="text-sm">Artist Name</p>
        </div>
      </div>
      <div className="flex flex-col items-center space-x-4 space-y-4">
        <div>
          <button className="p-2 rounded mx-1">
            <FaBackwardStep />
          </button>
          <button className="bg-gray-700 p-2 rounded-full mx-1">
            <FaPause />
          </button>
          <button className="p-2 rounded mx-1">
            <FaForwardStep />
          </button>
        </div>
        <input type="range" min="0" max="100" className="w-72 bg-white" />
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <button>
            <FaVolumeUp className="text-xl" />
          </button>
          <input type="range" min="0" max="100" className="w-16 bg-white" />
          <button>
            <FaMicrophone />
          </button>
          <button>
            <FaShareAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
