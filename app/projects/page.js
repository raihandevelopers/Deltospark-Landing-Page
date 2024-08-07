"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import serviceLeftAngle from "@/public/serviceLeftAngle.svg";
import serviceRightAngle from "@/public/serviceRightAngle.svg";
import projectUser from "@/public/projectsUser.svg";
import projectCustomized from "@/public/projectCustomized.svg";
import projectStrategic from "@/public/projectStrategic.svg";
import projectCard from "@/public/projectCard4,5.svg";
import servicesprotfolio1 from "@/public/servicesprotfolio1.svg";
import servicesprotfolio2 from "@/public/servicesportfolio2.jpg";
import avatar1 from "@/public/avatar1.png";
import avatar2 from "@/public/avatar2.png";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";
import ScrollAnimation from "@/components/ScrollAnimation";
import { scaleUpVariants } from "@/animation/variants";
import CustomSlider from "@/components/slider";
import CustomSlider2 from "@/components/slider2";
import CustomSlider3 from "@/components/slider3";
import CustomSlider4 from "@/components/slider4";
import CustomSlider5 from "@/components/slider5";

const Projects = () => {
	const [isHidden, setIsHidden] = useState(true);
	const [currentVisibleIndex, setCurrentVisibleIndex] = useState(null); // Initially no div visible

	const toggleVisibility = (index) => {
		if (currentVisibleIndex === index) {
			// Clicking the same div hides it
			setCurrentVisibleIndex(null);
		} else {
			// Clicking a different div shows it
			setCurrentVisibleIndex(index);
		}
	};

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		mobile: "",
		services: "",
		company: "",
		subject: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await fetch("../api/send-email", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		});

		if (response.ok) {
			toast.success("Inquiry Sent Successfully.", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				transition: Bounce,
			});
		} else {
			const errorData = await response.json();
			toast.error("Something went wrong.", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				transition: Bounce,
			});
		}
	};

	return (
		<main>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
				Bounce="true"
			/>
			<ToastContainer />
			<ScrollAnimation variants={scaleUpVariants}>
				<div className="Herro-Section">
					<div className="lg:h-[500px] min-h-[400px] my-cardBG flex relative">
						<div className="w-1/3 pt-20 lg:flex hidden">
							<Image src={serviceLeftAngle} width={600} height={700} alt="" />
						</div>
						<div className="w-1/3 mt-20 lg:block hidden"> </div>
						<div className="w-1/3 pt-20 lg:flex justify-end  hidden">
							<Image src={serviceRightAngle} width={600} height={700} alt="" />
						</div>
					</div>
					<div className="sm:flex absolute top-20 left-0 hidden">
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
					</div>
					<div className="sm:flex absolute top-20 right-0 hidden ">
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
					</div>
					<div className="absolute top-[280px] lg:top-[350px] lg:w-[47vw] gap-5 flex flex-col  justify-center transform -translate-y-1/2 max-h-[460px] lg:p-4 min-px-5 mx-10 lg:left-[18%]">
						<h1 className="lg:text-4xl md:text-2xl text-xl  font-semibold">
							<span className="text-[#666666]">Empowering Your</span> Digital
							Vision
						</h1>
						<p className="text-[#c7c5c5]  sm:text-sm text-xs">
						At Deltosparks, we are committed to empowering your digital vision with innovative solutions tailored to your unique needs. Our skilled professionals and cutting-edge technologies ensure exceptional results that elevate your online presence. Whether it’s seamless website and app development, AI/ML innovations, blockchain and dApp development, or SEO and digital marketing, we bring your ideas to life and help your business thrive in the dynamic digital landscape. Partner with us today, and let’s unlock endless possibilities for your digital success!						</p>
					</div>
				</div>
			</ScrollAnimation>
			<ScrollAnimation variants={scaleUpVariants}>
				<div className="flex flex-col items-center mt-24 w-full lg:max-w-[1280px] p-2 lg:p-10 mx-auto gap-10">
					<h1 className="text-center xl:text-4xl text-2xl font-semibold w-full lg:w-[500px]">
						Projects <span className="text-[#808080]">Showcase</span>
					</h1>
					<p className="text-sm text-[#808080] text-center lg:w-[900px]">
						Witness the brilliance of our previous projects. Our portfolio
						showcases the successful collaborations we\ quote\ ve had with
						diverse clients across various industries. Let our work speak for
						itself.
					</p>
					<div className="w-full">
						<ScrollAnimation variants={scaleUpVariants}>
							<div className="mt-4 flex items-center flex-col">
								<div className="w-[95%] flex-col flex gap-2 md:p-8  p-2 lg:p-4 h-full rounded-xl border border-[#1F1F1F] ">
									<CustomSlider />
									<div className="flex justify-between items-center px-4 mt-6 relative">
										<h3 className="sm:text-base text-sm">
										Pinksurfing: A Mobile Text Messenger-Based Business Hub and Multivendor E-commerce Platform										</h3>
										<button
											onClick={() => toggleVisibility(0)}
											className={`absolute right-3 flex items-center gap-4 text-[10px] sm:text-xs font-thin ${
												currentVisibleIndex === 0 ? "opacity-0 h-0" : "bg-none"
											} transition-opacity duration-1000 `}
										>
											<span className="sm:block hidden">Show More</span>
											<svg
												width="40"
												height="40"
												viewBox="0 0 56 56"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect
													x="0.5"
													y="0.5"
													width="55"
													height="55"
													rx="27.5"
													fill="url(#paint0_linear_26_1433)"
												/>
												<rect
													x="0.5"
													y="0.5"
													width="55"
													height="55"
													rx="27.5"
													stroke="url(#paint1_linear_26_1433)"
												/>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M21.3222 24.0929C21.7402 23.691 22.4049 23.704 22.8069 24.122L28 29.6349L33.1931 24.122C33.5951 23.704 34.2598 23.691 34.6778 24.0929C35.0958 24.4949 35.1088 25.1596 34.7069 25.5776L28.7569 31.8776C28.5589 32.0835 28.2856 32.1998 28 32.1998C27.7144 32.1998 27.4411 32.0835 27.2431 31.8776L21.2931 25.5776C20.8912 25.1596 20.9042 24.4949 21.3222 24.0929Z"
													fill="white"
												/>
												<defs>
													<linearGradient
														id="paint0_linear_26_1433"
														x1="28"
														y1="0"
														x2="28"
														y2="56"
														gradientUnits="userSpaceOnUse"
													>
														<stop stop-color="#1A1A1A" />
														<stop
															offset="1"
															stop-color="#1A1A1A"
															stop-opacity="0"
														/>
													</linearGradient>
													<linearGradient
														id="paint1_linear_26_1433"
														x1="28"
														y1="0"
														x2="28"
														y2="56"
														gradientUnits="userSpaceOnUse"
													>
														<stop stop-color="#262626" />
														<stop
															offset="1"
															stop-color="#262626"
															stop-opacity="0"
														/>
													</linearGradient>
												</defs>
											</svg>
										</button>
										<button
											onClick={() => toggleVisibility(0)}
											className={`right-3 absolute flex items-center gap-4 text-[10px] sm:text-xs font-thin
									${
										currentVisibleIndex === 0
											? "opacity-100 h-fit"
											: "opacity-0 h-0"
									} transition-opacity duration-1000`}
										>
											<span className="sm:block hidden">Show Less</span>
											<svg
												width="40"
												height="40"
												viewBox="0 0 56 56"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect
													x="0.5"
													y="0.5"
													width="55"
													height="55"
													rx="27.5"
													fill="url(#paint0_linear_26_1332)"
												/>
												<rect
													x="0.5"
													y="0.5"
													width="55"
													height="55"
													rx="27.5"
													stroke="url(#paint1_linear_26_1332)"
												/>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M34.6778 31.9068C34.2598 32.3088 33.5951 32.2957 33.1931 31.8777L28 26.3649L22.8069 31.8777C22.4049 32.2957 21.7402 32.3088 21.3222 31.9068C20.9042 31.5049 20.8912 30.8402 21.2931 30.4222L27.2431 24.1222C27.4411 23.9163 27.7144 23.7999 28 23.7999C28.2856 23.7999 28.5589 23.9163 28.7569 24.1222L34.7069 30.4222C35.1088 30.8402 35.0958 31.5049 34.6778 31.9068Z"
													fill="white"
												/>
												<defs>
													<linearGradient
														id="paint0_linear_26_1332"
														x1="28"
														y1="0"
														x2="28"
														y2="56"
														gradientUnits="userSpaceOnUse"
													>
														<stop stop-color="#1A1A1A" />
														<stop
															offset="1"
															stop-color="#1A1A1A"
															stop-opacity="0"
														/>
													</linearGradient>
													<linearGradient
														id="paint1_linear_26_1332"
														x1="28"
														y1="0"
														x2="28"
														y2="56"
														gradientUnits="userSpaceOnUse"
													>
														<stop stop-color="#262626" />
														<stop
															offset="1"
															stop-color="#262626"
															stop-opacity="0"
														/>
													</linearGradient>
												</defs>
											</svg>
										</button>
									</div>
									<div className="text-sm md:flex-row flex-col flex gap-4">
										<Link
											href={""}
											className="px-3 py-[2px] w-fit rounded-full flex justify-center items-center border border-[#1F1F1F] gap-2"
										>
											<svg
												width="32"
												height="32"
												viewBox="0 0 42 42"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect
													x="0.5"
													y="0.5"
													width="41"
													height="41"
													rx="20.5"
												/>
												<rect
													x="0.5"
													y="0.5"
													width="41"
													height="41"
													rx="20.5"
												/>
												<path
													d="M13.5 21.9375C13.5 21.4197 13.9197 21 14.4375 21H16.3125C16.8303 21 17.25 21.4197 17.25 21.9375V27.5625C17.25 28.0803 16.8303 28.5 16.3125 28.5H14.4375C13.9197 28.5 13.5 28.0803 13.5 27.5625V21.9375Z"
													stroke="white"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
												<path
													d="M19.125 18.1875C19.125 17.6697 19.5447 17.25 20.0625 17.25H21.9375C22.4553 17.25 22.875 17.6697 22.875 18.1875V27.5625C22.875 28.0803 22.4553 28.5 21.9375 28.5H20.0625C19.5447 28.5 19.125 28.0803 19.125 27.5625V18.1875Z"
													stroke="white"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
												<path
													d="M24.75 14.4375C24.75 13.9197 25.1697 13.5 25.6875 13.5H27.5625C28.0803 13.5 28.5 13.9197 28.5 14.4375V27.5625C28.5 28.0803 28.0803 28.5 27.5625 28.5H25.6875C25.1697 28.5 24.75 28.0803 24.75 27.5625V14.4375Z"
													stroke="white"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
											<span className="text-xs text-[#A6A6A6]">Mobile App and Ecommerce</span>
										</Link>
										<Link
											href={""}
											className="px-3 py-[2px] w-fit rounded-full flex justify-center items-center border border-[#1F1F1F] gap-2"
										>
											<svg
												width="32"
												height="32"
												viewBox="0 0 42 42"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect
													x="0.5"
													y="0.5"
													width="41"
													height="41"
													rx="20.5"
												/>
												<rect
													x="0.5"
													y="0.5"
													width="41"
													height="41"
													rx="20.5"
												/>
												<path
													d="M27.875 22.7916V26.3333C27.875 27.2454 27.2193 28.0299 26.3151 28.15C24.5762 28.3808 22.802 28.5 21 28.5C19.198 28.5 17.4238 28.3808 15.6849 28.15C14.7807 28.0299 14.125 27.2454 14.125 26.3333V22.7916M27.875 22.7916C28.2683 22.4564 28.5 21.9491 28.5 21.4074V18.2547C28.5 17.354 27.8601 16.5757 26.9692 16.4424C26.0314 16.3021 25.0829 16.1943 24.125 16.1203M27.875 22.7916C27.7137 22.9291 27.5251 23.0377 27.3143 23.1078C25.3294 23.7677 23.2064 24.125 21 24.125C18.7936 24.125 16.6706 23.7677 14.6857 23.1078C14.4749 23.0377 14.2863 22.9291 14.125 22.7916M14.125 22.7916C13.7317 22.4563 13.5 21.9491 13.5 21.4074V18.2547C13.5 17.354 14.1399 16.5757 15.0308 16.4424C15.9686 16.3021 16.9171 16.1943 17.875 16.1203M24.125 16.1203V15.375C24.125 14.3395 23.2855 13.5 22.25 13.5H19.75C18.7145 13.5 17.875 14.3395 17.875 15.375V16.1203M24.125 16.1203C23.0938 16.0406 22.0516 16 21 16C19.9484 16 18.9062 16.0406 17.875 16.1203M21 21.625H21.0062V21.6312H21V21.625Z"
													stroke="white"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
											<span className="text-xs text-[#A6A6A6]">
												Mobile App & Web Development
											</span>
										</Link>
										<Link
											href={""}
											className="px-3 py-[2px] w-fit rounded-full flex justify-center items-center border border-[#1F1F1F] gap-2"
										>
											<svg
												width="32"
												height="32"
												viewBox="0 0 42 42"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect
													x="0.5"
													y="0.5"
													width="41"
													height="41"
													rx="20.5"
												/>
												<rect
													x="0.5"
													y="0.5"
													width="41"
													height="41"
													rx="20.5"
												/>
												<path
													d="M27.875 22.7916V26.3333C27.875 27.2454 27.2193 28.0299 26.3151 28.15C24.5762 28.3808 22.802 28.5 21 28.5C19.198 28.5 17.4238 28.3808 15.6849 28.15C14.7807 28.0299 14.125 27.2454 14.125 26.3333V22.7916M27.875 22.7916C28.2683 22.4564 28.5 21.9491 28.5 21.4074V18.2547C28.5 17.354 27.8601 16.5757 26.9692 16.4424C26.0314 16.3021 25.0829 16.1943 24.125 16.1203M27.875 22.7916C27.7137 22.9291 27.5251 23.0377 27.3143 23.1078C25.3294 23.7677 23.2064 24.125 21 24.125C18.7936 24.125 16.6706 23.7677 14.6857 23.1078C14.4749 23.0377 14.2863 22.9291 14.125 22.7916M14.125 22.7916C13.7317 22.4563 13.5 21.9491 13.5 21.4074V18.2547C13.5 17.354 14.1399 16.5757 15.0308 16.4424C15.9686 16.3021 16.9171 16.1943 17.875 16.1203M24.125 16.1203V15.375C24.125 14.3395 23.2855 13.5 22.25 13.5H19.75C18.7145 13.5 17.875 14.3395 17.875 15.375V16.1203M24.125 16.1203C23.0938 16.0406 22.0516 16 21 16C19.9484 16 18.9062 16.0406 17.875 16.1203M21 21.625H21.0062V21.6312H21V21.625Z"
													stroke="white"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
											<span className="text-xs text-[#A6A6A6]">
												AI & Blockchain
											</span>
										</Link>
									</div>
									<div className="border mt-6 border-[#1F1F1F] rounded-xl lg:p-6 p-2">
										<div className="flex flex-col gap-4 p-4">
											<h4 className="font-light">Project Description</h4>
											<p className="text-sm text-[#8C8C8C]">
												{" "}
												PinkSurfing is a pioneering platform combining Blockchain technology with a text messenger-based business hub, multi-vendor e-commerce marketplace, and a retro wallet. It integrates multiple e-commerce vendors, enabling users to shop securely and cost-effectively while using a dual-functioning crypto wallet.											</p>
										</div>
										<ScrollAnimation>
											<div
												className={`${
													currentVisibleIndex === 0
														? "opacity-100 h-auto"
														: "opacity-0 h-0"
												} transition-opacity duration-500`}
											>
												<div className="w-full items-center mt-6 flex flex-col gap-6">
													<div className="w-[100%] min-h-[100px] flex lg:flex-row  flex-col rounded-xl border border-[#1F1F1F] p-4">
														<div className="lg:w-1/4 lg:items-start items-center h-full p-4 justify-center flex flex-col gap-2">
															<h4 className="font-thin text-sm">Category</h4>
															<span className="font-light lg:text-base text-sm">
																Mobile App & E-commerce
															</span>
														</div>
														<div className="border-r border-[#1F1F1F]"></div>
														<div className="border-b w-[90%] mx-auto lg:hidden block border-[#1F1F1F]"></div>
														<div className="lg:w-1/4 lg:items-start items-center h-full p-4 justify-center flex flex-col gap-2">
															<h4 className="font-thin text-sm">Time Taken</h4>
															<span className="font-light lg:text-base text-sm">
																4 Months
															</span>
														</div>
														<div className="border-b w-[90%] lg:hidden block mx-auto border-[#1F1F1F]"></div>
														<div className="border-r border-[#1F1F1F]"></div>
														<div className="lg:w-1/4 lg:items-start items-center h-full p-4 justify-center flex flex-col gap-2">
															<h4 className="font-thin text-sm">Start Date</h4>
															<span className="font-light lg:text-base text-sm">
																January 15, 2024
															</span>
														</div>
														<div className="border-r border-[#1F1F1F]"></div>
														<div className="border-b lg:hidden block w-[90%] mx-auto border-[#1F1F1F]"></div>
														<div className="lg:w-1/4 lg:items-start items-center h-full p-4 justify-center flex flex-col gap-2">
															<h4 className="font-thin text-sm">
																Completed Date
															</h4>
															<span className="font-light lg:text-base text-sm">
																May 20, 2024
															</span>
														</div>
													</div>
													<div className="w-[100%] min-h-[100px] lg:flex-row flex-col items-center justify-around gap-4 flex rounded-xl border border-[#1F1F1F] p-4">
														<div className=" flex items-center px-4">
															<h4>Technologies Used</h4>
														</div>
														<div className=" flex justify-center items-center gap-4 px-4">
															<svg
																width="56"
																height="56"
																viewBox="0 0 56 56"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	fill="url(#paint0_linear_26_1372)"
																/>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	stroke="url(#paint1_linear_26_1372)"
																	stroke-width="2"
																/>
																<g clip-path="url(#clip0_26_1372)">
																	<path
																		d="M28.375 23.8688C28.375 21.8092 28.375 19.7983 28.375 17.7955C28.3993 17.7712 28.4237 17.7387 28.4399 17.7387C29.5832 17.7469 30.7346 17.6982 31.8698 17.7874C33.3131 17.909 34.424 19.1983 34.4807 20.674C34.5375 22.1174 33.5239 23.4958 32.1212 23.7472C31.44 23.8688 30.7265 23.8364 30.0291 23.8526C29.494 23.885 28.9588 23.8688 28.375 23.8688Z"
																		fill="white"
																	/>
																	<path
																		d="M27.2723 17.7307C27.2723 19.7903 27.2723 21.8012 27.2723 23.877C27.0858 23.877 26.9074 23.877 26.729 23.877C25.9344 23.877 25.1316 23.877 24.337 23.877C22.5531 23.8689 21.1827 22.5553 21.1422 20.8363C21.1098 19.1983 22.4152 17.8199 24.1424 17.7388C25.164 17.6901 26.1938 17.7307 27.2723 17.7307Z"
																		fill="white"
																	/>
																	<path
																		d="M27.2645 24.9634C27.2645 27.0149 27.2645 29.0177 27.2645 31.134C25.9428 31.0692 24.6211 31.1178 23.3481 30.8989C21.9534 30.6556 21.0533 29.2528 21.1588 27.8501C21.2723 26.2851 22.3507 25.1013 23.8427 24.9796C24.9698 24.8904 26.105 24.9634 27.2645 24.9634Z"
																		fill="white"
																	/>
																	<path
																		d="M27.3292 32.1395C27.2886 33.4125 27.3373 34.6531 27.1832 35.8532C26.9967 37.2722 25.5858 38.3263 24.1668 38.2776C22.6424 38.229 21.3937 37.1181 21.1991 35.6342C20.9477 33.7693 22.3505 32.1476 24.2317 32.1313C25.2291 32.1395 26.2264 32.1395 27.3292 32.1395Z"
																		fill="white"
																	/>
																	<path
																		d="M31.4073 31.0691C29.7207 31.061 28.3503 29.6744 28.3584 27.9878C28.3665 26.3093 29.7531 24.9309 31.4397 24.939C33.1263 24.9471 34.4966 26.3337 34.4885 28.0203C34.4804 29.7068 33.0938 31.0772 31.4073 31.0691Z"
																		fill="white"
																	/>
																</g>
																<defs>
																	<linearGradient
																		id="paint0_linear_26_1372"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#1A1A1A" />
																		<stop
																			offset="1"
																			stop-color="#1A1A1A"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<linearGradient
																		id="paint1_linear_26_1372"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#333333" />
																		<stop
																			offset="0.84964"
																			stop-color="#333333"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<clipPath id="clip0_26_1372">
																		<rect
																			width="13.3467"
																			height="20.5714"
																			fill="white"
																			transform="translate(21.1426 17.7144)"
																		/>
																	</clipPath>
																</defs>
															</svg>
															<svg
																width="56"
																height="56"
																viewBox="0 0 56 56"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	fill="url(#paint0_linear_26_1380)"
																/>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	stroke="url(#paint1_linear_26_1380)"
																	stroke-width="2"
																/>
																<g clip-path="url(#clip0_26_1380)">
																	<path
																		d="M18.5713 17.7144C24.6634 17.7144 30.7104 17.7144 36.7832 17.7144C36.7574 18.1721 36.7317 18.604 36.6994 19.0424C36.5125 21.634 36.3191 24.2255 36.1386 26.8171C35.9774 29.0992 35.8291 31.3814 35.6744 33.6571C35.6357 34.2695 35.5777 34.8755 35.5455 35.4879C35.5326 35.6942 35.4488 35.778 35.2554 35.836C32.7992 36.6354 30.3559 37.4542 27.8997 38.2535C27.7707 38.2987 27.5967 38.2922 27.4677 38.2535C25.0373 37.4606 22.6069 36.6548 20.1701 35.8618C19.9186 35.778 19.8413 35.6491 19.8219 35.4106C19.7446 34.1986 19.6543 32.993 19.5705 31.7811C19.4287 29.7375 19.2869 27.6939 19.1386 25.6438C19.0226 23.9419 18.9001 22.2399 18.784 20.538C18.7131 19.6097 18.6422 18.6814 18.5713 17.7144ZM22.5876 31.0977C22.5876 31.2202 22.5811 31.3233 22.5876 31.4265C22.6263 32.026 22.6843 32.6256 22.7036 33.2251C22.7101 33.4443 22.7874 33.541 22.9873 33.6055C24.4958 34.1019 25.9979 34.6047 27.5 35.1011C27.6031 35.1333 27.7385 35.1462 27.8352 35.114C29.3631 34.6112 30.8845 34.0954 32.4124 33.599C32.5993 33.5346 32.6509 33.4443 32.6638 33.2574C32.7992 31.3105 32.9474 29.3571 33.0893 27.4102C33.1151 27.0298 33.1279 26.6495 33.1473 26.224C30.2978 26.224 27.4742 26.224 24.6376 26.224C24.5667 25.1732 24.4958 24.1611 24.4249 23.1167C27.4291 23.1167 30.3881 23.1167 33.3794 23.1167C33.4374 22.3109 33.489 21.5372 33.547 20.7508C29.6209 20.7508 25.7336 20.7508 21.8269 20.7508C22.0138 23.3939 22.2008 26.0177 22.3813 28.6609C25.1211 28.6609 27.8223 28.6609 30.5622 28.6609C30.4912 29.6408 30.4332 30.5884 30.3494 31.5361C30.343 31.6328 30.2076 31.7746 30.1044 31.8068C29.3889 32.0583 28.6668 32.3032 27.9383 32.5224C27.7772 32.574 27.5773 32.5676 27.4162 32.516C26.8295 32.3419 26.2622 32.1034 25.6756 31.9551C25.2114 31.8391 24.9213 31.6521 24.96 31.1364C24.96 31.1235 24.9342 31.1042 24.9213 31.0848C24.1541 31.0977 23.3805 31.0977 22.5876 31.0977Z"
																		fill="white"
																	/>
																</g>
																<defs>
																	<linearGradient
																		id="paint0_linear_26_1380"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#1A1A1A" />
																		<stop
																			offset="1"
																			stop-color="#1A1A1A"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<linearGradient
																		id="paint1_linear_26_1380"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#333333" />
																		<stop
																			offset="0.84964"
																			stop-color="#333333"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<clipPath id="clip0_26_1380">
																		<rect
																			width="18.2119"
																			height="20.5714"
																			fill="white"
																			transform="translate(18.5713 17.7144)"
																		/>
																	</clipPath>
																</defs>
															</svg>
															<svg
																width="56"
																height="56"
																viewBox="0 0 56 56"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	fill="url(#paint0_linear_26_1384)"
																/>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	stroke="url(#paint1_linear_26_1384)"
																	stroke-width="2"
																/>
																<g clip-path="url(#clip0_26_1384)">
																	<path
																		d="M18.5777 17.7144C24.5906 17.7144 30.5906 17.7144 36.6035 17.7144C36.5391 18.5264 36.4746 19.3126 36.4037 20.1053C36.3071 21.2396 36.2039 22.3739 36.1008 23.5017C35.9397 25.3191 35.7721 27.1365 35.611 28.9539C35.4886 30.3202 35.379 31.6929 35.2566 33.0591C35.1728 34.0516 35.0826 35.0506 34.9795 36.043C34.9666 36.1461 34.8441 36.2944 34.7474 36.3202C32.4402 36.9775 30.1266 37.622 27.813 38.26C27.6518 38.3051 27.4521 38.2922 27.2845 38.2471C25.016 37.6091 22.7474 36.9711 20.4725 36.3395C20.2727 36.2879 20.1889 36.2106 20.1696 35.9979C20.002 33.9872 19.828 31.9764 19.6476 29.9657C19.4284 27.4136 19.19 24.8615 18.958 22.3094C18.8226 20.8207 18.7002 19.3384 18.5713 17.8497C18.5713 17.811 18.5777 17.7659 18.5777 17.7144ZM22.6185 29.4566C22.6185 29.579 22.6121 29.6886 22.6185 29.7917C22.7088 30.7842 22.8054 31.7767 22.8828 32.7756C22.9021 33.0205 22.9795 33.1236 23.2179 33.188C24.6228 33.5618 26.0278 33.955 27.4327 34.3416C27.5101 34.361 27.6003 34.3867 27.6776 34.3674C29.147 33.9678 30.61 33.5618 32.0729 33.1494C32.1567 33.1236 32.2662 33.0076 32.2727 32.9238C32.4145 31.4609 32.5498 29.9979 32.6787 28.535C32.8011 27.1687 32.9172 25.796 33.0396 24.4297C33.1234 23.4695 33.2072 22.5092 33.2974 21.5361C29.4821 21.5361 25.6927 21.5361 21.8839 21.5361C21.929 22.245 21.9741 22.9345 22.0256 23.6564C24.9773 23.6564 27.8967 23.6564 30.842 23.6564C30.784 24.4297 30.726 25.1773 30.6744 25.9507C27.8581 25.9893 25.074 26.0216 22.2576 26.0602C22.335 26.7949 22.4123 27.4909 22.4897 28.2192C25.1706 28.2192 27.813 28.2192 30.4875 28.2192C30.3779 29.2181 30.2813 30.1913 30.1588 31.158C30.1459 31.2482 30.0299 31.3771 29.9333 31.4029C29.4112 31.564 28.8699 31.6671 28.3543 31.8475C27.813 32.0344 27.2974 32.0087 26.7625 31.8347C26.2985 31.68 25.8151 31.5511 25.3382 31.448C25.1062 31.3964 25.0289 31.2869 25.016 31.0613C24.9837 30.5393 24.9257 30.0173 24.8806 29.4888C24.1008 29.4566 23.3661 29.4566 22.6185 29.4566Z"
																		fill="white"
																	/>
																</g>
																<defs>
																	<linearGradient
																		id="paint0_linear_26_1384"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#1A1A1A" />
																		<stop
																			offset="1"
																			stop-color="#1A1A1A"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<linearGradient
																		id="paint1_linear_26_1384"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#333333" />
																		<stop
																			offset="0.84964"
																			stop-color="#333333"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<clipPath id="clip0_26_1384">
																		<rect
																			width="18.0387"
																			height="20.5714"
																			fill="white"
																			transform="translate(18.5713 17.7144)"
																		/>
																	</clipPath>
																</defs>
															</svg>
															<svg
																width="56"
																height="56"
																viewBox="0 0 56 56"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	fill="url(#paint0_linear_26_1388)"
																/>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	stroke="url(#paint1_linear_26_1388)"
																	stroke-width="2"
																/>
																<g clip-path="url(#clip0_26_1388)">
																	<path
																		d="M16.8574 17.7144C23.7532 17.7144 30.6104 17.7144 37.4869 17.7144C37.4224 18.5006 37.358 19.2675 37.2871 20.0409C37.1904 21.1429 37.0873 22.2385 36.9842 23.3406C36.8166 25.1257 36.649 26.9109 36.4879 28.6897C36.3655 30.0237 36.2559 31.3642 36.1335 32.6982C36.0239 33.9163 35.9143 35.1343 35.8048 36.3524C35.7855 36.5393 35.721 36.6166 35.5148 36.6617C32.8789 37.1837 30.243 37.7187 27.6007 38.2407C27.3429 38.2922 27.0658 38.3051 26.808 38.2536C24.3913 37.7767 21.9745 37.2869 19.5577 36.7971C19.3128 36.7455 19.0744 36.6811 18.8295 36.6617C18.6039 36.6424 18.5395 36.5393 18.5202 36.3395C18.3913 34.8314 18.2624 33.3234 18.127 31.8218C17.9401 29.7917 17.7468 27.7616 17.5599 25.7315C17.4181 23.9464 17.2699 22.1547 17.1152 20.376C17.0379 19.4995 16.9476 18.6231 16.8574 17.7144ZM31.3 28.8637C31.1904 30.043 31.0873 31.1709 30.9777 32.3051C30.0626 32.4856 29.1797 32.6596 28.3032 32.8465C28.2065 32.8658 28.0454 32.9496 28.0454 33.014C28.0261 33.5425 28.0325 34.0774 28.0325 34.6445C29.5792 34.3352 31.0744 34.0387 32.576 33.7358C32.7758 31.5382 32.9756 29.3663 33.1754 27.1429C32.0089 27.1429 30.8875 27.1429 29.779 27.1429C29.779 25.6864 29.779 24.275 29.779 22.8379C31.0551 22.8379 32.3053 22.8379 33.5749 22.8379C33.62 22.2579 33.6652 21.7101 33.7167 21.1494C31.8026 21.1494 29.9337 21.1494 28.0647 21.1494C28.0647 23.7272 28.0647 26.2858 28.0647 28.8637C29.141 28.8637 30.2044 28.8637 31.3 28.8637ZM24.591 21.1429C24.591 24.9582 24.591 28.7348 24.591 32.5436C24.1657 32.4598 23.7726 32.3825 23.373 32.3051C23.315 31.7251 23.2634 31.1709 23.2119 30.6037C22.6383 30.6037 22.0841 30.6037 21.4911 30.6037C21.5878 31.6542 21.678 32.6854 21.7747 33.7358C23.2828 34.0387 24.7844 34.3352 26.2989 34.6381C26.2989 30.1204 26.2989 25.6349 26.2989 21.1429C25.7253 21.1429 25.184 21.1429 24.591 21.1429Z"
																		fill="white"
																	/>
																</g>
																<defs>
																	<linearGradient
																		id="paint0_linear_26_1388"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#1A1A1A" />
																		<stop
																			offset="1"
																			stop-color="#1A1A1A"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<linearGradient
																		id="paint1_linear_26_1388"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#333333" />
																		<stop
																			offset="0.84964"
																			stop-color="#333333"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<clipPath id="clip0_26_1388">
																		<rect
																			width="20.6294"
																			height="20.5714"
																			fill="white"
																			transform="translate(16.8574 17.7144)"
																		/>
																	</clipPath>
																</defs>
															</svg>
														</div>
													</div>

												</div>
												<div className="w-full min-h-[160px] flex flex-col justify-between mt-6 rounded-xl border-[#1F1F1F] border p-4">
													<h4>Method Used</h4>
													<div className="flex sm:flex-row flex-col gap-2 p-3 w-full min-h-[80px] border border-[#1F1F1F] rounded-xl">
														<div className="flex items-center justify-center sm:w-1/3">
															<span className="sm:w-[180px] w-full  flex justify-center items-center text-sm h-[50px] border border-[#1F1F1F] rounded-full ">
																Agile Development
															</span>
												
														</div>
													</div>
												</div>
											</div>
										</ScrollAnimation>
									</div>
								</div>
							</div>
						</ScrollAnimation>
					</div>

					<div className="w-full">
						<ScrollAnimation variants={scaleUpVariants}>
							<div className="mt-4 flex items-center flex-col">
								<div className="w-[95%] flex-col flex gap-2 md:p-8  p-2 lg:p-4 h-full rounded-xl border border-[#1F1F1F] ">
									<CustomSlider2/>
									<div className="flex justify-between items-center px-4 mt-6 relative">
										<h3 className="sm:text-base text-sm">
											Hovr: A Web3 Marketplace
										</h3>
										<button
											onClick={() => toggleVisibility(1)}
											className={`absolute right-3 flex items-center gap-4 text-[10px] sm:text-xs font-thin ${
												currentVisibleIndex === 1 ? "opacity-0 h-0" : "bg-none"
											} transition-opacity duration-1000 `}
										>
											<span className="sm:block hidden">Show More</span>
											<svg
												width="40"
												height="40"
												viewBox="0 0 56 56"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect
													x="0.5"
													y="0.5"
													width="55"
													height="55"
													rx="27.5"
													fill="url(#paint0_linear_26_1433)"
												/>
												<rect
													x="0.5"
													y="0.5"
													width="55"
													height="55"
													rx="27.5"
													stroke="url(#paint1_linear_26_1433)"
												/>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M21.3222 24.0929C21.7402 23.691 22.4049 23.704 22.8069 24.122L28 29.6349L33.1931 24.122C33.5951 23.704 34.2598 23.691 34.6778 24.0929C35.0958 24.4949 35.1088 25.1596 34.7069 25.5776L28.7569 31.8776C28.5589 32.0835 28.2856 32.1998 28 32.1998C27.7144 32.1998 27.4411 32.0835 27.2431 31.8776L21.2931 25.5776C20.8912 25.1596 20.9042 24.4949 21.3222 24.0929Z"
													fill="white"
												/>
												<defs>
													<linearGradient
														id="paint0_linear_26_1433"
														x1="28"
														y1="0"
														x2="28"
														y2="56"
														gradientUnits="userSpaceOnUse"
													>
														<stop stop-color="#1A1A1A" />
														<stop
															offset="1"
															stop-color="#1A1A1A"
															stop-opacity="0"
														/>
													</linearGradient>
													<linearGradient
														id="paint1_linear_26_1433"
														x1="28"
														y1="0"
														x2="28"
														y2="56"
														gradientUnits="userSpaceOnUse"
													>
														<stop stop-color="#262626" />
														<stop
															offset="1"
															stop-color="#262626"
															stop-opacity="0"
														/>
													</linearGradient>
												</defs>
											</svg>
										</button>
										<button
											onClick={() => toggleVisibility(1)}
											className={`right-3 absolute flex items-center gap-4 text-[10px] sm:text-xs font-thin
									${
										currentVisibleIndex === 1
											? "opacity-100 h-fit"
											: "opacity-0 h-0"
									} transition-opacity duration-1000`}
										>
											<span className="sm:block hidden">Show Less</span>
											<svg
												width="40"
												height="40"
												viewBox="0 0 56 56"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect
													x="0.5"
													y="0.5"
													width="55"
													height="55"
													rx="27.5"
													fill="url(#paint0_linear_26_1332)"
												/>
												<rect
													x="0.5"
													y="0.5"
													width="55"
													height="55"
													rx="27.5"
													stroke="url(#paint1_linear_26_1332)"
												/>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M34.6778 31.9068C34.2598 32.3088 33.5951 32.2957 33.1931 31.8777L28 26.3649L22.8069 31.8777C22.4049 32.2957 21.7402 32.3088 21.3222 31.9068C20.9042 31.5049 20.8912 30.8402 21.2931 30.4222L27.2431 24.1222C27.4411 23.9163 27.7144 23.7999 28 23.7999C28.2856 23.7999 28.5589 23.9163 28.7569 24.1222L34.7069 30.4222C35.1088 30.8402 35.0958 31.5049 34.6778 31.9068Z"
													fill="white"
												/>
												<defs>
													<linearGradient
														id="paint0_linear_26_1332"
														x1="28"
														y1="0"
														x2="28"
														y2="56"
														gradientUnits="userSpaceOnUse"
													>
														<stop stop-color="#1A1A1A" />
														<stop
															offset="1"
															stop-color="#1A1A1A"
															stop-opacity="0"
														/>
													</linearGradient>
													<linearGradient
														id="paint1_linear_26_1332"
														x1="28"
														y1="0"
														x2="28"
														y2="56"
														gradientUnits="userSpaceOnUse"
													>
														<stop stop-color="#262626" />
														<stop
															offset="1"
															stop-color="#262626"
															stop-opacity="0"
														/>
													</linearGradient>
												</defs>
											</svg>
										</button>
									</div>
									<div className="text-sm md:flex-row flex-col flex gap-4">
										<Link
											href={""}
											className="px-3 py-[2px] w-fit rounded-full flex justify-center items-center border border-[#1F1F1F] gap-2"
										>
											<svg
												width="32"
												height="32"
												viewBox="0 0 42 42"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect
													x="0.5"
													y="0.5"
													width="41"
													height="41"
													rx="20.5"
												/>
												<rect
													x="0.5"
													y="0.5"
													width="41"
													height="41"
													rx="20.5"
												/>
												<path
													d="M13.5 21.9375C13.5 21.4197 13.9197 21 14.4375 21H16.3125C16.8303 21 17.25 21.4197 17.25 21.9375V27.5625C17.25 28.0803 16.8303 28.5 16.3125 28.5H14.4375C13.9197 28.5 13.5 28.0803 13.5 27.5625V21.9375Z"
													stroke="white"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
												<path
													d="M19.125 18.1875C19.125 17.6697 19.5447 17.25 20.0625 17.25H21.9375C22.4553 17.25 22.875 17.6697 22.875 18.1875V27.5625C22.875 28.0803 22.4553 28.5 21.9375 28.5H20.0625C19.5447 28.5 19.125 28.0803 19.125 27.5625V18.1875Z"
													stroke="white"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
												<path
													d="M24.75 14.4375C24.75 13.9197 25.1697 13.5 25.6875 13.5H27.5625C28.0803 13.5 28.5 13.9197 28.5 14.4375V27.5625C28.5 28.0803 28.0803 28.5 27.5625 28.5H25.6875C25.1697 28.5 24.75 28.0803 24.75 27.5625V14.4375Z"
													stroke="white"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
											<span className="text-xs text-[#A6A6A6]">Web3 Marketplace</span>
										</Link>
										<Link
											href={""}
											className="px-3 py-[2px] w-fit rounded-full flex justify-center items-center border border-[#1F1F1F] gap-2"
										>
											<svg
												width="32"
												height="32"
												viewBox="0 0 42 42"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect
													x="0.5"
													y="0.5"
													width="41"
													height="41"
													rx="20.5"
												/>
												<rect
													x="0.5"
													y="0.5"
													width="41"
													height="41"
													rx="20.5"
												/>
												<path
													d="M27.875 22.7916V26.3333C27.875 27.2454 27.2193 28.0299 26.3151 28.15C24.5762 28.3808 22.802 28.5 21 28.5C19.198 28.5 17.4238 28.3808 15.6849 28.15C14.7807 28.0299 14.125 27.2454 14.125 26.3333V22.7916M27.875 22.7916C28.2683 22.4564 28.5 21.9491 28.5 21.4074V18.2547C28.5 17.354 27.8601 16.5757 26.9692 16.4424C26.0314 16.3021 25.0829 16.1943 24.125 16.1203M27.875 22.7916C27.7137 22.9291 27.5251 23.0377 27.3143 23.1078C25.3294 23.7677 23.2064 24.125 21 24.125C18.7936 24.125 16.6706 23.7677 14.6857 23.1078C14.4749 23.0377 14.2863 22.9291 14.125 22.7916M14.125 22.7916C13.7317 22.4563 13.5 21.9491 13.5 21.4074V18.2547C13.5 17.354 14.1399 16.5757 15.0308 16.4424C15.9686 16.3021 16.9171 16.1943 17.875 16.1203M24.125 16.1203V15.375C24.125 14.3395 23.2855 13.5 22.25 13.5H19.75C18.7145 13.5 17.875 14.3395 17.875 15.375V16.1203M24.125 16.1203C23.0938 16.0406 22.0516 16 21 16C19.9484 16 18.9062 16.0406 17.875 16.1203M21 21.625H21.0062V21.6312H21V21.625Z"
													stroke="white"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
											<span className="text-xs text-[#A6A6A6]">
												Blockchain & Web Development
											</span>
										</Link>
										<Link
											href={""}
											className="px-3 py-[2px] w-fit rounded-full flex justify-center items-center border border-[#1F1F1F] gap-2"
										>
											<svg
												width="32"
												height="32"
												viewBox="0 0 42 42"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect
													x="0.5"
													y="0.5"
													width="41"
													height="41"
													rx="20.5"
												/>
												<rect
													x="0.5"
													y="0.5"
													width="41"
													height="41"
													rx="20.5"
												/>
												<path
													d="M27.875 22.7916V26.3333C27.875 27.2454 27.2193 28.0299 26.3151 28.15C24.5762 28.3808 22.802 28.5 21 28.5C19.198 28.5 17.4238 28.3808 15.6849 28.15C14.7807 28.0299 14.125 27.2454 14.125 26.3333V22.7916M27.875 22.7916C28.2683 22.4564 28.5 21.9491 28.5 21.4074V18.2547C28.5 17.354 27.8601 16.5757 26.9692 16.4424C26.0314 16.3021 25.0829 16.1943 24.125 16.1203M27.875 22.7916C27.7137 22.9291 27.5251 23.0377 27.3143 23.1078C25.3294 23.7677 23.2064 24.125 21 24.125C18.7936 24.125 16.6706 23.7677 14.6857 23.1078C14.4749 23.0377 14.2863 22.9291 14.125 22.7916M14.125 22.7916C13.7317 22.4563 13.5 21.9491 13.5 21.4074V18.2547C13.5 17.354 14.1399 16.5757 15.0308 16.4424C15.9686 16.3021 16.9171 16.1943 17.875 16.1203M24.125 16.1203V15.375C24.125 14.3395 23.2855 13.5 22.25 13.5H19.75C18.7145 13.5 17.875 14.3395 17.875 15.375V16.1203M24.125 16.1203C23.0938 16.0406 22.0516 16 21 16C19.9484 16 18.9062 16.0406 17.875 16.1203M21 21.625H21.0062V21.6312H21V21.625Z"
													stroke="white"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
											<span className="text-xs text-[#A6A6A6]">
												Web Design
											</span>
										</Link>
									</div>
									<div className="border mt-6 border-[#1F1F1F] rounded-xl p-6">
										<div className="flex flex-col gap-4">
											<h4 className="font-light">Project Description</h4>
											<p className="text-sm text-[#8C8C8C]">
												{" "}
												Hovr is an innovative NFT exchange designed to revolutionize the metaverse by integrating play-to-earn games, digital avatars, and decentralized experiences. It aims to lower minting and trading costs, maximizing profits for users.

</p>
										</div>
										<ScrollAnimation>
											<div
												className={`${
													currentVisibleIndex === 1
														? "opacity-100 h-auto"
														: "opacity-0 h-0"
												} transition-opacity duration-500`}
											>
												<div className="w-full items-center mt-6 flex flex-col gap-6">
													<div className="w-[100%] min-h-[100px] flex lg:flex-row  flex-col rounded-xl border border-[#1F1F1F] p-4">
														<div className="lg:w-1/4 lg:items-start items-center h-full p-4 justify-center flex flex-col gap-2">
															<h4 className="font-thin text-sm">Category</h4>
															<span className="font-light lg:text-base text-sm">
																Web3 Marketplace
															</span>
														</div>
														<div className="border-r border-[#1F1F1F]"></div>
														<div className="border-b w-[90%] mx-auto lg:hidden block border-[#1F1F1F]"></div>
														<div className="lg:w-1/4 lg:items-start items-center h-full p-4 justify-center flex flex-col gap-2">
															<h4 className="font-thin text-sm">Time Taken</h4>
															<span className="font-light lg:text-base text-sm">
																2.5 Months
															</span>
														</div>
														<div className="border-b w-[90%] lg:hidden block mx-auto border-[#1F1F1F]"></div>
														<div className="border-r border-[#1F1F1F]"></div>
														<div className="lg:w-1/4 lg:items-start items-center h-full p-4 justify-center flex flex-col gap-2">
															<h4 className="font-thin text-sm">Start Date</h4>
															<span className="font-light lg:text-base text-sm">
																July 12, 2023
															</span>
														</div>
														<div className="border-r border-[#1F1F1F]"></div>
														<div className="border-b lg:hidden block w-[90%] mx-auto border-[#1F1F1F]"></div>
														<div className="lg:w-1/4 lg:items-start items-center h-full p-4 justify-center flex flex-col gap-2">
															<h4 className="font-thin text-sm">
																Completed Date
															</h4>
															<span className="font-light lg:text-base text-sm">
																October 15, 2023
															</span>
														</div>
													</div>
													<div className="w-[100%] min-h-[100px] lg:flex-row flex-col items-center justify-around gap-4 flex rounded-xl border border-[#1F1F1F] p-4">
														<div className=" flex items-center px-4">
															<h4>Technologies Used</h4>
														</div>
														<div className=" flex justify-center items-center gap-4 px-4">
															<svg
																width="56"
																height="56"
																viewBox="0 0 56 56"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	fill="url(#paint0_linear_26_1372)"
																/>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	stroke="url(#paint1_linear_26_1372)"
																	stroke-width="2"
																/>
																<g clip-path="url(#clip0_26_1372)">
																	<path
																		d="M28.375 23.8688C28.375 21.8092 28.375 19.7983 28.375 17.7955C28.3993 17.7712 28.4237 17.7387 28.4399 17.7387C29.5832 17.7469 30.7346 17.6982 31.8698 17.7874C33.3131 17.909 34.424 19.1983 34.4807 20.674C34.5375 22.1174 33.5239 23.4958 32.1212 23.7472C31.44 23.8688 30.7265 23.8364 30.0291 23.8526C29.494 23.885 28.9588 23.8688 28.375 23.8688Z"
																		fill="white"
																	/>
																	<path
																		d="M27.2723 17.7307C27.2723 19.7903 27.2723 21.8012 27.2723 23.877C27.0858 23.877 26.9074 23.877 26.729 23.877C25.9344 23.877 25.1316 23.877 24.337 23.877C22.5531 23.8689 21.1827 22.5553 21.1422 20.8363C21.1098 19.1983 22.4152 17.8199 24.1424 17.7388C25.164 17.6901 26.1938 17.7307 27.2723 17.7307Z"
																		fill="white"
																	/>
																	<path
																		d="M27.2645 24.9634C27.2645 27.0149 27.2645 29.0177 27.2645 31.134C25.9428 31.0692 24.6211 31.1178 23.3481 30.8989C21.9534 30.6556 21.0533 29.2528 21.1588 27.8501C21.2723 26.2851 22.3507 25.1013 23.8427 24.9796C24.9698 24.8904 26.105 24.9634 27.2645 24.9634Z"
																		fill="white"
																	/>
																	<path
																		d="M27.3292 32.1395C27.2886 33.4125 27.3373 34.6531 27.1832 35.8532C26.9967 37.2722 25.5858 38.3263 24.1668 38.2776C22.6424 38.229 21.3937 37.1181 21.1991 35.6342C20.9477 33.7693 22.3505 32.1476 24.2317 32.1313C25.2291 32.1395 26.2264 32.1395 27.3292 32.1395Z"
																		fill="white"
																	/>
																	<path
																		d="M31.4073 31.0691C29.7207 31.061 28.3503 29.6744 28.3584 27.9878C28.3665 26.3093 29.7531 24.9309 31.4397 24.939C33.1263 24.9471 34.4966 26.3337 34.4885 28.0203C34.4804 29.7068 33.0938 31.0772 31.4073 31.0691Z"
																		fill="white"
																	/>
																</g>
																<defs>
																	<linearGradient
																		id="paint0_linear_26_1372"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#1A1A1A" />
																		<stop
																			offset="1"
																			stop-color="#1A1A1A"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<linearGradient
																		id="paint1_linear_26_1372"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#333333" />
																		<stop
																			offset="0.84964"
																			stop-color="#333333"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<clipPath id="clip0_26_1372">
																		<rect
																			width="13.3467"
																			height="20.5714"
																			fill="white"
																			transform="translate(21.1426 17.7144)"
																		/>
																	</clipPath>
																</defs>
															</svg>
															<svg
																width="56"
																height="56"
																viewBox="0 0 56 56"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	fill="url(#paint0_linear_26_1380)"
																/>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	stroke="url(#paint1_linear_26_1380)"
																	stroke-width="2"
																/>
																<g clip-path="url(#clip0_26_1380)">
																	<path
																		d="M18.5713 17.7144C24.6634 17.7144 30.7104 17.7144 36.7832 17.7144C36.7574 18.1721 36.7317 18.604 36.6994 19.0424C36.5125 21.634 36.3191 24.2255 36.1386 26.8171C35.9774 29.0992 35.8291 31.3814 35.6744 33.6571C35.6357 34.2695 35.5777 34.8755 35.5455 35.4879C35.5326 35.6942 35.4488 35.778 35.2554 35.836C32.7992 36.6354 30.3559 37.4542 27.8997 38.2535C27.7707 38.2987 27.5967 38.2922 27.4677 38.2535C25.0373 37.4606 22.6069 36.6548 20.1701 35.8618C19.9186 35.778 19.8413 35.6491 19.8219 35.4106C19.7446 34.1986 19.6543 32.993 19.5705 31.7811C19.4287 29.7375 19.2869 27.6939 19.1386 25.6438C19.0226 23.9419 18.9001 22.2399 18.784 20.538C18.7131 19.6097 18.6422 18.6814 18.5713 17.7144ZM22.5876 31.0977C22.5876 31.2202 22.5811 31.3233 22.5876 31.4265C22.6263 32.026 22.6843 32.6256 22.7036 33.2251C22.7101 33.4443 22.7874 33.541 22.9873 33.6055C24.4958 34.1019 25.9979 34.6047 27.5 35.1011C27.6031 35.1333 27.7385 35.1462 27.8352 35.114C29.3631 34.6112 30.8845 34.0954 32.4124 33.599C32.5993 33.5346 32.6509 33.4443 32.6638 33.2574C32.7992 31.3105 32.9474 29.3571 33.0893 27.4102C33.1151 27.0298 33.1279 26.6495 33.1473 26.224C30.2978 26.224 27.4742 26.224 24.6376 26.224C24.5667 25.1732 24.4958 24.1611 24.4249 23.1167C27.4291 23.1167 30.3881 23.1167 33.3794 23.1167C33.4374 22.3109 33.489 21.5372 33.547 20.7508C29.6209 20.7508 25.7336 20.7508 21.8269 20.7508C22.0138 23.3939 22.2008 26.0177 22.3813 28.6609C25.1211 28.6609 27.8223 28.6609 30.5622 28.6609C30.4912 29.6408 30.4332 30.5884 30.3494 31.5361C30.343 31.6328 30.2076 31.7746 30.1044 31.8068C29.3889 32.0583 28.6668 32.3032 27.9383 32.5224C27.7772 32.574 27.5773 32.5676 27.4162 32.516C26.8295 32.3419 26.2622 32.1034 25.6756 31.9551C25.2114 31.8391 24.9213 31.6521 24.96 31.1364C24.96 31.1235 24.9342 31.1042 24.9213 31.0848C24.1541 31.0977 23.3805 31.0977 22.5876 31.0977Z"
																		fill="white"
																	/>
																</g>
																<defs>
																	<linearGradient
																		id="paint0_linear_26_1380"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#1A1A1A" />
																		<stop
																			offset="1"
																			stop-color="#1A1A1A"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<linearGradient
																		id="paint1_linear_26_1380"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#333333" />
																		<stop
																			offset="0.84964"
																			stop-color="#333333"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<clipPath id="clip0_26_1380">
																		<rect
																			width="18.2119"
																			height="20.5714"
																			fill="white"
																			transform="translate(18.5713 17.7144)"
																		/>
																	</clipPath>
																</defs>
															</svg>
															<svg
																width="56"
																height="56"
																viewBox="0 0 56 56"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	fill="url(#paint0_linear_26_1384)"
																/>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	stroke="url(#paint1_linear_26_1384)"
																	stroke-width="2"
																/>
																<g clip-path="url(#clip0_26_1384)">
																	<path
																		d="M18.5777 17.7144C24.5906 17.7144 30.5906 17.7144 36.6035 17.7144C36.5391 18.5264 36.4746 19.3126 36.4037 20.1053C36.3071 21.2396 36.2039 22.3739 36.1008 23.5017C35.9397 25.3191 35.7721 27.1365 35.611 28.9539C35.4886 30.3202 35.379 31.6929 35.2566 33.0591C35.1728 34.0516 35.0826 35.0506 34.9795 36.043C34.9666 36.1461 34.8441 36.2944 34.7474 36.3202C32.4402 36.9775 30.1266 37.622 27.813 38.26C27.6518 38.3051 27.4521 38.2922 27.2845 38.2471C25.016 37.6091 22.7474 36.9711 20.4725 36.3395C20.2727 36.2879 20.1889 36.2106 20.1696 35.9979C20.002 33.9872 19.828 31.9764 19.6476 29.9657C19.4284 27.4136 19.19 24.8615 18.958 22.3094C18.8226 20.8207 18.7002 19.3384 18.5713 17.8497C18.5713 17.811 18.5777 17.7659 18.5777 17.7144ZM22.6185 29.4566C22.6185 29.579 22.6121 29.6886 22.6185 29.7917C22.7088 30.7842 22.8054 31.7767 22.8828 32.7756C22.9021 33.0205 22.9795 33.1236 23.2179 33.188C24.6228 33.5618 26.0278 33.955 27.4327 34.3416C27.5101 34.361 27.6003 34.3867 27.6776 34.3674C29.147 33.9678 30.61 33.5618 32.0729 33.1494C32.1567 33.1236 32.2662 33.0076 32.2727 32.9238C32.4145 31.4609 32.5498 29.9979 32.6787 28.535C32.8011 27.1687 32.9172 25.796 33.0396 24.4297C33.1234 23.4695 33.2072 22.5092 33.2974 21.5361C29.4821 21.5361 25.6927 21.5361 21.8839 21.5361C21.929 22.245 21.9741 22.9345 22.0256 23.6564C24.9773 23.6564 27.8967 23.6564 30.842 23.6564C30.784 24.4297 30.726 25.1773 30.6744 25.9507C27.8581 25.9893 25.074 26.0216 22.2576 26.0602C22.335 26.7949 22.4123 27.4909 22.4897 28.2192C25.1706 28.2192 27.813 28.2192 30.4875 28.2192C30.3779 29.2181 30.2813 30.1913 30.1588 31.158C30.1459 31.2482 30.0299 31.3771 29.9333 31.4029C29.4112 31.564 28.8699 31.6671 28.3543 31.8475C27.813 32.0344 27.2974 32.0087 26.7625 31.8347C26.2985 31.68 25.8151 31.5511 25.3382 31.448C25.1062 31.3964 25.0289 31.2869 25.016 31.0613C24.9837 30.5393 24.9257 30.0173 24.8806 29.4888C24.1008 29.4566 23.3661 29.4566 22.6185 29.4566Z"
																		fill="white"
																	/>
																</g>
																<defs>
																	<linearGradient
																		id="paint0_linear_26_1384"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#1A1A1A" />
																		<stop
																			offset="1"
																			stop-color="#1A1A1A"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<linearGradient
																		id="paint1_linear_26_1384"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#333333" />
																		<stop
																			offset="0.84964"
																			stop-color="#333333"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<clipPath id="clip0_26_1384">
																		<rect
																			width="18.0387"
																			height="20.5714"
																			fill="white"
																			transform="translate(18.5713 17.7144)"
																		/>
																	</clipPath>
																</defs>
															</svg>
															<svg
																width="56"
																height="56"
																viewBox="0 0 56 56"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	fill="url(#paint0_linear_26_1388)"
																/>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	stroke="url(#paint1_linear_26_1388)"
																	stroke-width="2"
																/>
																<g clip-path="url(#clip0_26_1388)">
																	<path
																		d="M16.8574 17.7144C23.7532 17.7144 30.6104 17.7144 37.4869 17.7144C37.4224 18.5006 37.358 19.2675 37.2871 20.0409C37.1904 21.1429 37.0873 22.2385 36.9842 23.3406C36.8166 25.1257 36.649 26.9109 36.4879 28.6897C36.3655 30.0237 36.2559 31.3642 36.1335 32.6982C36.0239 33.9163 35.9143 35.1343 35.8048 36.3524C35.7855 36.5393 35.721 36.6166 35.5148 36.6617C32.8789 37.1837 30.243 37.7187 27.6007 38.2407C27.3429 38.2922 27.0658 38.3051 26.808 38.2536C24.3913 37.7767 21.9745 37.2869 19.5577 36.7971C19.3128 36.7455 19.0744 36.6811 18.8295 36.6617C18.6039 36.6424 18.5395 36.5393 18.5202 36.3395C18.3913 34.8314 18.2624 33.3234 18.127 31.8218C17.9401 29.7917 17.7468 27.7616 17.5599 25.7315C17.4181 23.9464 17.2699 22.1547 17.1152 20.376C17.0379 19.4995 16.9476 18.6231 16.8574 17.7144ZM31.3 28.8637C31.1904 30.043 31.0873 31.1709 30.9777 32.3051C30.0626 32.4856 29.1797 32.6596 28.3032 32.8465C28.2065 32.8658 28.0454 32.9496 28.0454 33.014C28.0261 33.5425 28.0325 34.0774 28.0325 34.6445C29.5792 34.3352 31.0744 34.0387 32.576 33.7358C32.7758 31.5382 32.9756 29.3663 33.1754 27.1429C32.0089 27.1429 30.8875 27.1429 29.779 27.1429C29.779 25.6864 29.779 24.275 29.779 22.8379C31.0551 22.8379 32.3053 22.8379 33.5749 22.8379C33.62 22.2579 33.6652 21.7101 33.7167 21.1494C31.8026 21.1494 29.9337 21.1494 28.0647 21.1494C28.0647 23.7272 28.0647 26.2858 28.0647 28.8637C29.141 28.8637 30.2044 28.8637 31.3 28.8637ZM24.591 21.1429C24.591 24.9582 24.591 28.7348 24.591 32.5436C24.1657 32.4598 23.7726 32.3825 23.373 32.3051C23.315 31.7251 23.2634 31.1709 23.2119 30.6037C22.6383 30.6037 22.0841 30.6037 21.4911 30.6037C21.5878 31.6542 21.678 32.6854 21.7747 33.7358C23.2828 34.0387 24.7844 34.3352 26.2989 34.6381C26.2989 30.1204 26.2989 25.6349 26.2989 21.1429C25.7253 21.1429 25.184 21.1429 24.591 21.1429Z"
																		fill="white"
																	/>
																</g>
																<defs>
																	<linearGradient
																		id="paint0_linear_26_1388"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#1A1A1A" />
																		<stop
																			offset="1"
																			stop-color="#1A1A1A"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<linearGradient
																		id="paint1_linear_26_1388"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#333333" />
																		<stop
																			offset="0.84964"
																			stop-color="#333333"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<clipPath id="clip0_26_1388">
																		<rect
																			width="20.6294"
																			height="20.5714"
																			fill="white"
																			transform="translate(16.8574 17.7144)"
																		/>
																	</clipPath>
																</defs>
															</svg>
														</div>
													</div>
												</div>
												<div className="w-full min-h-[160px] flex flex-col justify-between mt-6 rounded-xl border-[#1F1F1F] border p-4">
													<h4>Method Used</h4>
													<div className="flex sm:flex-row flex-col gap-2 p-3 w-full min-h-[80px] border border-[#1F1F1F] rounded-xl">
														<div className="flex items-center justify-center sm:w-1/3">
															<span className="sm:w-[180px] w-full  flex justify-center items-center text-sm h-[50px] border border-[#1F1F1F] rounded-full ">
																Agile Development
															</span>
														</div>
													</div>
												</div>
											</div>
										</ScrollAnimation>
									</div>
								</div>
							</div>
						</ScrollAnimation>
					</div>

					<div className="w-full">
						<ScrollAnimation variants={scaleUpVariants}>
							<div className="mt-4 flex items-center flex-col">
								<div className="w-[95%] flex-col flex gap-2 md:p-8  p-2 lg:p-4 h-full rounded-xl border border-[#1F1F1F] ">
									<CustomSlider3/>
									<div className="flex justify-between items-center px-4 mt-6 relative">
										<h3 className="sm:text-base text-sm">
										AIxFigma: AI-Enabled Figma Plugin
										</h3>
										<button
											onClick={() => toggleVisibility(2)}
											className={`absolute right-3 flex items-center gap-4 text-[10px] sm:text-xs font-thin ${
												currentVisibleIndex === 2 ? "opacity-0 h-0" : "bg-none"
											} transition-opacity duration-1000 `}
										>
											<span className="sm:block hidden">Show More</span>
											<svg
												width="40"
												height="40"
												viewBox="0 0 56 56"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect
													x="0.5"
													y="0.5"
													width="55"
													height="55"
													rx="27.5"
													fill="url(#paint0_linear_26_1433)"
												/>
												<rect
													x="0.5"
													y="0.5"
													width="55"
													height="55"
													rx="27.5"
													stroke="url(#paint1_linear_26_1433)"
												/>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M21.3222 24.0929C21.7402 23.691 22.4049 23.704 22.8069 24.122L28 29.6349L33.1931 24.122C33.5951 23.704 34.2598 23.691 34.6778 24.0929C35.0958 24.4949 35.1088 25.1596 34.7069 25.5776L28.7569 31.8776C28.5589 32.0835 28.2856 32.1998 28 32.1998C27.7144 32.1998 27.4411 32.0835 27.2431 31.8776L21.2931 25.5776C20.8912 25.1596 20.9042 24.4949 21.3222 24.0929Z"
													fill="white"
												/>
												<defs>
													<linearGradient
														id="paint0_linear_26_1433"
														x1="28"
														y1="0"
														x2="28"
														y2="56"
														gradientUnits="userSpaceOnUse"
													>
														<stop stop-color="#1A1A1A" />
														<stop
															offset="1"
															stop-color="#1A1A1A"
															stop-opacity="0"
														/>
													</linearGradient>
													<linearGradient
														id="paint1_linear_26_1433"
														x1="28"
														y1="0"
														x2="28"
														y2="56"
														gradientUnits="userSpaceOnUse"
													>
														<stop stop-color="#262626" />
														<stop
															offset="1"
															stop-color="#262626"
															stop-opacity="0"
														/>
													</linearGradient>
												</defs>
											</svg>
										</button>
										<button
											onClick={() => toggleVisibility(2)}
											className={`right-3 absolute flex items-center gap-4 text-[10px] sm:text-xs font-thin
									${
										currentVisibleIndex === 2
											? "opacity-100 h-fit"
											: "opacity-0 h-0"
									} transition-opacity duration-1000`}
										>
											<span className="sm:block hidden">Show Less</span>
											<svg
												width="40"
												height="40"
												viewBox="0 0 56 56"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect
													x="0.5"
													y="0.5"
													width="55"
													height="55"
													rx="27.5"
													fill="url(#paint0_linear_26_1332)"
												/>
												<rect
													x="0.5"
													y="0.5"
													width="55"
													height="55"
													rx="27.5"
													stroke="url(#paint1_linear_26_1332)"
												/>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M34.6778 31.9068C34.2598 32.3088 33.5951 32.2957 33.1931 31.8777L28 26.3649L22.8069 31.8777C22.4049 32.2957 21.7402 32.3088 21.3222 31.9068C20.9042 31.5049 20.8912 30.8402 21.2931 30.4222L27.2431 24.1222C27.4411 23.9163 27.7144 23.7999 28 23.7999C28.2856 23.7999 28.5589 23.9163 28.7569 24.1222L34.7069 30.4222C35.1088 30.8402 35.0958 31.5049 34.6778 31.9068Z"
													fill="white"
												/>
												<defs>
													<linearGradient
														id="paint0_linear_26_1332"
														x1="28"
														y1="0"
														x2="28"
														y2="56"
														gradientUnits="userSpaceOnUse"
													>
														<stop stop-color="#1A1A1A" />
														<stop
															offset="1"
															stop-color="#1A1A1A"
															stop-opacity="0"
														/>
													</linearGradient>
													<linearGradient
														id="paint1_linear_26_1332"
														x1="28"
														y1="0"
														x2="28"
														y2="56"
														gradientUnits="userSpaceOnUse"
													>
														<stop stop-color="#262626" />
														<stop
															offset="1"
															stop-color="#262626"
															stop-opacity="0"
														/>
													</linearGradient>
												</defs>
											</svg>
										</button>
									</div>
									<div className="text-sm md:flex-row flex-col flex gap-4">
										<Link
											href={""}
											className="px-3 py-[2px] w-fit rounded-full flex justify-center items-center border border-[#1F1F1F] gap-2"
										>
											<svg
												width="32"
												height="32"
												viewBox="0 0 42 42"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect
													x="0.5"
													y="0.5"
													width="41"
													height="41"
													rx="20.5"
												/>
												<rect
													x="0.5"
													y="0.5"
													width="41"
													height="41"
													rx="20.5"
												/>
												<path
													d="M13.5 21.9375C13.5 21.4197 13.9197 21 14.4375 21H16.3125C16.8303 21 17.25 21.4197 17.25 21.9375V27.5625C17.25 28.0803 16.8303 28.5 16.3125 28.5H14.4375C13.9197 28.5 13.5 28.0803 13.5 27.5625V21.9375Z"
													stroke="white"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
												<path
													d="M19.125 18.1875C19.125 17.6697 19.5447 17.25 20.0625 17.25H21.9375C22.4553 17.25 22.875 17.6697 22.875 18.1875V27.5625C22.875 28.0803 22.4553 28.5 21.9375 28.5H20.0625C19.5447 28.5 19.125 28.0803 19.125 27.5625V18.1875Z"
													stroke="white"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
												<path
													d="M24.75 14.4375C24.75 13.9197 25.1697 13.5 25.6875 13.5H27.5625C28.0803 13.5 28.5 13.9197 28.5 14.4375V27.5625C28.5 28.0803 28.0803 28.5 27.5625 28.5H25.6875C25.1697 28.5 24.75 28.0803 24.75 27.5625V14.4375Z"
													stroke="white"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
											<span className="text-xs text-[#A6A6A6]">AI enabled Figma Plugin</span>
										</Link>
										<Link
											href={""}
											className="px-3 py-[2px] w-fit rounded-full flex justify-center items-center border border-[#1F1F1F] gap-2"
										>
											<svg
												width="32"
												height="32"
												viewBox="0 0 42 42"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect
													x="0.5"
													y="0.5"
													width="41"
													height="41"
													rx="20.5"
												/>
												<rect
													x="0.5"
													y="0.5"
													width="41"
													height="41"
													rx="20.5"
												/>
												<path
													d="M27.875 22.7916V26.3333C27.875 27.2454 27.2193 28.0299 26.3151 28.15C24.5762 28.3808 22.802 28.5 21 28.5C19.198 28.5 17.4238 28.3808 15.6849 28.15C14.7807 28.0299 14.125 27.2454 14.125 26.3333V22.7916M27.875 22.7916C28.2683 22.4564 28.5 21.9491 28.5 21.4074V18.2547C28.5 17.354 27.8601 16.5757 26.9692 16.4424C26.0314 16.3021 25.0829 16.1943 24.125 16.1203M27.875 22.7916C27.7137 22.9291 27.5251 23.0377 27.3143 23.1078C25.3294 23.7677 23.2064 24.125 21 24.125C18.7936 24.125 16.6706 23.7677 14.6857 23.1078C14.4749 23.0377 14.2863 22.9291 14.125 22.7916M14.125 22.7916C13.7317 22.4563 13.5 21.9491 13.5 21.4074V18.2547C13.5 17.354 14.1399 16.5757 15.0308 16.4424C15.9686 16.3021 16.9171 16.1943 17.875 16.1203M24.125 16.1203V15.375C24.125 14.3395 23.2855 13.5 22.25 13.5H19.75C18.7145 13.5 17.875 14.3395 17.875 15.375V16.1203M24.125 16.1203C23.0938 16.0406 22.0516 16 21 16C19.9484 16 18.9062 16.0406 17.875 16.1203M21 21.625H21.0062V21.6312H21V21.625Z"
													stroke="white"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
											<span className="text-xs text-[#A6A6A6]">
											AI & Machine Learning
											</span>
										</Link>
										<Link
											href={""}
											className="px-3 py-[2px] w-fit rounded-full flex justify-center items-center border border-[#1F1F1F] gap-2"
										>
											<svg
												width="32"
												height="32"
												viewBox="0 0 42 42"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect
													x="0.5"
													y="0.5"
													width="41"
													height="41"
													rx="20.5"
												/>
												<rect
													x="0.5"
													y="0.5"
													width="41"
													height="41"
													rx="20.5"
												/>
												<path
													d="M27.875 22.7916V26.3333C27.875 27.2454 27.2193 28.0299 26.3151 28.15C24.5762 28.3808 22.802 28.5 21 28.5C19.198 28.5 17.4238 28.3808 15.6849 28.15C14.7807 28.0299 14.125 27.2454 14.125 26.3333V22.7916M27.875 22.7916C28.2683 22.4564 28.5 21.9491 28.5 21.4074V18.2547C28.5 17.354 27.8601 16.5757 26.9692 16.4424C26.0314 16.3021 25.0829 16.1943 24.125 16.1203M27.875 22.7916C27.7137 22.9291 27.5251 23.0377 27.3143 23.1078C25.3294 23.7677 23.2064 24.125 21 24.125C18.7936 24.125 16.6706 23.7677 14.6857 23.1078C14.4749 23.0377 14.2863 22.9291 14.125 22.7916M14.125 22.7916C13.7317 22.4563 13.5 21.9491 13.5 21.4074V18.2547C13.5 17.354 14.1399 16.5757 15.0308 16.4424C15.9686 16.3021 16.9171 16.1943 17.875 16.1203M24.125 16.1203V15.375C24.125 14.3395 23.2855 13.5 22.25 13.5H19.75C18.7145 13.5 17.875 14.3395 17.875 15.375V16.1203M24.125 16.1203C23.0938 16.0406 22.0516 16 21 16C19.9484 16 18.9062 16.0406 17.875 16.1203M21 21.625H21.0062V21.6312H21V21.625Z"
													stroke="white"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
											<span className="text-xs text-[#A6A6A6]">
												NLP
											</span>
										</Link>
									</div>
									<div className="border mt-6 border-[#1F1F1F] rounded-xl p-6">
										<div className="flex flex-col gap-4">
											<h4 className="font-light">Project Description</h4>
											<p className="text-sm text-[#8C8C8C]">
												{" "}
AIxFigma is a plugin for Figma that uses advanced technology to help you easily edit user interfaces. You can tell it what you want using simple text, like "add a button" or "change the background," and it will automatically make those changes for you. The more you use it, the smarter it gets. You can try out the beta version now on Figma’s plugin page, and the final version will be even better!
</p>
										</div>
										<ScrollAnimation>
											<div
												className={`${
													currentVisibleIndex === 2
														? "opacity-100 h-auto"
														: "opacity-0 h-0"
												} transition-opacity duration-500`}
											>
												<div className="w-full items-center mt-6 flex flex-col gap-6">
													<div className="w-[100%] min-h-[100px] flex lg:flex-row  flex-col rounded-xl border border-[#1F1F1F] p-4">
														<div className="lg:w-1/4 lg:items-start items-center h-full p-4 justify-center flex flex-col gap-2">
															<h4 className="font-thin text-sm">Category</h4>
															<span className="font-light lg:text-base text-sm">
																AI enabled Figma Plugin
															</span>
														</div>
														<div className="border-r border-[#1F1F1F]"></div>
														<div className="border-b w-[90%] mx-auto lg:hidden block border-[#1F1F1F]"></div>
														<div className="lg:w-1/4 lg:items-start items-center h-full p-4 justify-center flex flex-col gap-2">
															<h4 className="font-thin text-sm">Time Taken</h4>
															<span className="font-light lg:text-base text-sm">
																3.5 Months
															</span>
														</div>
														<div className="border-b w-[90%] lg:hidden block mx-auto border-[#1F1F1F]"></div>
														<div className="border-r border-[#1F1F1F]"></div>
														<div className="lg:w-1/4 lg:items-start items-center h-full p-4 justify-center flex flex-col gap-2">
															<h4 className="font-thin text-sm">Start Date</h4>
															<span className="font-light lg:text-base text-sm">
																Nov 12, 2022
															</span>
														</div>
														<div className="border-r border-[#1F1F1F]"></div>
														<div className="border-b lg:hidden block w-[90%] mx-auto border-[#1F1F1F]"></div>
														<div className="lg:w-1/4 lg:items-start items-center h-full p-4 justify-center flex flex-col gap-2">
															<h4 className="font-thin text-sm">
																Completed Date
															</h4>
															<span className="font-light lg:text-base text-sm">
																Feb 16, 2023
															</span>
														</div>
													</div>
													<div className="w-[100%] min-h-[100px] lg:flex-row flex-col items-center justify-around gap-4 flex rounded-xl border border-[#1F1F1F] p-4">
														<div className=" flex items-center px-4">
															<h4>Technologies Used</h4>
														</div>
														<div className=" flex justify-center items-center gap-4 px-4">
															<svg
																width="56"
																height="56"
																viewBox="0 0 56 56"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	fill="url(#paint0_linear_26_1372)"
																/>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	stroke="url(#paint1_linear_26_1372)"
																	stroke-width="2"
																/>
																<g clip-path="url(#clip0_26_1372)">
																	<path
																		d="M28.375 23.8688C28.375 21.8092 28.375 19.7983 28.375 17.7955C28.3993 17.7712 28.4237 17.7387 28.4399 17.7387C29.5832 17.7469 30.7346 17.6982 31.8698 17.7874C33.3131 17.909 34.424 19.1983 34.4807 20.674C34.5375 22.1174 33.5239 23.4958 32.1212 23.7472C31.44 23.8688 30.7265 23.8364 30.0291 23.8526C29.494 23.885 28.9588 23.8688 28.375 23.8688Z"
																		fill="white"
																	/>
																	<path
																		d="M27.2723 17.7307C27.2723 19.7903 27.2723 21.8012 27.2723 23.877C27.0858 23.877 26.9074 23.877 26.729 23.877C25.9344 23.877 25.1316 23.877 24.337 23.877C22.5531 23.8689 21.1827 22.5553 21.1422 20.8363C21.1098 19.1983 22.4152 17.8199 24.1424 17.7388C25.164 17.6901 26.1938 17.7307 27.2723 17.7307Z"
																		fill="white"
																	/>
																	<path
																		d="M27.2645 24.9634C27.2645 27.0149 27.2645 29.0177 27.2645 31.134C25.9428 31.0692 24.6211 31.1178 23.3481 30.8989C21.9534 30.6556 21.0533 29.2528 21.1588 27.8501C21.2723 26.2851 22.3507 25.1013 23.8427 24.9796C24.9698 24.8904 26.105 24.9634 27.2645 24.9634Z"
																		fill="white"
																	/>
																	<path
																		d="M27.3292 32.1395C27.2886 33.4125 27.3373 34.6531 27.1832 35.8532C26.9967 37.2722 25.5858 38.3263 24.1668 38.2776C22.6424 38.229 21.3937 37.1181 21.1991 35.6342C20.9477 33.7693 22.3505 32.1476 24.2317 32.1313C25.2291 32.1395 26.2264 32.1395 27.3292 32.1395Z"
																		fill="white"
																	/>
																	<path
																		d="M31.4073 31.0691C29.7207 31.061 28.3503 29.6744 28.3584 27.9878C28.3665 26.3093 29.7531 24.9309 31.4397 24.939C33.1263 24.9471 34.4966 26.3337 34.4885 28.0203C34.4804 29.7068 33.0938 31.0772 31.4073 31.0691Z"
																		fill="white"
																	/>
																</g>
																<defs>
																	<linearGradient
																		id="paint0_linear_26_1372"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#1A1A1A" />
																		<stop
																			offset="1"
																			stop-color="#1A1A1A"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<linearGradient
																		id="paint1_linear_26_1372"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#333333" />
																		<stop
																			offset="0.84964"
																			stop-color="#333333"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<clipPath id="clip0_26_1372">
																		<rect
																			width="13.3467"
																			height="20.5714"
																			fill="white"
																			transform="translate(21.1426 17.7144)"
																		/>
																	</clipPath>
																</defs>
															</svg>
															<svg
																width="56"
																height="56"
																viewBox="0 0 56 56"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	fill="url(#paint0_linear_26_1380)"
																/>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	stroke="url(#paint1_linear_26_1380)"
																	stroke-width="2"
																/>
																<g clip-path="url(#clip0_26_1380)">
																	<path
																		d="M18.5713 17.7144C24.6634 17.7144 30.7104 17.7144 36.7832 17.7144C36.7574 18.1721 36.7317 18.604 36.6994 19.0424C36.5125 21.634 36.3191 24.2255 36.1386 26.8171C35.9774 29.0992 35.8291 31.3814 35.6744 33.6571C35.6357 34.2695 35.5777 34.8755 35.5455 35.4879C35.5326 35.6942 35.4488 35.778 35.2554 35.836C32.7992 36.6354 30.3559 37.4542 27.8997 38.2535C27.7707 38.2987 27.5967 38.2922 27.4677 38.2535C25.0373 37.4606 22.6069 36.6548 20.1701 35.8618C19.9186 35.778 19.8413 35.6491 19.8219 35.4106C19.7446 34.1986 19.6543 32.993 19.5705 31.7811C19.4287 29.7375 19.2869 27.6939 19.1386 25.6438C19.0226 23.9419 18.9001 22.2399 18.784 20.538C18.7131 19.6097 18.6422 18.6814 18.5713 17.7144ZM22.5876 31.0977C22.5876 31.2202 22.5811 31.3233 22.5876 31.4265C22.6263 32.026 22.6843 32.6256 22.7036 33.2251C22.7101 33.4443 22.7874 33.541 22.9873 33.6055C24.4958 34.1019 25.9979 34.6047 27.5 35.1011C27.6031 35.1333 27.7385 35.1462 27.8352 35.114C29.3631 34.6112 30.8845 34.0954 32.4124 33.599C32.5993 33.5346 32.6509 33.4443 32.6638 33.2574C32.7992 31.3105 32.9474 29.3571 33.0893 27.4102C33.1151 27.0298 33.1279 26.6495 33.1473 26.224C30.2978 26.224 27.4742 26.224 24.6376 26.224C24.5667 25.1732 24.4958 24.1611 24.4249 23.1167C27.4291 23.1167 30.3881 23.1167 33.3794 23.1167C33.4374 22.3109 33.489 21.5372 33.547 20.7508C29.6209 20.7508 25.7336 20.7508 21.8269 20.7508C22.0138 23.3939 22.2008 26.0177 22.3813 28.6609C25.1211 28.6609 27.8223 28.6609 30.5622 28.6609C30.4912 29.6408 30.4332 30.5884 30.3494 31.5361C30.343 31.6328 30.2076 31.7746 30.1044 31.8068C29.3889 32.0583 28.6668 32.3032 27.9383 32.5224C27.7772 32.574 27.5773 32.5676 27.4162 32.516C26.8295 32.3419 26.2622 32.1034 25.6756 31.9551C25.2114 31.8391 24.9213 31.6521 24.96 31.1364C24.96 31.1235 24.9342 31.1042 24.9213 31.0848C24.1541 31.0977 23.3805 31.0977 22.5876 31.0977Z"
																		fill="white"
																	/>
																</g>
																<defs>
																	<linearGradient
																		id="paint0_linear_26_1380"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#1A1A1A" />
																		<stop
																			offset="1"
																			stop-color="#1A1A1A"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<linearGradient
																		id="paint1_linear_26_1380"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#333333" />
																		<stop
																			offset="0.84964"
																			stop-color="#333333"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<clipPath id="clip0_26_1380">
																		<rect
																			width="18.2119"
																			height="20.5714"
																			fill="white"
																			transform="translate(18.5713 17.7144)"
																		/>
																	</clipPath>
																</defs>
															</svg>
															<svg
																width="56"
																height="56"
																viewBox="0 0 56 56"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	fill="url(#paint0_linear_26_1384)"
																/>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	stroke="url(#paint1_linear_26_1384)"
																	stroke-width="2"
																/>
																<g clip-path="url(#clip0_26_1384)">
																	<path
																		d="M18.5777 17.7144C24.5906 17.7144 30.5906 17.7144 36.6035 17.7144C36.5391 18.5264 36.4746 19.3126 36.4037 20.1053C36.3071 21.2396 36.2039 22.3739 36.1008 23.5017C35.9397 25.3191 35.7721 27.1365 35.611 28.9539C35.4886 30.3202 35.379 31.6929 35.2566 33.0591C35.1728 34.0516 35.0826 35.0506 34.9795 36.043C34.9666 36.1461 34.8441 36.2944 34.7474 36.3202C32.4402 36.9775 30.1266 37.622 27.813 38.26C27.6518 38.3051 27.4521 38.2922 27.2845 38.2471C25.016 37.6091 22.7474 36.9711 20.4725 36.3395C20.2727 36.2879 20.1889 36.2106 20.1696 35.9979C20.002 33.9872 19.828 31.9764 19.6476 29.9657C19.4284 27.4136 19.19 24.8615 18.958 22.3094C18.8226 20.8207 18.7002 19.3384 18.5713 17.8497C18.5713 17.811 18.5777 17.7659 18.5777 17.7144ZM22.6185 29.4566C22.6185 29.579 22.6121 29.6886 22.6185 29.7917C22.7088 30.7842 22.8054 31.7767 22.8828 32.7756C22.9021 33.0205 22.9795 33.1236 23.2179 33.188C24.6228 33.5618 26.0278 33.955 27.4327 34.3416C27.5101 34.361 27.6003 34.3867 27.6776 34.3674C29.147 33.9678 30.61 33.5618 32.0729 33.1494C32.1567 33.1236 32.2662 33.0076 32.2727 32.9238C32.4145 31.4609 32.5498 29.9979 32.6787 28.535C32.8011 27.1687 32.9172 25.796 33.0396 24.4297C33.1234 23.4695 33.2072 22.5092 33.2974 21.5361C29.4821 21.5361 25.6927 21.5361 21.8839 21.5361C21.929 22.245 21.9741 22.9345 22.0256 23.6564C24.9773 23.6564 27.8967 23.6564 30.842 23.6564C30.784 24.4297 30.726 25.1773 30.6744 25.9507C27.8581 25.9893 25.074 26.0216 22.2576 26.0602C22.335 26.7949 22.4123 27.4909 22.4897 28.2192C25.1706 28.2192 27.813 28.2192 30.4875 28.2192C30.3779 29.2181 30.2813 30.1913 30.1588 31.158C30.1459 31.2482 30.0299 31.3771 29.9333 31.4029C29.4112 31.564 28.8699 31.6671 28.3543 31.8475C27.813 32.0344 27.2974 32.0087 26.7625 31.8347C26.2985 31.68 25.8151 31.5511 25.3382 31.448C25.1062 31.3964 25.0289 31.2869 25.016 31.0613C24.9837 30.5393 24.9257 30.0173 24.8806 29.4888C24.1008 29.4566 23.3661 29.4566 22.6185 29.4566Z"
																		fill="white"
																	/>
																</g>
																<defs>
																	<linearGradient
																		id="paint0_linear_26_1384"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#1A1A1A" />
																		<stop
																			offset="1"
																			stop-color="#1A1A1A"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<linearGradient
																		id="paint1_linear_26_1384"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#333333" />
																		<stop
																			offset="0.84964"
																			stop-color="#333333"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<clipPath id="clip0_26_1384">
																		<rect
																			width="18.0387"
																			height="20.5714"
																			fill="white"
																			transform="translate(18.5713 17.7144)"
																		/>
																	</clipPath>
																</defs>
															</svg>
															<svg
																width="56"
																height="56"
																viewBox="0 0 56 56"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	fill="url(#paint0_linear_26_1388)"
																/>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	stroke="url(#paint1_linear_26_1388)"
																	stroke-width="2"
																/>
																<g clip-path="url(#clip0_26_1388)">
																	<path
																		d="M16.8574 17.7144C23.7532 17.7144 30.6104 17.7144 37.4869 17.7144C37.4224 18.5006 37.358 19.2675 37.2871 20.0409C37.1904 21.1429 37.0873 22.2385 36.9842 23.3406C36.8166 25.1257 36.649 26.9109 36.4879 28.6897C36.3655 30.0237 36.2559 31.3642 36.1335 32.6982C36.0239 33.9163 35.9143 35.1343 35.8048 36.3524C35.7855 36.5393 35.721 36.6166 35.5148 36.6617C32.8789 37.1837 30.243 37.7187 27.6007 38.2407C27.3429 38.2922 27.0658 38.3051 26.808 38.2536C24.3913 37.7767 21.9745 37.2869 19.5577 36.7971C19.3128 36.7455 19.0744 36.6811 18.8295 36.6617C18.6039 36.6424 18.5395 36.5393 18.5202 36.3395C18.3913 34.8314 18.2624 33.3234 18.127 31.8218C17.9401 29.7917 17.7468 27.7616 17.5599 25.7315C17.4181 23.9464 17.2699 22.1547 17.1152 20.376C17.0379 19.4995 16.9476 18.6231 16.8574 17.7144ZM31.3 28.8637C31.1904 30.043 31.0873 31.1709 30.9777 32.3051C30.0626 32.4856 29.1797 32.6596 28.3032 32.8465C28.2065 32.8658 28.0454 32.9496 28.0454 33.014C28.0261 33.5425 28.0325 34.0774 28.0325 34.6445C29.5792 34.3352 31.0744 34.0387 32.576 33.7358C32.7758 31.5382 32.9756 29.3663 33.1754 27.1429C32.0089 27.1429 30.8875 27.1429 29.779 27.1429C29.779 25.6864 29.779 24.275 29.779 22.8379C31.0551 22.8379 32.3053 22.8379 33.5749 22.8379C33.62 22.2579 33.6652 21.7101 33.7167 21.1494C31.8026 21.1494 29.9337 21.1494 28.0647 21.1494C28.0647 23.7272 28.0647 26.2858 28.0647 28.8637C29.141 28.8637 30.2044 28.8637 31.3 28.8637ZM24.591 21.1429C24.591 24.9582 24.591 28.7348 24.591 32.5436C24.1657 32.4598 23.7726 32.3825 23.373 32.3051C23.315 31.7251 23.2634 31.1709 23.2119 30.6037C22.6383 30.6037 22.0841 30.6037 21.4911 30.6037C21.5878 31.6542 21.678 32.6854 21.7747 33.7358C23.2828 34.0387 24.7844 34.3352 26.2989 34.6381C26.2989 30.1204 26.2989 25.6349 26.2989 21.1429C25.7253 21.1429 25.184 21.1429 24.591 21.1429Z"
																		fill="white"
																	/>
																</g>
																<defs>
																	<linearGradient
																		id="paint0_linear_26_1388"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#1A1A1A" />
																		<stop
																			offset="1"
																			stop-color="#1A1A1A"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<linearGradient
																		id="paint1_linear_26_1388"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#333333" />
																		<stop
																			offset="0.84964"
																			stop-color="#333333"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<clipPath id="clip0_26_1388">
																		<rect
																			width="20.6294"
																			height="20.5714"
																			fill="white"
																			transform="translate(16.8574 17.7144)"
																		/>
																	</clipPath>
																</defs>
															</svg>
														</div>
													</div>
												</div>
												<div className="w-full min-h-[160px] flex flex-col justify-between mt-6 rounded-xl border-[#1F1F1F] border p-4">
													<h4>Method Used</h4>
													<div className="flex sm:flex-row flex-col gap-2 p-3 w-full min-h-[80px] border border-[#1F1F1F] rounded-xl">
														<div className="flex items-center justify-center sm:w-1/3">
															<span className="sm:w-[180px] w-full  flex justify-center items-center text-sm h-[50px] border border-[#1F1F1F] rounded-full ">
																Agile Development
															</span>
														</div>
													</div>
												</div>
											</div>
										</ScrollAnimation>
									</div>
								</div>
							</div>
						</ScrollAnimation>
					</div>
				
					<div className="w-full">
						<ScrollAnimation variants={scaleUpVariants}>
							<div className="mt-4 flex items-center flex-col">
								<div className="w-[95%] flex-col flex gap-2 md:p-8  p-2 lg:p-4 h-full rounded-xl border border-[#1F1F1F] ">
									<CustomSlider4/>
									<div className="flex justify-between items-center px-4 mt-6 relative">
										<h3 className="sm:text-base text-sm">
										Plenty: A Decentralized Trading Platform

</h3>
										<button
											onClick={() => toggleVisibility(3)}
											className={`absolute right-3 flex items-center gap-4 text-[10px] sm:text-xs font-thin ${
												currentVisibleIndex === 3 ? "opacity-0 h-0" : "bg-none"
											} transition-opacity duration-1000 `}
										>
											<span className="sm:block hidden">Show More</span>
											<svg
												width="40"
												height="40"
												viewBox="0 0 56 56"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect
													x="0.5"
													y="0.5"
													width="55"
													height="55"
													rx="27.5"
													fill="url(#paint0_linear_26_1433)"
												/>
												<rect
													x="0.5"
													y="0.5"
													width="55"
													height="55"
													rx="27.5"
													stroke="url(#paint1_linear_26_1433)"
												/>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M21.3222 24.0929C21.7402 23.691 22.4049 23.704 22.8069 24.122L28 29.6349L33.1931 24.122C33.5951 23.704 34.2598 23.691 34.6778 24.0929C35.0958 24.4949 35.1088 25.1596 34.7069 25.5776L28.7569 31.8776C28.5589 32.0835 28.2856 32.1998 28 32.1998C27.7144 32.1998 27.4411 32.0835 27.2431 31.8776L21.2931 25.5776C20.8912 25.1596 20.9042 24.4949 21.3222 24.0929Z"
													fill="white"
												/>
												<defs>
													<linearGradient
														id="paint0_linear_26_1433"
														x1="28"
														y1="0"
														x2="28"
														y2="56"
														gradientUnits="userSpaceOnUse"
													>
														<stop stop-color="#1A1A1A" />
														<stop
															offset="1"
															stop-color="#1A1A1A"
															stop-opacity="0"
														/>
													</linearGradient>
													<linearGradient
														id="paint1_linear_26_1433"
														x1="28"
														y1="0"
														x2="28"
														y2="56"
														gradientUnits="userSpaceOnUse"
													>
														<stop stop-color="#262626" />
														<stop
															offset="1"
															stop-color="#262626"
															stop-opacity="0"
														/>
													</linearGradient>
												</defs>
											</svg>
										</button>
										<button
											onClick={() => toggleVisibility(3)}
											className={`right-3 absolute flex items-center gap-4 text-[10px] sm:text-xs font-thin
									${
										currentVisibleIndex === 3
											? "opacity-100 h-fit"
											: "opacity-0 h-0"
									} transition-opacity duration-1000`}
										>
											<span className="sm:block hidden">Show Less</span>
											<svg
												width="40"
												height="40"
												viewBox="0 0 56 56"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect
													x="0.5"
													y="0.5"
													width="55"
													height="55"
													rx="27.5"
													fill="url(#paint0_linear_26_1332)"
												/>
												<rect
													x="0.5"
													y="0.5"
													width="55"
													height="55"
													rx="27.5"
													stroke="url(#paint1_linear_26_1332)"
												/>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M34.6778 31.9068C34.2598 32.3088 33.5951 32.2957 33.1931 31.8777L28 26.3649L22.8069 31.8777C22.4049 32.2957 21.7402 32.3088 21.3222 31.9068C20.9042 31.5049 20.8912 30.8402 21.2931 30.4222L27.2431 24.1222C27.4411 23.9163 27.7144 23.7999 28 23.7999C28.2856 23.7999 28.5589 23.9163 28.7569 24.1222L34.7069 30.4222C35.1088 30.8402 35.0958 31.5049 34.6778 31.9068Z"
													fill="white"
												/>
												<defs>
													<linearGradient
														id="paint0_linear_26_1332"
														x1="28"
														y1="0"
														x2="28"
														y2="56"
														gradientUnits="userSpaceOnUse"
													>
														<stop stop-color="#1A1A1A" />
														<stop
															offset="1"
															stop-color="#1A1A1A"
															stop-opacity="0"
														/>
													</linearGradient>
													<linearGradient
														id="paint1_linear_26_1332"
														x1="28"
														y1="0"
														x2="28"
														y2="56"
														gradientUnits="userSpaceOnUse"
													>
														<stop stop-color="#262626" />
														<stop
															offset="1"
															stop-color="#262626"
															stop-opacity="0"
														/>
													</linearGradient>
												</defs>
											</svg>
										</button>
									</div>
									<div className="text-sm md:flex-row flex-col flex gap-4">
										<Link
											href={""}
											className="px-3 py-[2px] w-fit rounded-full flex justify-center items-center border border-[#1F1F1F] gap-2"
										>
											<svg
												width="32"
												height="32"
												viewBox="0 0 42 42"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect
													x="0.5"
													y="0.5"
													width="41"
													height="41"
													rx="20.5"
												/>
												<rect
													x="0.5"
													y="0.5"
													width="41"
													height="41"
													rx="20.5"
												/>
												<path
													d="M13.5 21.9375C13.5 21.4197 13.9197 21 14.4375 21H16.3125C16.8303 21 17.25 21.4197 17.25 21.9375V27.5625C17.25 28.0803 16.8303 28.5 16.3125 28.5H14.4375C13.9197 28.5 13.5 28.0803 13.5 27.5625V21.9375Z"
													stroke="white"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
												<path
													d="M19.125 18.1875C19.125 17.6697 19.5447 17.25 20.0625 17.25H21.9375C22.4553 17.25 22.875 17.6697 22.875 18.1875V27.5625C22.875 28.0803 22.4553 28.5 21.9375 28.5H20.0625C19.5447 28.5 19.125 28.0803 19.125 27.5625V18.1875Z"
													stroke="white"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
												<path
													d="M24.75 14.4375C24.75 13.9197 25.1697 13.5 25.6875 13.5H27.5625C28.0803 13.5 28.5 13.9197 28.5 14.4375V27.5625C28.5 28.0803 28.0803 28.5 27.5625 28.5H25.6875C25.1697 28.5 24.75 28.0803 24.75 27.5625V14.4375Z"
													stroke="white"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
											<span className="text-xs text-[#A6A6A6]">Decentralized Trading Platform</span>
										</Link>
										<Link
											href={""}
											className="px-3 py-[2px] w-fit rounded-full flex justify-center items-center border border-[#1F1F1F] gap-2"
										>
											<svg
												width="32"
												height="32"
												viewBox="0 0 42 42"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect
													x="0.5"
													y="0.5"
													width="41"
													height="41"
													rx="20.5"
												/>
												<rect
													x="0.5"
													y="0.5"
													width="41"
													height="41"
													rx="20.5"
												/>
												<path
													d="M27.875 22.7916V26.3333C27.875 27.2454 27.2193 28.0299 26.3151 28.15C24.5762 28.3808 22.802 28.5 21 28.5C19.198 28.5 17.4238 28.3808 15.6849 28.15C14.7807 28.0299 14.125 27.2454 14.125 26.3333V22.7916M27.875 22.7916C28.2683 22.4564 28.5 21.9491 28.5 21.4074V18.2547C28.5 17.354 27.8601 16.5757 26.9692 16.4424C26.0314 16.3021 25.0829 16.1943 24.125 16.1203M27.875 22.7916C27.7137 22.9291 27.5251 23.0377 27.3143 23.1078C25.3294 23.7677 23.2064 24.125 21 24.125C18.7936 24.125 16.6706 23.7677 14.6857 23.1078C14.4749 23.0377 14.2863 22.9291 14.125 22.7916M14.125 22.7916C13.7317 22.4563 13.5 21.9491 13.5 21.4074V18.2547C13.5 17.354 14.1399 16.5757 15.0308 16.4424C15.9686 16.3021 16.9171 16.1943 17.875 16.1203M24.125 16.1203V15.375C24.125 14.3395 23.2855 13.5 22.25 13.5H19.75C18.7145 13.5 17.875 14.3395 17.875 15.375V16.1203M24.125 16.1203C23.0938 16.0406 22.0516 16 21 16C19.9484 16 18.9062 16.0406 17.875 16.1203M21 21.625H21.0062V21.6312H21V21.625Z"
													stroke="white"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
											<span className="text-xs text-[#A6A6A6]">
												Blockchain & Web Development
											</span>
										</Link>
										<Link
											href={""}
											className="px-3 py-[2px] w-fit rounded-full flex justify-center items-center border border-[#1F1F1F] gap-2"
										>
											<svg
												width="32"
												height="32"
												viewBox="0 0 42 42"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect
													x="0.5"
													y="0.5"
													width="41"
													height="41"
													rx="20.5"
												/>
												<rect
													x="0.5"
													y="0.5"
													width="41"
													height="41"
													rx="20.5"
												/>
												<path
													d="M27.875 22.7916V26.3333C27.875 27.2454 27.2193 28.0299 26.3151 28.15C24.5762 28.3808 22.802 28.5 21 28.5C19.198 28.5 17.4238 28.3808 15.6849 28.15C14.7807 28.0299 14.125 27.2454 14.125 26.3333V22.7916M27.875 22.7916C28.2683 22.4564 28.5 21.9491 28.5 21.4074V18.2547C28.5 17.354 27.8601 16.5757 26.9692 16.4424C26.0314 16.3021 25.0829 16.1943 24.125 16.1203M27.875 22.7916C27.7137 22.9291 27.5251 23.0377 27.3143 23.1078C25.3294 23.7677 23.2064 24.125 21 24.125C18.7936 24.125 16.6706 23.7677 14.6857 23.1078C14.4749 23.0377 14.2863 22.9291 14.125 22.7916M14.125 22.7916C13.7317 22.4563 13.5 21.9491 13.5 21.4074V18.2547C13.5 17.354 14.1399 16.5757 15.0308 16.4424C15.9686 16.3021 16.9171 16.1943 17.875 16.1203M24.125 16.1203V15.375C24.125 14.3395 23.2855 13.5 22.25 13.5H19.75C18.7145 13.5 17.875 14.3395 17.875 15.375V16.1203M24.125 16.1203C23.0938 16.0406 22.0516 16 21 16C19.9484 16 18.9062 16.0406 17.875 16.1203M21 21.625H21.0062V21.6312H21V21.625Z"
													stroke="white"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
											<span className="text-xs text-[#A6A6A6]">
												App Development
											</span>
										</Link>
									</div>
									<div className="border mt-6 border-[#1F1F1F] rounded-xl p-6">
										<div className="flex flex-col gap-4">
											<h4 className="font-light">Project Description</h4>
											<p className="text-sm text-[#8C8C8C]">
												{" "}
												Plenty is a decentralized trading platform built on Tezos. It allows you to trade, swap, and bridge between different cryptocurrencies seamlessly. You can exchange one type of currency for another, access various liquidity pools, and explore a range of trading options, all within a secure and decentralized environment. It's designed to make trading and managing your digital assets easy and efficient.







</p>
										</div>
										<ScrollAnimation>
											<div
												className={`${
													currentVisibleIndex === 3
														? "opacity-100 h-auto"
														: "opacity-0 h-0"
												} transition-opacity duration-500`}
											>
												<div className="w-full items-center mt-6 flex flex-col gap-6">
													<div className="w-[100%] min-h-[100px] flex lg:flex-row  flex-col rounded-xl border border-[#1F1F1F] p-4">
														<div className="lg:w-1/4 lg:items-start items-center h-full p-4 justify-center flex flex-col gap-2">
															<h4 className="font-thin text-sm">Category</h4>
															<span className="font-light lg:text-base text-sm">
																Decentralized Trading Platform
															</span>
														</div>
														<div className="border-r border-[#1F1F1F]"></div>
														<div className="border-b w-[90%] mx-auto lg:hidden block border-[#1F1F1F]"></div>
														<div className="lg:w-1/4 lg:items-start items-center h-full p-4 justify-center flex flex-col gap-2">
															<h4 className="font-thin text-sm">Time Taken</h4>
															<span className="font-light lg:text-base text-sm">
																3 Months
															</span>
														</div>
														<div className="border-b w-[90%] lg:hidden block mx-auto border-[#1F1F1F]"></div>
														<div className="border-r border-[#1F1F1F]"></div>
														<div className="lg:w-1/4 lg:items-start items-center h-full p-4 justify-center flex flex-col gap-2">
															<h4 className="font-thin text-sm">Start Date</h4>
															<span className="font-light lg:text-base text-sm">
																Jan 18, 2024
															</span>
														</div>
														<div className="border-r border-[#1F1F1F]"></div>
														<div className="border-b lg:hidden block w-[90%] mx-auto border-[#1F1F1F]"></div>
														<div className="lg:w-1/4 lg:items-start items-center h-full p-4 justify-center flex flex-col gap-2">
															<h4 className="font-thin text-sm">
																Completed Date
															</h4>
															<span className="font-light lg:text-base text-sm">
																May 3, 2024
															</span>
														</div>
													</div>
													<div className="w-[100%] min-h-[100px] lg:flex-row flex-col items-center justify-around gap-4 flex rounded-xl border border-[#1F1F1F] p-4">
														<div className=" flex items-center px-4">
															<h4>Technologies Used</h4>
														</div>
														<div className=" flex justify-center items-center gap-4 px-4">
															<svg
																width="56"
																height="56"
																viewBox="0 0 56 56"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	fill="url(#paint0_linear_26_1372)"
																/>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	stroke="url(#paint1_linear_26_1372)"
																	stroke-width="2"
																/>
																<g clip-path="url(#clip0_26_1372)">
																	<path
																		d="M28.375 23.8688C28.375 21.8092 28.375 19.7983 28.375 17.7955C28.3993 17.7712 28.4237 17.7387 28.4399 17.7387C29.5832 17.7469 30.7346 17.6982 31.8698 17.7874C33.3131 17.909 34.424 19.1983 34.4807 20.674C34.5375 22.1174 33.5239 23.4958 32.1212 23.7472C31.44 23.8688 30.7265 23.8364 30.0291 23.8526C29.494 23.885 28.9588 23.8688 28.375 23.8688Z"
																		fill="white"
																	/>
																	<path
																		d="M27.2723 17.7307C27.2723 19.7903 27.2723 21.8012 27.2723 23.877C27.0858 23.877 26.9074 23.877 26.729 23.877C25.9344 23.877 25.1316 23.877 24.337 23.877C22.5531 23.8689 21.1827 22.5553 21.1422 20.8363C21.1098 19.1983 22.4152 17.8199 24.1424 17.7388C25.164 17.6901 26.1938 17.7307 27.2723 17.7307Z"
																		fill="white"
																	/>
																	<path
																		d="M27.2645 24.9634C27.2645 27.0149 27.2645 29.0177 27.2645 31.134C25.9428 31.0692 24.6211 31.1178 23.3481 30.8989C21.9534 30.6556 21.0533 29.2528 21.1588 27.8501C21.2723 26.2851 22.3507 25.1013 23.8427 24.9796C24.9698 24.8904 26.105 24.9634 27.2645 24.9634Z"
																		fill="white"
																	/>
																	<path
																		d="M27.3292 32.1395C27.2886 33.4125 27.3373 34.6531 27.1832 35.8532C26.9967 37.2722 25.5858 38.3263 24.1668 38.2776C22.6424 38.229 21.3937 37.1181 21.1991 35.6342C20.9477 33.7693 22.3505 32.1476 24.2317 32.1313C25.2291 32.1395 26.2264 32.1395 27.3292 32.1395Z"
																		fill="white"
																	/>
																	<path
																		d="M31.4073 31.0691C29.7207 31.061 28.3503 29.6744 28.3584 27.9878C28.3665 26.3093 29.7531 24.9309 31.4397 24.939C33.1263 24.9471 34.4966 26.3337 34.4885 28.0203C34.4804 29.7068 33.0938 31.0772 31.4073 31.0691Z"
																		fill="white"
																	/>
																</g>
																<defs>
																	<linearGradient
																		id="paint0_linear_26_1372"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#1A1A1A" />
																		<stop
																			offset="1"
																			stop-color="#1A1A1A"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<linearGradient
																		id="paint1_linear_26_1372"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#333333" />
																		<stop
																			offset="0.84964"
																			stop-color="#333333"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<clipPath id="clip0_26_1372">
																		<rect
																			width="13.3467"
																			height="20.5714"
																			fill="white"
																			transform="translate(21.1426 17.7144)"
																		/>
																	</clipPath>
																</defs>
															</svg>
															<svg
																width="56"
																height="56"
																viewBox="0 0 56 56"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	fill="url(#paint0_linear_26_1380)"
																/>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	stroke="url(#paint1_linear_26_1380)"
																	stroke-width="2"
																/>
																<g clip-path="url(#clip0_26_1380)">
																	<path
																		d="M18.5713 17.7144C24.6634 17.7144 30.7104 17.7144 36.7832 17.7144C36.7574 18.1721 36.7317 18.604 36.6994 19.0424C36.5125 21.634 36.3191 24.2255 36.1386 26.8171C35.9774 29.0992 35.8291 31.3814 35.6744 33.6571C35.6357 34.2695 35.5777 34.8755 35.5455 35.4879C35.5326 35.6942 35.4488 35.778 35.2554 35.836C32.7992 36.6354 30.3559 37.4542 27.8997 38.2535C27.7707 38.2987 27.5967 38.2922 27.4677 38.2535C25.0373 37.4606 22.6069 36.6548 20.1701 35.8618C19.9186 35.778 19.8413 35.6491 19.8219 35.4106C19.7446 34.1986 19.6543 32.993 19.5705 31.7811C19.4287 29.7375 19.2869 27.6939 19.1386 25.6438C19.0226 23.9419 18.9001 22.2399 18.784 20.538C18.7131 19.6097 18.6422 18.6814 18.5713 17.7144ZM22.5876 31.0977C22.5876 31.2202 22.5811 31.3233 22.5876 31.4265C22.6263 32.026 22.6843 32.6256 22.7036 33.2251C22.7101 33.4443 22.7874 33.541 22.9873 33.6055C24.4958 34.1019 25.9979 34.6047 27.5 35.1011C27.6031 35.1333 27.7385 35.1462 27.8352 35.114C29.3631 34.6112 30.8845 34.0954 32.4124 33.599C32.5993 33.5346 32.6509 33.4443 32.6638 33.2574C32.7992 31.3105 32.9474 29.3571 33.0893 27.4102C33.1151 27.0298 33.1279 26.6495 33.1473 26.224C30.2978 26.224 27.4742 26.224 24.6376 26.224C24.5667 25.1732 24.4958 24.1611 24.4249 23.1167C27.4291 23.1167 30.3881 23.1167 33.3794 23.1167C33.4374 22.3109 33.489 21.5372 33.547 20.7508C29.6209 20.7508 25.7336 20.7508 21.8269 20.7508C22.0138 23.3939 22.2008 26.0177 22.3813 28.6609C25.1211 28.6609 27.8223 28.6609 30.5622 28.6609C30.4912 29.6408 30.4332 30.5884 30.3494 31.5361C30.343 31.6328 30.2076 31.7746 30.1044 31.8068C29.3889 32.0583 28.6668 32.3032 27.9383 32.5224C27.7772 32.574 27.5773 32.5676 27.4162 32.516C26.8295 32.3419 26.2622 32.1034 25.6756 31.9551C25.2114 31.8391 24.9213 31.6521 24.96 31.1364C24.96 31.1235 24.9342 31.1042 24.9213 31.0848C24.1541 31.0977 23.3805 31.0977 22.5876 31.0977Z"
																		fill="white"
																	/>
																</g>
																<defs>
																	<linearGradient
																		id="paint0_linear_26_1380"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#1A1A1A" />
																		<stop
																			offset="1"
																			stop-color="#1A1A1A"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<linearGradient
																		id="paint1_linear_26_1380"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#333333" />
																		<stop
																			offset="0.84964"
																			stop-color="#333333"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<clipPath id="clip0_26_1380">
																		<rect
																			width="18.2119"
																			height="20.5714"
																			fill="white"
																			transform="translate(18.5713 17.7144)"
																		/>
																	</clipPath>
																</defs>
															</svg>
															<svg
																width="56"
																height="56"
																viewBox="0 0 56 56"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	fill="url(#paint0_linear_26_1384)"
																/>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	stroke="url(#paint1_linear_26_1384)"
																	stroke-width="2"
																/>
																<g clip-path="url(#clip0_26_1384)">
																	<path
																		d="M18.5777 17.7144C24.5906 17.7144 30.5906 17.7144 36.6035 17.7144C36.5391 18.5264 36.4746 19.3126 36.4037 20.1053C36.3071 21.2396 36.2039 22.3739 36.1008 23.5017C35.9397 25.3191 35.7721 27.1365 35.611 28.9539C35.4886 30.3202 35.379 31.6929 35.2566 33.0591C35.1728 34.0516 35.0826 35.0506 34.9795 36.043C34.9666 36.1461 34.8441 36.2944 34.7474 36.3202C32.4402 36.9775 30.1266 37.622 27.813 38.26C27.6518 38.3051 27.4521 38.2922 27.2845 38.2471C25.016 37.6091 22.7474 36.9711 20.4725 36.3395C20.2727 36.2879 20.1889 36.2106 20.1696 35.9979C20.002 33.9872 19.828 31.9764 19.6476 29.9657C19.4284 27.4136 19.19 24.8615 18.958 22.3094C18.8226 20.8207 18.7002 19.3384 18.5713 17.8497C18.5713 17.811 18.5777 17.7659 18.5777 17.7144ZM22.6185 29.4566C22.6185 29.579 22.6121 29.6886 22.6185 29.7917C22.7088 30.7842 22.8054 31.7767 22.8828 32.7756C22.9021 33.0205 22.9795 33.1236 23.2179 33.188C24.6228 33.5618 26.0278 33.955 27.4327 34.3416C27.5101 34.361 27.6003 34.3867 27.6776 34.3674C29.147 33.9678 30.61 33.5618 32.0729 33.1494C32.1567 33.1236 32.2662 33.0076 32.2727 32.9238C32.4145 31.4609 32.5498 29.9979 32.6787 28.535C32.8011 27.1687 32.9172 25.796 33.0396 24.4297C33.1234 23.4695 33.2072 22.5092 33.2974 21.5361C29.4821 21.5361 25.6927 21.5361 21.8839 21.5361C21.929 22.245 21.9741 22.9345 22.0256 23.6564C24.9773 23.6564 27.8967 23.6564 30.842 23.6564C30.784 24.4297 30.726 25.1773 30.6744 25.9507C27.8581 25.9893 25.074 26.0216 22.2576 26.0602C22.335 26.7949 22.4123 27.4909 22.4897 28.2192C25.1706 28.2192 27.813 28.2192 30.4875 28.2192C30.3779 29.2181 30.2813 30.1913 30.1588 31.158C30.1459 31.2482 30.0299 31.3771 29.9333 31.4029C29.4112 31.564 28.8699 31.6671 28.3543 31.8475C27.813 32.0344 27.2974 32.0087 26.7625 31.8347C26.2985 31.68 25.8151 31.5511 25.3382 31.448C25.1062 31.3964 25.0289 31.2869 25.016 31.0613C24.9837 30.5393 24.9257 30.0173 24.8806 29.4888C24.1008 29.4566 23.3661 29.4566 22.6185 29.4566Z"
																		fill="white"
																	/>
																</g>
																<defs>
																	<linearGradient
																		id="paint0_linear_26_1384"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#1A1A1A" />
																		<stop
																			offset="1"
																			stop-color="#1A1A1A"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<linearGradient
																		id="paint1_linear_26_1384"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#333333" />
																		<stop
																			offset="0.84964"
																			stop-color="#333333"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<clipPath id="clip0_26_1384">
																		<rect
																			width="18.0387"
																			height="20.5714"
																			fill="white"
																			transform="translate(18.5713 17.7144)"
																		/>
																	</clipPath>
																</defs>
															</svg>
															<svg
																width="56"
																height="56"
																viewBox="0 0 56 56"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	fill="url(#paint0_linear_26_1388)"
																/>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	stroke="url(#paint1_linear_26_1388)"
																	stroke-width="2"
																/>
																<g clip-path="url(#clip0_26_1388)">
																	<path
																		d="M16.8574 17.7144C23.7532 17.7144 30.6104 17.7144 37.4869 17.7144C37.4224 18.5006 37.358 19.2675 37.2871 20.0409C37.1904 21.1429 37.0873 22.2385 36.9842 23.3406C36.8166 25.1257 36.649 26.9109 36.4879 28.6897C36.3655 30.0237 36.2559 31.3642 36.1335 32.6982C36.0239 33.9163 35.9143 35.1343 35.8048 36.3524C35.7855 36.5393 35.721 36.6166 35.5148 36.6617C32.8789 37.1837 30.243 37.7187 27.6007 38.2407C27.3429 38.2922 27.0658 38.3051 26.808 38.2536C24.3913 37.7767 21.9745 37.2869 19.5577 36.7971C19.3128 36.7455 19.0744 36.6811 18.8295 36.6617C18.6039 36.6424 18.5395 36.5393 18.5202 36.3395C18.3913 34.8314 18.2624 33.3234 18.127 31.8218C17.9401 29.7917 17.7468 27.7616 17.5599 25.7315C17.4181 23.9464 17.2699 22.1547 17.1152 20.376C17.0379 19.4995 16.9476 18.6231 16.8574 17.7144ZM31.3 28.8637C31.1904 30.043 31.0873 31.1709 30.9777 32.3051C30.0626 32.4856 29.1797 32.6596 28.3032 32.8465C28.2065 32.8658 28.0454 32.9496 28.0454 33.014C28.0261 33.5425 28.0325 34.0774 28.0325 34.6445C29.5792 34.3352 31.0744 34.0387 32.576 33.7358C32.7758 31.5382 32.9756 29.3663 33.1754 27.1429C32.0089 27.1429 30.8875 27.1429 29.779 27.1429C29.779 25.6864 29.779 24.275 29.779 22.8379C31.0551 22.8379 32.3053 22.8379 33.5749 22.8379C33.62 22.2579 33.6652 21.7101 33.7167 21.1494C31.8026 21.1494 29.9337 21.1494 28.0647 21.1494C28.0647 23.7272 28.0647 26.2858 28.0647 28.8637C29.141 28.8637 30.2044 28.8637 31.3 28.8637ZM24.591 21.1429C24.591 24.9582 24.591 28.7348 24.591 32.5436C24.1657 32.4598 23.7726 32.3825 23.373 32.3051C23.315 31.7251 23.2634 31.1709 23.2119 30.6037C22.6383 30.6037 22.0841 30.6037 21.4911 30.6037C21.5878 31.6542 21.678 32.6854 21.7747 33.7358C23.2828 34.0387 24.7844 34.3352 26.2989 34.6381C26.2989 30.1204 26.2989 25.6349 26.2989 21.1429C25.7253 21.1429 25.184 21.1429 24.591 21.1429Z"
																		fill="white"
																	/>
																</g>
																<defs>
																	<linearGradient
																		id="paint0_linear_26_1388"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#1A1A1A" />
																		<stop
																			offset="1"
																			stop-color="#1A1A1A"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<linearGradient
																		id="paint1_linear_26_1388"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#333333" />
																		<stop
																			offset="0.84964"
																			stop-color="#333333"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<clipPath id="clip0_26_1388">
																		<rect
																			width="20.6294"
																			height="20.5714"
																			fill="white"
																			transform="translate(16.8574 17.7144)"
																		/>
																	</clipPath>
																</defs>
															</svg>
														</div>
													</div>
												</div>
												<div className="w-full min-h-[160px] flex flex-col justify-between mt-6 rounded-xl border-[#1F1F1F] border p-4">
													<h4>Method Used</h4>
													<div className="flex sm:flex-row flex-col gap-2 p-3 w-full min-h-[80px] border border-[#1F1F1F] rounded-xl">
														<div className="flex items-center justify-center sm:w-1/3">
															<span className="sm:w-[180px] w-full  flex justify-center items-center text-sm h-[50px] border border-[#1F1F1F] rounded-full ">
																Agile Development
															</span>
														</div>
													</div>
												</div>
											</div>
										</ScrollAnimation>
									</div>
								</div>
							</div>
						</ScrollAnimation>
					</div>
			

					<div className="w-full">
						<ScrollAnimation variants={scaleUpVariants}>
							<div className="mt-4 flex items-center flex-col">
								<div className="w-[95%] flex-col flex gap-2 md:p-8  p-2 lg:p-4 h-full rounded-xl border border-[#1F1F1F] ">
									<CustomSlider5/>
									<div className="flex justify-between items-center px-4 mt-6 relative">
										<h3 className="sm:text-base text-sm">
										Wizard of Odds: An Online Sports Betting Web App
</h3>
										<button
											onClick={() => toggleVisibility(4)}
											className={`absolute right-3 flex items-center gap-4 text-[10px] sm:text-xs font-thin ${
												currentVisibleIndex === 4 ? "opacity-0 h-0" : "bg-none"
											} transition-opacity duration-1000 `}
										>
											<span className="sm:block hidden">Show More</span>
											<svg
												width="40"
												height="40"
												viewBox="0 0 56 56"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect
													x="0.5"
													y="0.5"
													width="55"
													height="55"
													rx="27.5"
													fill="url(#paint0_linear_26_1433)"
												/>
												<rect
													x="0.5"
													y="0.5"
													width="55"
													height="55"
													rx="27.5"
													stroke="url(#paint1_linear_26_1433)"
												/>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M21.3222 24.0929C21.7402 23.691 22.4049 23.704 22.8069 24.122L28 29.6349L33.1931 24.122C33.5951 23.704 34.2598 23.691 34.6778 24.0929C35.0958 24.4949 35.1088 25.1596 34.7069 25.5776L28.7569 31.8776C28.5589 32.0835 28.2856 32.1998 28 32.1998C27.7144 32.1998 27.4411 32.0835 27.2431 31.8776L21.2931 25.5776C20.8912 25.1596 20.9042 24.4949 21.3222 24.0929Z"
													fill="white"
												/>
												<defs>
													<linearGradient
														id="paint0_linear_26_1433"
														x1="28"
														y1="0"
														x2="28"
														y2="56"
														gradientUnits="userSpaceOnUse"
													>
														<stop stop-color="#1A1A1A" />
														<stop
															offset="1"
															stop-color="#1A1A1A"
															stop-opacity="0"
														/>
													</linearGradient>
													<linearGradient
														id="paint1_linear_26_1433"
														x1="28"
														y1="0"
														x2="28"
														y2="56"
														gradientUnits="userSpaceOnUse"
													>
														<stop stop-color="#262626" />
														<stop
															offset="1"
															stop-color="#262626"
															stop-opacity="0"
														/>
													</linearGradient>
												</defs>
											</svg>
										</button>
										<button
											onClick={() => toggleVisibility(4)}
											className={`right-3 absolute flex items-center gap-4 text-[10px] sm:text-xs font-thin
									${
										currentVisibleIndex === 4
											? "opacity-100 h-fit"
											: "opacity-0 h-0"
									} transition-opacity duration-1000`}
										>
											<span className="sm:block hidden">Show Less</span>
											<svg
												width="40"
												height="40"
												viewBox="0 0 56 56"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect
													x="0.5"
													y="0.5"
													width="55"
													height="55"
													rx="27.5"
													fill="url(#paint0_linear_26_1332)"
												/>
												<rect
													x="0.5"
													y="0.5"
													width="55"
													height="55"
													rx="27.5"
													stroke="url(#paint1_linear_26_1332)"
												/>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M34.6778 31.9068C34.2598 32.3088 33.5951 32.2957 33.1931 31.8777L28 26.3649L22.8069 31.8777C22.4049 32.2957 21.7402 32.3088 21.3222 31.9068C20.9042 31.5049 20.8912 30.8402 21.2931 30.4222L27.2431 24.1222C27.4411 23.9163 27.7144 23.7999 28 23.7999C28.2856 23.7999 28.5589 23.9163 28.7569 24.1222L34.7069 30.4222C35.1088 30.8402 35.0958 31.5049 34.6778 31.9068Z"
													fill="white"
												/>
												<defs>
													<linearGradient
														id="paint0_linear_26_1332"
														x1="28"
														y1="0"
														x2="28"
														y2="56"
														gradientUnits="userSpaceOnUse"
													>
														<stop stop-color="#1A1A1A" />
														<stop
															offset="1"
															stop-color="#1A1A1A"
															stop-opacity="0"
														/>
													</linearGradient>
													<linearGradient
														id="paint1_linear_26_1332"
														x1="28"
														y1="0"
														x2="28"
														y2="56"
														gradientUnits="userSpaceOnUse"
													>
														<stop stop-color="#262626" />
														<stop
															offset="1"
															stop-color="#262626"
															stop-opacity="0"
														/>
													</linearGradient>
												</defs>
											</svg>
										</button>
									</div>
									<div className="text-sm md:flex-row flex-col flex gap-4">
										<Link
											href={""}
											className="px-3 py-[2px] w-fit rounded-full flex justify-center items-center border border-[#1F1F1F] gap-2"
										>
											<svg
												width="32"
												height="32"
												viewBox="0 0 42 42"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect
													x="0.5"
													y="0.5"
													width="41"
													height="41"
													rx="20.5"
												/>
												<rect
													x="0.5"
													y="0.5"
													width="41"
													height="41"
													rx="20.5"
												/>
												<path
													d="M13.5 21.9375C13.5 21.4197 13.9197 21 14.4375 21H16.3125C16.8303 21 17.25 21.4197 17.25 21.9375V27.5625C17.25 28.0803 16.8303 28.5 16.3125 28.5H14.4375C13.9197 28.5 13.5 28.0803 13.5 27.5625V21.9375Z"
													stroke="white"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
												<path
													d="M19.125 18.1875C19.125 17.6697 19.5447 17.25 20.0625 17.25H21.9375C22.4553 17.25 22.875 17.6697 22.875 18.1875V27.5625C22.875 28.0803 22.4553 28.5 21.9375 28.5H20.0625C19.5447 28.5 19.125 28.0803 19.125 27.5625V18.1875Z"
													stroke="white"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
												<path
													d="M24.75 14.4375C24.75 13.9197 25.1697 13.5 25.6875 13.5H27.5625C28.0803 13.5 28.5 13.9197 28.5 14.4375V27.5625C28.5 28.0803 28.0803 28.5 27.5625 28.5H25.6875C25.1697 28.5 24.75 28.0803 24.75 27.5625V14.4375Z"
													stroke="white"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
											<span className="text-xs text-[#A6A6A6]">Online Sports Betting</span>
										</Link>
										<Link
											href={""}
											className="px-3 py-[2px] w-fit rounded-full flex justify-center items-center border border-[#1F1F1F] gap-2"
										>
											<svg
												width="32"
												height="32"
												viewBox="0 0 42 42"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect
													x="0.5"
													y="0.5"
													width="41"
													height="41"
													rx="20.5"
												/>
												<rect
													x="0.5"
													y="0.5"
													width="41"
													height="41"
													rx="20.5"
												/>
												<path
													d="M27.875 22.7916V26.3333C27.875 27.2454 27.2193 28.0299 26.3151 28.15C24.5762 28.3808 22.802 28.5 21 28.5C19.198 28.5 17.4238 28.3808 15.6849 28.15C14.7807 28.0299 14.125 27.2454 14.125 26.3333V22.7916M27.875 22.7916C28.2683 22.4564 28.5 21.9491 28.5 21.4074V18.2547C28.5 17.354 27.8601 16.5757 26.9692 16.4424C26.0314 16.3021 25.0829 16.1943 24.125 16.1203M27.875 22.7916C27.7137 22.9291 27.5251 23.0377 27.3143 23.1078C25.3294 23.7677 23.2064 24.125 21 24.125C18.7936 24.125 16.6706 23.7677 14.6857 23.1078C14.4749 23.0377 14.2863 22.9291 14.125 22.7916M14.125 22.7916C13.7317 22.4563 13.5 21.9491 13.5 21.4074V18.2547C13.5 17.354 14.1399 16.5757 15.0308 16.4424C15.9686 16.3021 16.9171 16.1943 17.875 16.1203M24.125 16.1203V15.375C24.125 14.3395 23.2855 13.5 22.25 13.5H19.75C18.7145 13.5 17.875 14.3395 17.875 15.375V16.1203M24.125 16.1203C23.0938 16.0406 22.0516 16 21 16C19.9484 16 18.9062 16.0406 17.875 16.1203M21 21.625H21.0062V21.6312H21V21.625Z"
													stroke="white"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
											<span className="text-xs text-[#A6A6A6]">
												Web Development & ML
											</span>
										</Link>
										<Link
											href={""}
											className="px-3 py-[2px] w-fit rounded-full flex justify-center items-center border border-[#1F1F1F] gap-2"
										>
											<svg
												width="32"
												height="32"
												viewBox="0 0 42 42"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect
													x="0.5"
													y="0.5"
													width="41"
													height="41"
													rx="20.5"
												/>
												<rect
													x="0.5"
													y="0.5"
													width="41"
													height="41"
													rx="20.5"
												/>
												<path
													d="M27.875 22.7916V26.3333C27.875 27.2454 27.2193 28.0299 26.3151 28.15C24.5762 28.3808 22.802 28.5 21 28.5C19.198 28.5 17.4238 28.3808 15.6849 28.15C14.7807 28.0299 14.125 27.2454 14.125 26.3333V22.7916M27.875 22.7916C28.2683 22.4564 28.5 21.9491 28.5 21.4074V18.2547C28.5 17.354 27.8601 16.5757 26.9692 16.4424C26.0314 16.3021 25.0829 16.1943 24.125 16.1203M27.875 22.7916C27.7137 22.9291 27.5251 23.0377 27.3143 23.1078C25.3294 23.7677 23.2064 24.125 21 24.125C18.7936 24.125 16.6706 23.7677 14.6857 23.1078C14.4749 23.0377 14.2863 22.9291 14.125 22.7916M14.125 22.7916C13.7317 22.4563 13.5 21.9491 13.5 21.4074V18.2547C13.5 17.354 14.1399 16.5757 15.0308 16.4424C15.9686 16.3021 16.9171 16.1943 17.875 16.1203M24.125 16.1203V15.375C24.125 14.3395 23.2855 13.5 22.25 13.5H19.75C18.7145 13.5 17.875 14.3395 17.875 15.375V16.1203M24.125 16.1203C23.0938 16.0406 22.0516 16 21 16C19.9484 16 18.9062 16.0406 17.875 16.1203M21 21.625H21.0062V21.6312H21V21.625Z"
													stroke="white"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
											<span className="text-xs text-[#A6A6A6]">
												Web app
											</span>
										</Link>
									</div>
									<div className="border mt-6 border-[#1F1F1F] rounded-xl p-6">
										<div className="flex flex-col gap-4">
											<h4 className="font-light">Project Description</h4>
											<p className="text-sm text-[#8C8C8C]">
												{" "}
												Wizard of Odds is a web app that lets you predict MLB game outcomes. After logging in and selecting a game, you can weigh key stats like ERA and batting average to calculate and see which team has the best chance of winning. The app provides real-time data and tracks your prediction history.
</p>
										</div>
										<ScrollAnimation>
											<div
												className={`${
													currentVisibleIndex === 4
														? "opacity-100 h-auto"
														: "opacity-0 h-0"
												} transition-opacity duration-500`}
											>
												<div className="w-full items-center mt-6 flex flex-col gap-6">
													<div className="w-[100%] min-h-[100px] flex lg:flex-row  flex-col rounded-xl border border-[#1F1F1F] p-4">
														<div className="lg:w-1/4 lg:items-start items-center h-full p-4 justify-center flex flex-col gap-2">
															<h4 className="font-thin text-sm">Category</h4>
															<span className="font-light lg:text-base text-sm">
																Online Sports Betting
															</span>
														</div>
														<div className="border-r border-[#1F1F1F]"></div>
														<div className="border-b w-[90%] mx-auto lg:hidden block border-[#1F1F1F]"></div>
														<div className="lg:w-1/4 lg:items-start items-center h-full p-4 justify-center flex flex-col gap-2">
															<h4 className="font-thin text-sm">Time Taken</h4>
															<span className="font-light lg:text-base text-sm">
																25 Days
															</span>
														</div>
														<div className="border-b w-[90%] lg:hidden block mx-auto border-[#1F1F1F]"></div>
														<div className="border-r border-[#1F1F1F]"></div>
														<div className="lg:w-1/4 lg:items-start items-center h-full p-4 justify-center flex flex-col gap-2">
															<h4 className="font-thin text-sm">Start Date</h4>
															<span className="font-light lg:text-base text-sm">
																Sept 30, 2023
															</span>
														</div>
														<div className="border-r border-[#1F1F1F]"></div>
														<div className="border-b lg:hidden block w-[90%] mx-auto border-[#1F1F1F]"></div>
														<div className="lg:w-1/4 lg:items-start items-center h-full p-4 justify-center flex flex-col gap-2">
															<h4 className="font-thin text-sm">
																Completed Date
															</h4>
															<span className="font-light lg:text-base text-sm">
																October 27, 2023
															</span>
														</div>
													</div>
													<div className="w-[100%] min-h-[100px] lg:flex-row flex-col items-center justify-around gap-4 flex rounded-xl border border-[#1F1F1F] p-4">
														<div className=" flex items-center px-4">
															<h4>Technologies Used</h4>
														</div>
														<div className=" flex justify-center items-center gap-4 px-4">
															<svg
																width="56"
																height="56"
																viewBox="0 0 56 56"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	fill="url(#paint0_linear_26_1372)"
																/>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	stroke="url(#paint1_linear_26_1372)"
																	stroke-width="2"
																/>
																<g clip-path="url(#clip0_26_1372)">
																	<path
																		d="M28.375 23.8688C28.375 21.8092 28.375 19.7983 28.375 17.7955C28.3993 17.7712 28.4237 17.7387 28.4399 17.7387C29.5832 17.7469 30.7346 17.6982 31.8698 17.7874C33.3131 17.909 34.424 19.1983 34.4807 20.674C34.5375 22.1174 33.5239 23.4958 32.1212 23.7472C31.44 23.8688 30.7265 23.8364 30.0291 23.8526C29.494 23.885 28.9588 23.8688 28.375 23.8688Z"
																		fill="white"
																	/>
																	<path
																		d="M27.2723 17.7307C27.2723 19.7903 27.2723 21.8012 27.2723 23.877C27.0858 23.877 26.9074 23.877 26.729 23.877C25.9344 23.877 25.1316 23.877 24.337 23.877C22.5531 23.8689 21.1827 22.5553 21.1422 20.8363C21.1098 19.1983 22.4152 17.8199 24.1424 17.7388C25.164 17.6901 26.1938 17.7307 27.2723 17.7307Z"
																		fill="white"
																	/>
																	<path
																		d="M27.2645 24.9634C27.2645 27.0149 27.2645 29.0177 27.2645 31.134C25.9428 31.0692 24.6211 31.1178 23.3481 30.8989C21.9534 30.6556 21.0533 29.2528 21.1588 27.8501C21.2723 26.2851 22.3507 25.1013 23.8427 24.9796C24.9698 24.8904 26.105 24.9634 27.2645 24.9634Z"
																		fill="white"
																	/>
																	<path
																		d="M27.3292 32.1395C27.2886 33.4125 27.3373 34.6531 27.1832 35.8532C26.9967 37.2722 25.5858 38.3263 24.1668 38.2776C22.6424 38.229 21.3937 37.1181 21.1991 35.6342C20.9477 33.7693 22.3505 32.1476 24.2317 32.1313C25.2291 32.1395 26.2264 32.1395 27.3292 32.1395Z"
																		fill="white"
																	/>
																	<path
																		d="M31.4073 31.0691C29.7207 31.061 28.3503 29.6744 28.3584 27.9878C28.3665 26.3093 29.7531 24.9309 31.4397 24.939C33.1263 24.9471 34.4966 26.3337 34.4885 28.0203C34.4804 29.7068 33.0938 31.0772 31.4073 31.0691Z"
																		fill="white"
																	/>
																</g>
																<defs>
																	<linearGradient
																		id="paint0_linear_26_1372"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#1A1A1A" />
																		<stop
																			offset="1"
																			stop-color="#1A1A1A"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<linearGradient
																		id="paint1_linear_26_1372"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#333333" />
																		<stop
																			offset="0.84964"
																			stop-color="#333333"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<clipPath id="clip0_26_1372">
																		<rect
																			width="13.3467"
																			height="20.5714"
																			fill="white"
																			transform="translate(21.1426 17.7144)"
																		/>
																	</clipPath>
																</defs>
															</svg>
															<svg
																width="56"
																height="56"
																viewBox="0 0 56 56"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	fill="url(#paint0_linear_26_1380)"
																/>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	stroke="url(#paint1_linear_26_1380)"
																	stroke-width="2"
																/>
																<g clip-path="url(#clip0_26_1380)">
																	<path
																		d="M18.5713 17.7144C24.6634 17.7144 30.7104 17.7144 36.7832 17.7144C36.7574 18.1721 36.7317 18.604 36.6994 19.0424C36.5125 21.634 36.3191 24.2255 36.1386 26.8171C35.9774 29.0992 35.8291 31.3814 35.6744 33.6571C35.6357 34.2695 35.5777 34.8755 35.5455 35.4879C35.5326 35.6942 35.4488 35.778 35.2554 35.836C32.7992 36.6354 30.3559 37.4542 27.8997 38.2535C27.7707 38.2987 27.5967 38.2922 27.4677 38.2535C25.0373 37.4606 22.6069 36.6548 20.1701 35.8618C19.9186 35.778 19.8413 35.6491 19.8219 35.4106C19.7446 34.1986 19.6543 32.993 19.5705 31.7811C19.4287 29.7375 19.2869 27.6939 19.1386 25.6438C19.0226 23.9419 18.9001 22.2399 18.784 20.538C18.7131 19.6097 18.6422 18.6814 18.5713 17.7144ZM22.5876 31.0977C22.5876 31.2202 22.5811 31.3233 22.5876 31.4265C22.6263 32.026 22.6843 32.6256 22.7036 33.2251C22.7101 33.4443 22.7874 33.541 22.9873 33.6055C24.4958 34.1019 25.9979 34.6047 27.5 35.1011C27.6031 35.1333 27.7385 35.1462 27.8352 35.114C29.3631 34.6112 30.8845 34.0954 32.4124 33.599C32.5993 33.5346 32.6509 33.4443 32.6638 33.2574C32.7992 31.3105 32.9474 29.3571 33.0893 27.4102C33.1151 27.0298 33.1279 26.6495 33.1473 26.224C30.2978 26.224 27.4742 26.224 24.6376 26.224C24.5667 25.1732 24.4958 24.1611 24.4249 23.1167C27.4291 23.1167 30.3881 23.1167 33.3794 23.1167C33.4374 22.3109 33.489 21.5372 33.547 20.7508C29.6209 20.7508 25.7336 20.7508 21.8269 20.7508C22.0138 23.3939 22.2008 26.0177 22.3813 28.6609C25.1211 28.6609 27.8223 28.6609 30.5622 28.6609C30.4912 29.6408 30.4332 30.5884 30.3494 31.5361C30.343 31.6328 30.2076 31.7746 30.1044 31.8068C29.3889 32.0583 28.6668 32.3032 27.9383 32.5224C27.7772 32.574 27.5773 32.5676 27.4162 32.516C26.8295 32.3419 26.2622 32.1034 25.6756 31.9551C25.2114 31.8391 24.9213 31.6521 24.96 31.1364C24.96 31.1235 24.9342 31.1042 24.9213 31.0848C24.1541 31.0977 23.3805 31.0977 22.5876 31.0977Z"
																		fill="white"
																	/>
																</g>
																<defs>
																	<linearGradient
																		id="paint0_linear_26_1380"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#1A1A1A" />
																		<stop
																			offset="1"
																			stop-color="#1A1A1A"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<linearGradient
																		id="paint1_linear_26_1380"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#333333" />
																		<stop
																			offset="0.84964"
																			stop-color="#333333"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<clipPath id="clip0_26_1380">
																		<rect
																			width="18.2119"
																			height="20.5714"
																			fill="white"
																			transform="translate(18.5713 17.7144)"
																		/>
																	</clipPath>
																</defs>
															</svg>
															<svg
																width="56"
																height="56"
																viewBox="0 0 56 56"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	fill="url(#paint0_linear_26_1384)"
																/>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	stroke="url(#paint1_linear_26_1384)"
																	stroke-width="2"
																/>
																<g clip-path="url(#clip0_26_1384)">
																	<path
																		d="M18.5777 17.7144C24.5906 17.7144 30.5906 17.7144 36.6035 17.7144C36.5391 18.5264 36.4746 19.3126 36.4037 20.1053C36.3071 21.2396 36.2039 22.3739 36.1008 23.5017C35.9397 25.3191 35.7721 27.1365 35.611 28.9539C35.4886 30.3202 35.379 31.6929 35.2566 33.0591C35.1728 34.0516 35.0826 35.0506 34.9795 36.043C34.9666 36.1461 34.8441 36.2944 34.7474 36.3202C32.4402 36.9775 30.1266 37.622 27.813 38.26C27.6518 38.3051 27.4521 38.2922 27.2845 38.2471C25.016 37.6091 22.7474 36.9711 20.4725 36.3395C20.2727 36.2879 20.1889 36.2106 20.1696 35.9979C20.002 33.9872 19.828 31.9764 19.6476 29.9657C19.4284 27.4136 19.19 24.8615 18.958 22.3094C18.8226 20.8207 18.7002 19.3384 18.5713 17.8497C18.5713 17.811 18.5777 17.7659 18.5777 17.7144ZM22.6185 29.4566C22.6185 29.579 22.6121 29.6886 22.6185 29.7917C22.7088 30.7842 22.8054 31.7767 22.8828 32.7756C22.9021 33.0205 22.9795 33.1236 23.2179 33.188C24.6228 33.5618 26.0278 33.955 27.4327 34.3416C27.5101 34.361 27.6003 34.3867 27.6776 34.3674C29.147 33.9678 30.61 33.5618 32.0729 33.1494C32.1567 33.1236 32.2662 33.0076 32.2727 32.9238C32.4145 31.4609 32.5498 29.9979 32.6787 28.535C32.8011 27.1687 32.9172 25.796 33.0396 24.4297C33.1234 23.4695 33.2072 22.5092 33.2974 21.5361C29.4821 21.5361 25.6927 21.5361 21.8839 21.5361C21.929 22.245 21.9741 22.9345 22.0256 23.6564C24.9773 23.6564 27.8967 23.6564 30.842 23.6564C30.784 24.4297 30.726 25.1773 30.6744 25.9507C27.8581 25.9893 25.074 26.0216 22.2576 26.0602C22.335 26.7949 22.4123 27.4909 22.4897 28.2192C25.1706 28.2192 27.813 28.2192 30.4875 28.2192C30.3779 29.2181 30.2813 30.1913 30.1588 31.158C30.1459 31.2482 30.0299 31.3771 29.9333 31.4029C29.4112 31.564 28.8699 31.6671 28.3543 31.8475C27.813 32.0344 27.2974 32.0087 26.7625 31.8347C26.2985 31.68 25.8151 31.5511 25.3382 31.448C25.1062 31.3964 25.0289 31.2869 25.016 31.0613C24.9837 30.5393 24.9257 30.0173 24.8806 29.4888C24.1008 29.4566 23.3661 29.4566 22.6185 29.4566Z"
																		fill="white"
																	/>
																</g>
																<defs>
																	<linearGradient
																		id="paint0_linear_26_1384"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#1A1A1A" />
																		<stop
																			offset="1"
																			stop-color="#1A1A1A"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<linearGradient
																		id="paint1_linear_26_1384"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#333333" />
																		<stop
																			offset="0.84964"
																			stop-color="#333333"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<clipPath id="clip0_26_1384">
																		<rect
																			width="18.0387"
																			height="20.5714"
																			fill="white"
																			transform="translate(18.5713 17.7144)"
																		/>
																	</clipPath>
																</defs>
															</svg>
															<svg
																width="56"
																height="56"
																viewBox="0 0 56 56"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	fill="url(#paint0_linear_26_1388)"
																/>
																<rect
																	x="1"
																	y="1"
																	width="54"
																	height="54"
																	rx="27"
																	stroke="url(#paint1_linear_26_1388)"
																	stroke-width="2"
																/>
																<g clip-path="url(#clip0_26_1388)">
																	<path
																		d="M16.8574 17.7144C23.7532 17.7144 30.6104 17.7144 37.4869 17.7144C37.4224 18.5006 37.358 19.2675 37.2871 20.0409C37.1904 21.1429 37.0873 22.2385 36.9842 23.3406C36.8166 25.1257 36.649 26.9109 36.4879 28.6897C36.3655 30.0237 36.2559 31.3642 36.1335 32.6982C36.0239 33.9163 35.9143 35.1343 35.8048 36.3524C35.7855 36.5393 35.721 36.6166 35.5148 36.6617C32.8789 37.1837 30.243 37.7187 27.6007 38.2407C27.3429 38.2922 27.0658 38.3051 26.808 38.2536C24.3913 37.7767 21.9745 37.2869 19.5577 36.7971C19.3128 36.7455 19.0744 36.6811 18.8295 36.6617C18.6039 36.6424 18.5395 36.5393 18.5202 36.3395C18.3913 34.8314 18.2624 33.3234 18.127 31.8218C17.9401 29.7917 17.7468 27.7616 17.5599 25.7315C17.4181 23.9464 17.2699 22.1547 17.1152 20.376C17.0379 19.4995 16.9476 18.6231 16.8574 17.7144ZM31.3 28.8637C31.1904 30.043 31.0873 31.1709 30.9777 32.3051C30.0626 32.4856 29.1797 32.6596 28.3032 32.8465C28.2065 32.8658 28.0454 32.9496 28.0454 33.014C28.0261 33.5425 28.0325 34.0774 28.0325 34.6445C29.5792 34.3352 31.0744 34.0387 32.576 33.7358C32.7758 31.5382 32.9756 29.3663 33.1754 27.1429C32.0089 27.1429 30.8875 27.1429 29.779 27.1429C29.779 25.6864 29.779 24.275 29.779 22.8379C31.0551 22.8379 32.3053 22.8379 33.5749 22.8379C33.62 22.2579 33.6652 21.7101 33.7167 21.1494C31.8026 21.1494 29.9337 21.1494 28.0647 21.1494C28.0647 23.7272 28.0647 26.2858 28.0647 28.8637C29.141 28.8637 30.2044 28.8637 31.3 28.8637ZM24.591 21.1429C24.591 24.9582 24.591 28.7348 24.591 32.5436C24.1657 32.4598 23.7726 32.3825 23.373 32.3051C23.315 31.7251 23.2634 31.1709 23.2119 30.6037C22.6383 30.6037 22.0841 30.6037 21.4911 30.6037C21.5878 31.6542 21.678 32.6854 21.7747 33.7358C23.2828 34.0387 24.7844 34.3352 26.2989 34.6381C26.2989 30.1204 26.2989 25.6349 26.2989 21.1429C25.7253 21.1429 25.184 21.1429 24.591 21.1429Z"
																		fill="white"
																	/>
																</g>
																<defs>
																	<linearGradient
																		id="paint0_linear_26_1388"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#1A1A1A" />
																		<stop
																			offset="1"
																			stop-color="#1A1A1A"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<linearGradient
																		id="paint1_linear_26_1388"
																		x1="28"
																		y1="2"
																		x2="28"
																		y2="54"
																		gradientUnits="userSpaceOnUse"
																	>
																		<stop stop-color="#333333" />
																		<stop
																			offset="0.84964"
																			stop-color="#333333"
																			stop-opacity="0"
																		/>
																	</linearGradient>
																	<clipPath id="clip0_26_1388">
																		<rect
																			width="20.6294"
																			height="20.5714"
																			fill="white"
																			transform="translate(16.8574 17.7144)"
																		/>
																	</clipPath>
																</defs>
															</svg>
														</div>
													</div>
												</div>
												<div className="w-full min-h-[160px] flex flex-col justify-between mt-6 rounded-xl border-[#1F1F1F] border p-4">
													<h4>Method Used</h4>
													<div className="flex sm:flex-row flex-col gap-2 p-3 w-full min-h-[80px] border border-[#1F1F1F] rounded-xl">
														<div className="flex items-center justify-center sm:w-1/3">
															<span className="sm:w-[180px] w-full  flex justify-center items-center text-sm h-[50px] border border-[#1F1F1F] rounded-full ">
																Agile Development
															</span>
														</div>
													</div>
												</div>
											</div>
										</ScrollAnimation>
									</div>
								</div>
							</div>
						</ScrollAnimation>
					</div>
				</div>
		

			</ScrollAnimation>
			<ScrollAnimation variants={scaleUpVariants}>
				<div className="flex flex-col items-center mt-24 w-full sm:max-w-[1280px] p-2 sm:p-10 mx-auto gap-10">
					<h1 className="text-center text-3xl font-semibold lg:w-[500px]">
						Key Features <span className="text-[#808080]">of Our Projects</span>
					</h1>
					<p className="text-sm text-[#808080] text-center lg:w-[900px]">
					Partnering with Deltospark boosts your brand visibility, engagement, and ROI. We offer tailored solutions in website, app development, AI, Blockchain and more to meet your unique needs. Think of us as your agile tech partner, delivering clear, effective solutions that drive results and simplify complex technology.				</p>
					<div className="w-full justify-center flex flex-col gap-10">
						<div className="flex lg:flex-row flex-col  gap-5 min-h-[200px] justify-evenly">
							<div className="lg:w-[28%]">
								<ScrollAnimation variants={scaleUpVariants}>
									<div className=" h-full flex flex-col p-4 items-center gap-4">
										<Image
											src={projectStrategic}
											width={50}
											height={50}
											alt=""
										/>
										<h4 className="font-semibold text-center text-sm">
											Strategic planning
										</h4>
										<p className="text-sm font-thin text-center">
										Every project begins with thorough research and strategic planning to ensure a comprehensive understanding of our clients objectives and target audience.										</p>
									</div>
								</ScrollAnimation>
							</div>
							<div className="border-b border-[#1F1F1F]"></div>
							<div className="border-r border-[#1F1F1F]"></div>
							<div className="lg:w-[28%]">
								<ScrollAnimation variants={scaleUpVariants}>
									<div className=" h-full flex flex-col p-4 items-center gap-4">
										<Image
											src={projectCustomized}
											width={50}
											height={50}
											alt=""
										/>
										<h4 className="font-semibold text-sm text-center">
											Customized Solutions
										</h4>
										<p className="text-sm font-thin text-center">
										We believe in tailoring our services to suit each project's unique requirements, resulting in solutions that perfectly align with our clients' brand identities.






</p>
									</div>
								</ScrollAnimation>
							</div>
							<div className="border-r border-[#1F1F1F]"></div>
							<div className="border-b border-[#1F1F1F]"></div>
							<div className="lg:w-[28%]">
								<ScrollAnimation variants={scaleUpVariants}>
									<div className=" h-full items-center p-4 flex flex-col gap-4">
										<Image src={projectUser} width={50} height={50} alt="" />
										<h4 className="font-semibold text-sm text-center">
											User-Centric Approach
										</h4>
										<p className="text-sm font-thin text-center">
										Our projects are designed with the end-user in mind, prioritizing seamless experiences and intuitive interfaces.										</p>
									</div>
								</ScrollAnimation>
							</div>
						</div>
						<div className="flex flex-col lg:flex-row gap-5 min-h-[200px] justify-evenly">
							<div className="lg:w-[42%]">
								<ScrollAnimation variants={scaleUpVariants}>
									<div className="h-full flex flex-col p-4 items-center gap-4">
										<Image src={projectCard} width={50} height={50} alt="" />
										<h4 className="font-semibold text-center text-sm">
											Cutting-Edge Technologies
										</h4>
										<p className="text-sm font-thin text-center">
										We leverage the latest technologies and industry best practices to deliver high-performance, future-proof solutions.


</p>
									</div>
								</ScrollAnimation>
							</div>
							<div className="border-r border-[#1F1F1F]"></div>
							<div className="border-b border-[#1F1F1F]"></div>
							<div className="lg:w-[42%]">
								<ScrollAnimation variants={scaleUpVariants}>
									<div className="h-full items-center p-4 flex flex-col gap-4">
										<Image src={projectCard} width={50} height={50} alt="" />
										<h4 className="font-semibold text-sm">Timely Delivery</h4>
										<p className="text-sm font-thin text-center">
										We adhere to strict timelines and project schedules to ensure timely delivery without compromising quality.






</p>
									</div>
								</ScrollAnimation>
							</div>
						</div>
					</div>
				</div>
			</ScrollAnimation>
			<ScrollAnimation variants={scaleUpVariants}>
				<div className="flex flex-col items-center mt-24 w-full sm:max-w-[1280px] p-2 lg:p-10 mx-auto gap-10">
					<h1 className="text-center text-3xl font-semibold lg:w-[500px]">
						Upcoming <span className="text-[#808080]">Projects</span>
					</h1>
					<p className="text-sm text-[#808080] text-center lg:w-[900px]">
					At Deltospark, we are continually working on exciting new projects to push the boundaries of digital innovation and deliver exceptional solutions to our valued clients. While we are eager to share our upcoming projects, we understand the importance of confidentiality and protecting sensitive information. Therefore, we will provide a brief overview of our projects while keeping specific details private.






</p>
					<div className="mt6 w-full min-h-[1000px]">
						<div className="w-full h-1/2 lg:p-6 p-2 flex-col lg:flex-row flex gap-8 lg:gap-6  ">
							<div className="lg:w-1/2 h-full">
								<ScrollAnimation variants={scaleUpVariants}>
									<div className="p-5 rounded-xl border-[#1F1F1F] flex flex-col gap-4 border my-BG backdrop-filter backdrop-blur-xl bg-opacity-20 relative">
										<div className="w-full h-20 flex gap-4 items-center">
											<svg
												width="58"
												height="58"
												viewBox="0 0 58 58"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<g filter="url(#filter0_i_26_1460)">
													<rect
														x="2"
														y="2"
														width="54"
														height="54"
														rx="27"
														fill="url(#paint0_linear_26_1460)"
													/>
													<rect
														x="1"
														y="1"
														width="56"
														height="56"
														rx="28"
														stroke="#666666"
														stroke-width="2"
													/>
													<path
														d="M28.9997 38.2082L34.958 41.4582L40.9163 38.2082V30.6248L34.958 34.4165L28.9997 30.6248V38.2082Z"
														fill="white"
													/>
													<path
														d="M17.083 30.6248L23.0413 27.3748L28.9997 30.6248L23.0413 34.4165V41.4582L17.083 38.2082V30.6248Z"
														fill="white"
													/>
													<path
														d="M34.958 27.3748L28.9997 30.6248V23.5832L23.0413 19.7915L28.9997 16.5415L34.958 19.7915V27.3748Z"
														fill="white"
													/>
												</g>
												<defs>
													<filter
														id="filter0_i_26_1460"
														x="0"
														y="0"
														width="58"
														height="58"
														filterUnits="userSpaceOnUse"
														color-interpolation-filters="sRGB"
													>
														<feFlood
															flood-opacity="0"
															result="BackgroundImageFix"
														/>
														<feBlend
															mode="normal"
															in="SourceGraphic"
															in2="BackgroundImageFix"
															result="shape"
														/>
														<feColorMatrix
															in="SourceAlpha"
															type="matrix"
															values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
															result="hardAlpha"
														/>
														<feMorphology
															radius="13"
															operator="erode"
															in="SourceAlpha"
															result="effect1_innerShadow_26_1460"
														/>
														<feOffset />
														<feGaussianBlur stdDeviation="4" />
														<feComposite
															in2="hardAlpha"
															operator="arithmetic"
															k2="-1"
															k3="1"
														/>
														<feColorMatrix
															type="matrix"
															values="0 0 0 0 0.166667 0 0 0 0 0.166667 0 0 0 0 0.166667 0 0 0 0.25 0"
														/>
														<feBlend
															mode="normal"
															in2="shape"
															result="effect1_innerShadow_26_1460"
														/>
													</filter>
													<linearGradient
														id="paint0_linear_26_1460"
														x1="-5.77273"
														y1="-8.63637"
														x2="64.1818"
														y2="67.0455"
														gradientUnits="userSpaceOnUse"
													>
														<stop />
														<stop
															offset="0.256291"
															stop-color="#E7E7E7"
															stop-opacity="0.6875"
														/>
														<stop
															offset="0.457331"
															stop-color="white"
															stop-opacity="0.34139"
														/>
														<stop
															offset="0.584253"
															stop-color="white"
															stop-opacity="0.222774"
														/>
														<stop offset="1" stop-color="#666666" />
													</linearGradient>
												</defs>
											</svg>
											<h3 className="font-semibold">
												Healthcare Platform Enhancement
											</h3>
										</div>
										<div className="flex items-center w-full h-20 border border-[#1F1F1F] rounded-xl p-3">
											<div className="h-full w-1/2 flex gap-2 flex-col px-3 justify-center">
												<h4 className="text-sm text-[#808080]">Category</h4>
												<span className="text-sm font-light">
													AI & Mobile App Development
												</span>
											</div>
											<div className="border-r h-full border-[#1F1F1F]"></div>
											<div className="h-full w-1/2 flex gap-2 flex-col px-6 justify-center">
												<h4 className="text-sm text-[#808080]">
													Expected Completion
												</h4>
												<span className="text-sm font-light">Q4 2024</span>
											</div>
										</div>
										<div className="flex flex-col justify-center gap-4 p-4  w-full min-h-[220px] mt-6 border rounded-xl border-[#1F1F1F]">
											<h3>Project Description</h3>
											<p className="text-sm  text-[#8C8C8C]">
												Our team is collaborating with a leading healthcare
												provider to enhance their existing platform. The project
												aims to streamline user experiences, optimize database
												performance, and implement advanced security measures to
												safeguard patient data. This ambitious undertaking will
												elevate the platform s capabilities and revolutionize
												healthcare accessibility for users.
											</p>
										</div>
										<div className=" rounded-b-xl absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[#0f0f0f] to-transparent"></div>
									</div>
								</ScrollAnimation>
							</div>
							<div className="lg:w-1/2 h-full">
								<ScrollAnimation variants={scaleUpVariants}>
									<div className="p-5 rounded-xl border-[#1F1F1F] flex flex-col gap-4 border my-BG backdrop-filter backdrop-blur-xl bg-opacity-20 relative">
										<div className="w-full h-20 flex gap-4 items-center">
											<svg
												width="58"
												height="58"
												viewBox="0 0 58 58"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<g filter="url(#filter0_i_26_1460)">
													<rect
														x="2"
														y="2"
														width="54"
														height="54"
														rx="27"
														fill="url(#paint0_linear_26_1460)"
													/>
													<rect
														x="1"
														y="1"
														width="56"
														height="56"
														rx="28"
														stroke="#666666"
														stroke-width="2"
													/>
													<path
														d="M28.9997 38.2082L34.958 41.4582L40.9163 38.2082V30.6248L34.958 34.4165L28.9997 30.6248V38.2082Z"
														fill="white"
													/>
													<path
														d="M17.083 30.6248L23.0413 27.3748L28.9997 30.6248L23.0413 34.4165V41.4582L17.083 38.2082V30.6248Z"
														fill="white"
													/>
													<path
														d="M34.958 27.3748L28.9997 30.6248V23.5832L23.0413 19.7915L28.9997 16.5415L34.958 19.7915V27.3748Z"
														fill="white"
													/>
												</g>
												<defs>
													<filter
														id="filter0_i_26_1460"
														x="0"
														y="0"
														width="58"
														height="58"
														filterUnits="userSpaceOnUse"
														color-interpolation-filters="sRGB"
													>
														<feFlood
															flood-opacity="0"
															result="BackgroundImageFix"
														/>
														<feBlend
															mode="normal"
															in="SourceGraphic"
															in2="BackgroundImageFix"
															result="shape"
														/>
														<feColorMatrix
															in="SourceAlpha"
															type="matrix"
															values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
															result="hardAlpha"
														/>
														<feMorphology
															radius="13"
															operator="erode"
															in="SourceAlpha"
															result="effect1_innerShadow_26_1460"
														/>
														<feOffset />
														<feGaussianBlur stdDeviation="4" />
														<feComposite
															in2="hardAlpha"
															operator="arithmetic"
															k2="-1"
															k3="1"
														/>
														<feColorMatrix
															type="matrix"
															values="0 0 0 0 0.166667 0 0 0 0 0.166667 0 0 0 0 0.166667 0 0 0 0.25 0"
														/>
														<feBlend
															mode="normal"
															in2="shape"
															result="effect1_innerShadow_26_1460"
														/>
													</filter>
													<linearGradient
														id="paint0_linear_26_1460"
														x1="-5.77273"
														y1="-8.63637"
														x2="64.1818"
														y2="67.0455"
														gradientUnits="userSpaceOnUse"
													>
														<stop />
														<stop
															offset="0.256291"
															stop-color="#E7E7E7"
															stop-opacity="0.6875"
														/>
														<stop
															offset="0.457331"
															stop-color="white"
															stop-opacity="0.34139"
														/>
														<stop
															offset="0.584253"
															stop-color="white"
															stop-opacity="0.222774"
														/>
														<stop offset="1" stop-color="#666666" />
													</linearGradient>
												</defs>
											</svg>
											<h3 className="font-semibold">
												AI-Driven Marketing Automation
											</h3>
										</div>
										<div className="flex items-center w-full h-20 border border-[#1F1F1F] rounded-xl p-3">
											<div className="h-full w-1/2 flex gap-2 flex-col px-3 justify-center">
												<h4 className="text-sm text-[#808080]">Category</h4>
												<span className="text-sm font-light">
													Digital Marketing
												</span>
											</div>
											<div className="border-r h-full border-[#1F1F1F]"></div>
											<div className="h-full w-1/2 flex gap-2 flex-col px-6 justify-center">
												<h4 className="text-sm text-[#808080]">
													Expected Completion
												</h4>
												<span className="text-sm font-light">Q3 2024</span>
											</div>
										</div>
										<div className="flex flex-col justify-center gap-4 p-4  w-full min-h-[220px] mt-6 border rounded-xl border-[#1F1F1F]">
											<h3>Project Description</h3>
											<p className="text-sm  text-[#8C8C8C]">
												We are partnering with a dynamic marketing agency to
												develop an AI-driven marketing automation platform. This
												cutting-edge solution will empower businesses to
												optimize their marketing efforts through data-driven
												insights, personalized customer interactions, and
												automated campaign management. The project promises to
												revolutionize the digital marketing landscape and drive
												exceptional results for businesses of all sizes.
											</p>
										</div>
										<div className=" rounded-b-xl absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[#0f0f0f] to-transparent"></div>
									</div>
								</ScrollAnimation>
							</div>
						</div>
						<div className="w-full h-1/2 lg:p-6 p-2 flex-col lg:flex-row flex lg:gap-6  gap-8">
							<div className="lg:w-1/2 h-full">
								<ScrollAnimation variants={scaleUpVariants}>
									<div className="p-5 rounded-xl border-[#1F1F1F] flex flex-col gap-4 border my-BG backdrop-filter backdrop-blur-xl bg-opacity-20 relative">
										<div className="w-full h-20 flex gap-4 items-center">
											<svg
												width="58"
												height="58"
												viewBox="0 0 58 58"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<g filter="url(#filter0_i_26_1460)">
													<rect
														x="2"
														y="2"
														width="54"
														height="54"
														rx="27"
														fill="url(#paint0_linear_26_1460)"
													/>
													<rect
														x="1"
														y="1"
														width="56"
														height="56"
														rx="28"
														stroke="#666666"
														stroke-width="2"
													/>
													<path
														d="M28.9997 38.2082L34.958 41.4582L40.9163 38.2082V30.6248L34.958 34.4165L28.9997 30.6248V38.2082Z"
														fill="white"
													/>
													<path
														d="M17.083 30.6248L23.0413 27.3748L28.9997 30.6248L23.0413 34.4165V41.4582L17.083 38.2082V30.6248Z"
														fill="white"
													/>
													<path
														d="M34.958 27.3748L28.9997 30.6248V23.5832L23.0413 19.7915L28.9997 16.5415L34.958 19.7915V27.3748Z"
														fill="white"
													/>
												</g>
												<defs>
													<filter
														id="filter0_i_26_1460"
														x="0"
														y="0"
														width="58"
														height="58"
														filterUnits="userSpaceOnUse"
														color-interpolation-filters="sRGB"
													>
														<feFlood
															flood-opacity="0"
															result="BackgroundImageFix"
														/>
														<feBlend
															mode="normal"
															in="SourceGraphic"
															in2="BackgroundImageFix"
															result="shape"
														/>
														<feColorMatrix
															in="SourceAlpha"
															type="matrix"
															values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
															result="hardAlpha"
														/>
														<feMorphology
															radius="13"
															operator="erode"
															in="SourceAlpha"
															result="effect1_innerShadow_26_1460"
														/>
														<feOffset />
														<feGaussianBlur stdDeviation="4" />
														<feComposite
															in2="hardAlpha"
															operator="arithmetic"
															k2="-1"
															k3="1"
														/>
														<feColorMatrix
															type="matrix"
															values="0 0 0 0 0.166667 0 0 0 0 0.166667 0 0 0 0 0.166667 0 0 0 0.25 0"
														/>
														<feBlend
															mode="normal"
															in2="shape"
															result="effect1_innerShadow_26_1460"
														/>
													</filter>
													<linearGradient
														id="paint0_linear_26_1460"
														x1="-5.77273"
														y1="-8.63637"
														x2="64.1818"
														y2="67.0455"
														gradientUnits="userSpaceOnUse"
													>
														<stop />
														<stop
															offset="0.256291"
															stop-color="#E7E7E7"
															stop-opacity="0.6875"
														/>
														<stop
															offset="0.457331"
															stop-color="white"
															stop-opacity="0.34139"
														/>
														<stop
															offset="0.584253"
															stop-color="white"
															stop-opacity="0.222774"
														/>
														<stop offset="1" stop-color="#666666" />
													</linearGradient>
												</defs>
											</svg>
											<h3 className="font-semibold">
												Educational Learning App
											</h3>
										</div>
										<div className="flex items-center w-full h-20 border border-[#1F1F1F] rounded-xl p-3">
											<div className="h-full w-1/2 flex gap-2 flex-col px-3 justify-center">
												<h4 className="text-sm text-[#808080]">Category</h4>
												<span className="text-sm font-light">E-commerce</span>
											</div>
											<div className="border-r h-full border-[#1F1F1F]"></div>
											<div className="h-full w-1/2 flex gap-2 flex-col px-6 justify-center">
												<h4 className="text-sm text-[#808080]">
													Expected Completion
												</h4>
												<span className="text-sm font-light">Q4 2024</span>
											</div>
										</div>
										<div className="flex flex-col justify-center gap-4 p-4  w-full min-h-[220px] mt-6 border rounded-xl border-[#1F1F1F]">
											<h3>Project Description</h3>
											<p className="text-sm  text-[#8C8C8C]">
												We are collaborating with an eco-conscious startup to
												create an innovative e-commerce platform that promotes
												sustainable products and environmentally friendly
												practices. The platform will empower consumers to make
												eco-conscious choices while supporting sustainable
												businesses. This project aligns with our commitment to
												creating digital solutions that contribute to a greener
												future.
											</p>
										</div>
										<div className=" rounded-b-xl absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[#0f0f0f] to-transparent"></div>
									</div>
								</ScrollAnimation>
							</div>
							<div className="lg:w-1/2 h-full">
								<ScrollAnimation variants={scaleUpVariants}>
									<div className="p-5 rounded-xl border-[#1F1F1F] flex flex-col gap-4 border my-BG backdrop-filter backdrop-blur-xl bg-opacity-20 relative">
										<div className="w-full h-20 flex gap-4 items-center">
											<svg
												width="58"
												height="58"
												viewBox="0 0 58 58"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<g filter="url(#filter0_i_26_1460)">
													<rect
														x="2"
														y="2"
														width="54"
														height="54"
														rx="27"
														fill="url(#paint0_linear_26_1460)"
													/>
													<rect
														x="1"
														y="1"
														width="56"
														height="56"
														rx="28"
														stroke="#666666"
														stroke-width="2"
													/>
													<path
														d="M28.9997 38.2082L34.958 41.4582L40.9163 38.2082V30.6248L34.958 34.4165L28.9997 30.6248V38.2082Z"
														fill="white"
													/>
													<path
														d="M17.083 30.6248L23.0413 27.3748L28.9997 30.6248L23.0413 34.4165V41.4582L17.083 38.2082V30.6248Z"
														fill="white"
													/>
													<path
														d="M34.958 27.3748L28.9997 30.6248V23.5832L23.0413 19.7915L28.9997 16.5415L34.958 19.7915V27.3748Z"
														fill="white"
													/>
												</g>
												<defs>
													<filter
														id="filter0_i_26_1460"
														x="0"
														y="0"
														width="58"
														height="58"
														filterUnits="userSpaceOnUse"
														color-interpolation-filters="sRGB"
													>
														<feFlood
															flood-opacity="0"
															result="BackgroundImageFix"
														/>
														<feBlend
															mode="normal"
															in="SourceGraphic"
															in2="BackgroundImageFix"
															result="shape"
														/>
														<feColorMatrix
															in="SourceAlpha"
															type="matrix"
															values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
															result="hardAlpha"
														/>
														<feMorphology
															radius="13"
															operator="erode"
															in="SourceAlpha"
															result="effect1_innerShadow_26_1460"
														/>
														<feOffset />
														<feGaussianBlur stdDeviation="4" />
														<feComposite
															in2="hardAlpha"
															operator="arithmetic"
															k2="-1"
															k3="1"
														/>
														<feColorMatrix
															type="matrix"
															values="0 0 0 0 0.166667 0 0 0 0 0.166667 0 0 0 0 0.166667 0 0 0 0.25 0"
														/>
														<feBlend
															mode="normal"
															in2="shape"
															result="effect1_innerShadow_26_1460"
														/>
													</filter>
													<linearGradient
														id="paint0_linear_26_1460"
														x1="-5.77273"
														y1="-8.63637"
														x2="64.1818"
														y2="67.0455"
														gradientUnits="userSpaceOnUse"
													>
														<stop />
														<stop
															offset="0.256291"
															stop-color="#E7E7E7"
															stop-opacity="0.6875"
														/>
														<stop
															offset="0.457331"
															stop-color="white"
															stop-opacity="0.34139"
														/>
														<stop
															offset="0.584253"
															stop-color="white"
															stop-opacity="0.222774"
														/>
														<stop offset="1" stop-color="#666666" />
													</linearGradient>
												</defs>
											</svg>
											<h3 className="font-semibold">
												Community Engagement Portal
											</h3>
										</div>
										<div className="flex items-center w-full h-20 border border-[#1F1F1F] rounded-xl p-3">
											<div className="h-full w-1/2 flex gap-2 flex-col px-3 justify-center">
												<h4 className="text-sm text-[#808080]">Category</h4>
												<span className="text-sm font-light">
													Web Development
												</span>
											</div>
											<div className="border-r h-full border-[#1F1F1F]"></div>
											<div className="h-full w-1/2 flex gap-2 flex-col px-6 justify-center">
												<h4 className="text-sm text-[#808080]">
													Expected Completion
												</h4>
												<span className="text-sm font-light">Q4 2024</span>
											</div>
										</div>
										<div className="flex flex-col justify-center gap-4 p-4  w-full min-h-[220px] mt-6 border rounded-xl border-[#1F1F1F]">
											<h3>Project Description</h3>
											<p className="text-sm  text-[#8C8C8C]">
												Our team is excited to be part of a community-driven
												initiative to develop an engagement portal that connects
												residents with local services, events, and resources.
												The portal aims to foster community interactions,
												promote inclusivity, and enhance the quality of life for
												residents. This project represents our dedication to
												using technology for positive social impact.
											</p>
										</div>
										<div className=" rounded-b-xl absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[#0f0f0f] to-transparent"></div>
									</div>
								</ScrollAnimation>
							</div>
						</div>
					</div>
				</div>
			</ScrollAnimation>
			<ScrollAnimation variants={scaleUpVariants}>
				<div className=" mt-24  mx-5 min-h-[700px]  border border-[#262626] rounded-2xl p-5  my-cardBG flex flex-col items-center">
					<div className="mt-16 xl:w-[900px] flex flex-col gap-5 lg:px-10">
						<h1 className="text-2xl font-semibold text-center">
							Ready to Transform Your Digital Presence?
						</h1>
						<p className="text-sm text-center text-[#808080]">
						Take the first step towards digital success with Deltospark by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business. Whether you need a stunning website, a powerful mobile app, or cutting-edge blockchain, dApp, and AI/ML solutions, we've got you covered. Let’s embark on this transformative journey together.


						</p>
					</div>
					<div className="mt-12 flex flex-col items-center gap-3">
							<span className="text-sm text-center font-semibold">
							Build Your MVP in Less than 45 days
							</span>
							<div className="flex gap-3">
							<Link
											href={"https://calendly.com/theraihan/talk-with-raihan"}
											target="_blank"
											 className="text-xs px-2 lg:px-4 py-2 lg:py-3 bg-white rounded-full text-black font-semibold">
										
											Free Consultation
										</Link>
						
							</div>
						</div>
					<div className="w-full mt-12 rounded-xl flex flex-col gap-6  bg-[#0f0f0f] p-">
						<div className="w-full h-[80px] flex flex-col items-center justify-center p-2 gap-4">
							<h4 className="font-semibold text-center">Online Inquiry Form</h4>
							<p className="lg:text-sm text-center text-xs text-[#808080]">
								Please fill in the following details, and we'll get back to you
								within 24 hours.
							</p>
						</div>
						<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
							<input type="hidden" name="form-name" value="contact" />
							<div className="w-full h-auto flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">
								<div className="h-full w-full lg:w-1/3 flex flex-col justify-center px-5 gap-2">
									<label
										htmlFor="Name"
										className="font-light ml-2 text-xs sm:text-sm"
									>
										Name
									</label>
									<input
										type="text"
										name="name"
										id="name"
										required
										className="bg-[#0f0f0f] border border-[#1F1F1F] rounded-full py-3 px-3 w-full placeholder:text-sm placeholder:text-[#666666] focus:outline-none"
										placeholder="Name"
										onChange={handleChange}
									/>
								</div>
								<div className="h-full w-full lg:w-1/3 flex flex-col justify-center px-5 gap-2">
									<label
										htmlFor="Email"
										className="text-xs sm:text-sm font-light ml-2"
									>
										Email
									</label>
									<input
										type="email"
										name="email"
										id="email"
										required
										className="bg-[#0f0f0f] border border-[#1F1F1F] rounded-full py-3 px-3 w-full placeholder:text-sm placeholder:text-[#666666] focus:outline-none"
										placeholder="Enter your Email"
										onChange={handleChange}
									/>
								</div>
								<div className="h-full w-full lg:w-1/3 flex flex-col justify-center px-5 gap-2">
									<label
										htmlFor="Phone Number"
										className="text-xs sm:text-sm font-light ml-2"
									>
										Phone Number
									</label>
									<input
										type="text"
										name="mobile"
										className="bg-[#0f0f0f] border border-[#1F1F1F] rounded-full py-3 px-3 w-full placeholder:text-sm placeholder:text-[#666666] focus:outline-none"
										placeholder="Enter your Phone Number"
										onChange={handleChange}
									/>
								</div>
							</div>
							<div className="w-full h-auto flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">
								<div className="h-full w-full lg:w-1/3 flex flex-col justify-center px-5 gap-2">
									<label
										htmlFor="Select Service"
										className="text-xs sm:text-sm font-light ml-2"
									>
										Select Service
									</label>
									<select
										id="underline_select"
										name="services"
										className="bg-[#0f0f0f] border border-[#1F1F1F] rounded-full py-3 px-3 w-full text-sm placeholder:text-sm placeholder:text-[#666666] focus:outline-none appearance-none text-[#666666]"
										onChange={handleChange}
									>
													<option value="">Choose your services</option>
													<option value="Website Development">Website Development</option>
													<option value="Mobile App Development">Mobile App Development</option>
													<option value="Web Design">Web Design</option>
													<option value="SAAS Development">SAAS Development</option>
													<option value="AI & Machine Learning">AI & Machine Learning</option>
													<option value="Automation">Automation</option>
													<option value="Blockchain Development">Blockchain Development</option>
													<option value="SEO/Digital Marketing">SEO/Digital Marketing</option>
													<option value="Augmented/Virtual Reality">Augmented/Virtual Reality</option>
													<option value="Other">Other</option>
									</select>
								</div>
								<div className="h-full w-full lg:w-1/3 flex flex-col justify-center px-5 gap-2">
									<label
										htmlFor="Company / Organization Name"
										className="text-xs sm:text-sm font-light ml-2"
									>
										Company / Organization Name
									</label>
									<input
										name="company"
										type="text"
										className="bg-[#0f0f0f] border border-[#1F1F1F] rounded-full py-3 px-3 w-full placeholder:text-sm placeholder:text-[#666666] focus:outline-none"
										placeholder="Enter Organization Name"
										onChange={handleChange}
									/>
								</div>
								<div className="h-full w-full lg:w-1/3 flex flex-col justify-center px-5 gap-2">
									<label
										htmlFor="Subject"
										className="text-xs sm:text-sm font-light ml-2"
									>
										Subject
									</label>
									<input
										type="text"
										name="subject"
										className="bg-[#0f0f0f] border border-[#1F1F1F] rounded-full py-3 px-3 w-full placeholder:text-sm placeholder:text-[#666666] focus:outline-none"
										placeholder="Subject"
										onChange={handleChange}
									/>
								</div>
							</div>
							<div className="w-full min-h-[120px] flex items-center justify-between">
								<div className="h-full w-full flex flex-col justify-center px-5 gap-2">
									<label
										htmlFor="Message"
										className="text-xs sm:text-sm font-light ml-2"
									>
										Message
									</label>
									<textarea
										name="message"
										id="message"
										placeholder="Enter your Message"
										className="bg-[#0f0f0f] border border-[#1F1F1F] rounded-xl h-[100px] p-4 w-full placeholder:text-sm placeholder:text-[#666666] focus:outline-none"
										onChange={handleChange}
									></textarea>
								</div>
							</div>
							<div className="w-full min-h-[70px] flex items-center justify-center">
								<button
									type="submit"
									className="border border-[#1F1F1F] px-5 py-3 rounded-full flex justify-center items-center gap-2 bg-[#1a1a1a]"
								>
									<span className="text-xs sm:text-sm">Send your Inquiry</span>
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M5.33398 11.9999C5.33398 11.42 5.79065 10.9499 6.35398 10.9499H15.3816L12.447 8.20678C12.0409 7.80484 12.0283 7.14015 12.4187 6.72214C12.8092 6.30413 13.4549 6.2911 13.861 6.69303L18.621 11.243C18.821 11.441 18.934 11.7143 18.934 11.9999C18.934 12.2855 18.821 12.5588 18.621 12.7568L13.861 17.3068C13.4549 17.7087 12.8092 17.6957 12.4187 17.2777C12.0283 16.8597 12.0409 16.195 12.447 15.793L15.3816 13.0499H6.35398C5.79065 13.0499 5.33398 12.5798 5.33398 11.9999Z"
											fill="white"
										/>
									</svg>
								</button>
							</div>
						</form>
					</div>
				</div>
			</ScrollAnimation>
		</main>
	);
};

export default Projects;
