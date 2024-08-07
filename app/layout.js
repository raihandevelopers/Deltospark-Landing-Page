import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const sora = Sora({ subsets: ["latin"] });
import Link from "next/link";
import RotatingBox from "@/components/RotatingBox";

export const metadata = {
	title: "Deltospark",
	description: "We are a software development agency that helps startups and businesses build their tech, including websites and apps.\ndeltospark.com",
	icons:{
		icon:['/favicon.ico?v=4'],
		apple:['/apple-touch-icon.png?v=4'],
		shortcut:['/apple-touch-icon.png']
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={sora.className}>
				<div className=" min-h-screen max-w-screen bg-[#0F0F0F] text-white relative">
					<Navbar />
					{children}
					<Footer />

					<Link
						href={"https://wa.me/9826008783"}
						target="_blank"
						className="fixed bottom-[2%] right-[1%]"
					>
						<RotatingBox />
					</Link>
				</div>
			</body>
		</html>
	);
}
