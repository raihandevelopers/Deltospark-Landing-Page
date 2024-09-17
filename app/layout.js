import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import RotatingBox from "@/components/RotatingBox";
import Head from "next/head";
const sora = Sora({ subsets: ["latin"] });

export const metadata = {
	title: "Deltospark - Leading Software Development Agency | Web & App Solutions",
  description: "We are a software development agency that helps startups and businesses build their tech, including websites, apps and AI.",
  keywords: "deltospark, deltosparks, startup, early-stage startup, software development agency, website development, app development, seed funding, venture capital, angel investors, bootstrapping, incubator, accelerator, lean startup, MVP (Minimum Viable Product), startup branding, startup marketing, growth hacking, product development, product strategy, user acquisition, customer development, fundraising, pitch deck, business plan, legal services, accounting services, HR services, cloud computing, SaaS (Software as a Service), PaaS (Platform as a Service), API (Application Programming Interface), CRM (Customer Relationship Management), project management tools, collaboration tools, data analytics, AI (Artificial Intelligence), machine learning, startup landing pages, startup websites, mobile apps for startups, e-commerce platforms for startups, online marketplaces, subscription-based models, SaaS products, fintech startups, edtech startups, healthtech startups, biotech startups, cleantech startups, agritech startups, logistics startups, foodtech startups", // Add your keywords here
  openGraph: {
    title: "Deltospark - Expert Web Development & Tech Solutions",
    description: "Boost your business with Deltospark's tailored web development, AI, blockchain, and SEO services. Achieve success through innovation.",
    url: "https://deltospark.com",
    site_name: "Deltospark",
    images: [
      {
        url: "/public/deltospark-big-logo2.jpg", 
        width: 1200,
        height: 630,
        alt: "best software development company"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Deltospark",
    title: "Deltospark - Expert Web Development & Tech Solutions",
    description: "Build your MVP in 45 days with Deltospark.",
    image: "/public/deltospark-big-logo2.jpg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
      </Head>
      <body className={sora.className}>
        <div className="min-h-screen max-w-screen bg-[#0F0F0F] text-white relative">
          <Navbar />
          {children}
          <Footer />
          <Link
            href={"https://wa.me/9826008783"}
            target="_blank"
            className="fixed bottom-[2%] right-[1%]">
            <RotatingBox />
          </Link>
        </div>
      </body>
    </html>
  );
}
