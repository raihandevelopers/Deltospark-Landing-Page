"use client";
import React, { useRef } from "react";
import Link from "next/link";

const videoSrc = "/tt/tt.mp4"; // Corrected path

const CustomSlider = () => {
  const videoRef = useRef(null);

  return (
    <div className="relative">
      <video 
        src={videoSrc}
        width="1500"
        height="1500"
        className="w-full h-[300px] md:h-[450px] rounded-xl object-contain"
        controls
        autoPlay
        muted
        loop
      />
    </div>
  );
};

export default CustomSlider;
