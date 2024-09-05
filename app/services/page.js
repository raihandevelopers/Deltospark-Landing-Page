"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import serviceLeftAngle from "@/public/serviceLeftAngle.svg";
import serviceRightAngle from "@/public/serviceRightAngle.svg";
import cardIconOne from "@/public/cardIconOne.svg";
import cardIconTwo from "@/public/cardIconTwo.svg";
import cardIconThree from "@/public/cardIconThree.svg";
import cardIconFourth from "@/public/cardIconFourth.svg";
import servicesprotfolio1 from "@/public/servicesprotfolio1.jpg";
import servicesprotfolio2 from "@/public/servicesportfolio2.jpg";
import servicesprotfolio3 from "@/public/Hov3r Web3 Marketplace/hovrbanner.jpg";
import servicesprotfolio4 from "@/public/Plenty Blockchain/Plentybanner.jpg";
import servicesprotfolio5 from "@/public/MLB/mlb1.jpg";
import { Analytics } from "@vercel/analytics/react"
import sun from "@/public/sun.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";
import ScrollAnimation from "@/components/ScrollAnimation";
import { variants, scaleUpVariants } from "@/animation/variants";

const Services = () => {
	const [isHidden, setIsHidden] = useState(true);
	const [currentVisibleIndex, setCurrentVisibleIndex] = useState(0); // Initially no div visible

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
		const response = await fetch("/api/send-email", {
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
		<>
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
			<main>
			<Analytics />

				<ScrollAnimation variants={scaleUpVariants}>
					<div className="Herro-Section">
						{/* <div className="lg:h-[500px] min-h-[400px] my-cardBG flex relative"> */}
							{/* <div className="w-1/3 pt-20 lg:flex hidden">
								<Image src={serviceLeftAngle} width={600} height={700} alt="" />
							</div> */}
							{/* <div className="w-1/3 mt-20 lg:block hidden"> </div> */}
							{/* <div className="w-1/3 pt-20 lg:flex justify-end  hidden">
								<Image
									src={serviceRightAngle}
									width={600}
									height={700}
									alt=""
								/>
							</div> */}
						</div>
						{/* <div className="sm:flex absolute top-20 left-0 hidden"> */}
							{/* <div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
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
							<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div> */}
						{/* </div> */}
						{/* <div className="sm:flex absolute top-20 right-0 hidden "> */}
							{/* <div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
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
							<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div> */}
					
						{/* <div className="absolute top-[280px] lg:top-[350px] lg:w-[47vw] gap-5 flex flex-col  justify-center transform -translate-y-1/2 max-h-[460px] lg:p-4 min-px-5 mx-10 lg:left-[18%]">
							<h1 className="xl:text-4xl text-2xl font-semibold">
								Our Comprehensive{" "}
								<span className="text-[#666666]">Digital Solutions</span>
							</h1>
							<p className="text-[#c7c5c5] sm:text-sm text-xs">
							At Deltospark, we offer a comprehensive suite of digital solutions designed to propel your business to new heights. Our skilled team leverages cutting-edge technologies to deliver exceptional results, from seamless website development and app development to robust backend solutions, AI/ML innovations, blockchain technology and dApp development, as well as SEO and digital marketing strategies. We cover every aspect of your digital needs with a passion for innovation and excellence.							</p>
						</div> */}
					{/* </div> */}
				</ScrollAnimation>
				<ScrollAnimation variants={scaleUpVariants}>
					<div className="flex flex-col items-center mt-24 w-full sm:max-w-[1280px] mx-auto gap-10 p-2 sm:p-10">
						<h1 className="text-center text-3xl font-semibold max-w-[500px]">
						<span className="text-[#808080]">Our</span> 360° Development Services
						</h1>
						<p className="text-sm text-[#808080] text-center max-w-[900px]">
						Our comprehensive range of services includes website development, mobile app development, web design, backend solutions, AI, machine learning, blockchain technology, SEO, data-driven marketing strategies, and more. Whether you’re a startup or an established enterprise, our experts will craft solutions that drive results.

</p>
						<div className="w-full flex lg:flex-row flex-col gap-10 ">
							<div className="lg:w-1/2">
								<ScrollAnimation variants={scaleUpVariants}>
									<div className="border border-[#292929] h-[500px] rounded-2xl my-cardBG flex flex-col justify-center items-center gap-10">
										<Image src={cardIconOne} width={100} height={100} alt="Deltospark agency"
 />
										<div className="flex flex-col justify-center items-center gap-4 w-[90%]">
											<h3 className="text-xl font-semibold">Website Development
											</h3>
											<p className="text-sm text-center text-[#8C8C8C]">
											Unlock your online potential with Deltospark. Our web development services create responsive, dynamic websites tailored to your needs, ensuring seamless user experiences across all devices. From e-commerce platforms to interactive web applications, our expert developers bring your vision to life, making your online journey a success.											</p>
										</div>
										<div className="flex justify-center items-center w-[90%]">
											
											<Link
												className="flex items-center gap-2 py-2 px-3 border bg-[#0f0f0f] border-[#262626] rounded-full text-xs"
												href={"https://calendly.com/theraihan/talk-with-raihan"}
												target="_blank"
											>
												Book a Call
												<div className="p-1 bg-[#1a1a1a] rounded-full hidden sm:block">
													<svg
														width="25"
														height="24"
														viewBox="0 0 25 24"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															fillRule="evenodd"
															clipRule="evenodd"
															d="M5.5 12C5.5 11.4201 5.95667 10.95 6.52 10.95H15.5476L12.613 8.2069C12.207 7.80497 12.1943 7.14027 12.5848 6.72226C12.9752 6.30425 13.6209 6.29122 14.027 6.69315L18.787 11.2431C18.987 11.4411 19.1 11.7144 19.1 12C19.1 12.2856 18.987 12.5589 18.787 12.7569L14.027 17.3069C13.6209 17.7088 12.9752 17.6958 12.5848 17.2778C12.1943 16.8598 12.207 16.1951 12.613 15.7931L15.5476 13.05H6.52C5.95667 13.05 5.5 12.5799 5.5 12Z"
															fill="white"
														/>
													</svg>
												</div>
											</Link>
										</div>
									</div>
								</ScrollAnimation>
							</div>
							<div className="lg:w-1/2">
								<ScrollAnimation variants={scaleUpVariants}>
									<div className="border border-[#292929] h-[500px] rounded-2xl my-cardBG flex flex-col justify-center items-center gap-10">
									<Image src={cardIconTwo} width={100} height={100} alt="crm development" />
									<div className="flex flex-col justify-center items-center gap-4 w-[90%]">
											<h3 className="text-xl font-semibold">
											Mobile App Development
											{" "}
											</h3>
											<p className="text-sm text-center text-[#8C8C8C]">
											Embrace mobility with confidence. Our mobile app development services harness the power of mobile devices, creating intuitive and high-performance apps for iOS, Android, and cross-platform. We ensure seamless experiences that captivate your audience and boost engagement.
											</p>
										</div>
										<div className="flex justify-center items-center w-[90%]">
											
											<Link
												className="flex items-center gap-2 py-2 px-4 text-xs border bg-[#0f0f0f] border-[#262626] rounded-full"
												href={"https://calendly.com/theraihan/talk-with-raihan"}
												target="_blank"
											>
												Book a Call
												<div className="p-1 bg-[#1a1a1a] rounded-full hidden sm:block">
													<svg
														width="25"
														height="24"
														viewBox="0 0 25 24"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															fillRule="evenodd"
															clipRule="evenodd"
															d="M5.5 12C5.5 11.4201 5.95667 10.95 6.52 10.95H15.5476L12.613 8.2069C12.207 7.80497 12.1943 7.14027 12.5848 6.72226C12.9752 6.30425 13.6209 6.29122 14.027 6.69315L18.787 11.2431C18.987 11.4411 19.1 11.7144 19.1 12C19.1 12.2856 18.987 12.5589 18.787 12.7569L14.027 17.3069C13.6209 17.7088 12.9752 17.6958 12.5848 17.2778C12.1943 16.8598 12.207 16.1951 12.613 15.7931L15.5476 13.05H6.52C5.95667 13.05 5.5 12.5799 5.5 12Z"
															fill="white"
														/>
													</svg>
												</div>
											</Link>
										</div>
									</div>
								</ScrollAnimation>
							</div>
						</div>
						<div className="w-full flex lg:flex-row flex-col gap-10 ">
							<div className="lg:w-1/2">
								<ScrollAnimation variants={scaleUpVariants}>
									<div className="border border-[#292929] h-[500px] rounded-2xl my-cardBG flex flex-col justify-center items-center gap-10">
										<Image
											src={cardIconThree}
											width={100}
											height={100}
											alt="top rated freelancers"
										/>
										<div className="flex flex-col justify-center items-center gap-4 w-[90%]">
											<h3 className="text-xl font-semibold text-center">
											Web Design

											</h3>
											<p className="text-sm text-center text-[#8C8C8C]">
											Elevate your brand aesthetics with Deltospark. Our web design services create visually striking, user-friendly interfaces that reflect your brand's identity. Our creative team blends aesthetics with functionality, delivering captivating user experiences that keep visitors coming back. Let us transform your online presence and showcase your brand's true essence.											</p>
										</div>
										<div className="flex justify-center items-center w-[90%]">
										
											<Link
												className="flex items-center gap-2 py-2 px-4 text-xs border bg-[#0f0f0f] border-[#262626] rounded-full "
												href={"https://calendly.com/theraihan/talk-with-raihan"}
												target="_blank"
											>
												Book a Call
												<div className="p-1 bg-[#1a1a1a] rounded-full hidden sm:block">
													<svg
														width="25"
														height="24"
														viewBox="0 0 25 24"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															fillRule="evenodd"
															clipRule="evenodd"
															d="M5.5 12C5.5 11.4201 5.95667 10.95 6.52 10.95H15.5476L12.613 8.2069C12.207 7.80497 12.1943 7.14027 12.5848 6.72226C12.9752 6.30425 13.6209 6.29122 14.027 6.69315L18.787 11.2431C18.987 11.4411 19.1 11.7144 19.1 12C19.1 12.2856 18.987 12.5589 18.787 12.7569L14.027 17.3069C13.6209 17.7088 12.9752 17.6958 12.5848 17.2778C12.1943 16.8598 12.207 16.1951 12.613 15.7931L15.5476 13.05H6.52C5.95667 13.05 5.5 12.5799 5.5 12Z"
															fill="white"
														/>
													</svg>
												</div>
											</Link>
										</div>
									</div>
								</ScrollAnimation>
							</div>
							<div className="lg:w-1/2">
								<ScrollAnimation variants={scaleUpVariants}>
									<div className="border border-[#292929] h-[500px] rounded-2xl my-cardBG flex flex-col justify-center items-center gap-10">
										<Image
											src={cardIconFourth}
											width={100}
											height={100}
											alt="top rated software development agency"
											/>
										<div className="flex flex-col justify-center items-center gap-4 w-[90%]">
											<h3 className="text-xl font-semibold">
											AI & Machine Learning
											</h3>
											<p className="text-sm text-center text-[#8C8C8C]">
											Drive your business forward with Deltospark. Our AI and machine learning services optimize operations with predictive analytics, natural language processing, and intelligent automation. Stay ahead with our data-driven solutions and harness the full potential of AI and machine learning.											</p>
										</div>
										<div className="flex justify-center items-center w-[90%]">
										
											<Link
												className="flex items-center gap-2 py-2 px-4 text-xs border bg-[#0f0f0f] border-[#262626] rounded-full"
												href={"https://calendly.com/theraihan/talk-with-raihan"}
												target="_blank"
											>
												Book a Call
												<div className="p-1 bg-[#1a1a1a] rounded-full hidden sm:block">
													<svg
														width="25"
														height="24"
														viewBox="0 0 25 24"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															fillRule="evenodd"
															clipRule="evenodd"
															d="M5.5 12C5.5 11.4201 5.95667 10.95 6.52 10.95H15.5476L12.613 8.2069C12.207 7.80497 12.1943 7.14027 12.5848 6.72226C12.9752 6.30425 13.6209 6.29122 14.027 6.69315L18.787 11.2431C18.987 11.4411 19.1 11.7144 19.1 12C19.1 12.2856 18.987 12.5589 18.787 12.7569L14.027 17.3069C13.6209 17.7088 12.9752 17.6958 12.5848 17.2778C12.1943 16.8598 12.207 16.1951 12.613 15.7931L15.5476 13.05H6.52C5.95667 13.05 5.5 12.5799 5.5 12Z"
															fill="white"
														/>
													</svg>
												</div>
											</Link>
										</div>
									</div>
								</ScrollAnimation>
							</div>
						</div>
					</div>
				</ScrollAnimation>
				<ScrollAnimation variants={scaleUpVariants}>
					<div className="flex flex-col items-center mt-24 w-full sm:max-w-[1280px] mx-auto gap-10 p-2 sm:p-10">
						<h2 className="text-center text-3xl font-semibold max-w-[500px]">
							<span className="text-[#808080]">Categories of</span> Services
						</h2>
						<p className="text-sm text-[#808080] text-center max-w-[900px]">
						At Deltospark, we provide exceptional digital solutions tailored to your unique business needs. Our services include web design, app development, web development, AI/ML, blockchain technology, dApp development, and SEO/digital marketing.						</p>
						<ScrollAnimation variants={scaleUpVariants}>
							<div className="w-full lg:flex-row flex-col flex gap-5">
								<div className="lg:w-[22%] flex-wrap  flex flex-row  gap-2 lg:flex-col p-5 lg:justify-start justify-center lg:items-stretch items-center">
									<button
										className={`max-w-[250px] min-w-[200px] rounded-xl border border-[#1F1F1F] text-left flex p-2 gap-3  text-sm py-4 ${
											currentVisibleIndex === 0 ? "bg-[#1A1A1A]" : "bg-none"
										} transition-opacity duration-1000`}
										onClick={() => toggleVisibility(0)}
									>
										<svg
											className="hidden lg:block"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M6.75 7.5L9.75 9.75L6.75 12M11.25 12H14.25M5.25 20.25H18.75C19.9926 20.25 21 19.2426 21 18V6C21 4.75736 19.9926 3.75 18.75 3.75H5.25C4.00736 3.75 3 4.75736 3 6V18C3 19.2426 4.00736 20.25 5.25 20.25Z"
												stroke="white"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
										<span className="text-xs lg:text-base">Website Development</span>
									</button>

									<button
										onClick={() => toggleVisibility(1)}
										className={`max-w-[250px] min-w-[200px] rounded-xl border border-[#1F1F1F] text-left flex p-2 gap-3 text-sm py-4 ${
											currentVisibleIndex === 1 ? "bg-[#1A1A1A]" : "bg-none"
										} transition-opacity duration-1000 `}
									>
										<svg
											className="hidden lg:block"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M10.5 1.5H8.25C7.00736 1.5 6 2.50736 6 3.75V20.25C6 21.4926 7.00736 22.5 8.25 22.5H15.75C16.9926 22.5 18 21.4926 18 20.25V3.75C18 2.50736 16.9926 1.5 15.75 1.5H13.5M10.5 1.5V3H13.5V1.5M10.5 1.5H13.5M10.5 20.25H13.5"
												stroke="white"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
										<span className="text-xs lg:text-base ">
											Mobile App Development
										</span>
									</button>

									<button
										onClick={() => toggleVisibility(2)}
										className={`max-w-[250px] min-w-[200px] items-center flex p-2 gap-3 rounded-xl border border-[#1F1F1F] text-left text-sm py-4 ${
											currentVisibleIndex === 2 ? "bg-[#1A1A1A]" : "bg-none"
										} transition-opacity duration-1000`}
									>
										<svg
											className="hidden lg:block"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M12 1.5C12.4142 1.5 12.75 1.83579 12.75 2.25V4.5C12.75 4.91421 12.4142 5.25 12 5.25C11.5858 5.25 11.25 4.91421 11.25 4.5V2.25C11.25 1.83579 11.5858 1.5 12 1.5ZM5.63604 4.13604C5.92893 3.84315 6.40381 3.84315 6.6967 4.13604L8.28769 5.72703C8.58058 6.01992 8.58058 6.4948 8.28769 6.78769C7.9948 7.08058 7.51992 7.08058 7.22703 6.78769L5.63604 5.1967C5.34315 4.90381 5.34315 4.42893 5.63604 4.13604ZM18.364 4.13604C18.6569 4.42893 18.6569 4.90381 18.364 5.1967L16.773 6.78769C16.4801 7.08058 16.0052 7.08058 15.7123 6.78769C15.4194 6.4948 15.4194 6.01992 15.7123 5.72703L17.3033 4.13604C17.5962 3.84315 18.0711 3.84315 18.364 4.13604ZM11.5484 8.63179C11.8602 8.54824 12.1905 8.67359 12.3684 8.94299L17.5955 16.8599C17.7627 17.113 17.7609 17.4419 17.591 17.6932C17.421 17.9445 17.1165 18.0687 16.8193 18.0079L14.722 17.5787L15.7668 21.4777C15.874 21.8778 15.6365 22.289 15.2364 22.3963C14.8363 22.5035 14.4251 22.266 14.3179 21.8659L13.2732 17.967L11.6717 19.3872C11.4447 19.5884 11.1189 19.6332 10.8461 19.5005C10.5733 19.3678 10.4073 19.0839 10.4254 18.7811L10.9939 9.3113C11.0132 8.98905 11.2366 8.71534 11.5484 8.63179ZM3 10.5C3 10.0858 3.33579 9.75 3.75 9.75H6C6.41421 9.75 6.75 10.0858 6.75 10.5C6.75 10.9142 6.41421 11.25 6 11.25H3.75C3.33579 11.25 3 10.9142 3 10.5ZM17.25 10.5C17.25 10.0858 17.5858 9.75 18 9.75H20.25C20.6642 9.75 21 10.0858 21 10.5C21 10.9142 20.6642 11.25 20.25 11.25H18C17.5858 11.25 17.25 10.9142 17.25 10.5ZM8.28769 14.2123C8.58058 14.5052 8.58058 14.9801 8.28769 15.273L6.6967 16.864C6.40381 17.1569 5.92893 17.1569 5.63604 16.864C5.34315 16.5711 5.34315 16.0962 5.63604 15.8033L7.22703 14.2123C7.51992 13.9194 7.9948 13.9194 8.28769 14.2123Z"
												fill="white"
											/>
										</svg>
										<span className="text-xs lg:text-base">
											Web Design
										</span>
									</button>

									<button
										onClick={() => toggleVisibility(3)}
										className={`max-w-[250px] min-w-[200px] flex p-2 gap-3 rounded-xl border border-[#1F1F1F] text-left text-sm py-4 ${
											currentVisibleIndex === 3 ? "bg-[#1A1A1A]" : "bg-none"
										} transition-opacity duration-1000`}
									>
<svg 
  width="30px" 
  height="30px" 
  viewBox="0 0 512 512" 
  version="1.1" 
  xmlns="http://www.w3.org/2000/svg"
  className="hidden md:block"
>
  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g id="icon" fill="#fff" transform="translate(64.000000, 64.000000)">
      <path d="M320,64 L320,320 L64,320 L64,64 L320,64 Z M171.749388,128 L146.817842,128 L99.4840387,256 L121.976629,256 L130.913039,230.977 L187.575039,230.977 L196.319607,256 L220.167172,256 L171.749388,128 Z M260.093778,128 L237.691519,128 L237.691519,256 L260.093778,256 L260.093778,128 Z M159.094727,149.47526 L181.409039,213.333 L137.135039,213.333 L159.094727,149.47526 Z M341.333333,256 L384,256 L384,298.666667 L341.333333,298.666667 L341.333333,256 Z M85.3333333,341.333333 L128,341.333333 L128,384 L85.3333333,384 L85.3333333,341.333333 Z M170.666667,341.333333 L213.333333,341.333333 L213.333333,384 L170.666667,384 L170.666667,341.333333 Z M85.3333333,0 L128,0 L128,42.6666667 L85.3333333,42.6666667 L85.3333333,0 Z M256,341.333333 L298.666667,341.333333 L298.666667,384 L256,384 L256,341.333333 Z M170.666667,0 L213.333333,0 L213.333333,42.6666667 L170.666667,42.6666667 L170.666667,0 Z M256,0 L298.666667,0 L298.666667,42.6666667 L256,42.6666667 L256,0 Z M341.333333,170.666667 L384,170.666667 L384,213.333333 L341.333333,213.333333 L341.333333,170.666667 Z M0,256 L42.6666667,256 L42.6666667,298.666667 L0,298.666667 L0,256 Z M341.333333,85.3333333 L384,85.3333333 L384,128 L341.333333,128 L341.333333,85.3333333 Z M0,170.666667 L42.6666667,170.666667 L42.666667,213.333333 L0,213.333333 L0,170.666667 Z M0,85.3333333 L42.6666667,85.3333333 L42.6666667,128 L0,128 L0,85.3333333 Z" id="Combined-Shape">
      </path>
    </g>
  </g>
</svg>
								

		<span className="text-xs lg:text-base ">
											{" "}
											AI/Machine Learning
										</span>
									</button>

									<button
										onClick={() => toggleVisibility(4)}
										className={`max-w-[250px] min-w-[200px] flex p-2 gap-3 rounded-xl border border-[#1F1F1F] text-left text-sm py-4 ${
											currentVisibleIndex === 4 ? "bg-[#1A1A1A]" : "bg-none"
										} transition-opacity duration-1000`}
									>
<svg
  width="35px"
  height="35px"
  viewBox="0 0 48 48"
  fill="#fff"
  stroke="#fff"
  className="hidden md:block"
>
  <g id="SVGRepo_bgCarrier" strokeWidth="0" />
  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
  <g id="SVGRepo_iconCarrier">
    <defs>
      <style>
        {`.a { fill: none; stroke: #fff; stroke-linecap: round; stroke-linejoin: round; }`}
      </style>
    </defs>
    <path
      className="a"
      d="M21.1686,41.33,6.67,26.8314a4.0159,4.0159,0,0,1,0-5.6628L21.1686,6.67a4.0159,4.0159,0,0,1,5.6628,0L41.33,21.1686a4.0159,4.0159,0,0,1,0,5.6628L26.8314,41.33A4.0041,4.0041,0,0,1,21.1686,41.33Z"
    />
    <line className="a" x1="24" y1="42.5024" x2="24" y2="24" />
    <line className="a" x1="10.1397" y1="17.6992" x2="24" y2="24" />
    <line className="a" x1="37.8603" y1="17.6992" x2="24" y2="24" />
  </g>
</svg>
										<span className="text-xs lg:text-base ">
											{" "}
											Blockchain Development
										</span>
									</button>

								</div>
								{/* <ScrollAnimation variants={scaleUpVariants}> */}
									<div className={`lg:w-[78%] px-4`}>
										{/* <ScrollAnimation variants={scaleUpVariants}> */}
											<div
												className={`web-design ${
													currentVisibleIndex === 0
														? "opacity-100 h-auto"
														: "opacity-0 h-0"
												} transition-opacity duration-500`}
											>
												<div className="flex flex-col gap-3">
													<h4 className="text-lg font-semibold">Website Development</h4>
													<p className="text-[#8C8C8C] text-sm">
													At Deltokspark, we follow a systematic approach to deliver a website that aligns perfectly with your business needs and branding. here’s an overview of our development process:

													</p>
												</div>
												<div className="w-full px-2  sm:py-12 py-8  border border-[#1F1F1F] mt-10 rounded-xl flex-col  flex gap-8 relative">
													<div className="px-4 flex flex-col gap-4">
														<h4 className="text-lg font-semibold">
															Website Development Portfolio
														</h4>
														<p className="text-sm text-[#808080]">
															Check out some of our most recent Website Development
															projects in the table below
														</p>
													</div>
													<div className="flex flex-col md:flex-row justify-between gap-5 px-4 w-full">
														<div className="md:w-1/2 h-full rounded-lg overflow-hidden">
															<Image
																src={servicesprotfolio3}
																className="object-contain"
																alt="web3 development"
															/>
														</div>
														<div className="md:w-1/2 h-full rounded-lg overflow-hidden">
															<Image
																src={servicesprotfolio4}
																className="object-contain"
																alt="mobile app developers near me"
															/>
														</div>
													</div>
													<Link
														className=" text-xs absolute h-[50px] bottom-1 min-w-[140px] bg-[#0f0f0f] z-10 flex left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center gap-2 sm:py-2 px-4 border border-[#1F1F1F] backdrop-filter backdrop-blur-sm bg-opacity-20 rounded-full"
														href="/projects"
													>
														View All Projects
														<div className="p-1 rounded-full hidden sm:block">
															<svg
																width="25"
																height="24"
																viewBox="0 0 25 24"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	fillRule="evenodd"
																	clipRule="evenodd"
																	d="M5.5 12C5.5 11.4201 5.95667 10.95 6.52 10.95H15.5476L12.613 8.2069C12.207 7.80497 12.1943 7.14027 12.5848 6.72226C12.9752 6.30425 13.6209 6.29122 14.027 6.69315L18.787 11.2431C18.987 11.4411 19.1 11.7144 19.1 12C19.1 12.2856 18.987 12.5589 18.787 12.7569L14.027 17.3069C13.6209 17.7088 12.9752 17.6958 12.5848 17.2778C12.1943 16.8598 12.207 16.1951 12.613 15.7931L15.5476 13.05H6.52C5.95667 13.05 5.5 12.5799 5.5 12Z"
																	fill="white"
																/>
															</svg>
														</div>
													</Link>
													<div className=" rounded-b-xl absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[#0f0f0f] to-transparent"></div>
												</div>

												<div className="w-full sm:p-8 p-2 border border-[#1F1F1F] mt-10 rounded-xl flex-col  flex  gap-8">
													<div className="px-4 flex flex-col gap-4">
														<h4 className="text-lg font-semibold">
														Discovery and planning
														</h4>
														<p className="text-sm text-[#808080]">
														Our journey begins with a thorough consultation to understand your business, goals, target audience, and specific requirements. we conduct extensive research to analyze competitors, market trends, and best practices. this phase culminates in defining the project scope, creating a product roadmap, and establishing clear timelines to ensure a structured and efficient development process.

</p>
													</div>
													<div className="w-full h-full flex flex-col gap-10">
														<div className="flex flex-col md:flex-row gap-5 w-full h-1/2">
															<div className="p-4 flex flex-col gap-2 justify-center md:w-1/2">
																<h2 className="font-semibold">
																 Design
																</h2>
																<p className="text-sm text-[#8C8C8C]">
																In this phase, we develop wireframes to outline the website’s structure and user flow. our ui/ux designers then create high-fidelity designs to visualize the user interface and experience. we gather feedback and make necessary adjustments to ensure the design aligns with your vision.


																</p>
															</div>
															<div className="border-r border-[#1F1F1F]"></div>
															<div className="border-b border-[#1F1F1F] "></div>
															<div className="p-4 flex flex-col gap-2 justify-center md:w-1/2">
																<h2 className="font-semibold">
																	Development
																</h2>
																<p className="text-sm text-[#8C8C8C]">
																Our development team implements the design using suitable technologies such as html, css (including tailwind css), javascript, react, next.js, node.js, django, or flask. we set up the server, database, and application logic. integration of third-party services, apis, and any necessary backend systems is also carried out during this phase.
																</p>
															</div>
														</div>

														<div className="border-b border-[#1F1F1F]"></div>

														<div className="flex flex-col md:flex-row gap-5 w-full h-1/2 ">
															<div className="p-4 flex flex-col gap-2 md:w-1/2 justify-center">
																<h2 className="font-semibold">
																Testing and launch
																</h2>
																<p className="text-sm text-[#8C8C8C]">
																We conduct rigorous testing to ensure all features work correctly and the website is compatible across browsers and devices. performance testing optimizes loading times and responsiveness. once testing is complete, we deploy the website to a live server, followed by a final review and training on website management and updates.


																</p>
															</div>
															<div className="border-r border-[#1F1F1F]"></div>
															<div className="border-b border-[#1F1F1F]"></div>
															<div className="p-4 flex flex-col gap-2 md:w-1/2 justify-center">
																<h2 className="font-semibold">
																Maintenance and support
																</h2>
																<p className="text-sm text-[#8C8C8C]">
																Our commitment to your website doesn’t end with its launch. we provide regular updates to keep your website secure and up-to-date. ongoing support is available for any issues or changes needed. we also monitor website performance and provide insights for continuous improvement.


																</p>
															</div>
														</div>
													</div>
												</div>
												<div className="w-full lg:p-8 lg:py-12 py-5 border border-[#1F1F1F] mt-10 rounded-xl flex-col  lg:flex gap-8 relative hidden">
													<div className="px-4 flex flex-col gap-4">
														<h4 className="text-lg font-semibold">
															Our Website Development Completed Projects
														</h4>
												
														<div className="flex flex-col gap-5">
															<div className="w-full h-14 rounded-xl border border-[#1F1F1F] flex">
																<h3 className="w-1/3 p-4">Project Name</h3>
																<h3 className="w-1/3 p-4 border-x border-[#1F1F1F]">
																	Industry
																</h3>
																<h3 className="w-1/3 p-4">Website URL</h3>
															</div>
															<div className="w-full h-40 border border-[#1F1F1F] rounded-xl">
																<div className="h-1/3 w-full flex">
																	<div className="text-sm w-1/3 h-full p-4 font-thin">
																		{" "}
																		Hovr: A Web3 Marketplace


																	</div>
																	<div className=" text-sm w-1/3 h-full p-4 font-thin border-x border-[#1F1F1F]">
																		{" "}
																		Marketplace
																	</div>
																	<Link
																		href={"https://hovr.site/"}
																		className="text-sm w-1/3 h-full p-4 font-thin"
																	>
																		https://hovr.site/{" "}
																	</Link>
																</div>
																<div className="h-1/3 w-full border-y border-[#1F1F1F] flex">
																	<div className="text-sm w-1/3 h-full p-4 font-thin">
																		{" "}
																		Plenty: A Decentralized Trading Platform

</div>
																	<div className="text-sm w-1/3 h-full p-4 font-thin border-x border-[#1F1F1F]">
																		Trading Platform
																	</div>
																	<Link
																		href={"https://app.plenty.network/"}
																		className="text-sm w-1/3 h-full p-4 font-thin"
																	>
																		https://app.plenty.network/
																	</Link>
																</div>
																
															
															</div>
														</div>
													</div>
												</div>
											</div>
										{/* </ScrollAnimation> */}
										{/* <ScrollAnimation variants={scaleUpVariants}> */}
											<div
												className={`web-design ${
													currentVisibleIndex === 1
														? "opacity-100 h-auto"
														: "opacity-0 h-0"
												} transition-opacity duration-500`}
											>
												<div className="flex flex-col gap-3">
													<h4 className="text-lg font-semibold">Mobile App Development</h4>
													<p className="text-[#8C8C8C] text-sm">
													At Deltosparks, we specialize in mobile app development using Flutter, React Native, and native languages. We create intuitive, high-performance cross-platform and hybrid apps that captivate your audience and drive results, all while reflecting your business goals and brand identity.													</p>
												</div>
																								<div className="w-full px-2  sm:py-12 py-8  border border-[#1F1F1F] mt-10 rounded-xl flex-col  flex gap-8 relative">
													<div className="px-4 flex flex-col gap-4">
														<h4 className="text-lg font-semibold">
														Mobile App Development Portfolio
														</h4>
														<p className="text-sm text-[#808080]">
															Check out some of our most recent Web Design
															projects in the table below
														</p>
													</div>
													<div className="flex flex-col md:flex-row justify-between gap-5 px-4 w-full">
													<div className="w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden">
														<Image
														src={servicesprotfolio1}
														className="object-cover w-full h-full"
														alt="web designers near me"
														/>
													</div>
													</div>

													<Link
														className=" text-xs absolute h-[50px] bottom-1 min-w-[140px] bg-[#0f0f0f] z-10 flex left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center gap-2 sm:py-2 px-4 border border-[#1F1F1F] backdrop-filter backdrop-blur-sm bg-opacity-20 rounded-full"
														href="/projects"
													>
														View All Projects
														<div className="p-1 rounded-full hidden sm:block">
															<svg
																width="25"
																height="24"
																viewBox="0 0 25 24"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	fillRule="evenodd"
																	clipRule="evenodd"
																	d="M5.5 12C5.5 11.4201 5.95667 10.95 6.52 10.95H15.5476L12.613 8.2069C12.207 7.80497 12.1943 7.14027 12.5848 6.72226C12.9752 6.30425 13.6209 6.29122 14.027 6.69315L18.787 11.2431C18.987 11.4411 19.1 11.7144 19.1 12C19.1 12.2856 18.987 12.5589 18.787 12.7569L14.027 17.3069C13.6209 17.7088 12.9752 17.6958 12.5848 17.2778C12.1943 16.8598 12.207 16.1951 12.613 15.7931L15.5476 13.05H6.52C5.95667 13.05 5.5 12.5799 5.5 12Z"
																	fill="white"
																/>
															</svg>
														</div>
													</Link>
													<div className=" rounded-b-xl absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[#0f0f0f] to-transparent"></div>
												</div>

												<div className="w-full sm:p-8 p-2 border border-[#1F1F1F] mt-10 rounded-xl flex-col  flex  gap-8">
													<div className="px-4 flex flex-col gap-4">
														<h4 className="text-lg font-semibold">
															Mobile App Development Process
														</h4>
														<p className="text-sm text-[#808080]">
														At Deltospark, we follow a systematic approach to deliver a mobile app that aligns perfectly with your business needs and branding. Here’s an overview of our development process:
</p>
													</div>
													<div className="w-full h-full flex flex-col gap-10">
														<div className="flex flex-col md:flex-row gap-5 w-full h-1/2">
															<div className="p-4 flex flex-col gap-2 justify-center md:w-1/2">
																<h2 className="font-semibold">
																Discovery and planning																</h2>
																<p className="text-sm text-[#8C8C8C]">
																Our journey begins with a thorough consultation to understand your business, goals, target audience, and specific requirements. we conduct extensive research to analyze competitors, market trends, and best practices. this phase culminates in defining the project scope, creating a product roadmap, and establishing clear timelines to ensure a structured and efficient development process.

</p>
															</div>
															<div className="border-r border-[#1F1F1F]"></div>
															<div className="border-b border-[#1F1F1F] "></div>
															<div className="p-4 flex flex-col gap-2 justify-center md:w-1/2">
																<h2 className="font-semibold">
																	Responsive Design
																</h2>
																<p className="text-sm text-[#8C8C8C]">
																In this phase, we develop wireframes to outline the app’s structure and user flow. our ui/ux designers then create high-fidelity designs to visualize the user interface and experience. we gather feedback and make necessary adjustments to ensure the design aligns with your vision.

</p>
															</div>
														</div>

														<div className="border-b border-[#1F1F1F]"></div>

														<div className="flex flex-col md:flex-row gap-5 w-full h-1/2 ">
															<div className="p-4 flex flex-col gap-2 md:w-1/2 justify-center">
																<h2 className="font-semibold">
																	Development
																</h2>
																<p className="text-sm text-[#8C8C8C]">
																Our development team implements the design using suitable frameworks and technologies for ios and android. we set up the server, database, and application logic using technologies like node.js, django, or flask. integration of third-party services, apis, and any necessary backend systems is also carried out during this phase.

</p>
															</div>
															<div className="border-r border-[#1F1F1F]"></div>
															<div className="border-b border-[#1F1F1F]"></div>
															<div className="p-4 flex flex-col gap-2 md:w-1/2 justify-center">
																<h2 className="font-semibold">
																	Testing and launch
																</h2>
																<p className="text-sm text-[#8C8C8C]">
																We conduct rigorous testing to ensure all features work correctly and the app is compatible across devices and operating systems. performance testing optimizes loading times and responsiveness. once testing is complete, we publish the app to the app store and google play store, followed by a final review and training on app management and updates.

</p>
															</div>
														</div>
													</div>
												</div>
												</div>
												
										{/* </ScrollAnimation> */}
										{/* <ScrollAnimation variants={scaleUpVariants}> */}
											<div
												className={`web-design ${
													currentVisibleIndex === 2
														? "opacity-100 h-auto"
														: "opacity-0 h-0"
												} transition-opacity duration-500`}
											>
												<div className="flex flex-col gap-3">
													<h4 className="text-lg font-semibold">Web Design</h4>
													<p className="text-[#8C8C8C] text-sm">
													At Deltosparks, web design is about creating visually appealing, user-friendly websites that reflect your brand and engage your audience. We blend creativity, UX design, and cutting-edge technologies to understand your business goals and deliver a site that looks great and drives results.													</p>
												</div>
												<div className="w-full px-2  sm:py-12 py-8  border border-[#1F1F1F] mt-10 rounded-xl flex-col  flex gap-8 relative">
													<div className="px-4 flex flex-col gap-4">
														<h4 className="text-lg font-semibold">
															Web Design Portfolio
														</h4>
														<p className="text-sm text-[#808080]">
															Check out some of our most recent Web Design
															projects in the table below
														</p>
													</div>
													<div className="flex flex-col md:flex-row justify-between gap-5 px-4 w-full">
														<div className="md:w-1/2 h-full rounded-lg overflow-hidden">
															<Image
																src={servicesprotfolio3}
																className="object-contain"
																alt="saas developers near me"
															/>
														</div>
														<div className="md:w-1/2 h-full rounded-lg overflow-hidden">
															<Image
																src={servicesprotfolio4}
																className="object-contain"
																alt="affordable development services"
															/>
														</div>
													</div>
													<Link
														className=" text-xs absolute h-[50px] bottom-1 min-w-[140px] bg-[#0f0f0f] z-10 flex left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center gap-2 sm:py-2 px-4 border border-[#1F1F1F] backdrop-filter backdrop-blur-sm bg-opacity-20 rounded-full"
														href="/projects"
													>
														View All Projects
														<div className="p-1 rounded-full hidden sm:block">
															<svg
																width="25"
																height="24"
																viewBox="0 0 25 24"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	fillRule="evenodd"
																	clipRule="evenodd"
																	d="M5.5 12C5.5 11.4201 5.95667 10.95 6.52 10.95H15.5476L12.613 8.2069C12.207 7.80497 12.1943 7.14027 12.5848 6.72226C12.9752 6.30425 13.6209 6.29122 14.027 6.69315L18.787 11.2431C18.987 11.4411 19.1 11.7144 19.1 12C19.1 12.2856 18.987 12.5589 18.787 12.7569L14.027 17.3069C13.6209 17.7088 12.9752 17.6958 12.5848 17.2778C12.1943 16.8598 12.207 16.1951 12.613 15.7931L15.5476 13.05H6.52C5.95667 13.05 5.5 12.5799 5.5 12Z"
																	fill="white"
																/>
															</svg>
														</div>
													</Link>
													<div className=" rounded-b-xl absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[#0f0f0f] to-transparent"></div>
												</div>

												<div className="w-full sm:p-8 p-2 border border-[#1F1F1F] mt-10 rounded-xl flex-col  flex  gap-8">
													<div className="px-4 flex flex-col gap-4">
														<h4 className="text-lg font-semibold">
															Design Process
														</h4>
														<p className="text-sm text-[#808080]">
															Our Web Design process follows a systematic
															approach to deliver a website that aligns
															perfectly with your business needs and branding.
															Here s an overview of our design process
														</p>
													</div>
													<div className="w-full h-full flex flex-col gap-10">
														<div className="flex flex-col md:flex-row gap-5 w-full h-1/2">
															<div className="p-4 flex flex-col gap-2 justify-center md:w-1/2">
																<h2 className="font-semibold">
																	Customized Design
																</h2>
																<p className="text-sm text-[#8C8C8C]">
																	We craft bespoke designs tailored to match
																	your brand personality and industry.
																</p>
															</div>
															<div className="border-r border-[#1F1F1F]"></div>
															<div className="border-b border-[#1F1F1F] "></div>
															<div className="p-4 flex flex-col gap-2 justify-center md:w-1/2">
																<h2 className="font-semibold">
																	Responsive Design
																</h2>
																<p className="text-sm text-[#8C8C8C]">
																	Ensuring your website adapts seamlessly to
																	different devices and screen sizes.
																</p>
															</div>
														</div>

														<div className="border-b border-[#1F1F1F]"></div>

														<div className="flex flex-col md:flex-row gap-5 w-full h-1/2 ">
															<div className="p-4 flex flex-col gap-2 md:w-1/2 justify-center">
																<h2 className="font-semibold">
																	User-Centric Approach
																</h2>
																<p className="text-sm text-[#8C8C8C]">
																	Prioritizing ease of navigation and intuitive
																	user experience.
																</p>
															</div>
															<div className="border-r border-[#1F1F1F]"></div>
															<div className="border-b border-[#1F1F1F]"></div>
															<div className="p-4 flex flex-col gap-2 md:w-1/2 justify-center">
																<h2 className="font-semibold">
																	Visual Elements
																</h2>
																<p className="text-sm text-[#8C8C8C]">
																	Incorporating engaging visuals, graphics, and
																	animations to enhance the overall appeal.
																</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										{/* </ScrollAnimation> */}
										{/* <ScrollAnimation variants={scaleUpVariants}> */}
											<div
												className={`web-design ${
													currentVisibleIndex === 3
														? "opacity-100 h-auto"
														: "opacity-0 h-0"
												} transition-opacity duration-500`}
											>
												<div className="flex flex-col gap-3">
													<h4 className="text-lg font-semibold">AI/Machine Learning</h4>
													<p className="text-[#8C8C8C] text-sm">
													AI and machine learning at Deltosparks optimize your business with predictive analytics, natural language processing, and intelligent automation. We blend creativity with cutting-edge technologies to understand your business goals and deliver data-driven solutions that drive results.													</p>
												</div>
												<div className="w-full px-2  sm:py-12 py-8  border border-[#1F1F1F] mt-10 rounded-xl flex-col  flex gap-8 relative">
													<div className="px-4 flex flex-col gap-4">
														<h4 className="text-lg font-semibold">
														AI/Machine Learning Portfolio
														</h4>
														<p className="text-sm text-[#808080]">
															Check out some of our most recent Web Design
															projects in the table below
														</p>
													</div>
													<div className="flex flex-col md:flex-row justify-between gap-5 px-4 w-full">
														<div className="md:w-1/2 h-full rounded-lg overflow-hidden">
															<Image
																src={servicesprotfolio5}
																className="object-contain"
																alt="Best app development company"
															/>
														</div>
														<div className="md:w-1/2 h-full rounded-lg overflow-hidden">
															<Image
																src={servicesprotfolio2}
																className="object-contain"
																alt="best web development company"
															/>
														</div>
													</div>
													<Link
														className=" text-xs absolute h-[50px] bottom-1 min-w-[140px] bg-[#0f0f0f] z-10 flex left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center gap-2 sm:py-2 px-4 border border-[#1F1F1F] backdrop-filter backdrop-blur-sm bg-opacity-20 rounded-full"
														href="/projects"
													>
														View All Projects
														<div className="p-1 rounded-full hidden sm:block">
															<svg
																width="25"
																height="24"
																viewBox="0 0 25 24"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	fillRule="evenodd"
																	clipRule="evenodd"
																	d="M5.5 12C5.5 11.4201 5.95667 10.95 6.52 10.95H15.5476L12.613 8.2069C12.207 7.80497 12.1943 7.14027 12.5848 6.72226C12.9752 6.30425 13.6209 6.29122 14.027 6.69315L18.787 11.2431C18.987 11.4411 19.1 11.7144 19.1 12C19.1 12.2856 18.987 12.5589 18.787 12.7569L14.027 17.3069C13.6209 17.7088 12.9752 17.6958 12.5848 17.2778C12.1943 16.8598 12.207 16.1951 12.613 15.7931L15.5476 13.05H6.52C5.95667 13.05 5.5 12.5799 5.5 12Z"
																	fill="white"
																/>
															</svg>
														</div>
													</Link>
													<div className=" rounded-b-xl absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[#0f0f0f] to-transparent"></div>
												</div>

												<div className="w-full sm:p-8 p-2  border border-[#1F1F1F] mt-10 rounded-xl flex-col  flex gap-8">
													<div className="px-4 flex flex-col gap-4">
														<h4 className="text-lg font-semibold">
														Our AI/Machine Learning development process
														</h4>
													</div>
													<div className="w-full h-full flex flex-col gap-10">
														<div className="flex flex-col md:flex-row gap-5 w-full h-1/2">
															<div className="p-4 flex flex-col gap-2 justify-center md:w-1/2">
																<h2 className="font-semibold">
																Discovery and planning
																</h2>
																<p className="text-sm text-[#8C8C8C]">
																Our journey begins with a thorough consultation to understand your business, goals, and specific requirements. we conduct extensive research to analyze industry trends, data sources, and best practices. this phase culminates in defining the project scope, creating a data strategy, and establishing clear timelines to ensure a structured and efficient development process.

.
																</p>
															</div>
															<div className="border-r border-[#1F1F1F]"></div>
															<div className="border-b border-[#1F1F1F]"></div>
															<div className="p-4 flex flex-col gap-2 justify-center md:w-1/2">
																<h2 className="font-semibold">
																Data collection and preprocessing
																</h2>
																<p className="text-sm text-[#8C8C8C]">
																In this phase, we gather relevant data from various sources and preprocess it to ensure quality and consistency. data cleaning, normalization, and transformation are performed to prepare the data for model training. we also conduct exploratory data analysis (eda) to uncover patterns and insights.


																</p>
															</div>
														</div>

														<div className="border-b border-[#1F1F1F]"></div>

														<div className="flex md:flex-row flex-col gap-5 w-full h-1/2 ">
															<div className="p-4 flex flex-col gap-2 md:w-1/2 justify-center">
																<h2 className="font-semibold">
																Model development and training
																</h2>
																<p className="text-sm text-[#8C8C8C]">
																Once the models are fully developed and tested, we deploy them into your production environment. we set up monitoring systems to track the model’s performance and make adjustments as needed. ongoing support is provided to address any issues and ensure the models continue to deliver accurate and actionable insights.


																</p>
															</div>
															<div className="border-r border-[#1F1F1F]"></div>
															<div className="border-b border-[#1F1F1F]"></div>
															<div className="p-4 flex flex-col gap-2 md:w-1/2 justify-center">
																<h2 className="font-semibold">
																Deployment and monitoring
																</h2>
																<p className="text-sm text-[#8C8C8C]">
																Once the models are fully developed and tested, we deploy them into your production environment. we set up monitoring systems to track the model’s performance and make adjustments as needed. ongoing support is provided to address any issues and ensure the models continue to deliver accurate and actionable insights.


																</p>
															</div>
														</div>
													</div>
												</div>
												<div className="w-full lg:p-8 lg:py-12 py-5 border border-[#1F1F1F] mt-10 rounded-xl flex-col  lg:flex gap-8 relative hidden">
													<div className="px-4 flex flex-col gap-4">
														<h4 className="text-lg font-semibold">
															Our AI/Machine Learning Completed Projects
														</h4>
								
														<div className="flex flex-col gap-5">
															<div className="w-full h-14 rounded-xl border border-[#1F1F1F] flex">
																<h3 className="w-1/3 p-4">Project Name</h3>
																<h3 className="w-1/3 p-4 border-x border-[#1F1F1F]">
																	Industry
																</h3>
																<h3 className="w-1/3 p-4">Project URL</h3>
															</div>
															<div className="w-full h-40 border border-[#1F1F1F] rounded-xl">
																<div className="h-1/3 w-full flex">
																	<div className="text-sm w-1/3 h-full p-4 font-thin">
																		{" "}
																		AIxFigma
																	</div>
																	<div className=" text-sm w-1/3 h-full p-4 font-thin border-x border-[#1F1F1F]">
																		{" "}
																		Design
																	</div>
																	<Link
																		href={"https://www.instagram.com/p/CpMonvGo_NN/"}
																		className="text-sm w-1/3 h-full p-4 font-thin"
																	>
																		https://instagram.com...{" "}
																	</Link>
																</div>
																<div className="h-1/3 w-full border-y border-[#1F1F1F] flex">
																	<div className="text-sm w-1/3 h-full p-4 font-thin">
																		{" "}
																		Rapid Web Development
																	</div>
																	<div className="text-sm w-1/3 h-full p-4 font-thin border-x border-[#1F1F1F]">
																		NLP, Computer Vision
																	</div>
																	<Link
																		href={"https://www.instagram.com/p/CcH6siCKzVQ/"}
																		className="text-sm w-1/3 h-full p-4 font-thin"
																	>
																		https://instagram.com...
																	</Link>
																</div>
																
													
													
																</div>
																</div>
																</div>
																</div>

											</div>
										{/* </ScrollAnimation> */}
										{/* <ScrollAnimation variants={scaleUpVariants}> */}
											<div
												className={`web-design ${
													currentVisibleIndex === 4
														? "opacity-100 h-auto"
														: "opacity-0 h-0"
												} transition-opacity duration-500`}
											>
												<div className="flex flex-col gap-3">
													<h4 className="text-lg font-semibold">Blockchain Development</h4>
													<p className="text-[#8C8C8C] text-sm">
													Blockchain development at Deltosparks includes dApp creation, wallet development, and EVM-based chains. We build secure, decentralized applications and wallets, deploy nodes, and use cutting-edge technologies to deliver robust, transparent solutions that align with your business goals and drive results.													</p>
												</div>
												<div className="w-full px-2  sm:py-12 py-8  border border-[#1F1F1F] mt-10 rounded-xl flex-col  flex gap-8 relative">
													<div className="px-4 flex flex-col gap-4">
														<h4 className="text-lg font-semibold">
														Blockchain Development Portfolio
														</h4>
														<p className="text-sm text-[#808080]">
															Check out some of our most recent Web Design
															projects in the table below
														</p>
													</div>
													<div className="flex flex-col md:flex-row justify-between gap-5 px-4 w-full">
														<div className="md:w-1/2 h-full rounded-lg overflow-hidden">
															<Image
																src={servicesprotfolio1}
																className="object-contain"
																alt="SaaS developers"
															/>
														</div>
														<div className="md:w-1/2 h-full rounded-lg overflow-hidden">
															<Image
																src={servicesprotfolio4}
																className="object-contain"
																alt="UI/UX design services"
															/>
														</div>
													</div>
													<Link
														className=" text-xs absolute h-[50px] bottom-1 min-w-[140px] bg-[#0f0f0f] z-10 flex left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center gap-2 sm:py-2 px-4 border border-[#1F1F1F] backdrop-filter backdrop-blur-sm bg-opacity-20 rounded-full"
														href="/projects"
													>
														View All Projects
														<div className="p-1 rounded-full hidden sm:block">
															<svg
																width="25"
																height="24"
																viewBox="0 0 25 24"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	fillRule="evenodd"
																	clipRule="evenodd"
																	d="M5.5 12C5.5 11.4201 5.95667 10.95 6.52 10.95H15.5476L12.613 8.2069C12.207 7.80497 12.1943 7.14027 12.5848 6.72226C12.9752 6.30425 13.6209 6.29122 14.027 6.69315L18.787 11.2431C18.987 11.4411 19.1 11.7144 19.1 12C19.1 12.2856 18.987 12.5589 18.787 12.7569L14.027 17.3069C13.6209 17.7088 12.9752 17.6958 12.5848 17.2778C12.1943 16.8598 12.207 16.1951 12.613 15.7931L15.5476 13.05H6.52C5.95667 13.05 5.5 12.5799 5.5 12Z"
																	fill="white"
																/>
															</svg>
														</div>
													</Link>
													<div className=" rounded-b-xl absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[#0f0f0f] to-transparent"></div>
												</div>

												<div className="w-full sm:p-8 p-2 border border-[#1F1F1F] mt-10 rounded-xl flex-col  flex  gap-8">
													<div className="px-4 flex flex-col gap-4">
														<h4 className="text-lg font-semibold">
														Discovery and planning														</h4>
														<p className="text-sm text-[#808080]">
														We start with a detailed consultation to understand your business requirements, goals, and challenges. we analyze your current processes and identify how blockchain technology can provide value. this phase includes defining the project scope, selecting the appropriate blockchain platform, and establishing clear timelines for development.


														</p>
													</div>
													<div className="w-full h-full flex flex-col gap-10">
														<div className="flex flex-col md:flex-row gap-5 w-full h-1/2">
															<div className="p-4 flex flex-col gap-2 justify-center md:w-1/2">
																<h2 className="font-semibold">
																Architecture design and development
																</h2>
																<p className="text-sm text-[#8C8C8C]">
																In this phase, we design the blockchain architecture, including the network setup, smart contract design, and consensus mechanism. our developers build the blockchain solution using technologies like ethereum, hyperledger, or fabric, and develop smart contracts and decentralized applications (dapps). we ensure that the architecture aligns with your requirements and industry best practices.


																</p>
															</div>
															<div className="border-r border-[#1F1F1F]"></div>
															<div className="border-b border-[#1F1F1F] "></div>
															<div className="p-4 flex flex-col gap-2 justify-center md:w-1/2">
																<h2 className="font-semibold">
																Integration and customization

																</h2>
																<p className="text-sm text-[#8C8C8C]">
																We integrate the blockchain solution with your existing systems and customize it to fit your specific needs. this may include developing APIs for interoperability, configuring user interfaces, and ensuring smooth interaction between blockchain components and other software systems.



																</p>
															</div>
														</div>

														<div className="border-b border-[#1F1F1F]"></div>

														<div className="flex flex-col md:flex-row gap-5 w-full h-1/2 ">
															<div className="p-4 flex flex-col gap-2 md:w-1/2 justify-center">
																<h2 className="font-semibold">
																Testing and validation
																</h2>
																<p className="text-sm text-[#8C8C8C]">
																We conduct rigorous testing to ensure the blockchain solution is secure, reliable, and performs as expected. this includes testing smart contracts, verifying transaction integrity, and ensuring compliance with blockchain protocols. we also perform stress testing to evaluate the system's performance under various conditions.


																</p>
															</div>
															<div className="border-r border-[#1F1F1F]"></div>
															<div className="border-b border-[#1F1F1F]"></div>
															<div className="p-4 flex flex-col gap-2 md:w-1/2 justify-center">
																<h2 className="font-semibold">
																Deployment and support
																</h2>
																<p className="text-sm text-[#8C8C8C]">
																Once the solution is fully tested and validated, we deploy it to the production environment. we provide ongoing support to address any issues and ensure the system operates smoothly. we also offer monitoring and maintenance services to keep the blockchain solution up-to-date and optimized for performance.


																</p>
															</div>
														</div>
													</div>
												</div>
												<div className="w-full lg:p-8 lg:py-12 py-5 border border-[#1F1F1F] mt-10 rounded-xl flex-col  lg:flex gap-8 relative hidden">
													<div className="px-4 flex flex-col gap-4">
														<h4 className="text-lg font-semibold">
															Our Blockchain Completed Projects
														</h4>
											
														<div className="flex flex-col gap-5">
															<div className="w-full h-14 rounded-xl border border-[#1F1F1F] flex">
																<h3 className="w-1/3 p-4">Project Name</h3>
																<h3 className="w-1/3 p-4 border-x border-[#1F1F1F]">
																	Industry
																</h3>
																<h3 className="w-1/3 p-4">Website URL</h3>
															</div>
															<div className="w-full h-40 border border-[#1F1F1F] rounded-xl">
																<div className="h-1/3 w-full flex">
																	<div className="text-sm w-1/3 h-full p-4 font-thin">
																		{" "}
																		QI Blockchain Block explorer Mainnet
																	</div>
																	<div className=" text-sm w-1/3 h-full p-4 font-thin border-x border-[#1F1F1F]">
																		{" "}
																		Coin Staking
																	</div>
																	<Link
																		href={"https://mainnet.qiblockchain.online/"}
																		className="text-sm w-1/3 h-full p-4 font-thin"
																	>
																		https://mainnet.qiblock...{" "}
																	</Link>
																</div>
																<div className="h-1/3 w-full border-y border-[#1F1F1F] flex">
																	<div className="text-sm w-1/3 h-full p-4 font-thin">
																		{" "}
																		Hovr: A Web3 Marketplace
																	</div>
																	<div className="text-sm w-1/3 h-full p-4 font-thin border-x border-[#1F1F1F]">
																		Web3 Marketplace
																	</div>
																	<Link
																		href={"https://hovr.site/"}
																		className="text-sm w-1/3 h-full p-4 font-thin"
																	>
																		https://hovr.site/
																	</Link>
																</div>
																</div>
														</div>
													</div>
												</div>
											</div>
										{/* </ScrollAnimation> */}

									</div>
								{/* </ScrollAnimation> */}
							</div>
						</ScrollAnimation>
					</div>
					
				</ScrollAnimation>
				<ScrollAnimation variants={scaleUpVariants}>
					<div className="flex flex-col items-center mt-24 w-full sm:max-w-[1280px] mx-auto gap-10 relative p-2 sm:p-10">
						<h2 className="text-center text-3xl font-semibold max-w-[500px]">
							Success <span className="text-[#808080]">Stories</span>
						</h2>
						<p className="text-sm text-[#808080] text-center max-w-[900px]">
						At Deltospark, our success is defined by the achievements of our valued clients. We take immense pride in the transformative impact our digital solutions have had on their businesses. Here are some inspiring success stories that highlight the outcomes of our collaborative efforts.


						</p>
						<div className="flex flex-col items-center w-full min-h-[670px]">
							<div className="flex flex-col lg:flex-row gap-8 w-full h-full">
								<div className="lg:w-1/2">
									<ScrollAnimation variants={scaleUpVariants}>
										<div className=" rounded-xl border border-[#1F1F1F] relative my-BG backdrop-filter backdrop-blur-lg bg-opacity-20 ">
											<div className="w-full rounded-xl p-5 sm:p-10 ">
												<div className="w-full flex flex-col gap-6 text-lg">
													<div className=" flex flexcol items-center gap-5">
														<svg
															width="50"
															height="50"
															viewBox="0 0 59 58"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<g filter="url(#filter0_i_26_403)">
																<rect
																	x="2.5"
																	y="2"
																	width="54"
																	height="54"
																	rx="27"
																	fill="url(#paint0_linear_26_403)"
																/>
																<rect
																	x="1.5"
																	y="1"
																	width="56"
																	height="56"
																	rx="28"
																	stroke="#666666"
																	strokeWidth="2"
																/>
																<path
																	d="M29.5 33.3333L33.2917 35.5V31.1667L37.0833 29L33.2917 26.8333V22.5L29.5 24.6667L25.7083 22.5V26.8333L21.9167 29L25.7083 31.1667V35.5L29.5 33.3333Z"
																	fill="white"
																/>
																<path
																	d="M40.875 26.8333L37.0833 29V24.6667L33.2917 22.5L37.0833 20.3333L40.875 22.5V26.8333Z"
																	fill="white"
																/>
																<path
																	d="M40.875 31.1667L37.0833 29V33.3333L33.2917 35.5L37.0833 37.6667L40.875 35.5V31.1667Z"
																	fill="white"
																/>
																<path
																	d="M25.7083 39.8333V35.5L29.5 37.6667L33.2917 35.5V39.8333L29.5 42L25.7083 39.8333Z"
																	fill="white"
																/>
																<path
																	d="M18.125 31.1667L21.9167 29V33.3333L25.7083 35.5L21.9167 37.6667L18.125 35.5V31.1667Z"
																	fill="white"
																/>
																<path
																	d="M18.125 26.8333L21.9167 29V24.6667L25.7083 22.5L21.9167 20.3333L18.125 22.5V26.8333Z"
																	fill="white"
																/>
																<path
																	d="M25.7083 18.1667V22.5L29.5 20.3333L33.2917 22.5V18.1667L29.5 16L25.7083 18.1667Z"
																	fill="white"
																/>
															</g>
															<defs>
																<filter
																	id="filter0_i_26_403"
																	x="0.5"
																	y="0"
																	width="58"
																	height="58"
																	filterUnits="userSpaceOnUse"
																	colorInterpolationFilters="sRGB"
																>
																	<feFlood
																		floodOpacity="0"
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
																		result="effect1_innerShadow_26_403"
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
																		result="effect1_innerShadow_26_403"
																	/>
																</filter>
																<linearGradient
																	id="paint0_linear_26_403"
																	x1="-5.27273"
																	y1="-8.63637"
																	x2="64.6818"
																	y2="67.0455"
																	gradientUnits="userSpaceOnUse"
																>
																	<stop />
																	<stop
																		offset="0.256291"
																		stopColor="#E7E7E7"
																		stopOpacity="0.6875"
																	/>
																	<stop
																		offset="0.457331"
																		stopColor="white"
																		stopOpacity="0.34139"
																	/>
																	<stop
																		offset="0.584253"
																		stopColor="white"
																		stopOpacity="0.222774"
																	/>
																	<stop offset="1" stopColor="#666666" />
																</linearGradient>
															</defs>
														</svg>
														<h3 className="font-semibold">
														Compliance Automation for Medtech
														</h3>
													</div>
													<div className="text-sm flex flex-col md:flex-row gap-4">
														<Link
															href={""}
															className="px-3 py-[4px] w-fit rounded-full flex justify-center items-center border border-[#1F1F1F] gap-2"
														>
															<svg
																width="38"
																height="38"
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
																	fill="#1A1A1A"
																/>
																<rect
																	x="0.5"
																	y="0.5"
																	width="41"
																	height="41"
																	rx="20.5"
																	stroke="#262626"
																/>
																<path
																	d="M13.5 21.9375C13.5 21.4197 13.9197 21 14.4375 21H16.3125C16.8303 21 17.25 21.4197 17.25 21.9375V27.5625C17.25 28.0803 16.8303 28.5 16.3125 28.5H14.4375C13.9197 28.5 13.5 28.0803 13.5 27.5625V21.9375Z"
																	stroke="white"
																	strokeLinecap="round"
																	strokeLinejoin="round"
																/>
																<path
																	d="M19.125 18.1875C19.125 17.6697 19.5447 17.25 20.0625 17.25H21.9375C22.4553 17.25 22.875 17.6697 22.875 18.1875V27.5625C22.875 28.0803 22.4553 28.5 21.9375 28.5H20.0625C19.5447 28.5 19.125 28.0803 19.125 27.5625V18.1875Z"
																	stroke="white"
																	strokeLinecap="round"
																	strokeLinejoin="round"
																/>
																<path
																	d="M24.75 14.4375C24.75 13.9197 25.1697 13.5 25.6875 13.5H27.5625C28.0803 13.5 28.5 13.9197 28.5 14.4375V27.5625C28.5 28.0803 28.0803 28.5 27.5625 28.5H25.6875C25.1697 28.5 24.75 28.0803 24.75 27.5625V14.4375Z"
																	stroke="white"
																	strokeLinecap="round"
																	strokeLinejoin="round"
																/>
															</svg>
															<span className="text-xs ">Medtech</span>
														</Link>
														<Link
															href={""}
															className="px-3 py-[4px] w-fit rounded-full flex justify-center items-center border border-[#1F1F1F] gap-2"
														>
															<svg
																width="38"
																height="38"
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
																	fill="#1A1A1A"
																/>
																<rect
																	x="0.5"
																	y="0.5"
																	width="41"
																	height="41"
																	rx="20.5"
																	stroke="#262626"
																/>
																<path
																	d="M27.875 22.7916V26.3333C27.875 27.2454 27.2193 28.0299 26.3151 28.15C24.5762 28.3808 22.802 28.5 21 28.5C19.198 28.5 17.4238 28.3808 15.6849 28.15C14.7807 28.0299 14.125 27.2454 14.125 26.3333V22.7916M27.875 22.7916C28.2683 22.4564 28.5 21.9491 28.5 21.4074V18.2547C28.5 17.354 27.8601 16.5757 26.9692 16.4424C26.0314 16.3021 25.0829 16.1943 24.125 16.1203M27.875 22.7916C27.7137 22.9291 27.5251 23.0377 27.3143 23.1078C25.3294 23.7677 23.2064 24.125 21 24.125C18.7936 24.125 16.6706 23.7677 14.6857 23.1078C14.4749 23.0377 14.2863 22.9291 14.125 22.7916M14.125 22.7916C13.7317 22.4563 13.5 21.9491 13.5 21.4074V18.2547C13.5 17.354 14.1399 16.5757 15.0308 16.4424C15.9686 16.3021 16.9171 16.1943 17.875 16.1203M24.125 16.1203V15.375C24.125 14.3395 23.2855 13.5 22.25 13.5H19.75C18.7145 13.5 17.875 14.3395 17.875 15.375V16.1203M24.125 16.1203C23.0938 16.0406 22.0516 16 21 16C19.9484 16 18.9062 16.0406 17.875 16.1203M21 21.625H21.0062V21.6312H21V21.625Z"
																	stroke="white"
																	strokeLinecap="round"
																	strokeLinejoin="round"
																/>
															</svg>
															<span className="text-xs">
																Automation
															</span>
														</Link>
													</div>
												</div>
												<div className=" border border-[#1F1F1F] flex flex-col gap-6 rounded-xl mt-10 p-5">
													<div className="h-1/2  flex  flex-col gap-4">
														<h3>Challenge</h3>
														<p className="text-sm text-[#8C8C8C]">
														We collaborated with a medtech company that needed to streamline their compliance processes to reduce administrative overhead and ensure regulatory adherence.


														</p>
													</div>
													<div className="border-b border-[#1F1F1F]"></div>
													<div className="h-1/2 w-full flex p-4 flex-col gap-4">
														<h3>Solution</h3>
														<p className="text-sm text-[#8C8C8C]">
														We developed an automated compliance management system to simplify and manage their regulatory tasks efficiently. The system integrated with their existing infrastructure to provide real-time compliance tracking.


														</p>
														
													</div>
													<div className="border-b border-[#1F1F1F]"></div>
													<div className="h-1/2 w-full flex p-4 flex-col gap-4">
														<h3>Outcome</h3>
														<p className="text-sm text-[#8C8C8C]">
														Our solution automated compliance processes, saving the company approximately $150,000 annually and ensuring they remained compliant with industry regulations.



														</p>
														
													</div>
												</div>
											</div>
										</div>
									</ScrollAnimation>
								</div>
								<div className="lg:w-1/2">
									<ScrollAnimation variants={scaleUpVariants}>
										<div className=" rounded-xl border border-[#1F1F1F] relative my-BG backdrop-filter backdrop-blur-lg bg-opacity-20">
											<div className="w-full rounded-xl p-5 sm:p-10  ">
												<div className="w-full flex flex-col gap-6 text-lg">
													<div className=" flex  items-center gap-5">
														<svg
															width="50"
															height="50"
															viewBox="0 0 59 58"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<g filter="url(#filter0_i_26_403)">
																<rect
																	x="2.5"
																	y="2"
																	width="54"
																	height="54"
																	rx="27"
																	fill="url(#paint0_linear_26_403)"
																/>
																<rect
																	x="1.5"
																	y="1"
																	width="56"
																	height="56"
																	rx="28"
																	stroke="#666666"
																	strokeWidth="2"
																/>
																<path
																	d="M29.5 33.3333L33.2917 35.5V31.1667L37.0833 29L33.2917 26.8333V22.5L29.5 24.6667L25.7083 22.5V26.8333L21.9167 29L25.7083 31.1667V35.5L29.5 33.3333Z"
																	fill="white"
																/>
																<path
																	d="M40.875 26.8333L37.0833 29V24.6667L33.2917 22.5L37.0833 20.3333L40.875 22.5V26.8333Z"
																	fill="white"
																/>
																<path
																	d="M40.875 31.1667L37.0833 29V33.3333L33.2917 35.5L37.0833 37.6667L40.875 35.5V31.1667Z"
																	fill="white"
																/>
																<path
																	d="M25.7083 39.8333V35.5L29.5 37.6667L33.2917 35.5V39.8333L29.5 42L25.7083 39.8333Z"
																	fill="white"
																/>
																<path
																	d="M18.125 31.1667L21.9167 29V33.3333L25.7083 35.5L21.9167 37.6667L18.125 35.5V31.1667Z"
																	fill="white"
																/>
																<path
																	d="M18.125 26.8333L21.9167 29V24.6667L25.7083 22.5L21.9167 20.3333L18.125 22.5V26.8333Z"
																	fill="white"
																/>
																<path
																	d="M25.7083 18.1667V22.5L29.5 20.3333L33.2917 22.5V18.1667L29.5 16L25.7083 18.1667Z"
																	fill="white"
																/>
															</g>
															<defs>
																<filter
																	id="filter0_i_26_403"
																	x="0.5"
																	y="0"
																	width="58"
																	height="58"
																	filterUnits="userSpaceOnUse"
																	colorInterpolationFilters="sRGB"
																>
																	<feFlood
																		floodOpacity="0"
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
																		result="effect1_innerShadow_26_403"
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
																		result="effect1_innerShadow_26_403"
																	/>
																</filter>
																<linearGradient
																	id="paint0_linear_26_403"
																	x1="-5.27273"
																	y1="-8.63637"
																	x2="64.6818"
																	y2="67.0455"
																	gradientUnits="userSpaceOnUse"
																>
																	<stop />
																	<stop
																		offset="0.256291"
																		stopColor="#E7E7E7"
																		stopOpacity="0.6875"
																	/>
																	<stop
																		offset="0.457331"
																		stopColor="white"
																		stopOpacity="0.34139"
																	/>
																	<stop
																		offset="0.584253"
																		stopColor="white"
																		stopOpacity="0.222774"
																	/>
																	<stop offset="1" stopColor="#666666" />
																</linearGradient>
															</defs>
														</svg>
														<h3 className="font-semibold">
															Fitness Tracker App
														</h3>
													</div>
													<div className="text-sm flex flex-col md:flex-row gap-4">
														<Link
															href={""}
															className="px-3 py-[4px] w-fit rounded-full flex justify-center items-center border border-[#1F1F1F] gap-2"
														>
															<svg
																width="38"
																height="38"
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
																	fill="#1A1A1A"
																/>
																<rect
																	x="0.5"
																	y="0.5"
																	width="41"
																	height="41"
																	rx="20.5"
																	stroke="#262626"
																/>
																<path
																	d="M13.5 21.9375C13.5 21.4197 13.9197 21 14.4375 21H16.3125C16.8303 21 17.25 21.4197 17.25 21.9375V27.5625C17.25 28.0803 16.8303 28.5 16.3125 28.5H14.4375C13.9197 28.5 13.5 28.0803 13.5 27.5625V21.9375Z"
																	stroke="white"
																	strokeLinecap="round"
																	strokeLinejoin="round"
																/>
																<path
																	d="M19.125 18.1875C19.125 17.6697 19.5447 17.25 20.0625 17.25H21.9375C22.4553 17.25 22.875 17.6697 22.875 18.1875V27.5625C22.875 28.0803 22.4553 28.5 21.9375 28.5H20.0625C19.5447 28.5 19.125 28.0803 19.125 27.5625V18.1875Z"
																	stroke="white"
																	strokeLinecap="round"
																	strokeLinejoin="round"
																/>
																<path
																	d="M24.75 14.4375C24.75 13.9197 25.1697 13.5 25.6875 13.5H27.5625C28.0803 13.5 28.5 13.9197 28.5 14.4375V27.5625C28.5 28.0803 28.0803 28.5 27.5625 28.5H25.6875C25.1697 28.5 24.75 28.0803 24.75 27.5625V14.4375Z"
																	stroke="white"
																	strokeLinecap="round"
																	strokeLinejoin="round"
																/>
															</svg>
															<span className="text-xs">Fitness</span>
														</Link>
														<Link
															href={""}
															className="px-3 py-[4px] w-fit rounded-full flex justify-center items-center border border-[#1F1F1F] gap-2"
														>
															<svg
																width="38"
																height="38"
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
																	fill="#1A1A1A"
																/>
																<rect
																	x="0.5"
																	y="0.5"
																	width="41"
																	height="41"
																	rx="20.5"
																	stroke="#262626"
																/>
																<path
																	d="M27.875 22.7916V26.3333C27.875 27.2454 27.2193 28.0299 26.3151 28.15C24.5762 28.3808 22.802 28.5 21 28.5C19.198 28.5 17.4238 28.3808 15.6849 28.15C14.7807 28.0299 14.125 27.2454 14.125 26.3333V22.7916M27.875 22.7916C28.2683 22.4564 28.5 21.9491 28.5 21.4074V18.2547C28.5 17.354 27.8601 16.5757 26.9692 16.4424C26.0314 16.3021 25.0829 16.1943 24.125 16.1203M27.875 22.7916C27.7137 22.9291 27.5251 23.0377 27.3143 23.1078C25.3294 23.7677 23.2064 24.125 21 24.125C18.7936 24.125 16.6706 23.7677 14.6857 23.1078C14.4749 23.0377 14.2863 22.9291 14.125 22.7916M14.125 22.7916C13.7317 22.4563 13.5 21.9491 13.5 21.4074V18.2547C13.5 17.354 14.1399 16.5757 15.0308 16.4424C15.9686 16.3021 16.9171 16.1943 17.875 16.1203M24.125 16.1203V15.375C24.125 14.3395 23.2855 13.5 22.25 13.5H19.75C18.7145 13.5 17.875 14.3395 17.875 15.375V16.1203M24.125 16.1203C23.0938 16.0406 22.0516 16 21 16C19.9484 16 18.9062 16.0406 17.875 16.1203M21 21.625H21.0062V21.6312H21V21.625Z"
																	stroke="white"
																	strokeLinecap="round"
																	strokeLinejoin="round"
																/>
															</svg>
															<span className="text-xs">
																Mobile App Development
															</span>
														</Link>
													</div>
												</div>
												<div className=" border border-[#1F1F1F] flex flex-col gap-6 rounded-xl mt-10  p-5">
													<div className="h-1/2 w-full flex  flex-col gap-4">
														<h3>Challenge</h3>
														<p className="text-sm text-[#8C8C8C]">
														A health and wellness startup sought to develop a comprehensive fitness tracker app to enhance user engagement and promote a healthier lifestyle. They needed an app that could provide real-time tracking, personalized recommendations, and integration with wearable devices.


														</p>
													</div>
													<div className="border-b border-[#1F1F1F]"></div>
													<div className="h-1/2 w-full flex p-4 flex-col gap-4">
														<h3>Solution</h3>
														<p className="text-sm text-[#8C8C8C]">
														We designed and developed a user-friendly fitness tracker app with features such as activity monitoring, goal setting, and integration with popular wearable devices. The app also included personalized workout plans and nutrition tracking.
														</p>
														
													</div>
													<div className="border-b border-[#1F1F1F]"></div>
													<div className="h-1/2 w-full flex p-4 flex-col gap-4">
														<h3>Outcome</h3>
														<p className="text-sm text-[#8C8C8C]">
														The app successfully increased user engagement by 40%, leading to a significant rise in user retention and positive feedback from the fitness community.

</p>
														
													</div>
												</div>
											</div>
										</div>
									</ScrollAnimation>
								</div>
							</div>
						</div>
						<div className=" rounded-b-xl absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[#0f0f0f] to-transparent"></div>
					</div>
				</ScrollAnimation>
				<ScrollAnimation variants={scaleUpVariants}>
					<div className=" mt-24  mx-5 min-h-[700px]  border border-[#262626] rounded-2xl p-5  my-cardBG flex flex-col items-center">
						<div className="mt-16 xl:w-[900px] flex flex-col gap-5 lg:px-10">
							<h2 className="text-2xl font-semibold text-center">
								Ready to Transform Your Digital Presence?
							</h2>
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
								<h4 className="font-semibold text-center">
									Online Inquiry Form
								</h4>
								<p className="lg:text-sm text-center text-xs text-[#808080]">
									Please fill in the following details, and we ll get back to
									you within 24 hours.
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
										<span className="text-xs sm:text-sm">
											Send your Inquiry
										</span>
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
		</>
	);
};

export default Services;
