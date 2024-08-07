"use client";
import { useEffect, useRef } from "react";
import spinner from "@/public/spinner.svg";
import Image from "next/image";

const RotatingBox = () => {
	const boxRef = useRef(null);

	useEffect(() => {
		const handleScroll = (event) => {
			if (boxRef.current) {
				const rotation = (window.scrollY / 12) % 360;
				boxRef.current.style.transform = `rotate(${rotation}deg)`;
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="flex justify-center items-center relative">
			<div
				ref={boxRef}
				className="w-32 h-32 flex justify-center items-center rounded-full "
			>
				<Image src={spinner} width={500} height={500} alt="" />
			</div>
			<div className="absolute">
				<svg
					width="100"
					height="100"
					viewBox="0 0 125 125"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g filter="url(#filter0_f_136_4)">
						<circle cx="62.5" cy="62.5" r="37.5" fill="#766D6D" />
					</g>
					<rect
						x="28"
						y="27"
						width="70"
						height="70"
						fill="url(#pattern0_136_4)"
					/>
					<defs>
						<filter
							id="filter0_f_136_4"
							x="0"
							y="0"
							width="125"
							height="125"
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="BackgroundImageFix"
								result="shape"
							/>
							<feGaussianBlur
								stdDeviation="12.5"
								result="effect1_foregroundBlur_136_4"
							/>
						</filter>
						<pattern
							id="pattern0_136_4"
							patternContentUnits="objectBoundingBox"
							width="1"
							height="1"
						>
							<image
								href="data:image/png;base64,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"
								transform="scale(0.0111111)"
							/>
						</pattern>
					</defs>
				</svg>
			</div>
		</div>
	);
};

export default RotatingBox;
