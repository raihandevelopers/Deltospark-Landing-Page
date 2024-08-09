"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import serviceLeftAngle from "@/public/serviceLeftAngle.svg";
import serviceRightAngle from "@/public/serviceRightAngle.svg";
import profile from "@/public/mypicfinal.jpg";
import profile2 from "@/public/arshad.jpg";
import profile3 from "@/public/Om.jpg";
import profile4 from "@/public/atishmita.jpg";

import awardsicons from "@/public/awardsIcons.svg";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";
import ScrollAnimation from "@/components/ScrollAnimation";
import { scaleUpVariants } from "@/animation/variants";

const About = () => {
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
				<ScrollAnimation variants={scaleUpVariants}>
				<div className="Herro-Section">
					{/* <div className="lg:h-[500px] min-h-[400px] my-cardBG flex relative">
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
						<h1 className="lg:text-4xl md:text-2xl text-xl font-semibold">
							Elevating Brands{" "}
							<span className="text-[#666666]">in the Digital Age</span>
						</h1>
						<p className="text-[#c7c5c5] sm:text-sm text-xs">
							Welcome to Deltospark, your trusted partner in the dynamic world of
							digital solutions. We are a passionate team of creative minds,
							tech enthusiasts, and digital strategists, dedicated to empowering
							businesses and individuals in the digital realm. Our mission is to
							deliver exceptional results that drive success, create meaningful
							connections, and bring your digital vision to life. With a
							customer-centric approach and a focus on innovation, we are
							committed to being at the forefront of the ever-evolving digital
							landscape.
						</p>
					</div> */}
				</div>
				</ScrollAnimation>
				<ScrollAnimation variants={scaleUpVariants}>
				<div className="flex flex-col items-center mt-24  sm:max-w-[1280px] mx-auto gap-10 p-2 sm:p-10">
					<h1 className="text-center text-3xl font-semibold lg:w-[500px]">
						<span className="text-[#808080]">Our</span> Team Members
					</h1>
					<p className="text-mm font-bold text-[#808080] text-center lg:w-[900px]">
					Meet The Lean, Mean, Design and Code Machine At Deltospark

					</p>
					<div className="w-full min-h-full flex flex-col gap-4 p-8">
  <div className="w-full h-full flex flex-col items-center justify-center gap-8">
    <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">

					<ScrollAnimation variants={scaleUpVariants}>
					<div className="relative w-[300px] h-[400px] flex flex-col items-center justify-center border border-[#1F1F1F] rounded-xl overflow-hidden group mx-auto lg:mx-0">
					<Image
        width={2000}
        height={2000}
        src={profile}
        className="object-cover w-full h-full"
        alt=""
    />
   <div className="absolute bottom-0 w-full h-[55%] flex flex-col items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <div className="text-white px-3">
        <span className="font-semibold text-lg">Raihan Khan</span>
        <div className="text-xs font-light from-[#424242] to-transparent rounded-full">
            <span>Founder, CEO & CTO</span>
        </div>
        <p className="text-xs mt-1">The pioneering founder of Deltospark is advancing App, Web3, and AI development as a versatile full-stack developer.</p>
        <div className="flex flex-wrap gap-1 mt-2">
            <button className="px-2 py-1 text-xs border border-white rounded-full">AI</button>
            <button className="px-2 py-1 text-xs border border-white rounded-full">Flutter</button>
            <button className="px-2 py-1 text-xs border border-white rounded-full">Web3.0</button>
            <button className="px-2 py-1 text-xs border border-white rounded-full">React</button>
            <button className="px-2 py-1 text-xs border border-white rounded-full">Next</button>
            <button className="px-2 py-1 text-xs border border-white rounded-full mt-1">Django</button>
        </div>
		<div className="mt-2"></div>
		<a href="https://www.linkedin.com/in/raihan-khan-07a1aa21b/" className="flex items-center justify-center px-3 py-1.5 text-xs text-center bg-white text-black border border-white rounded-full">
    Connect
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
</a>
    </div>
</div>

</div>
				<div className="text-center mt-2">
    <span className="font-semibold">Raihan Khan</span>
	<div className="text-sm mt-1 font-light border border-[#1F1F1F] px-2 py-2 rounded-full relative bg-gradient-to-r from-[#424242] to-transparent w-40 mx-auto">
	<span className="text-xs">Founder, CEO & CTO</span>
</div>

</div>

            </ScrollAnimation>
        </div>
		<div className="w-full min-h-full flex flex-col gap-4 p-8">
  <div className="w-full h-full flex flex-col items-center justify-center gap-8">
    <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">

					<ScrollAnimation variants={scaleUpVariants}>
					<div className="relative w-[300px] h-[400px] flex flex-col items-center justify-center border border-[#1F1F1F] rounded-xl overflow-hidden group mx-auto lg:mx-0">
					<Image
        width={2000}
        height={2000}
        src={profile2}
        className="object-cover w-full h-full"
        alt=""
    />
    <div className="absolute bottom-0 w-full h-1/2 flex flex-col items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text text-white px-4">
            <span className="font-semibold text-lg">Arshad Aman</span>
			<div className="text-xs font-light from-[#424242] to-transparent rounded-full">
            <span>Full-Stack Developer</span>
        </div>

            <div className="text-xs font-light from-[#424242] to-transparent rounded-full">
			<p className="mt-2 text-xs">A talented member of the Deltospark team, excelling in Django and backend development, crafting robust and dynamic web applications with precision.</p>

             
            </div>
            <div className="flex flex-wrap gap-1 mt-2 justify-left">
                <button className="px-2 py-1 text-xs border border-white rounded-full">Django</button>
                <button className="px-2 py-1 text-xs border border-white rounded-full">Flask</button>
                <button className="px-2 py-1 text-xs border border-white rounded-full">React</button>
                <button className="px-2 py-1 text-xs border border-white rounded-full mt-1">System Design</button>
				<button className="px-2 py-1 text-xs border border-white rounded-full mt-1">Flutter</button>

            </div>
        </div>
    </div>
</div>
				<div className="text-center mt-2">
    <span className="font-semibold">Arshad Aman</span>
	<div className="text-sm mt-1 font-light border border-[#1F1F1F] px-2 py-2 rounded-full relative bg-gradient-to-r from-[#424242] to-transparent w-40 mx-auto">
	<span className="text-xs">Full-Stack Developer
	</span>
</div>

</div>

            </ScrollAnimation>
						
			</div>
		
			</div>

									</div>
							
					
									<div className="w-full min-h-full flex flex-col gap-4 p-8">
  <div className="w-full h-full flex flex-col items-center justify-center gap-8">
    <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">

					<ScrollAnimation variants={scaleUpVariants}>
					<div className="relative w-[300px] h-[400px] flex flex-col items-center justify-center border border-[#1F1F1F] rounded-xl overflow-hidden group mx-auto lg:mx-0">
					<Image
        width={2000}
        height={2000}
        src={profile3}
        className="object-cover w-full h-full"
        alt=""
    />
    <div className="absolute bottom-0 w-full h-1/2 flex flex-col items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text text-white px-4">
            <span className="font-semibold text-lg">Om Verma</span>
            <div className="text-xs font-light from-[#424242] to-transparent rounded-full">
                <span>MERN Stack Developer</span>
            </div>
            <p className="mt-2 text-xs">A skilled member of the Deltospark team, specializing in the MERN stack, delivering powerful and responsive web applications with expertise in MongoDB, Express, React, and Node.js.</p>
            <div className="flex flex-wrap gap-1 mt-2 justify-left">
                <button className="px-2 py-1 text-xs border border-white rounded-full">Node</button>
                <button className="px-2 py-1 text-xs border border-white rounded-full">React</button>
                <button className="px-2 py-1 text-xs border border-white rounded-full">Next</button>
                <button className="px-2 py-1 text-xs border border-white rounded-full">DevOps</button>
                <button className="px-2 py-1 text-xs border border-white rounded-full mt-1">Nuxt</button>
            </div>
        </div>
    </div>
</div>
				<div className="text-center mt-2">
    <span className="font-semibold">Om Verma</span>
	<div className="text-sm mt-1 font-light border border-[#1F1F1F] px-2 py-2 rounded-full relative bg-gradient-to-r from-[#424242] to-transparent w-40 mx-auto">
	<span className="text-xs">MERN Stack Developer</span>
</div>

</div>

            </ScrollAnimation>
						
			</div>
			</div>

			</div>
			<div className="w-full min-h-full flex flex-col gap-4 p-8">
  <div className="w-full h-full flex flex-col items-center justify-center gap-8">
    <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">

					<ScrollAnimation variants={scaleUpVariants}>
					<div className="relative w-[300px] h-[400px] flex flex-col items-center justify-center border border-[#1F1F1F] rounded-xl overflow-hidden group mx-auto lg:mx-0">
					<Image
        width={2000}
        height={2000}
        src={profile4}
        className="object-cover w-full h-full"
        alt=""
    />
    <div className="absolute bottom-0 w-full h-1/2 flex flex-col items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text text-white px-4">
            <span className="font-semibold text-lg">Atishmita Dash</span>
            <div className="text-xs font-light from-[#424242] to-transparent rounded-full">
                <span>UI/UX Designer</span>
            </div>
            <p className="mt-2 text-xs">A creative member of the Deltospark team, specializing in UI/UX design, crafting intuitive and visually appealing user experiences that enhance engagement and usability.</p>
            <div className="flex flex-wrap gap-1 mt-2 justify-left">
                <button className="px-2 py-1 text-xs border border-white rounded-full">Figma</button>
                <button className="px-2 py-1 text-xs border border-white rounded-full">Photoshop</button>
                <button className="px-2 py-1 text-xs border border-white rounded-full">XD</button>
				<button className="px-2 py-1 text-xs border border-white rounded-full">Illustrator</button>
                <button className="px-2 py-1 text-xs border border-white rounded-full mt-1">React</button>
            </div>
        </div>
    </div>
</div>
				<div className="text-center mt-2">
    <span className="font-semibold">Atishmita Dash</span>
	<div className="text-sm mt-1 font-light border border-[#1F1F1F] px-2 py-2 rounded-full relative bg-gradient-to-r from-[#424242] to-transparent w-40 mx-auto">
	<span className="text-xs">UI/UX Designer</span>
</div>

</div>

            </ScrollAnimation>
						
			</div>
			</div>

			</div>
							
						</div>
						{/* <div className="w-full min-h-full flex flex-col gap-4 p-8">
  <div className="w-full h-full flex flex-col items-center justify-center gap-8">
    <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">

					<ScrollAnimation variants={scaleUpVariants}>
					<div className="relative w-[300px] h-[400px] flex flex-col items-center justify-center border border-[#1F1F1F] rounded-xl overflow-hidden group mx-auto lg:mx-0">
					<Image
        width={2000}
        height={2000}
        src={profile}
        className="object-cover w-full h-full"
        alt=""
    />
    <div className="absolute bottom-0 w-full h-1/2 flex flex-col items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text text-white px-4">
            <span className="font-semibold text-lg">Raihan Khan</span>
            <div className="text-xs font-light from-[#424242] to-transparent rounded-full">
                <span>Founder, CEO & CTO</span>
            </div>
            <p className="mt-2 text-xs">The pioneering founder of Deltospark is advancing app and web development as a versatile full-stack developer.</p>
            <div className="flex flex-wrap gap-1 mt-2 justify-center">
                <button className="px-2 py-1 text-xs border border-white rounded-full">Flutter</button>
                <button className="px-2 py-1 text-xs border border-white rounded-full">Node</button>
                <button className="px-2 py-1 text-xs border border-white rounded-full">Django</button>
                <button className="px-2 py-1 text-xs border border-white rounded-full">Web3.0</button>
                <button className="px-2 py-1 text-xs border border-white rounded-full">Next.js</button>
            </div>
            <button className="px-3 py-1 mt-2 text-xs text-center border border-white rounded-full">Connect</button>
        </div>
    </div>
</div>
				<div className="text-center mt-2">
    <span className="font-semibold">Raihan Khan</span>
	<div className="text-sm mt-1 font-light border border-[#1F1F1F] px-2 py-2 rounded-full relative bg-gradient-to-r from-[#424242] to-transparent w-40 mx-auto">
	<span className="text-xs">Founder, CEO & CTO</span>
</div>

</div> */}

            {/* </ScrollAnimation>
						
			</div>
			</div> */}

			{/* </div> */}
					</div>
				</div>
				</ScrollAnimation>
				<ScrollAnimation variants={scaleUpVariants}>
				{/* <div className="flex flex-col items-center mt-24  w-full sm:max-w-[1280px] p-2 sm:p-10 mx-auto gap-10">
					<h1 className="text-center text-3xl font-semibold lg:w-[500px]">
						<span className="text-[#808080]">Our</span> Achievements
					</h1>
					<p className="text-sm text-[#808080] text-center lg:w-[900px]">
						Witness the brilliance of our previous projects. Our portfolio
						showcases the successful collaborations we ve had with diverse
						clients across various industries. Let our work speak for itself.
					</p>
					<div className="mt-6 w-full ">
						<div className="w-[100%] h-full flex flex-col gap-8 p-2 mx-auto relative">
							<div className="w-[100px] left-0 h-full absolute sm:flex rounded-full hidden">
								<div className="w-[33.3px] backdrop-filter backdrop-blur-xl bg-opacity-45 bg-[#0000004f] rounded-l-xl"></div>
								<div className="w-[33.3px] backdrop-filter backdrop-blur-xl bg-opacity-45 bg-[#000000]"></div>
								<div className="w-[33.3px] backdrop-filter backdrop-blur-xl bg-opacity-45 bg-[#0000004f] rounded-r-xl"></div>
							</div>
							<div className=" w-full">
								<ScrollAnimation variants={scaleUpVariants}>
									<div className="pt-10 sm:pl-6 min-h-[250px] border p-2 rounded-xl border-[#1F1F1F] sm:flex-row flex-col flex gap-5 ">
										<h1 className="text-5xl sm:text-6xl font-semibold text-[#ffffff]">
											001
										</h1>
										<div className="w-full lg:px-4 flex flex-col gap-4">
											<div className="w-full h-[40px] flex justify-between items-center">
												<h3 className="sm:text-base text-sm">
													Foundation of Deltospark
												</h3>
												<div className="px-4 py-2 rounded-full border-[#1F1F1F] border flex items-center gap-2">
													<svg
														width="20"
														height="20"
														viewBox="0 0 20 20"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M5.625 2.5V4.375M14.375 2.5V4.375M2.5 15.625V6.25C2.5 5.21447 3.33947 4.375 4.375 4.375H15.625C16.6605 4.375 17.5 5.21447 17.5 6.25V15.625M2.5 15.625C2.5 16.6605 3.33947 17.5 4.375 17.5H15.625C16.6605 17.5 17.5 16.6605 17.5 15.625M2.5 15.625V9.375C2.5 8.33947 3.33947 7.5 4.375 7.5H15.625C16.6605 7.5 17.5 8.33947 17.5 9.375V15.625M10 10.625H10.0063V10.6313H10V10.625ZM10 12.5H10.0063V12.5063H10V12.5ZM10 14.375H10.0063V14.3813H10V14.375ZM8.125 12.5H8.13125V12.5063H8.125V12.5ZM8.125 14.375H8.13125V14.3813H8.125V14.375ZM6.25 12.5H6.25625V12.5063H6.25V12.5ZM6.25 14.375H6.25625V14.3813H6.25V14.375ZM11.875 10.625H11.8813V10.6313H11.875V10.625ZM11.875 12.5H11.8813V12.5063H11.875V12.5ZM11.875 14.375H11.8813V14.3813H11.875V14.375ZM13.75 10.625H13.7563V10.6313H13.75V10.625ZM13.75 12.5H13.7563V12.5063H13.75V12.5Z"
															stroke="white"
															stroke-linecap="round"
															stroke-linejoin="round"
														/>
													</svg>

													<span className="text-xs font-light">October 2017</span>
												</div>
											</div>
											<div className="h-full gap-4 rounded-xl border-[#1F1F1F] border p-5 flex flex-col justify-center achievements-bg">
												<h4 className="font-thin">Description</h4>
												<p className="text-sm text-[#8C8C8C]">
													Recognition for outstanding contributions to the digital
													industry, celebrating our ability to deliver exceptional
													web design and development solutions that push the
													boundaries of creativity and functionality.
												</p>
											</div>
										</div>
									</div>
								</ScrollAnimation>
							</div>
							<div className=" w-full">
								<ScrollAnimation variants={scaleUpVariants}>
									<div className="pt-10 sm:pl-6 min-h-[250px] border p-2 rounded-xl border-[#1F1F1F] sm:flex-row flex-col flex gap-5 ">
										<h1 className="text-5xl sm:text-6xl font-semibold text-[#ffffff]">
											002
										</h1>
										<div className="w-full lg:px-4 flex flex-col gap-4">
											<div className="w-full h-[40px] flex justify-between items-center">
												<h3 className="sm:text-base text-sm">
													100 Successful Projects
												</h3>
												<div className="px-4 py-2 rounded-full border-[#1F1F1F] border flex items-center gap-2">
													<svg
														width="20"
														height="20"
														viewBox="0 0 20 20"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M5.625 2.5V4.375M14.375 2.5V4.375M2.5 15.625V6.25C2.5 5.21447 3.33947 4.375 4.375 4.375H15.625C16.6605 4.375 17.5 5.21447 17.5 6.25V15.625M2.5 15.625C2.5 16.6605 3.33947 17.5 4.375 17.5H15.625C16.6605 17.5 17.5 16.6605 17.5 15.625M2.5 15.625V9.375C2.5 8.33947 3.33947 7.5 4.375 7.5H15.625C16.6605 7.5 17.5 8.33947 17.5 9.375V15.625M10 10.625H10.0063V10.6313H10V10.625ZM10 12.5H10.0063V12.5063H10V12.5ZM10 14.375H10.0063V14.3813H10V14.375ZM8.125 12.5H8.13125V12.5063H8.125V12.5ZM8.125 14.375H8.13125V14.3813H8.125V14.375ZM6.25 12.5H6.25625V12.5063H6.25V12.5ZM6.25 14.375H6.25625V14.3813H6.25V14.375ZM11.875 10.625H11.8813V10.6313H11.875V10.625ZM11.875 12.5H11.8813V12.5063H11.875V12.5ZM11.875 14.375H11.8813V14.3813H11.875V14.375ZM13.75 10.625H13.7563V10.6313H13.75V10.625ZM13.75 12.5H13.7563V12.5063H13.75V12.5Z"
															stroke="white"
															stroke-linecap="round"
															stroke-linejoin="round"
														/>
													</svg>
													<span className="text-xs font-light">June 2018</span>
												</div>
											</div>
											<div className="h-full gap-4 rounded-xl border-[#1F1F1F] border p-5 flex flex-col justify-center achievements-bg">
												<h4 className="font-thin">Description</h4>
												<p className="text-sm text-[#8C8C8C]">
													We celebrated a significant milestone of completing 100
													successful projects, marking our commitment to delivering
													excellence in every endeavor. Our diverse portfolio
													showcased our ability to cater to various industries and
													client requirements.
												</p>
											</div>
										</div>
									</div>
								</ScrollAnimation>
							</div>
							<div className=" w-full">
								<ScrollAnimation variants={scaleUpVariants}>
									<div className="pt-10 sm:pl-6 min-h-[250px] border p-2 rounded-xl border-[#1F1F1F] sm:flex-row flex-col flex gap-5 ">
										<h1 className="text-5xl sm:text-6xl font-semibold text-[#ffffff]">
											003
										</h1>
										<div className="w-full lg:px-4 flex flex-col gap-4">
											<div className="w-full h-[40px] flex justify-between items-center">
												<h3 className="sm:text-base text-sm">
													Expansion to International Markets
												</h3>
												<div className="px-4 py-2 rounded-full border-[#1F1F1F] border flex items-center gap-2">
													<svg
														width="20"
														height="20"
														viewBox="0 0 20 20"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M5.625 2.5V4.375M14.375 2.5V4.375M2.5 15.625V6.25C2.5 5.21447 3.33947 4.375 4.375 4.375H15.625C16.6605 4.375 17.5 5.21447 17.5 6.25V15.625M2.5 15.625C2.5 16.6605 3.33947 17.5 4.375 17.5H15.625C16.6605 17.5 17.5 16.6605 17.5 15.625M2.5 15.625V9.375C2.5 8.33947 3.33947 7.5 4.375 7.5H15.625C16.6605 7.5 17.5 8.33947 17.5 9.375V15.625M10 10.625H10.0063V10.6313H10V10.625ZM10 12.5H10.0063V12.5063H10V12.5ZM10 14.375H10.0063V14.3813H10V14.375ZM8.125 12.5H8.13125V12.5063H8.125V12.5ZM8.125 14.375H8.13125V14.3813H8.125V14.375ZM6.25 12.5H6.25625V12.5063H6.25V12.5ZM6.25 14.375H6.25625V14.3813H6.25V14.375ZM11.875 10.625H11.8813V10.6313H11.875V10.625ZM11.875 12.5H11.8813V12.5063H11.875V12.5ZM11.875 14.375H11.8813V14.3813H11.875V14.375ZM13.75 10.625H13.7563V10.6313H13.75V10.625ZM13.75 12.5H13.7563V12.5063H13.75V12.5Z"
															stroke="white"
															stroke-linecap="round"
															stroke-linejoin="round"
														/>
													</svg>
													<span className="text-xs font-light">August 2019</span>
												</div>
											</div>
											<div className="h-full gap-4 rounded-xl border-[#1F1F1F] border p-5 flex flex-col justify-center achievements-bg">
												<h4 className="font-thin">Description</h4>
												<p className="text-sm text-[#8C8C8C]">
													We expanded our services to international clients, opening
													new avenues for growth and global collaboration. Our
													expansion into international markets solidified our
													position as a leading digital agency with a global
													footprint.
												</p>
											</div>
										</div>
									</div>
								</ScrollAnimation>
							</div>
							<div className=" w-full">
								<ScrollAnimation variants={scaleUpVariants}>
									<div className="pt-10 sm:pl-6 min-h-[250px] border p-2 rounded-xl border-[#1F1F1F] sm:flex-row flex-col flex gap-5 ">
										<h1 className="text-5xl sm:text-6xl font-semibold text-[#ffffff]">
											004
										</h1>
										<div className="w-full lg:px-4 flex flex-col gap-4">
											<div className="w-full h-[40px] flex justify-between items-center">
												<h3 className="sm:text-base text-sm">
													DeltosparkInnovation Lab Inauguration
												</h3>
												<div className="px-4 py-2 rounded-full border-[#1F1F1F] border flex items-center gap-2">
													<svg
														width="20"
														height="20"
														viewBox="0 0 20 20"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M5.625 2.5V4.375M14.375 2.5V4.375M2.5 15.625V6.25C2.5 5.21447 3.33947 4.375 4.375 4.375H15.625C16.6605 4.375 17.5 5.21447 17.5 6.25V15.625M2.5 15.625C2.5 16.6605 3.33947 17.5 4.375 17.5H15.625C16.6605 17.5 17.5 16.6605 17.5 15.625M2.5 15.625V9.375C2.5 8.33947 3.33947 7.5 4.375 7.5H15.625C16.6605 7.5 17.5 8.33947 17.5 9.375V15.625M10 10.625H10.0063V10.6313H10V10.625ZM10 12.5H10.0063V12.5063H10V12.5ZM10 14.375H10.0063V14.3813H10V14.375ZM8.125 12.5H8.13125V12.5063H8.125V12.5ZM8.125 14.375H8.13125V14.3813H8.125V14.375ZM6.25 12.5H6.25625V12.5063H6.25V12.5ZM6.25 14.375H6.25625V14.3813H6.25V14.375ZM11.875 10.625H11.8813V10.6313H11.875V10.625ZM11.875 12.5H11.8813V12.5063H11.875V12.5ZM11.875 14.375H11.8813V14.3813H11.875V14.375ZM13.75 10.625H13.7563V10.6313H13.75V10.625ZM13.75 12.5H13.7563V12.5063H13.75V12.5Z"
															stroke="white"
															stroke-linecap="round"
															stroke-linejoin="round"
														/>
													</svg>
													<span className="text-xs font-light">March 2021</span>
												</div>
											</div>
											<div className="h-full gap-4 rounded-xl border-[#1F1F1F] border p-5 flex flex-col justify-center achievements-bg">
												<h4 className="font-thin">Description</h4>
												<p className="text-sm text-[#8C8C8C]">
													To foster creativity and innovation, we inaugurated the
													DeltosparkInnovation Lab. This state-of-the-art facility
													served as a hub for our team to ideate, experiment, and
													explore emerging technologies.
												</p>
											</div>
										</div>
									</div>
								</ScrollAnimation>
							</div>
							<div className=" w-full">
								<ScrollAnimation variants={scaleUpVariants}>
									<div className="pt-10 sm:pl-6 min-h-[250px] border p-2 rounded-xl border-[#1F1F1F] sm:flex-row flex-col flex gap-5 ">
										<h1 className="text-5xl sm:text-6xl font-semibold text-[#ffffff]">
											005
										</h1>
										<div className="w-full lg:px-4 flex flex-col gap-4">
											<div className="w-full h-[40px] flex justify-between items-center">
												<h3 className="sm:text-base text-sm">
													500 Satisfied Clients
												</h3>
												<div className="px-4 py-2 rounded-full border-[#1F1F1F] border flex items-center gap-2">
													<svg
														width="20"
														height="20"
														viewBox="0 0 20 20"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M5.625 2.5V4.375M14.375 2.5V4.375M2.5 15.625V6.25C2.5 5.21447 3.33947 4.375 4.375 4.375H15.625C16.6605 4.375 17.5 5.21447 17.5 6.25V15.625M2.5 15.625C2.5 16.6605 3.33947 17.5 4.375 17.5H15.625C16.6605 17.5 17.5 16.6605 17.5 15.625M2.5 15.625V9.375C2.5 8.33947 3.33947 7.5 4.375 7.5H15.625C16.6605 7.5 17.5 8.33947 17.5 9.375V15.625M10 10.625H10.0063V10.6313H10V10.625ZM10 12.5H10.0063V12.5063H10V12.5ZM10 14.375H10.0063V14.3813H10V14.375ZM8.125 12.5H8.13125V12.5063H8.125V12.5ZM8.125 14.375H8.13125V14.3813H8.125V14.375ZM6.25 12.5H6.25625V12.5063H6.25V12.5ZM6.25 14.375H6.25625V14.3813H6.25V14.375ZM11.875 10.625H11.8813V10.6313H11.875V10.625ZM11.875 12.5H11.8813V12.5063H11.875V12.5ZM11.875 14.375H11.8813V14.3813H11.875V14.375ZM13.75 10.625H13.7563V10.6313H13.75V10.625ZM13.75 12.5H13.7563V12.5063H13.75V12.5Z"
															stroke="white"
															stroke-linecap="round"
															stroke-linejoin="round"
														/>
													</svg>

													<span className="text-xs font-light">September 2023</span>
												</div>
											</div>
											<div className="h-full gap-4 rounded-xl border-[#1F1F1F] border p-5 flex flex-col justify-center achievements-bg">
												<h4 className="font-thin">Description</h4>
												<p className="text-sm text-[#8C8C8C]">
													We celebrated reaching a milestone of serving 500
													satisfied clients, further strengthening our reputation
													for customer-centric services and successful project
													outcomes.
												</p>
											</div>
										</div>
									</div>
								</ScrollAnimation>
							</div>
						</div>
					</div>
				</div> */}
				</ScrollAnimation>
				{/* <ScrollAnimation variants={scaleUpVariants}>
				<div className="flex flex-col items-center mt-24  w-full sm:max-w-[1280px] p-2 sm:p-10 mx-auto gap-10">
					<h1 className="text-center xl:text-4xl text-2xl font-semibold lg:w-[500px]">
						<span className="text-[#808080]">Our</span> Awards & Recognitions
					</h1>
					<p className="text-sm text-[#808080] text-center lg:w-[900px]">
						Witness the brilliance of our previous projects. Our portfolio
						showcases the successful collaborations we ve had with diverse
						clients across various industries. Let our work speak for itself.
					</p>
					<div className="flex flex-col gap-10">
						<div className="w-full md:flex-row flex-col flex gap-10 ">
							<div className="md:w-1/2">
								<ScrollAnimation variants={scaleUpVariants}>
									<div className="border border-[#292929] min-h-[500px] rounded-2xl my-cardBG flex flex-col justify-center items-center gap-4 p-4">
										<div className="flex flex-col gap-2 items-center">
											<Image src={awardsicons} width={100} height={100} alt="" />
											<div className="flex gap-2 justify-center items-center px-3 py-2 rounded-full bg-[#0f0f0f] border border-[#1F1F1F]">
												<svg
													width="16"
													height="16"
													viewBox="0 0 20 20"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M5.625 2.5V4.375M14.375 2.5V4.375M2.5 15.625V6.25C2.5 5.21447 3.33947 4.375 4.375 4.375H15.625C16.6605 4.375 17.5 5.21447 17.5 6.25V15.625M2.5 15.625C2.5 16.6605 3.33947 17.5 4.375 17.5H15.625C16.6605 17.5 17.5 16.6605 17.5 15.625M2.5 15.625V9.375C2.5 8.33947 3.33947 7.5 4.375 7.5H15.625C16.6605 7.5 17.5 8.33947 17.5 9.375V15.625M10 10.625H10.0063V10.6313H10V10.625ZM10 12.5H10.0063V12.5063H10V12.5ZM10 14.375H10.0063V14.3813H10V14.375ZM8.125 12.5H8.13125V12.5063H8.125V12.5ZM8.125 14.375H8.13125V14.3813H8.125V14.375ZM6.25 12.5H6.25625V12.5063H6.25V12.5ZM6.25 14.375H6.25625V14.3813H6.25V14.375ZM11.875 10.625H11.8813V10.6313H11.875V10.625ZM11.875 12.5H11.8813V12.5063H11.875V12.5ZM11.875 14.375H11.8813V14.3813H11.875V14.375ZM13.75 10.625H13.7563V10.6313H13.75V10.625ZM13.75 12.5H13.7563V12.5063H13.75V12.5Z"
														stroke="white"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
												</svg>
												<span className="text-xs">October 2017</span>
											</div>
										</div>
										<div className="flex flex-col justify-center items-center gap-4 w-[80%] h-[220px]">
											<h3 className="text-xl font-semibold text-center">
												Digital Excellence Award
											</h3>
											<p className="text-sm text-center text-[#8C8C8C]">
												Recognition for outstanding contributions to the digital
												industry, celebrating our ability to deliver exceptional web
												design and development solutions that push the boundaries of
												creativity and functionality.
											</p>
										</div>
										<div className="flex flex-col justify-center items-center gap-4  rounded-xl border border-[#1F1F1F] w-[80%] h-[100px]">
											<h4 className="text-center">Why</h4>
											<p className="text-sm text-center text-[#808080]">
												Innovative web design and development solutions.
											</p>
										</div>
									</div>
								</ScrollAnimation>
							</div>
							<div className="md:w-1/2">
								<ScrollAnimation variants={scaleUpVariants}>
									<div className="border border-[#292929] min-h-[500px] rounded-2xl my-cardBG flex flex-col justify-center items-center gap-4 p-4">
										<div className="flex flex-col gap-2 items-center">
											<Image src={awardsicons} width={100} height={100} alt="" />
											<div className="flex gap-2 justify-center items-center px-3 py-2 rounded-full bg-[#0f0f0f] border border-[#1F1F1F]">
												<svg
													width="16"
													height="16"
													viewBox="0 0 20 20"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M5.625 2.5V4.375M14.375 2.5V4.375M2.5 15.625V6.25C2.5 5.21447 3.33947 4.375 4.375 4.375H15.625C16.6605 4.375 17.5 5.21447 17.5 6.25V15.625M2.5 15.625C2.5 16.6605 3.33947 17.5 4.375 17.5H15.625C16.6605 17.5 17.5 16.6605 17.5 15.625M2.5 15.625V9.375C2.5 8.33947 3.33947 7.5 4.375 7.5H15.625C16.6605 7.5 17.5 8.33947 17.5 9.375V15.625M10 10.625H10.0063V10.6313H10V10.625ZM10 12.5H10.0063V12.5063H10V12.5ZM10 14.375H10.0063V14.3813H10V14.375ZM8.125 12.5H8.13125V12.5063H8.125V12.5ZM8.125 14.375H8.13125V14.3813H8.125V14.375ZM6.25 12.5H6.25625V12.5063H6.25V12.5ZM6.25 14.375H6.25625V14.3813H6.25V14.375ZM11.875 10.625H11.8813V10.6313H11.875V10.625ZM11.875 12.5H11.8813V12.5063H11.875V12.5ZM11.875 14.375H11.8813V14.3813H11.875V14.375ZM13.75 10.625H13.7563V10.6313H13.75V10.625ZM13.75 12.5H13.7563V12.5063H13.75V12.5Z"
														stroke="white"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
												</svg>
												<span className="text-xs">March 2019</span>
											</div>
										</div>
										<div className="flex flex-col justify-center items-center gap-4 w-[80%] h-[220px]">
											<h3 className="text-xl text-center font-semibold">
												Top Mobile App Development Agency
											</h3>
											<p className="text-sm text-center text-[#8C8C8C]">
												Recognized as a top mobile app development agency by
												industry experts, highlighting our proficiency in delivering
												seamless and user-centric mobile applications.
											</p>
										</div>
										<div className="flex flex-col justify-center items-center gap-4  rounded-xl border border-[#1F1F1F] w-[80%] h-[100px]">
											<h4 className="text-center">Why</h4>
											<p className="text-sm text-center text-[#808080]">
												Unparalleled app development services and designs.
											</p>
										</div>
									</div>
								</ScrollAnimation>
							</div>
						</div>
						<div className="w-full flex md:flex-row flex-col gap-10 ">
							<div className="md:w-1/2">
								<ScrollAnimation variants={scaleUpVariants}>
									<div className="border border-[#292929] min-h-[500px] rounded-2xl my-cardBG flex flex-col justify-center items-center gap-4 p-4">
										<div className="flex flex-col gap-2 items-center">
											<Image src={awardsicons} width={100} height={100} alt="" />
											<div className="flex gap-2 justify-center items-center px-3 py-2 rounded-full bg-[#0f0f0f] border border-[#1F1F1F]">
												<svg
													width="16"
													height="16"
													viewBox="0 0 20 20"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M5.625 2.5V4.375M14.375 2.5V4.375M2.5 15.625V6.25C2.5 5.21447 3.33947 4.375 4.375 4.375H15.625C16.6605 4.375 17.5 5.21447 17.5 6.25V15.625M2.5 15.625C2.5 16.6605 3.33947 17.5 4.375 17.5H15.625C16.6605 17.5 17.5 16.6605 17.5 15.625M2.5 15.625V9.375C2.5 8.33947 3.33947 7.5 4.375 7.5H15.625C16.6605 7.5 17.5 8.33947 17.5 9.375V15.625M10 10.625H10.0063V10.6313H10V10.625ZM10 12.5H10.0063V12.5063H10V12.5ZM10 14.375H10.0063V14.3813H10V14.375ZM8.125 12.5H8.13125V12.5063H8.125V12.5ZM8.125 14.375H8.13125V14.3813H8.125V14.375ZM6.25 12.5H6.25625V12.5063H6.25V12.5ZM6.25 14.375H6.25625V14.3813H6.25V14.375ZM11.875 10.625H11.8813V10.6313H11.875V10.625ZM11.875 12.5H11.8813V12.5063H11.875V12.5ZM11.875 14.375H11.8813V14.3813H11.875V14.375ZM13.75 10.625H13.7563V10.6313H13.75V10.625ZM13.75 12.5H13.7563V12.5063H13.75V12.5Z"
														stroke="white"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
												</svg>
												<span className="text-xs">July 2022</span>
											</div>
										</div>
										<div className="flex flex-col justify-center items-center gap-4 w-[80%] h-[220px]">
											<h3 className="text-xl text-center font-semibold">
												Best Digital Marketing Campaign
											</h3>
											<p className="text-sm text-center text-[#8C8C8C]">
												Awarded for an exceptional digital marketing campaign with
												outstanding results, showcasing our data-driven strategies
												and targeted marketing efforts that achieved remarkable
												business growth for our clients.
											</p>
										</div>
										<div className="flex flex-col justify-center items-center gap-4  rounded-xl border border-[#1F1F1F] w-[80%] h-[100px]">
											<h4 className="text-center">Why</h4>
											<p className="text-sm text-center text-[#808080]">
												Data-driven strategies and targeted marketing efforts.
											</p>
										</div>
									</div>
								</ScrollAnimation>
							</div>
							<div className="md:w-1/2">
								<ScrollAnimation variants={scaleUpVariants}>
									<div className="border border-[#292929] min-h-[500px] rounded-2xl my-cardBG flex flex-col justify-center items-center gap-4  p-4">
										<div className="flex flex-col gap-2 items-center">
											<Image src={awardsicons} width={100} height={100} alt="" />
											<div className="flex gap-2 justify-center items-center px-3 py-2 rounded-full bg-[#0f0f0f] border border-[#1F1F1F]">
												<svg
													width="16"
													height="16"
													viewBox="0 0 20 20"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M5.625 2.5V4.375M14.375 2.5V4.375M2.5 15.625V6.25C2.5 5.21447 3.33947 4.375 4.375 4.375H15.625C16.6605 4.375 17.5 5.21447 17.5 6.25V15.625M2.5 15.625C2.5 16.6605 3.33947 17.5 4.375 17.5H15.625C16.6605 17.5 17.5 16.6605 17.5 15.625M2.5 15.625V9.375C2.5 8.33947 3.33947 7.5 4.375 7.5H15.625C16.6605 7.5 17.5 8.33947 17.5 9.375V15.625M10 10.625H10.0063V10.6313H10V10.625ZM10 12.5H10.0063V12.5063H10V12.5ZM10 14.375H10.0063V14.3813H10V14.375ZM8.125 12.5H8.13125V12.5063H8.125V12.5ZM8.125 14.375H8.13125V14.3813H8.125V14.375ZM6.25 12.5H6.25625V12.5063H6.25V12.5ZM6.25 14.375H6.25625V14.3813H6.25V14.375ZM11.875 10.625H11.8813V10.6313H11.875V10.625ZM11.875 12.5H11.8813V12.5063H11.875V12.5ZM11.875 14.375H11.8813V14.3813H11.875V14.375ZM13.75 10.625H13.7563V10.6313H13.75V10.625ZM13.75 12.5H13.7563V12.5063H13.75V12.5Z"
														stroke="white"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
												</svg>
												<span className="text-xs">July 2022</span>
											</div>
										</div>
										<div className="flex flex-col justify-center items-center gap-4 w-[80%] h-[220px]">
											<h3 className="text-xl text-center font-semibold">
												Best Digital Marketing Campaign
											</h3>
											<p className="text-sm text-center text-[#8C8C8C]">
												Awarded for an exceptional digital marketing campaign with
												outstanding results, showcasing our data-driven strategies
												and targeted marketing efforts that achieved remarkable
												business growth for our clients.
											</p>
										</div>
										<div className="flex flex-col justify-center items-center gap-4  rounded-xl border border-[#1F1F1F] w-[80%] h-[100px]">
											<h4 className="text-center">Why</h4>
											<p className="text-sm text-center text-[#808080]">
												Data-driven strategies and targeted marketing efforts.
											</p>
										</div>
									</div>
								</ScrollAnimation>
							</div>
						</div>
					</div>
				</div>
				</ScrollAnimation> */}
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
		</>
	);
};

export default About;
