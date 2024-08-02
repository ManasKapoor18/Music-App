"use client";
import React, { useState } from "react";
import {
  FaHeart,
  FaMicrophone,
  FaPause,
  FaPlay,
  FaShareAlt,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";
import { RxLoop } from "react-icons/rx";
import { IoIosShuffle } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaForwardStep, FaBackwardStep } from "react-icons/fa6";

const MusicPlayer = () => {
  const [isRed, setIsRed] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const [isVolume, setIsVolume] = useState(false);

  const toggleColor = () => {
    setIsRed(!isRed);
  };
  const togglePlay = () => {
    setIsPlay(!isPlay);
  };
  const toggleVolume = () => {
    setIsVolume(!isVolume);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 flex items-center justify-between shadow-lg rounded-t-lg">
      <div className="flex items-center space-x-4">
        <div className="bg-gray-700 p-2 rounded">
          <FaPlay className="text-xl" />
        </div>
        <div>
          <h3 className="text-lg font-bold">As It Was</h3>
          <p className="text-sm">Harry Styles</p>
        </div>
        <div className="space-x-1 ml-8">
          <button onClick={toggleColor} className="p-2">
            <FaHeart
              size={24}
              className={isRed ? "text-red-500" : "text-gray-500"}
            />
          </button>
          <button>
            <IoIosAddCircleOutline size={24} />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center space-x-4 space-y-4">
        <div>
          <button>
            <IoIosShuffle size={20} />
          </button>
          <button className="p-2 rounded mx-1">
            <FaBackwardStep />
          </button>
          <button
            onClick={togglePlay}
            className="bg-gray-700 p-2 rounded-full mx-1"
          >
            {isPlay ? <FaPlay /> : <FaPause />}
          </button>
          <button className="p-2 rounded mx-1">
            <FaForwardStep />
          </button>
          <button>
            <RxLoop />
          </button>
        </div>
        <input type="range" min="0" max="100" className="w-72 bg-white" />
      </div>
      <div className="flex items-center space-x-4 mr-8">
        <div className="flex items-center space-x-2">
          <button onClick={toggleVolume}>
            {!isVolume ? (
              <FaVolumeUp className="text-xl" />
            ) : (
              <FaVolumeMute className="text-xl" />
            )}
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
