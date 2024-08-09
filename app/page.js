"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import React from "react";
import "./globals.css";
import Link from "next/link";
import iconOne from "../public/iconOne.svg";
import iconTwo from "../public/iconTwo.svg";
import iconThree from "../public/iconThree.svg";
import iconFourth from "../public/iconFourth.svg";
import iconFifth from "../public/iconFifth.svg";
import iconSixth from "../public/iconSixth.svg";
import cardIconOne from "../public/cardIconOne.svg";
import cardIconTwo from "../public/cardIconTwo.svg";
import cardIconThree from "../public/cardIconThree.svg";
import cardIconFourth from "../public/cardIconFourth.svg";
import workCardIconOne from "../public/workCardIconOne.svg";
import workCardIconTwo from "../public/workCardIconTwo.svg";
import workCardIconThree from "../public/workCardIconThree.svg";
import workCardIconFour from "../public/workCardIconFour.svg";
import cardLogo from "../public/cardLogo.svg";
import thirdPartner from "../public/thirdPartner.svg";
import profile from "../public/porfile.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";
import ScrollAnimation from "@/components/ScrollAnimation";
import { variants, scaleUpVariants } from "@/animation/variants";
import servicesprotfolio1 from "@/public/servicesprotfolio1.jpg";
import servicesprotfolio2 from "@/public/servicesportfolio2.jpg";
import servicesprotfolio3 from "@/public/Hov3r Web3 Marketplace/hovrbanner.jpg";
import servicesprotfolio4 from "@/public/Plenty Blockchain/Plentybanner.jpg";
import servicesprotfolio5 from "@/public/MLB/mlb1.jpg";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function Home() {
	const [isHidden1, setIsHidden1] = useState(true);
	const [isHidden2, setIsHidden2] = useState(true);
	const [isHidden3, setIsHidden3] = useState(true);
	const [isHidden4, setIsHidden4] = useState(true);
	const [isHidden5, setIsHidden5] = useState(true);
	const [isHidden6, setIsHidden6] = useState(true);
	const [isHidden7, setIsHidden7] = useState(true);
	const [isHidden, setIsHidden] = useState(true);

	const toggleVisibility1 = () => {
		setIsHidden1(!isHidden1);
	};
	const toggleVisibility2 = () => {
		setIsHidden2(!isHidden2);
	};
	const toggleVisibility3 = () => {
		setIsHidden3(!isHidden3);
	};
	const toggleVisibility4 = () => {
		setIsHidden4(!isHidden4);
	};
	const toggleVisibility5 = () => {
		setIsHidden5(!isHidden5);
	};
	const toggleVisibility6 = () => {
		setIsHidden6(!isHidden6);
	};
	const toggleVisibility7 = () => {
		setIsHidden7(!isHidden7);
	};
	const toggleVisibility = () => {
		setIsHidden(!isHidden);
	};


	const testimonials = [
		{
			quote:
				"Deltospark transformed our online presence, bringing our vision to life. The website they built for us is not only visually stunning but also highly functional.",
			name: "Jane Doe",
			title: "CEO of TechWorld",
		},	
		{
			quote: "Deltospark has been amazing, handling our mobile app, web development, backend, and AI needs. We've collaborated for over 1.5 years, with great customer feedback.",
			name: "Shaiquel Jilani",
			title: "Founder of Pinksurfing",
		  },
		  
		
		  {
			quote: "Deltospark developed an excellent e-commerce site with multivendor functionality for us. There was no delay in image loading, and the website runs smoothly and efficiently.",
			name: "Alex Johnson",
			title: "CTO Furniture E-commerce",

		  },
		  
		{
			quote:
				"We have seen a significant increase in traffic and engagement since Deltospark revamped our site. Their team's expertise is unmatched.",
			name: "John Smith",
			title: "Marketing Director at SalesCorp",
		},
		{
			quote: "We've collaborated on numerous projects, primarily focused on website development and saas development. Deltospark consistently delivers outstanding results.",
			name: "Susie Ayala",
			title: "Founder of S&E Optimises",
		  }
		  
	];

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
			<main className=" mx-auto ">
			<Analytics />
			<SpeedInsights />

			

				<ScrollAnimation variants={scaleUpVariants}>
					<div className="Hero-section flex md:h-[550px] min-h-[400px]">
						<div className="flex flex-col gap-10 lg:w-1/2   my-element">
							<div className="flex flex-col m-auto gap-3 max-w-[85%]">
								<h1 className="xl:text-4xl text-3xl font-semibold ">
									Digital Solution{" "}
									<span className="text-[#666666]">That Drive Success</span>
								</h1>

								<p className="text-sm  text-[#808080]  min-h-[120px]">
									Welcome to Deltospark, your ultimate 360° tech hub. We
									specialize in everything from website development and app
									development to backend solutions, AI, machine learning,
									blockchain, and data-driven marketing. Our mission is simple:
									to help your business thrive in the digital age. With
									Deltospark, you're not just getting a service provider—you're
									gaining a partner committed to your success.
								</p>
								<div className="w-[260px] h-[89px] flex flex-col gap-3">
									<span className="md:text-m text-xs text-left font-medium">
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
							</div>
						</div>
					    <div className="w-1/2 text-5xl justify-center items-center lg:flex bg-[#090909a2] hidden">
      <img src="/biglogo.png" alt="Logo" />
    </div>

					</div>
				</ScrollAnimation>
				<ScrollAnimation variants={scaleUpVariants}>
					<div className="flex flex-col items-center mt-24  w-full sm:max-w-[1280px] mx-auto gap-5 p-4 sm:px-10">
						<h1 className="text-center text-3xl font-semibold xl:w-[500px]">
							Reasons to Choose Deltospark for{" "}
							<span className="text-[#808080]">Your Digital Journey</span>
						</h1>
						<p className="text-sm text-[#808080] text-center xl:w-[900px]">
							Partner with Deltospark and Transform Your Business. Unlock a
							world of advantages with Deltospark. Boost your brand visibility,
							engage customers like never before, and see a higher ROI with our
							cutting-edge solutions. Our expert team crafts tailored strategies
							to meet your unique business needs, ensuring you stay ahead in the
							digital game. Experience lasting success with Deltospark—your
							partner in innovation.
						</p>
						<div className="Items-container gap-[40px] flex justify-between flex-col mt-16 transition-all duration-300">
							<div className="flex lg:flex-row flex-col gap-[40px] min-h-[240px] transition-all duration-200">
								<div className="first-item lg:w-1/3">
									<ScrollAnimation variants={scaleUpVariants}>
										<div className="flex flex-col items-center gap-5">
											<Image src={iconOne} alt="" width={70} height={70} />
											<div className="flex items-center flex-col gap-3">
												<h3 className="xl:text-[18px] font-semibold text-center">
													Expertise That Drives Results
												</h3>
												<p className="text-sm text-center w-[90%] text-[#8C8C8C]">
													Our team of seasoned professionals brings years of
													experience and expertise to the table.
												</p>
											</div>
										</div>
									</ScrollAnimation>
								</div>
								<div className="border-r border-[#1F1F1F]"></div>
								<div className="border-b lg:hidden block border-[#1F1F1F]"></div>
								<div className="second-item  lg:w-1/3">
									<ScrollAnimation variants={scaleUpVariants}>
										<div className="flex flex-col items-center gap-5">
											<Image src={iconTwo} alt="" width={70} height={70} />
											<div className="flex items-center flex-col gap-3">
												<h3 className="xl:text-[18px] font-semibold text-center">
													Tailored Business Solutions
												</h3>
												<p className="text-sm text-center w-[90%] text-[#8C8C8C]">
													We understand that every business is unique. That s
													why our solutions are customized.
												</p>
											</div>
										</div>
									</ScrollAnimation>
								</div>

								<div className="border-r border-[#1F1F1F]"></div>
								<div className="border-b lg:hidden block border-[#1F1F1F]"></div>
								<div className="Third-item  lg:w-1/3">
									<ScrollAnimation variants={scaleUpVariants}>
										<div className="flex flex-col items-center gap-5">
											<Image src={iconThree} alt="" width={70} height={70} />
											<div className="flex flex-col items-center gap-3">
												<h3 className="xl:text-[18px] font-semibold text-center">
													Cutting-Edge Website Development
												</h3>
												<p className="text-sm text-center w-[90%] text-[#8C8C8C]">
													Captivate your audience with our innovative,
													high-performance websites. Elevate your brand
													effortlessly.
												</p>
											</div>
										</div>
									</ScrollAnimation>
								</div>
							</div>

							<div className=" border-b border-[#1F1F1F]"></div>
							<div className="flex lg:flex-row flex-col gap-[40px] min-h-[240px] transition-all duration-200">
								<div className="fourth-item lg:w-1/3">
									<ScrollAnimation variants={scaleUpVariants}>
										<div className="flex flex-col items-center gap-5">
											<Image src={iconFourth} alt="" width={70} height={70} />
											<div className="flex flex-col items-center gap-3">
												<h3 className="text-[18px] font-semibold text-center">
													Innovative App Development
												</h3>
												<p className="text-sm text-center w-[90%] text-[#8C8C8C]">
													From concept to launch, our app development team
													creates user-friendly and high-performing apps.
												</p>
											</div>
										</div>
									</ScrollAnimation>
								</div>
								<div className="border-b lg:hidden block border-[#1F1F1F]"></div>
								<div className="border-r border-[#1F1F1F]"></div>
								<div className=" fifth-item lg:w-1/3">
									<ScrollAnimation variants={scaleUpVariants}>
										<div className="flex flex-col items-center gap-5">
											<Image src={iconFifth} alt="" width={70} height={70} />
											<div className="flex flex-col items-center gap-3">
												<h3 className="text-[18px] font-semibold text-center">
													Robust Backend Solutions
												</h3>
												<p className="text-sm w-[90%]  text-center text-[#8C8C8C]">
													Ensure your digital infrastructure is reliable and
													scalable with our expert backend development services.
												</p>
											</div>
										</div>
									</ScrollAnimation>
								</div>
								<div className="border-b lg:hidden block border-[#1F1F1F]"></div>
								<div className="border-r border-[#1F1F1F]"></div>
								<div className=" sixth-item lg:w-1/3">
									<ScrollAnimation variants={scaleUpVariants}>
										<div className="flex flex-col items-center gap-5">
											<Image src={iconSixth} alt="" width={70} height={70} />
											<div className="flex flex-col items-center gap-3">
												<h3 className="xl:text-[18px]  font-semibold text-center">
													AI & Machine Learning
												</h3>
												<p className="text-sm w-[90%] text-center text-[#8C8C8C]">
													Leverage the power of AI and machine learning to
													automate processes and gain deeper insights.
												</p>
											</div>
										</div>
									</ScrollAnimation>
								</div>
							</div>
						</div>
					</div>
				</ScrollAnimation>
				<ScrollAnimation variants={scaleUpVariants}>
					<div className="flex flex-col items-center mt-24 w-full sm:max-w-[1280px] p-4 sm:px-10 mx-auto gap-10">
						<h1 className="text-center sm:text-3xl text-xl font-semibold xl:w-[500px]">
							<span className="text-[#808080]">Our</span> Services
						</h1>
						<p className="text-sm text-[#808080] text-center xl:w-[900px]">
							Our comprehensive range of services includes website development,
							mobile app development, web design, backend solutions, AI, machine
							learning, blockchain technology, SEO, data-driven marketing
							strategies, and more. Whether you’re a startup or an established
							enterprise, our experts will craft solutions that drive results.
						</p>
						<div className="w-full flex lg:flex-row flex-col gap-10 ">
							<div className="lg:w-1/2">
								<ScrollAnimation variants={scaleUpVariants}>
									<div className="border border-[#292929] p-4 min-h-[520px] rounded-2xl my-cardBG flex flex-col justify-center items-center lg:gap-10 gap-4">
										<Image src={cardIconOne} width={100} height={100} alt="" />
										<div className="flex flex-col justify-center items-center gap-4 md:w-[80%]">
											<h3 className="text-xl text-center font-semibold">
												Website Development
											</h3>
											<p className="text-sm text-center text-[#8C8C8C]">
												Unlock Your Online Potential In today s digital age, a
												powerful web presence is essential for any business. At
												Deltospark, our web development services empower you to
												stand out in the crowded online landscape. We create
												responsive and dynamic websites tailored to your unique
												needs, ensuring seamless user experiences across all
												devices. From e-commerce platforms to interactive web
												applications, our expert developers bring your vision to
												life, making your online journey a resounding success.
											</p>
										</div>
									</div>
								</ScrollAnimation>
							</div>
							<div className="lg:w-1/2">
								<ScrollAnimation variants={scaleUpVariants}>
									<div className="border border-[#292929] p-4 min-h-[520px] rounded-2xl my-cardBG flex flex-col justify-center items-center lg:gap-10 gap-4">
										<Image src={cardIconTwo} width={100} height={100} alt="" />
										<div className="flex flex-col justify-center items-center gap-4 md:w-[80%]">
											<h3 className="text-xl font-semibold text-center">
												Mobile App Development
											</h3>
											<p className="text-sm text-center text-[#8C8C8C]">
												Embrace Mobility with Confidence Mobile devices have
												revolutionized the way we interact with the world. Our
												mobile app development services enable you to harness
												this mobility to your advantage. We design and build
												intuitive and high-performance mobile applications that
												captivate your audience and boost engagement. Whether it
												s iOS, Android, or cross-platform development, we ensure
												that your app delivers a seamless experience, leaving a
												lasting impression on your users.
											</p>
										</div>
									</div>
								</ScrollAnimation>
							</div>
						</div>
						<div className="w-full flex-col lg:flex-row flex gap-10 ">
							<div className="lg:w-1/2">
								<ScrollAnimation variants={scaleUpVariants}>
									<div className="flex flex-col justify-center items-center min-h-[520px] lg:gap-10 gap-4  border border-[#292929] p-4 rounded-2xl my-cardBG">
										<Image
											src={cardIconThree}
											width={100}
											height={100}
											alt=""
										/>
										<div className="flex flex-col justify-center items-center gap-4 md:w-[80%]">
											<h3 className="text-xl font-semibold">Web Design</h3>
											<p className="text-sm text-center text-[#8C8C8C]">
												Elevate Your Brand Aesthetics Your website s design is a
												reflection of your brand s identity and values.
												Deltospark s web design services focus on creating
												visually striking and user-friendly interfaces that
												leave a lasting impact. Our creative team blends
												aesthetics with functionality, delivering a captivating
												user experience that keeps visitors coming back for
												more. Let us transform your online presence into an
												immersive journey that showcases your brand s true
												essence.
											</p>
										</div>
									</div>
								</ScrollAnimation>
							</div>
							<div className="lg:w-1/2">
								<ScrollAnimation variants={scaleUpVariants}>
									<div className="flex flex-col justify-center items-center min-h-[520px] lg:gap-10 gap-4 border border-[#292929] p-4 rounded-2xl my-cardBG ">
										<Image
											src={cardIconFourth}
											width={100}
											height={100}
											alt=""
										/>
										<div className="flex flex-col justify-center items-center gap-4 md:w-[80%]">
											<h3 className="text-xl font-semibold">
											AI & Machine Learning
											</h3>
											<p className="text-sm text-center text-[#8C8C8C]">
											Drive Your Business Forward In the rapidly evolving tech landscape, leveraging cutting-edge technology is crucial. Our AI and machine learning services help you stay ahead of the curve and optimize your operations. From predictive analytics to natural language processing and intelligent automation, our data-driven solutions ensure that your business harnesses the full potential of AI and machine learning.


											</p>
										</div>
									</div>
								</ScrollAnimation>
							</div>
						</div>
					</div>
				</ScrollAnimation>
				<ScrollAnimation variants={scaleUpVariants}>
					<div className="flex flex-col items-center mt-24  w-full sm:max-w-[1280px] mx-auto gap-10 p-4 sm:px-10">
						<h1 className="text-center text-3xl font-semibold xl:w-[500px]">
							<span className="text-[#808080]">Our</span> Works
						</h1>
						<p className="text-sm text-[#808080] text-center xl:w-[900px]">
							Witness the brilliance of our previous projects. Our portfolio
							showcases the successful collaborations we ve had with diverse
							clients across various industries. Let our work speak for itself.
						</p>
						<div className="w-full min-h-[500px] flex-col lg:flex-row flex gap-10 justify-center">
							<ScrollAnimation variants={scaleUpVariants}>
							<div className="flex flex-col justify-between w-full h-full bg-gradient-to-b from-[#1a1a1a] to-transparent via-[#1a1a1a0a] md:p-10 p-4 rounded-2xl border border-[#1F1F1F]">
  <div className="my-workCardBg w-full max-h-[400px] min-h-[300px] flex justify-center items-center border border-[#1F1F1F] rounded-2xl relative overflow-hidden">
    <Image
      src={servicesprotfolio1} 
      layout="fill"
      className="object-cover"
      alt="Project"
    />									
    			<div className=" absolute bottom-[-1px] mb-0.5 max-h-[50px] flex items-center gap-2 py-1 md:px-4 px-2 text-sm border border-[#1F1F1F] bg-[#121212] rounded-full">
											<Link href={"/projects"} className="text-xs">
												View Projects Details
											</Link>

											<div className="p-1 rounded-full ">
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
										</div>
									</div>
									<div className="min-h-[200px] w-full flex flex-col justify-evenly gap-3 mt-[40px]">
										<h4 className="font-semibold text-sm md:text-base w-fit">
										Pinksurfing: A Text Messenger-Based Business Hub and Multivendor E-commerce Platform

</h4>
										<div className="flex justify-between">
											<span className="text-xs md:text-sm">
												Category: App Development & E-Commerce
											</span>
											<span className="text-xs md:text-sm">May 2024
											</span>
										</div>
										<p className=" text-xs md:text-sm text-[#8C8C8C]">
										PinkSurfing is a pioneering platform that combines Blockchain technology with a text messenger-based business hub, a multi-vendor e-commerce marketplace, and a dual-functioning crypto wallet, enabling secure and cost-effective shopping.
										</p>
									</div>
								</div>
							</ScrollAnimation>
							<ScrollAnimation variants={scaleUpVariants}>
							<div className="flex flex-col justify-between w-full h-full bg-gradient-to-b from-[#1a1a1a] to-transparent via-[#1a1a1a0a] md:p-10 p-4 rounded-2xl border border-[#1F1F1F]">
  <div className="my-workCardBg w-full max-h-[400px] min-h-[300px] flex justify-center items-center border border-[#1F1F1F] rounded-2xl relative overflow-hidden">
    <Image
      src={servicesprotfolio3} 
      layout="fill"
      className="object-cover"
      alt="Project"
    />										
    			<div className="absolute bottom-[-1px] mb-0.5 max-h-[50px] flex items-center gap-2 py-1 md:px-4 px-2 text-sm border border-[#1F1F1F] bg-[#121212] rounded-full">
											<Link href={"/projects"} className="text-xs">
												View Projects Details
											</Link>

											<div className="p-1 rounded-full ">
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
										</div>
									</div>
									<div className="min-h-[200px] w-full flex flex-col gap-3 justify-evenly mt-[40px]">
										<h4 className="font-semibold md:text-base text-sm w-fit">
										Hovr: A Web3 Marketplace

</h4>
										<div className="flex justify-between">
											<span className="md:text-sm text-xs">
												Category: Blockchain & Web Development.
											</span>
											<span className="md:text-sm text-xs">Oct, 2023</span>
										</div>
										<p className="md:text-sm text-xs text-[#8C8C8C]">
										Hovr is an innovative NFT exchange designed to revolutionize the metaverse by integrating play-to-earn games, digital avatars, and decentralized experiences. It aims to lower minting and trading costs, maximizing profits for users.

</p>
									</div>
								</div>
							</ScrollAnimation>
						</div>
						<div className="w-full min-h-[500px] flex flex-col lg:flex-row gap-10 justify-center">
							<ScrollAnimation variants={scaleUpVariants}>
							<div className="flex flex-col justify-between w-full h-full bg-gradient-to-b from-[#1a1a1a] to-transparent via-[#1a1a1a0a] md:p-10 p-4 rounded-2xl border border-[#1F1F1F]">
  <div className="my-workCardBg w-full max-h-[400px] min-h-[300px] flex justify-center items-center border border-[#1F1F1F] rounded-2xl relative overflow-hidden">
    <Image
      src={servicesprotfolio4} 
      layout="fill"
      className="object-cover"
      alt="Project"
    />		
									<div className=" absolute bottom-[-1px] mb-0.5 max-h-[50px] flex items-center gap-2 py-1 md:px-4 px-2 text-sm border border-[#1F1F1F] bg-[#121212] rounded-full">
											<Link href={"/projects"} className="text-xs">
												View Projects Details
											</Link>

											<div className="p-1 rounded-full ">
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
										</div>
									</div>
									<div className="min-h-[200px] w-full flex flex-col justify-evenly mt-[40px]">
										<h4 className="font-semibold md:text-base text-sm w-fit">
										Plenty: A Decentralized Trading Platform

</h4>
										<div className="flex justify-between">
											<span className="md:text-sm text-xs">
												Category: Website Development & Web3.
											</span>
											<span className="md:text-sm text-xs">May 2024</span>
										</div>
										<p className="md:text-sm text-xs text-[#8C8C8C]">
										Plenty is a decentralized trading platform on Tezos. It allows seamless trading, swapping, and bridging between cryptocurrencies, with access to various liquidity pools. Trade and manage digital assets securely and efficiently.										</p>
									</div>
								</div>
							</ScrollAnimation>
							<ScrollAnimation variants={scaleUpVariants}>
							<div className="flex flex-col justify-between w-full h-full bg-gradient-to-b from-[#1a1a1a] to-transparent via-[#1a1a1a0a] md:p-10 p-4 rounded-2xl border border-[#1F1F1F]">
  <div className="my-workCardBg w-full max-h-[400px] min-h-[300px] flex justify-center items-center border border-[#1F1F1F] rounded-2xl relative overflow-hidden">
    <Image
      src={servicesprotfolio5} 
      layout="fill"
      className="object-cover"
      alt="Project"
    />		
    			<div className=" absolute bottom-[-1px] mb-0.5 max-h-[50px] flex items-center gap-2 py-1 md:px-4 px-2 text-sm border border-[#1F1F1F] bg-[#121212] rounded-full">
											<Link href={"/projects"} className="text-xs">
												View Projects Details
											</Link>

											<div className="p-1 rounded-full ">
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
										</div>
									</div>
									<div className="min-h-[200px] w-full flex flex-col gap-3 justify-evenly mt-[40px]">
										<h4 className="font-semibold text-sm md:text-base  w-fit ">
										Wizard of Odds: An Online Sports Betting Web App

</h4>
										<div className="flex justify-between">
											<span className="md:text-sm text-xs">
												Category: Website Development & ML
											</span>
											<span className="md:text-sm text-xs">Oct 2023</span>
										</div>
										<p className="md:text-sm text-xs text-[#8C8C8C]">
										Wizard of Odds is a web app for predicting MLB game outcomes. Log in, select a game, and weigh key stats like ERA and batting average to calculate the winning odds. Access real-time data and track your prediction history.
</p>
									</div>
								</div>
							</ScrollAnimation>
						</div>
						<ScrollAnimation variants={scaleUpVariants}>
							<Link
								className="h-[50px] flex items-center gap-2 py-2 px-4 text-sm border border-[#1F1F1F]  rounded-full"
								href={"/projects"}
							>
								View All Projects
								<div className="p-1 rounded-full ">
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
						</ScrollAnimation>
					</div>
				</ScrollAnimation>
				<ScrollAnimation variants={scaleUpVariants}>
					<div className="flex flex-col items-center mt-24  w-full sm:max-w-[1280px] mx-auto gap-10 relative">
						<div className="absolute w-72 left-0 bottom-0 h-[350px] bg-gradient-to-r from-[#0f0f0f] to-transparent hidden lg:block z-20"></div>

						<h1 className="text-center text-3xl font-semibold xl:w-[500px]">
							<span className="text-[#808080]">Our</span> Testimonials
						</h1>
						<p className="text-sm text-[#808080] text-center xl:w-[900px] w-[90vw]">
						Don't just take our word for it; hear what our satisfied clients have to say about their experience with Deltospark. We take pride in building lasting relationships and delivering exceptional results.







						</p>
						<div className="w-full  h-[300px] overflow-x-auto no-scrollbar ">
							<div className="flex gap-4 w-full animate-scroll">
								{testimonials.map((testimonial, index) => (
									<div key={index} className="h-full w-[350px]">
										<div className="flex flex-col gap-6 sm:w-[350px] w-[300px] h-[150px] items-center border border-[#262626] rounded-2xl p-5 py-8 bg-gradient-to-b from-[#1a1a1a] to-transparent via-[#1a1a1a59]">
											<p className="md:text-sm text-[12px] text-center">
												{testimonial.quote}
											</p>
										</div>
										<div className="ml-5">
											<svg
												width="33"
												height="16"
												viewBox="0 0 33 16"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M21.3395 13.55C18.9421 16.3969 14.5579 16.3969 12.1605 13.55L0.75 0L32.75 2.74432e-06L21.3395 13.55Z"
													fill="#262626"
												/>
											</svg>
										</div>
										<div className="mt-6 ml-2 flex items-center gap-2">
											<div className="flex flex-col justify-center">
												<h3 className="font-normal sm:text-base text-sm">
													{testimonial.name}
												</h3>
												<span className="text-[#808080] text-xs sm:text-sm">
													{testimonial.title}
												</span>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className="absolute w-72 right-0 bottom-0 h-[350px] bg-gradient-to-l from-[#0f0f0f] to-transparent hidden lg:block"></div>
					</div>
				</ScrollAnimation>
				<ScrollAnimation variants={scaleUpVariants}>
					<div className="flex flex-col items-center mt-24  w-full sm:max-w-[1280px] mx-auto gap-5 relative">
						<h1 className="text-center text-3xl font-semibold xl:w-[500px]">
							<span className="text-[#808080]">Frequently</span> Asked Questions
						</h1>
						<p className="text-sm text-[#808080] text-center xl:w-[900px] w-[90vw]">
							Got questions? We've got answers. Check out our frequently asked
							questions section to find valuable insights into our processes,
							pricing, and more. Transparency is at the core of our client
							interactions.
						</p>

						<div className="w-full min-h-[50vh] flex flex-col my-5 gap-10 xl:flex-row px-10">
							<div className="w-full gap-4 flex flex-col items-center">
								<ScrollAnimation variants={scaleUpVariants}>
									<div
										onClick={toggleVisibility1}
										className="cursor-pointer max-w-[620px] h-fit p-5 border-b gap-2 flex relative border-[#1a1a1a] transition-all duration-300"
									>
										<div className="flex flex-col gap-4">
											<h4 className="md:font-semibold min-w-[250px] text-left md:max-w-[500px]">
												How long does it take to complete a website development
												project?
											</h4>
											<p
												className={`text-sm text-[#8C8C8C] text-left ${
													isHidden1 ? "opacity-0 h-0" : "opacity-100 h-auto"
												} transition-opacity duration-700`}
											>
												The timeline varies depending on the project's
												complexity and requirements. Our team strives to deliver
												projects on time while maintaining the highest quality
												standards.
											</p>
										</div>
										<button
											onClick={toggleVisibility1}
											className={`hide absolute top-[15px] right-0  ${
												isHidden1 ? "opacity-0 h-0" : "opacity-100 h-auto"
											} transition-opacity duration-1000`}
										>
											<svg
												width="36"
												height="36"
												viewBox="0 0 44 44"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect width="44" height="44" rx="22" fill="#1A1A1A" />
												<path
													d="M29 21H15C14.7348 21 14.4804 21.1054 14.2929 21.2929C14.1054 21.4804 14 21.7348 14 22C14 22.2652 14.1054 22.5196 14.2929 22.7071C14.4804 22.8946 14.7348 23 15 23H29C29.2652 23 29.5196 22.8946 29.7071 22.7071C29.8946 22.5196 30 22.2652 30 22C30 21.7348 29.8946 21.4804 29.7071 21.2929C29.5196 21.1054 29.2652 21 29 21Z"
													fill="white"
												/>
											</svg>
										</button>
										<button
											onClick={toggleVisibility1}
											className={`Show absolute top-[15px] right-0  ${
												isHidden1 ? "opacity-100 h-auto" : "opacity-0 h-0"
											} transition-opacity duration-1000`}
										>
											<svg
												width="36"
												height="36"
												viewBox="0 0 44 44"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect width="44" height="44" rx="22" fill="#1A1A1A" />
												<path
													d="M29 21H23V15C23 14.7348 22.8946 14.4804 22.7071 14.2929C22.5196 14.1054 22.2652 14 22 14C21.7348 14 21.4804 14.1054 21.2929 14.2929C21.1054 14.4804 21 14.7348 21 15V21H15C14.7348 21 14.4804 21.1054 14.2929 21.2929C14.1054 21.4804 14 21.7348 14 22C14 22.2652 14.1054 22.5196 14.2929 22.7071C14.4804 22.8946 14.7348 23 15 23H21V29C21 29.2652 21.1054 29.5196 21.2929 29.7071C21.4804 29.8946 21.7348 30 22 30C22.2652 30 22.5196 29.8946 22.7071 29.7071C22.8946 29.5196 23 29.2652 23 29V23H29C29.2652 23 29.5196 22.8946 29.7071 22.7071C29.8946 22.5196 30 22.2652 30 22C30 21.7348 29.8946 21.4804 29.7071 21.2929C29.5196 21.1054 29.2652 21 29 21Z"
													fill="white"
												/>
											</svg>
										</button>
									</div>
								</ScrollAnimation>
								<ScrollAnimation variants={scaleUpVariants}>
									<div
										onClick={toggleVisibility2}
										className="cursor-pointer max-w-[620px] h-fit p-5 border-b gap-2 flex relative border-[#1a1a1a] transition-all"
									>
										<div className="flex flex-col gap-4">
											<h4 className="md:font-semibold text-left min-w-[250px] md:max-w-[500px]">
												Can you handle large-scale mobile app development
												projects?
											</h4>
											<p
												className={`text-sm text-[#8C8C8C] text-left ${
													isHidden2 ? "opacity-0 h-0" : "opacity-100 h-auto"
												} transition-opacity duration-1000`}
											>
												Yes, we specialize in handling large-scale mobile app development projects with a focus on efficiency and quality.
											</p>
										</div>
										<button
											onClick={toggleVisibility2}
											className={`hide absolute top-[15px] right-0  ${
												isHidden2 ? "opacity-0 h-0" : "opacity-100 h-auto"
											} transition-opacity duration-1000`}
										>
											<svg
												width="36"
												height="36"
												viewBox="0 0 44 44"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect width="44" height="44" rx="22" fill="#1A1A1A" />
												<path
													d="M29 21H15C14.7348 21 14.4804 21.1054 14.2929 21.2929C14.1054 21.4804 14 21.7348 14 22C14 22.2652 14.1054 22.5196 14.2929 22.7071C14.4804 22.8946 14.7348 23 15 23H29C29.2652 23 29.5196 22.8946 29.7071 22.7071C29.8946 22.5196 30 22.2652 30 22C30 21.7348 29.8946 21.4804 29.7071 21.2929C29.5196 21.1054 29.2652 21 29 21Z"
													fill="white"
												/>
											</svg>
										</button>
										<button
											onClick={toggleVisibility2}
											className={`Show absolute top-[15px] right-0  ${
												isHidden2 ? "opacity-100 h-auto" : "opacity-0 h-0"
											} transition-opacity duration-1000`}
										>
											<svg
												width="36"
												height="36"
												viewBox="0 0 44 44"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect width="44" height="44" rx="22" fill="#1A1A1A" />
												<path
													d="M29 21H23V15C23 14.7348 22.8946 14.4804 22.7071 14.2929C22.5196 14.1054 22.2652 14 22 14C21.7348 14 21.4804 14.1054 21.2929 14.2929C21.1054 14.4804 21 14.7348 21 15V21H15C14.7348 21 14.4804 21.1054 14.2929 21.2929C14.1054 21.4804 14 21.7348 14 22C14 22.2652 14.1054 22.5196 14.2929 22.7071C14.4804 22.8946 14.7348 23 15 23H21V29C21 29.2652 21.1054 29.5196 21.2929 29.7071C21.4804 29.8946 21.7348 30 22 30C22.2652 30 22.5196 29.8946 22.7071 29.7071C22.8946 29.5196 23 29.2652 23 29V23H29C29.2652 23 29.5196 22.8946 29.7071 22.7071C29.8946 22.5196 30 22.2652 30 22C30 21.7348 29.8946 21.4804 29.7071 21.2929C29.5196 21.1054 29.2652 21 29 21Z"
													fill="white"
												/>
											</svg>
										</button>
									</div>
								</ScrollAnimation>
								<ScrollAnimation variants={scaleUpVariants}>
									<div
										onClick={toggleVisibility3}
										className="cursor-pointer max-w-[620px] h-fit p-5 border-b gap-2 flex relative border-[#1a1a1a] transition-all"
									>
										<div className="flex flex-col gap-4">
											<h4 className="md:font-semibold min-w-[250px] text-left md:max-w-[500px]">
												Do you offer maintenance services for websites and apps
												developed by other companies?
											</h4>
											<p
												className={`text-sm text-[#8C8C8C] text-left ${
													isHidden3 ? "opacity-0 h-0" : "opacity-100 h-auto"
												} transition-opacity duration-1000`}
											>
												Yes, we provide maintenance services for websites and apps, regardless of the original developer.


											</p>
										</div>
										<button
											onClick={toggleVisibility3}
											className={`hide absolute top-[15px] right-0  ${
												isHidden3 ? "opacity-0 h-0" : "opacity-100 h-auto"
											} transition-opacity duration-1000`}
										>
											<svg
												width="36"
												height="36"
												viewBox="0 0 44 44"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect width="44" height="44" rx="22" fill="#1A1A1A" />
												<path
													d="M29 21H15C14.7348 21 14.4804 21.1054 14.2929 21.2929C14.1054 21.4804 14 21.7348 14 22C14 22.2652 14.1054 22.5196 14.2929 22.7071C14.4804 22.8946 14.7348 23 15 23H29C29.2652 23 29.5196 22.8946 29.7071 22.7071C29.8946 22.5196 30 22.2652 30 22C30 21.7348 29.8946 21.4804 29.7071 21.2929C29.5196 21.1054 29.2652 21 29 21Z"
													fill="white"
												/>
											</svg>
										</button>
										<button
											onClick={toggleVisibility3}
											className={`Show absolute top-[15px] right-0  ${
												isHidden3 ? "opacity-100 h-auto" : "opacity-0 h-0"
											} transition-opacity duration-1000`}
										>
											<svg
												width="36"
												height="36"
												viewBox="0 0 44 44"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect width="44" height="44" rx="22" fill="#1A1A1A" />
												<path
													d="M29 21H23V15C23 14.7348 22.8946 14.4804 22.7071 14.2929C22.5196 14.1054 22.2652 14 22 14C21.7348 14 21.4804 14.1054 21.2929 14.2929C21.1054 14.4804 21 14.7348 21 15V21H15C14.7348 21 14.4804 21.1054 14.2929 21.2929C14.1054 21.4804 14 21.7348 14 22C14 22.2652 14.1054 22.5196 14.2929 22.7071C14.4804 22.8946 14.7348 23 15 23H21V29C21 29.2652 21.1054 29.5196 21.2929 29.7071C21.4804 29.8946 21.7348 30 22 30C22.2652 30 22.5196 29.8946 22.7071 29.7071C22.8946 29.5196 23 29.2652 23 29V23H29C29.2652 23 29.5196 22.8946 29.7071 22.7071C29.8946 22.5196 30 22.2652 30 22C30 21.7348 29.8946 21.4804 29.7071 21.2929C29.5196 21.1054 29.2652 21 29 21Z"
													fill="white"
												/>
											</svg>
										</button>
									</div>
								</ScrollAnimation>
								<ScrollAnimation variants={scaleUpVariants}>
									<div
										onClick={toggleVisibility4}
										className="cursor-pointer max-w-[620px] h-fit p-5 border-b gap-2 flex  border-[#1a1a1a] transition-all relative"
									>
										<div className="flex flex-col gap-4">
											<h4 className="md:font-semibold min-w-[250px] md:max-w-[500px] text-left">
												How do you ensure the security of user data<br/> in your web
												applications?
											</h4>
											<p
												className={`text-sm text-[#8C8C8C] text-left ${
													isHidden4 ? "opacity-0 h-0" : "opacity-100 h-auto"
												} transition-opacity duration-1000`}
											>
We implement robust security protocols and regular audits to ensure the protection of user data in all our web applications.

</p>
										</div>
										<button
											onClick={toggleVisibility4}
											className={`hide absolute top-[15px] right-0  ${
												isHidden4 ? "opacity-0 h-0" : "opacity-100 h-auto"
											} transition-opacity duration-1000`}
										>
											<svg
												width="36"
												height="36"
												viewBox="0 0 44 44"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect width="44" height="44" rx="22" fill="#1A1A1A" />
												<path
													d="M29 21H15C14.7348 21 14.4804 21.1054 14.2929 21.2929C14.1054 21.4804 14 21.7348 14 22C14 22.2652 14.1054 22.5196 14.2929 22.7071C14.4804 22.8946 14.7348 23 15 23H29C29.2652 23 29.5196 22.8946 29.7071 22.7071C29.8946 22.5196 30 22.2652 30 22C30 21.7348 29.8946 21.4804 29.7071 21.2929C29.5196 21.1054 29.2652 21 29 21Z"
													fill="white"
												/>
											</svg>
										</button>
										<button
											onClick={toggleVisibility4}
											className={`Show absolute top-[15px] right-0  ${
												isHidden4 ? "opacity-100 h-auto" : "opacity-0 h-0"
											} transition-opacity duration-1000`}
										>
											<svg
												width="36"
												height="36"
												viewBox="0 0 44 44"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect width="44" height="44" rx="22" fill="#1A1A1A" />
												<path
													d="M29 21H23V15C23 14.7348 22.8946 14.4804 22.7071 14.2929C22.5196 14.1054 22.2652 14 22 14C21.7348 14 21.4804 14.1054 21.2929 14.2929C21.1054 14.4804 21 14.7348 21 15V21H15C14.7348 21 14.4804 21.1054 14.2929 21.2929C14.1054 21.4804 14 21.7348 14 22C14 22.2652 14.1054 22.5196 14.2929 22.7071C14.4804 22.8946 14.7348 23 15 23H21V29C21 29.2652 21.1054 29.5196 21.2929 29.7071C21.4804 29.8946 21.7348 30 22 30C22.2652 30 22.5196 29.8946 22.7071 29.7071C22.8946 29.5196 23 29.2652 23 29V23H29C29.2652 23 29.5196 22.8946 29.7071 22.7071C29.8946 22.5196 30 22.2652 30 22C30 21.7348 29.8946 21.4804 29.7071 21.2929C29.5196 21.1054 29.2652 21 29 21Z"
													fill="white"
												/>
											</svg>
										</button>
									</div>
								</ScrollAnimation>
							</div>
							<div className="w-full gap-4 flex flex-col items-center">
								<ScrollAnimation variants={scaleUpVariants}>
									<div
										onClick={toggleVisibility5}
										className="cursor-pointer max-w-[620px] h-fit p-5 border-b gap-2 flex relative items-center border-[#1a1a1a] "
									>
										<div className="flex flex-col gap-4">
											<h4 className="md:font-semibold min-w-[250px] text-left md:max-w-[500px]">
												Can you create a responsive website design that looks
												great on all devices?
											</h4>
											<p
												className={`text-sm text-[#8C8C8C] text-left ${
													isHidden5 ? "opacity-0 h-0" : "opacity-100 h-auto"
												} transition-opacity duration-1000`}
											>
											Absolutely, we design responsive websites that provide a seamless experience across all devices.


											</p>
										</div>
										<button
											onClick={toggleVisibility5}
											className={`hide absolute top-[15px] right-0  ${
												isHidden5 ? "opacity-0 h-0" : "opacity-100 h-auto"
											} transition-opacity duration-500`}
										>
											<svg
												width="36"
												height="36"
												viewBox="0 0 44 44"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect width="44" height="44" rx="22" fill="#1A1A1A" />
												<path
													d="M29 21H15C14.7348 21 14.4804 21.1054 14.2929 21.2929C14.1054 21.4804 14 21.7348 14 22C14 22.2652 14.1054 22.5196 14.2929 22.7071C14.4804 22.8946 14.7348 23 15 23H29C29.2652 23 29.5196 22.8946 29.7071 22.7071C29.8946 22.5196 30 22.2652 30 22C30 21.7348 29.8946 21.4804 29.7071 21.2929C29.5196 21.1054 29.2652 21 29 21Z"
													fill="white"
												/>
											</svg>
										</button>
										<button
											onClick={toggleVisibility5}
											className={`Show absolute top-[15px] right-0  ${
												isHidden5 ? "opacity-100 h-auto" : "opacity-0 h-0"
											} transition-opacity duration-1000`}
										>
											<svg
												width="36"
												height="36"
												viewBox="0 0 44 44"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect width="44" height="44" rx="22" fill="#1A1A1A" />
												<path
													d="M29 21H23V15C23 14.7348 22.8946 14.4804 22.7071 14.2929C22.5196 14.1054 22.2652 14 22 14C21.7348 14 21.4804 14.1054 21.2929 14.2929C21.1054 14.4804 21 14.7348 21 15V21H15C14.7348 21 14.4804 21.1054 14.2929 21.2929C14.1054 21.4804 14 21.7348 14 22C14 22.2652 14.1054 22.5196 14.2929 22.7071C14.4804 22.8946 14.7348 23 15 23H21V29C21 29.2652 21.1054 29.5196 21.2929 29.7071C21.4804 29.8946 21.7348 30 22 30C22.2652 30 22.5196 29.8946 22.7071 29.7071C22.8946 29.5196 23 29.2652 23 29V23H29C29.2652 23 29.5196 22.8946 29.7071 22.7071C29.8946 22.5196 30 22.2652 30 22C30 21.7348 29.8946 21.4804 29.7071 21.2929C29.5196 21.1054 29.2652 21 29 21Z"
													fill="white"
												/>
											</svg>
										</button>
									</div>
								</ScrollAnimation>
								<ScrollAnimation variants={scaleUpVariants}>
									<div
										onClick={toggleVisibility6}
										className="cursor-pointer max-w-[620px] h-fit p-5 border-b gap-2 flex items-center relative border-[#1a1a1a] transition-all"
									>
										<div className="flex flex-col gap-4">
											<h4 className="md:font-semibold text-left min-w-[250px] md:max-w-[500px]">
												What digital marketing strategies do you employ to drive
												website traffic?
											</h4>
											<p
												className={`text-sm text-[#8C8C8C] text-left ${
													isHidden6 ? "opacity-0 h-0" : "opacity-100 h-auto"
												} transition-opacity duration-1000`}
											>
We utilize SEO, social media marketing, and PPC campaigns to effectively drive traffic to your website.

</p>
										</div>
										<button
											onClick={toggleVisibility6}
											className={`hide absolute top-[15px] right-0  ${
												isHidden6 ? "opacity-0 h-0" : "opacity-100 h-auto"
											} transition-opacity duration-1000`}
										>
											<svg
												width="36"
												height="36"
												viewBox="0 0 44 44"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect width="44" height="44" rx="22" fill="#1A1A1A" />
												<path
													d="M29 21H15C14.7348 21 14.4804 21.1054 14.2929 21.2929C14.1054 21.4804 14 21.7348 14 22C14 22.2652 14.1054 22.5196 14.2929 22.7071C14.4804 22.8946 14.7348 23 15 23H29C29.2652 23 29.5196 22.8946 29.7071 22.7071C29.8946 22.5196 30 22.2652 30 22C30 21.7348 29.8946 21.4804 29.7071 21.2929C29.5196 21.1054 29.2652 21 29 21Z"
													fill="white"
												/>
											</svg>
										</button>
										<button
											onClick={toggleVisibility6}
											className={`Show absolute top-[15px] right-0  ${
												isHidden6 ? "opacity-100 h-auto" : "opacity-0 h-0"
											} transition-opacity duration-1000`}
										>
											<svg
												width="36"
												height="36"
												viewBox="0 0 44 44"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect width="44" height="44" rx="22" fill="#1A1A1A" />
												<path
													d="M29 21H23V15C23 14.7348 22.8946 14.4804 22.7071 14.2929C22.5196 14.1054 22.2652 14 22 14C21.7348 14 21.4804 14.1054 21.2929 14.2929C21.1054 14.4804 21 14.7348 21 15V21H15C14.7348 21 14.4804 21.1054 14.2929 21.2929C14.1054 21.4804 14 21.7348 14 22C14 22.2652 14.1054 22.5196 14.2929 22.7071C14.4804 22.8946 14.7348 23 15 23H21V29C21 29.2652 21.1054 29.5196 21.2929 29.7071C21.4804 29.8946 21.7348 30 22 30C22.2652 30 22.5196 29.8946 22.7071 29.7071C22.8946 29.5196 23 29.2652 23 29V23H29C29.2652 23 29.5196 22.8946 29.7071 22.7071C29.8946 22.5196 30 22.2652 30 22C30 21.7348 29.8946 21.4804 29.7071 21.2929C29.5196 21.1054 29.2652 21 29 21Z"
													fill="white"
												/>
											</svg>
										</button>
									</div>
								</ScrollAnimation>
								<ScrollAnimation variants={scaleUpVariants}>
									<div
										onClick={toggleVisibility7}
										className="cursor-pointer max-w-[620px] h-fit p-5 border-b gap-2 flex items-center border-[#1a1a1a] relative transition-all "
									>
										<div className="flex flex-col gap-4">
											<h4 className="md:font-semibold min-w-[250px] md:max-w-[500px] text-left">
												Can you integrate third-party APIs into our mobile app?
											</h4>
											<p
												className={`text-sm text-[#8C8C8C] text-left ${
													isHidden7 ? "opacity-0 h-0" : "opacity-100 h-auto"
												} transition-opacity duration-1000`}
											>
												Yes, we can integrate a variety of third-party APIs to enhance the functionality of your mobile app.


											</p>
										</div>
										<button
											onClick={toggleVisibility7}
											className={`hide absolute top-[15px] right-0  ${
												isHidden7 ? "opacity-0 h-0" : "opacity-100 h-auto"
											} transition-opacity duration-1000`}
										>
											<svg
												width="36"
												height="36"
												viewBox="0 0 44 44"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect width="44" height="44" rx="22" fill="#1A1A1A" />
												<path
													d="M29 21H15C14.7348 21 14.4804 21.1054 14.2929 21.2929C14.1054 21.4804 14 21.7348 14 22C14 22.2652 14.1054 22.5196 14.2929 22.7071C14.4804 22.8946 14.7348 23 15 23H29C29.2652 23 29.5196 22.8946 29.7071 22.7071C29.8946 22.5196 30 22.2652 30 22C30 21.7348 29.8946 21.4804 29.7071 21.2929C29.5196 21.1054 29.2652 21 29 21Z"
													fill="white"
												/>
											</svg>
										</button>
										<button
											onClick={toggleVisibility7}
											className={`Show absolute top-[15px] right-0  ${
												isHidden7 ? "opacity-100 h-auto" : "opacity-0 h-0"
											} transition-opacity duration-1000`}
										>
											<svg
												width="36"
												height="36"
												viewBox="0 0 44 44"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect width="44" height="44" rx="22" fill="#1A1A1A" />
												<path
													d="M29 21H23V15C23 14.7348 22.8946 14.4804 22.7071 14.2929C22.5196 14.1054 22.2652 14 22 14C21.7348 14 21.4804 14.1054 21.2929 14.2929C21.1054 14.4804 21 14.7348 21 15V21H15C14.7348 21 14.4804 21.1054 14.2929 21.2929C14.1054 21.4804 14 21.7348 14 22C14 22.2652 14.1054 22.5196 14.2929 22.7071C14.4804 22.8946 14.7348 23 15 23H21V29C21 29.2652 21.1054 29.5196 21.2929 29.7071C21.4804 29.8946 21.7348 30 22 30C22.2652 30 22.5196 29.8946 22.7071 29.7071C22.8946 29.5196 23 29.2652 23 29V23H29C29.2652 23 29.5196 22.8946 29.7071 22.7071C29.8946 22.5196 30 22.2652 30 22C30 21.7348 29.8946 21.4804 29.7071 21.2929C29.5196 21.1054 29.2652 21 29 21Z"
													fill="white"
												/>
											</svg>
										</button>
									</div>
								</ScrollAnimation>
								<ScrollAnimation variants={scaleUpVariants}>
									<div
										onClick={toggleVisibility}
										className="cursor-pointer max-w-[620px] h-fit p-5 border-b gap-2 flex items-center border-[#1a1a1a] transition-all relative"
									>
										<div className="flex flex-col gap-4 ">
											<h4 className="md:font-semibold min-w-[250px] md:max-w-[500px] text-left">
												How do you ensure cross-platform compatibility for
												mobile apps?
											</h4>
											<p
												className={`text-sm text-[#8C8C8C] text-left ${
													isHidden ? "opacity-0 h-0" : "opacity-100 h-auto"
												} transition-opacity duration-1000`}
											>
We develop mobile apps using frameworks and tools such as Flutter and React Native to ensure compatibility across all major platforms.

</p>
										</div>
										<button
											onClick={toggleVisibility}
											className={`hide absolute top-[15px] right-0  ${
												isHidden ? "opacity-0 h-0" : "opacity-100 h-auto"
											} transition-opacity duration-1000`}
										>
											<svg
												width="36"
												height="36"
												viewBox="0 0 44 44"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect width="44" height="44" rx="22" fill="#1A1A1A" />
												<path
													d="M29 21H15C14.7348 21 14.4804 21.1054 14.2929 21.2929C14.1054 21.4804 14 21.7348 14 22C14 22.2652 14.1054 22.5196 14.2929 22.7071C14.4804 22.8946 14.7348 23 15 23H29C29.2652 23 29.5196 22.8946 29.7071 22.7071C29.8946 22.5196 30 22.2652 30 22C30 21.7348 29.8946 21.4804 29.7071 21.2929C29.5196 21.1054 29.2652 21 29 21Z"
													fill="white"
												/>
											</svg>
										</button>
										<button
											onClick={toggleVisibility}
											className={`Show absolute top-[15px] right-0  ${
												isHidden ? "opacity-100 h-auto" : "opacity-0 h-0"
											} transition-opacity duration-1000`}
										>
											<svg
												width="36"
												height="36"
												viewBox="0 0 44 44"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect width="44" height="44" rx="22" fill="#1A1A1A" />
												<path
													d="M29 21H23V15C23 14.7348 22.8946 14.4804 22.7071 14.2929C22.5196 14.1054 22.2652 14 22 14C21.7348 14 21.4804 14.1054 21.2929 14.2929C21.1054 14.4804 21 14.7348 21 15V21H15C14.7348 21 14.4804 21.1054 14.2929 21.2929C14.1054 21.4804 14 21.7348 14 22C14 22.2652 14.1054 22.5196 14.2929 22.7071C14.4804 22.8946 14.7348 23 15 23H21V29C21 29.2652 21.1054 29.5196 21.2929 29.7071C21.4804 29.8946 21.7348 30 22 30C22.2652 30 22.5196 29.8946 22.7071 29.7071C22.8946 29.5196 23 29.2652 23 29V23H29C29.2652 23 29.5196 22.8946 29.7071 22.7071C29.8946 22.5196 30 22.2652 30 22C30 21.7348 29.8946 21.4804 29.7071 21.2929C29.5196 21.1054 29.2652 21 29 21Z"
													fill="white"
												/>
											</svg>
										</button>
									</div>
								</ScrollAnimation>
							</div>
						</div>
					</div>
				</ScrollAnimation>
				<ScrollAnimation variants={scaleUpVariants}>
					<div className=" mt-24  mx-5 minh-[700px]  border border-[#262626] rounded-2xl p-5  my-cardBG flex flex-col items-center">
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
						<div className="w-full mt-12 rounded-xl flex flex-col gap-6  bg-[#0f0f0f] p-">
							<div className="w-full h-[80px] flex flex-col items-center justify-center p-2 gap-4">
								<h4 className="font-semibold text-center">
									Online Inquiry Form
								</h4>
								<p className="lg:text-sm text-center text-xs text-[#808080]">
									Please fill in the following details, and we'll get back to
									you within 24 hours.
								</p>
							</div>
							<ScrollAnimation variants={scaleUpVariants}>
								<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
									<input type="hidden" name="form-name" value="contact" />
									<div className="w-full h-auto flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">
										<div className="lg:w-1/3  w-full">
											<div className="h-full flex flex-col justify-center px-5 gap-2">
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
										</div>
										<div className="lg:w-1/3  w-full">
											<div className="h-full flex flex-col justify-center px-5 gap-2">
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
										</div>
										<div className="lg:w-1/3  w-full">
											<div className="h-full flex flex-col justify-center px-5 gap-2">
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
									</div>
									<div className="w-full h-auto flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">
										<div className="lg:w-1/3  w-full">
											<div className="h-full flex flex-col justify-center px-5 gap-2">
												<label
													htmlFor="Select Service"
													className="text-xs sm:text-sm font-light ml-2"
												>
													Select Service
												</label>
												<select
													id="underline_select"
													name="services"
													required
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
										</div>
										<div className="lg:w-1/3  w-full">
											<div className="h-full flex flex-col justify-center px-5 gap-2">
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
										</div>
										<div className="lg:w-1/3  w-full">
											<div className="h-full flex flex-col justify-center px-5 gap-2">
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
												required
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
							</ScrollAnimation>
						</div>
					</div>
				</ScrollAnimation>
			</main>
		</>
	);
}
