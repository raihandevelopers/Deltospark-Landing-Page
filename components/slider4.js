"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import servicesprotfolio12 from "@/public/Plenty Blockchain/Plentybanner.jpg";
import servicesprotfolio2 from "@/public/servicesportfolio2.jpg";
import mobile1 from "@/public/Plenty Blockchain/1.png";
import mobile2 from "@/public/Plenty Blockchain/2.png";
import mobile3 from "@/public/Plenty Blockchain/3.png";
import mobile4 from "@/public/Plenty Blockchain/4.png";



import Link from "next/link";

const images = [
	servicesprotfolio12,
	mobile1, 
	mobile2, 
	mobile3, 
	mobile4, 
  ];
  
const CustomSlider = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentSlide, setCurrentSlide] = useState(0);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		afterChange: (index) => setCurrentSlide(index),
	};

	const openModal = (index) => {
		setCurrentSlide(index);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div className="relative">
			<Slider {...settings}>
				{images.map((image, index) => (
					<div
						key={index}
						onClick={() => openModal(index)}
						className="cursor-pointer "
					>
						<Image
							src={image}
							alt={`Slide ${index}`}
							width={1500}
							height={1500}
							className="w-full h-[300px] md:h-[450px] rounded-xl object-contain"
						/>
					</div>
				))}
			</Slider>

			{isModalOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md flex  justify-center items-center z-50">
					<div className="relative md:w-screen-lg w-[86%] ">
						<Slider {...settings} initialSlide={currentSlide}>
							{images.map((image, index) => (
								<div key={index} className="flex items-center ">
									<Image
										src={image}
										className="w-full h-[450px] min-h-[250px] object-contain rounded-xl"
										width={5000}
										height={5000}
										alt=""
									/>
								</div>
							))}
						</Slider>
						<button
							onClick={closeModal}
							className="absolute top-2 right-2 text-white text-2xl"
						>
							&times;
						</button>
						<Link href="https://app.plenty.network/swap" className="absolute border px-2 py-1 rounded-lg left-1/2 bottom-[-50px] transform -translate-x-1/2">
    Visit Project
</Link>

					</div>
				</div>
			)}
		</div>
	);
};

export default CustomSlider;
