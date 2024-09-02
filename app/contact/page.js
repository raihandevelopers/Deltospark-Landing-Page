"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import serviceLeftAngle from "@/public/serviceLeftAngle.svg";
import serviceRightAngle from "@/public/serviceRightAngle.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";
import ScrollAnimation from "@/components/ScrollAnimation";
import { scaleUpVariants } from "@/animation/variants";
import { Analytics } from "@vercel/analytics/react"

const Contact = () => {
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
					<div className="flex flex-col items-center mt-4 w-full sm:max-w-[1280px] p-4 sm:p-10 mx-auto gap-10 team-BG min-h-[300px] justify-center border border-[#1F1F1F] rounded-xl ">
						<h1 className="text-center text-3xl font-semibold lg:w-[500px]">
							<span className="text-[#808080]">Get in</span> Touch with Us Today!
						</h1>
						<p className="text-sm text-[#808080] text-center lg:w-[900px]">
						At Deltospark, we value your inquiries, feedback, and collaborations. Whether you are interested in our digital services, have questions about our projects, or want to explore potential partnerships, our dedicated team is here to assist you. Fill out the form below, and we'll get back to you within 24 hours. We look forward to supporting you on your digital journey.

</p>
						<div className="w-full">
							<ScrollAnimation variants={scaleUpVariants}>
								<div className="rounded-xl flex flex-col gap-6 border border-[#1F1F1F] bg-[#0f0f0f] p-4">
									<div className="w-full h-[80px] flex flex-col items-center justify-center p-2 gap-4">
										<h4 className="font-semibold text-center">Online Inquiry Form</h4>
										<p className="lg:text-sm text-center text-xs text-[#808080]">
											Please fill in the following details, and we ll get back to you
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
							</ScrollAnimation>
						</div>
					</div>
				</ScrollAnimation>
				<ScrollAnimation variants={scaleUpVariants}>
					<div className="flex md:flex-row flex-col items-center p-8 mt-24 max-w-[1280px] mx-auto gap-10  min-h-[300px] ">
						<div className="md:w-1/2"> 
							<ScrollAnimation variants={scaleUpVariants}>
								<div className="flex flex-col gap-5 justify-between  min-h-[250px] border border-[#1F1F1F] rounded-xl achievements-bg contactus-bg backdrop-filter backdrop-blur-xl bg-opacity-20 p-7">
									<div className="w-full items-center h-[40%] flex gap-4">
										<svg
											width="45"
											height="45"
											viewBox="0 0 58 58"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<rect
												x="0.5"
												y="0.5"
												width="57"
												height="57"
												rx="28.5"
												fill="url(#paint0_linear_26_2728)"
											/>
											<rect
												x="0.5"
												y="0.5"
												width="57"
												height="57"
												rx="28.5"
												stroke="url(#paint1_linear_26_2728)"
											/>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M29 18.4375C23.1665 18.4375 18.4375 23.1665 18.4375 29C18.4375 34.8335 23.1665 39.5625 29 39.5625C34.8335 39.5625 39.5625 34.8335 39.5625 29C39.5625 23.1665 34.8335 18.4375 29 18.4375ZM29.8125 22.5C29.8125 22.0513 29.4487 21.6875 29 21.6875C28.5513 21.6875 28.1875 22.0513 28.1875 22.5V29C28.1875 29.4487 28.5513 29.8125 29 29.8125H33.875C34.3237 29.8125 34.6875 29.4487 34.6875 29C34.6875 28.5513 34.3237 28.1875 33.875 28.1875H29.8125V22.5Z"
												fill="white"
											/>
											<defs>
												<linearGradient
													id="paint0_linear_26_2728"
													x1="29"
													y1="0"
													x2="29"
													y2="58"
													gradientUnits="userSpaceOnUse"
												>
													<stop stop-color="#1A1A1A" />
													<stop offset="1" stop-color="#1A1A1A" stop-opacity="0" />
												</linearGradient>
												<linearGradient
													id="paint1_linear_26_2728"
													x1="29"
													y1="0"
													x2="29"
													y2="58"
													gradientUnits="userSpaceOnUse"
												>
													<stop stop-color="#262626" />
													<stop offset="1" stop-color="#262626" stop-opacity="0" />
												</linearGradient>
											</defs>
										</svg>

										<h3>Our Resopnse</h3>
									</div>
									<div className="w-full h-[60%]">
										<p className="text-sm text-[#8C8C8C]">
											We understand the importance of timely responses, and our team
											is committed to addressing your inquiries promptly. Whether you
											have a specific project in mind, need advice on digital
											strategies, or want to explore partnership opportunities, we are
											here to assist you at every step.
										</p>
									</div>
								</div>
							</ScrollAnimation>
						</div>
						<div className="md:w-1/2"> 
							<ScrollAnimation variants={scaleUpVariants}>
								<div className="flex flex-col gap-5 justify-between  min-h-[250px] border border-[#1F1F1F] rounded-xl achievements-bg contactus-bg backdrop-filter backdrop-blur-xl bg-opacity-20 p-7">
									<div className="w-full items-center h-[40%] flex gap-4">
										<svg
											width="45"
											height="45"
											viewBox="0 0 58 58"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<rect
												x="0.5"
												y="0.5"
												width="57"
												height="57"
												rx="28.5"
												fill="url(#paint0_linear_26_2728)"
											/>
											<rect
												x="0.5"
												y="0.5"
												width="57"
												height="57"
												rx="28.5"
												stroke="url(#paint1_linear_26_2728)"
											/>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M29 18.4375C23.1665 18.4375 18.4375 23.1665 18.4375 29C18.4375 34.8335 23.1665 39.5625 29 39.5625C34.8335 39.5625 39.5625 34.8335 39.5625 29C39.5625 23.1665 34.8335 18.4375 29 18.4375ZM29.8125 22.5C29.8125 22.0513 29.4487 21.6875 29 21.6875C28.5513 21.6875 28.1875 22.0513 28.1875 22.5V29C28.1875 29.4487 28.5513 29.8125 29 29.8125H33.875C34.3237 29.8125 34.6875 29.4487 34.6875 29C34.6875 28.5513 34.3237 28.1875 33.875 28.1875H29.8125V22.5Z"
												fill="white"
											/>
											<defs>
												<linearGradient
													id="paint0_linear_26_2728"
													x1="29"
													y1="0"
													x2="29"
													y2="58"
													gradientUnits="userSpaceOnUse"
												>
													<stop stop-color="#1A1A1A" />
													<stop offset="1" stop-color="#1A1A1A" stop-opacity="0" />
												</linearGradient>
												<linearGradient
													id="paint1_linear_26_2728"
													x1="29"
													y1="0"
													x2="29"
													y2="58"
													gradientUnits="userSpaceOnUse"
												>
													<stop stop-color="#262626" />
													<stop offset="1" stop-color="#262626" stop-opacity="0" />
												</linearGradient>
											</defs>
										</svg>

										<h3>Agile Development Process
										</h3>
									</div>
									<div className="w-full h-[60%]">
										<p className="text-sm text-[#8C8C8C]">
										Our agile development process ensures that your projects are completed efficiently and effectively. We prioritize flexibility, collaboration, and customer satisfaction, enabling us to adapt to changing requirements and deliver outstanding results on time and within budget.

</p>
									</div>
								</div>
							</ScrollAnimation>
						</div>
					</div>
				</ScrollAnimation>
				<ScrollAnimation variants={scaleUpVariants}>
					<div className="flex flex-col items-center p-8 mt-24 max-w-[1280px] mx-auto gap-10  min-h-[300px] ">
						<div className="flex flex-col gap-4  items-center">
							<h4>Join Us on Social Media</h4>
							<p className="text-sm text-center text-[#808080]">
								Stay updated with our latest projects, industry insights, and
								company news by following us on social media
							</p>
						</div>
						<div className="w-full">
							<ScrollAnimation variants={scaleUpVariants}>
								<div className="min-h-[250px] py-5 achievements-bg border border-[#1F1F1F] rounded-xl backdrop-filter backdrop-blur-xl bg-opacity-20 flex gap-8 flex-col items-center justify-center ">
									<div className="flex gap-4 items-center justify-center">
										<Link href={"https://www.linkedin.com/company/deltospark/"}>
											<svg
												width="45"
												height="45"
												viewBox="0 0 59 58"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect
													x="1"
													y="0.5"
													width="57"
													height="57"
													rx="28.5"
													fill="url(#paint0_linear_26_2748)"
												/>
												<rect
													x="1"
													y="0.5"
													width="57"
													height="57"
													rx="28.5"
													stroke="url(#paint1_linear_26_2748)"
												/>
												<g clip-path="url(#clip0_26_2748)">
													<path
														d="M16.6426 17.983C16.6426 16.967 17.4925 16.1431 18.5407 16.1431H40.4296C41.4778 16.1431 42.3277 16.967 42.3277 17.983V39.9883C42.3277 41.0046 41.4778 41.8282 40.4296 41.8282H18.5407C17.4925 41.8282 16.6426 41.0046 16.6426 39.9883V17.983Z"
														fill="white"
													/>
													<path
														d="M22.4893 24.4628C23.842 24.4628 24.6842 23.5721 24.6842 22.4591C24.6591 21.321 23.8423 20.4551 22.515 20.4551C21.1879 20.4551 20.3203 21.321 20.3203 22.4591C20.3203 23.5721 21.1622 24.4628 22.4642 24.4628H22.4893Z"
														fill="#0F0F0F"
													/>
													<path
														d="M24.4284 37.6437V26.0454H20.5488V37.6437H24.4284Z"
														fill="#0F0F0F"
													/>
													<path
														d="M26.5762 37.6437H30.4558V31.1667C30.4558 30.82 30.4809 30.4738 30.5833 30.2261C30.8639 29.5335 31.502 28.8163 32.5739 28.8163C33.9778 28.8163 34.5394 29.8799 34.5394 31.439V37.6437H38.4185V30.9935C38.4185 27.431 36.5046 25.7734 33.9521 25.7734C31.8593 25.7734 30.9404 26.9358 30.4298 27.7275H30.4558V26.0454H26.5762C26.627 27.1339 26.5762 37.6437 26.5762 37.6437Z"
														fill="#0F0F0F"
													/>
												</g>
												<defs>
													<linearGradient
														id="paint0_linear_26_2748"
														x1="29.5"
														y1="0"
														x2="29.5"
														y2="58"
														gradientUnits="userSpaceOnUse"
													>
														<stop stop-color="#1A1A1A" />
														<stop offset="1" stop-color="#1A1A1A" stop-opacity="0" />
													</linearGradient>
													<linearGradient
														id="paint1_linear_26_2748"
														x1="29.5"
														y1="0"
														x2="29.5"
														y2="58"
														gradientUnits="userSpaceOnUse"
													>
														<stop stop-color="#262626" />
														<stop offset="1" stop-color="#262626" stop-opacity="0" />
													</linearGradient>
													<clipPath id="clip0_26_2748">
														<rect
															width="26"
															height="26"
															fill="white"
															transform="translate(16.5 16)"
														/>
													</clipPath>
												</defs>
											</svg>
										</Link>
										<Link href={"https://instagram.com/deltospark"}>
											<svg
												width="45"
												height="45"
												viewBox="0 0 59 58"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect
													x="1"
													y="0.5"
													width="57"
													height="57"
													rx="28.5"
													fill="url(#paint0_linear_26_2755)"
												/>
												<rect
													x="1"
													y="0.5"
													width="57"
													height="57"
													rx="28.5"
													stroke="url(#paint1_linear_26_2755)"
												/>
												<rect
													x="18.125"
													y="17.625"
													width="22.75"
													height="22.75"
													rx="6"
													fill="url(#paint2_radial_26_2755)"
												/>
												<rect
													x="18.125"
													y="17.625"
													width="22.75"
													height="22.75"
													rx="6"
													fill="url(#paint3_radial_26_2755)"
												/>
												<rect
													x="18.125"
													y="17.625"
													width="22.75"
													height="22.75"
													rx="6"
													fill="white"
												/>
												<path
													d="M35.1875 24.5312C35.1875 25.2043 34.6418 25.75 33.9688 25.75C33.2957 25.75 32.75 25.2043 32.75 24.5312C32.75 23.8582 33.2957 23.3125 33.9688 23.3125C34.6418 23.3125 35.1875 23.8582 35.1875 24.5312Z"
													fill="#1A1A1A"
												/>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M29.5 33.0625C31.7437 33.0625 33.5625 31.2437 33.5625 29C33.5625 26.7563 31.7437 24.9375 29.5 24.9375C27.2563 24.9375 25.4375 26.7563 25.4375 29C25.4375 31.2437 27.2563 33.0625 29.5 33.0625ZM29.5 31.4375C30.8462 31.4375 31.9375 30.3462 31.9375 29C31.9375 27.6538 30.8462 26.5625 29.5 26.5625C28.1538 26.5625 27.0625 27.6538 27.0625 29C27.0625 30.3462 28.1538 31.4375 29.5 31.4375Z"
													fill="#1A1A1A"
												/>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M21.375 28.675C21.375 25.9447 21.375 24.5796 21.9063 23.5368C22.3737 22.6195 23.1195 21.8737 24.0368 21.4063C25.0796 20.875 26.4447 20.875 29.175 20.875H29.825C32.5553 20.875 33.9204 20.875 34.9632 21.4063C35.8805 21.8737 36.6263 22.6195 37.0937 23.5368C37.625 24.5796 37.625 25.9447 37.625 28.675V29.325C37.625 32.0553 37.625 33.4204 37.0937 34.4632C36.6263 35.3805 35.8805 36.1263 34.9632 36.5937C33.9204 37.125 32.5553 37.125 29.825 37.125H29.175C26.4447 37.125 25.0796 37.125 24.0368 36.5937C23.1195 36.1263 22.3737 35.3805 21.9063 34.4632C21.375 33.4204 21.375 32.0553 21.375 29.325V28.675ZM29.175 22.5H29.825C31.2169 22.5 32.1632 22.5013 32.8946 22.561C33.607 22.6192 33.9713 22.7247 34.2255 22.8542C34.837 23.1658 35.3342 23.663 35.6458 24.2745C35.7753 24.5287 35.8808 24.893 35.939 25.6054C35.9987 26.3368 36 27.2831 36 28.675V29.325C36 30.7169 35.9987 31.6632 35.939 32.3946C35.8808 33.107 35.7753 33.4713 35.6458 33.7255C35.3342 34.337 34.837 34.8342 34.2255 35.1458C33.9713 35.2753 33.607 35.3808 32.8946 35.439C32.1632 35.4987 31.2169 35.5 29.825 35.5H29.175C27.7831 35.5 26.8368 35.4987 26.1054 35.439C25.393 35.3808 25.0287 35.2753 24.7745 35.1458C24.163 34.8342 23.6658 34.337 23.3542 33.7255C23.2247 33.4713 23.1192 33.107 23.061 32.3946C23.0013 31.6632 23 30.7169 23 29.325V28.675C23 27.2831 23.0013 26.3368 23.061 25.6054C23.1192 24.893 23.2247 24.5287 23.3542 24.2745C23.6658 23.663 24.163 23.1658 24.7745 22.8542C25.0287 22.7247 25.393 22.6192 26.1054 22.561C26.8368 22.5013 27.7831 22.5 29.175 22.5Z"
													fill="#1A1A1A"
												/>
												<defs>
													<linearGradient
														id="paint0_linear_26_2755"
														x1="29.5"
														y1="0"
														x2="29.5"
														y2="58"
														gradientUnits="userSpaceOnUse"
													>
														<stop stop-color="#1A1A1A" />
														<stop offset="1" stop-color="#1A1A1A" stop-opacity="0" />
													</linearGradient>
													<linearGradient
														id="paint1_linear_26_2755"
														x1="29.5"
														y1="0"
														x2="29.5"
														y2="58"
														gradientUnits="userSpaceOnUse"
													>
														<stop stop-color="#262626" />
														<stop offset="1" stop-color="#262626" stop-opacity="0" />
													</linearGradient>
													<radialGradient
														id="paint2_radial_26_2755"
														cx="0"
														cy="0"
														r="1"
														gradientUnits="userSpaceOnUse"
														gradientTransform="translate(26.25 34.6875) rotate(-55.3758) scale(20.7347)"
													>
														<stop stop-color="#B13589" />
														<stop offset="0.79309" stop-color="#C62F94" />
														<stop offset="1" stop-color="#8A3AC8" />
													</radialGradient>
													<radialGradient
														id="paint3_radial_26_2755"
														cx="0"
														cy="0"
														r="1"
														gradientUnits="userSpaceOnUse"
														gradientTransform="translate(25.4375 41.1875) rotate(-65.1363) scale(18.3578)"
													>
														<stop stop-color="#E0E8B7" />
														<stop offset="0.444662" stop-color="#FB8A2E" />
														<stop offset="0.71474" stop-color="#E2425C" />
														<stop offset="1" stop-color="#E2425C" stop-opacity="0" />
													</radialGradient>
												</defs>
											</svg>
										</Link>
										<Link href={"https://x.com/deltospark"}>
											<svg
												width="45"
												height="45"
												viewBox="0 0 59 58"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect
													x="1"
													y="0.5"
													width="57"
													height="57"
													rx="28.5"
													fill="url(#paint0_linear_26_2761)"
												/>
												<rect
													x="1"
													y="0.5"
													width="57"
													height="57"
													rx="28.5"
													stroke="url(#paint1_linear_26_2761)"
												/>
												<g clip-path="url(#clip0_26_2761)">
													<path
														d="M24.72 39.4213C34.4124 39.4213 39.7138 31.391 39.7138 24.4274C39.7138 24.1994 39.7138 23.9722 39.6984 23.7462C40.7298 23.0002 41.62 22.0767 42.3274 21.0184C41.3657 21.4445 40.3454 21.7242 39.3006 21.8475C40.4008 21.1888 41.2241 20.1531 41.6174 18.9328C40.5829 19.5467 39.4513 19.9793 38.2712 20.2119C36.2755 18.0898 32.9372 17.9873 30.8151 19.9831C29.4463 21.2702 28.8659 23.188 29.2905 25.0182C25.0539 24.8056 21.1061 22.8044 18.4303 19.5122C17.0316 21.92 17.7459 25.0005 20.0618 26.5467C19.2231 26.5219 18.4029 26.2956 17.67 25.8872C17.67 25.9089 17.67 25.9314 17.67 25.954C17.6706 28.4626 19.4388 30.623 21.8978 31.1199C21.1221 31.3313 20.3078 31.3624 19.5182 31.2103C20.2085 33.357 22.1869 34.8276 24.4414 34.8699C22.5753 36.3365 20.2702 37.1325 17.8969 37.1302C17.4776 37.1293 17.059 37.1039 16.6426 37.054C19.0524 38.6005 21.8567 39.4207 24.72 39.417"
														fill="white"
													/>
												</g>
												<defs>
													<linearGradient
														id="paint0_linear_26_2761"
														x1="29.5"
														y1="0"
														x2="29.5"
														y2="58"
														gradientUnits="userSpaceOnUse"
													>
														<stop stop-color="#1A1A1A" />
														<stop offset="1" stop-color="#1A1A1A" stop-opacity="0" />
													</linearGradient>
													<linearGradient
														id="paint1_linear_26_2761"
														x1="29.5"
														y1="0"
														x2="29.5"
														y2="58"
														gradientUnits="userSpaceOnUse"
													>
														<stop stop-color="#262626" />
														<stop offset="1" stop-color="#262626" stop-opacity="0" />
													</linearGradient>
													<clipPath id="clip0_26_2761">
														<rect
															width="26"
															height="26"
															fill="white"
															transform="translate(16.5 16)"
														/>
													</clipPath>
												</defs>
											</svg>
										</Link>
									</div>
									<div className="w-[70%] mx-auto min-h-[120px] flex flex-col gap-5 justify-center items-center">
										<h4 className=" text-center text-lg">Thank You!</h4>
										<p className="text-sm text-[#808080] text-center">
											For considering Deltospark for your digital needs. We look forward
											to connecting with you and being part of your digital success!
										</p>
									</div>
								</div>
							</ScrollAnimation>
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
							Take the first step towards digital success with Deltospark by
								your side. Our team of experts is eager to craft tailored solutions that drive growth for your business. Whether you need a stunning website, a powerful mobile app, or cutting-edge blockchain, dApp, and AI/ML solutions, we've got you covered. Let’s embark on this transformative journey together.
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

						<div className="h-[390px] w-full flex justify-center items-center">
      <img src="/deltospark big logo.png" alt="Deltospark Logo - Premier Software Development Agency"
 />
						</div>
					</div>
				</ScrollAnimation>
			</main>
		</>
	);
};

export default Contact;
