"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import hamburger from "@/public/hamburger.svg";
import close from "@/public/close.svg";
import { useState } from "react";

const Navbar = () => {
	const [isHidden, setIsHidden] = useState(true);
	const toggleVisibility = () => {
		setIsHidden(!isHidden);
	};

	return (
		<>
			<div className="sticky top-0 z-50">
				<nav className=" z-50 w-full px-[40px] lg:px-[80px]  py-[20px] flex flex-col bg-black relative backdrop-filter backdrop-blur-md bg-opacity-20 text-white  ">
					<div className="flex items-center justify-between w-full">
					<Link href="/" className="font-bold">
                DELTOSPARK
            </Link>
						<div className="">
							<ul className="md:flex gap-[10px] h-[42px]  items-center justify-center  hidden">
								<Link
									href={"/"}
									className="text-sm text-center py-2 px-3 transition-all hover:bg-[#1A1A1A] rounded-full"
								>
									Home
								</Link>
								<Link
									href={"/services"}
									className="text-sm text-center py-2 px-3 transition-all hover:bg-[#1A1A1A] rounded-full"
								>
									Services
								</Link>
								<Link
									href={"/projects"}
									className="text-sm text-center py-2 px-3 transition-all hover:bg-[#1A1A1A] rounded-full"
								>
									Projects
								</Link>
								<Link
									href={"/about"}
									className="text-sm text-center py-2 px-3 transition-all hover:bg-[#1A1A1A] rounded-full"
								>
									About Us
								</Link>
								<Link
									href={"/contact"}
									className="text-sm text-center py-2 px-3 transition-all hover:bg-[#1A1A1A] rounded-full"
								>
									Contact Us
								</Link>
							</ul>
							<button
								className={`md:hidden absolute right-[40px]  top-[16px] ${
									isHidden ? "opacity-100 h-auto" : "opacity-0 h-0"
								} transition-opacity duration-1000`}
								onClick={toggleVisibility}
							>
								<Image width={30} height={30} src={hamburger} alt="" />
							</button>
							<button
								className={`md:hidden absolute  right-[40px] top-[16px]  ${
									isHidden ? "opacity-0 h-0" : "opacity-100 h-auto"
								} transition-opacity duration-1000`}
								onClick={toggleVisibility}
							>
								<Image width={30} height={30} src={close} alt="" />
							</button>
						</div>
					</div>
				</nav>
				<div
					onClick={toggleVisibility}
					className={`w-full left-0 bg-black  transition-all border-b z-10 border-[#1F1F1F] backdrop-filter backdrop-blur-md bg-opacity-20 absolute ${
						isHidden
							? " transition-all  duration-1000 transform-y-full"
							: "transition-all top-[64px] duration-500 transform-y-0"
					} top-[-240px]`}
				>
					<div>
						<ul className=" gap-[10px] p-4 flex flex-col items-center justify-center ">
							<Link
								href={"/"}
								className="text-sm text-center py-2 px-3 transition-all hover:bg-[#1A1A1A] rounded-full"
							>
								Home
							</Link>
							<Link
								href={"/services"}
								className="text-sm text-center py-2 px-3 transition-all hover:bg-[#1A1A1A] rounded-full"
							>
								Services
							</Link>

							<Link
								href={"/projects"}
								className="text-sm text-center py-2 px-3 transition-all hover:bg-[#1A1A1A] rounded-full"
							>
								Projects
							</Link>

							<Link
								href={"/about"}
								className="text-sm text-center py-2 px-3 transition-all hover:bg-[#1A1A1A] rounded-full"
							>
								About Us
							</Link>

							<Link
								href={"/contact"}
								className="text-sm text-center py-2 px-3 transition-all hover:bg-[#1A1A1A] rounded-full"
							>
								Contact Us
							</Link>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
