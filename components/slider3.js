"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const videoSrc = "/tt/tt.mp4"; // Corrected path

const CustomSlider = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen && videoRef.current) {
      videoRef.current.play();
    }
  }, [isModalOpen]);

  return (
    <div className="relative">
      <div onClick={openModal} className="cursor-pointer">
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

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center z-50">
          <div className="relative md:w-screen-lg w-[86%]">
            <video
              ref={videoRef}
              src={videoSrc}
              className="w-full h-[450px] min-h-[250px] object-contain rounded-xl"
              width="5000"
              height="5000"
              controls
              autoPlay
              loop
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-2xl"
            >
              &times;
            </button>
            {/* <Link href="https://hovr.site/" className="absolute border px-2 py-1 rounded-lg left-1/2 bottom-[-50px] transform -translate-x-1/2">
              Visit Project
            </Link> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomSlider;
