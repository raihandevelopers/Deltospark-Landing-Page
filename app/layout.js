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
	description: "We are a software development agency that helps startups and businesses build their tech, including websites and apps.\ndeltospark.com",
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png']
  },
  meta: {
    keywords: "software development, app development, web development, AI solutions, blockchain development, CRM systems, best software development agency in Indore, best app development agency in Indore, web development agency in Indore, best software development agency in San Francisco, best app development agency in San Francisco, web development agency in San Francisco, best software development agency in Boston, best app development agency in Boston, web development agency in Boston, best software development agency in New York, best app development agency in New York, web development agency in New York, best software development agency in London, best app development agency in London, web development agency in London, best software development agency in Canada, best app development agency in Canada, web development agency in Canada, best software development agency in Australia, best app development agency in Australia, web development agency in Australia, best software development agency in UK, best app development agency in UK, web development agency in UK, software development services, app development services, web development services, AI development services, blockchain development services, CRM development services, custom software development, custom app development, custom web development, CRM solutions, AI and machine learning development, blockchain technology solutions",
    openGraph: {
      type: "website",
      title: "Deltospark",
      description: "We are a software development agency that helps startups and businesses build their tech, including websites and apps.\ndeltospark.com",
      url: "https://deltospark.com",
      image: "https://deltospark.com/logo.png",
    },
    twitter: {
      card: "summary_large_image",
      site: "@deltospark",
      title: "Deltospark",
      description: "We are a software development agency that helps startups and businesses build their tech, including websites and apps.\ndeltospark.com",
      image: "https://deltospark.com/logo.png",
    }
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Deltospark",
    "url": "https://deltospark.com",
    "logo": "https://deltospark.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919826008783",
      "contactType": "Customer Service",
      "email": "deltosparks@gmail.com"
    },
    "sameAs": [
      "https://www.facebook.com/deltospark",
      "https://twitter.com/deltospark",
      "https://www.linkedin.com/company/deltospark"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Indore",
      "addressRegion": "Madhya Pradesh",
      "addressCountry": "India",
      "postalCode": "452001"
    },
    "description": "Deltospark is a premier software development agency specializing in web and app development, AI solutions, blockchain technology, and CRM systems. We provide innovative and customized solutions for startups and established businesses globally. We are the best software and app development agency in Indore, India; San Francisco, USA; Boston, USA; New York, USA; London, UK; Canada; Australia; and beyond.",
    "keywords": [
      "software development",
      "app development",
      "web development",
      "AI solutions",
      "blockchain development",
      "CRM systems",
      "best software development agency in Indore",
      "best app development agency in Indore",
      "web development agency in Indore",
      "best software development agency in San Francisco",
      "best app development agency in San Francisco",
      "web development agency in San Francisco",
      "best software development agency in Boston",
      "best app development agency in Boston",
      "web development agency in Boston",
      "best software development agency in New York",
      "best app development agency in New York",
      "web development agency in New York",
      "best software development agency in London",
      "best app development agency in London",
      "web development agency in London",
      "best software development agency in Canada",
      "best app development agency in Canada",
      "web development agency in Canada",
      "best software development agency in Australia",
      "best app development agency in Australia",
      "web development agency in Australia",
      "best software development agency in UK",
      "best app development agency in UK",
      "web development agency in UK",
      "software development services",
      "app development services",
      "web development services",
      "AI development services",
      "blockchain development services",
      "CRM development services",
      "custom software development",
      "custom app development",
      "custom web development",
      "CRM solutions",
      "AI and machine learning development",
      "blockchain technology solutions",
	  // Web Development Keywords
	  "Web Development", "Website Design", "Custom Web Development", "Responsive Web Design", "E-commerce Development", "Progressive Web Apps", 
	  "Front-end Development", "Back-end Development", "Full Stack Development", "HTML5", "CSS3", "JavaScript", "React.js", "Vue.js", "Angular", 
	  "Node.js", "PHP Development", "Ruby on Rails", "Django Development", "Laravel", "ASP.NET", "Content Management Systems", "WordPress Development", 
	  "Joomla Development", "Drupal Development", "Website Maintenance", "Website Optimization", "Website Redesign", "UI/UX Design", "Web Design Services",
  
	  // App Development Keywords
	  "App Development", "Mobile App Development", "iOS App Development", "Android App Development", "Cross-Platform Development", "Flutter Development", 
	  "React Native Development", "Hybrid App Development", "Native App Development", "App Design", "App UI/UX", "App Testing", "App Deployment", 
	  "App Maintenance", "Custom App Solutions", "Enterprise Mobile Apps", "Social Media Apps", "E-commerce Apps", "On-Demand Apps", "Health Apps", 
	  "Fitness Apps", "Gaming Apps", "Education Apps", "Productivity Apps", "Travel Apps", "Finance Apps", "Lifestyle Apps", "Augmented Reality Apps",
	  
	  // AI Keywords
	  "Artificial Intelligence", "AI Development", "Machine Learning", "Deep Learning", "Natural Language Processing", "NLP Solutions", "Computer Vision", 
	  "AI Integration", "Predictive Analytics", "AI for Automation", "AI-Powered Apps", "AI Chatbots", "AI Solutions Provider", "AI Consultancy", 
	  "AI Strategy", "AI Algorithms", "AI Model Training", "AI Model Deployment", "AI in Healthcare", "AI in Finance", "AI in Retail", "AI in Education", 
	  "AI Research", "AI Innovation", "AI Technologies", "AI Development Services",
  
	  // Blockchain Keywords
	  "Blockchain Development", "Smart Contracts", "Decentralized Applications", "dApps", "Cryptocurrency Development", "NFT Development", 
	  "Blockchain Consulting", "Blockchain Integration", "Blockchain Solutions", "Blockchain Technology", "Blockchain for Finance", "Blockchain for Supply Chain", 
	  "Blockchain for Healthcare", "Blockchain for Real Estate", "Private Blockchain", "Public Blockchain", "Hybrid Blockchain", "Smart Contract Audits", 
	  "Blockchain Security", "Blockchain Infrastructure", "Blockchain Tokens", "Blockchain Wallets", "Blockchain Platforms", "Blockchain Applications", 
	  "Blockchain Development Company", "Blockchain Development Services",
  
	  // CRM Development Keywords
	  "CRM Development", "Custom CRM Solutions", "CRM Software", "CRM Systems", "CRM Integration", "CRM Implementation", "Salesforce Development", 
	  "HubSpot CRM", "Zoho CRM", "Microsoft Dynamics CRM", "CRM Customization", "CRM Consulting", "CRM Analytics", "CRM Automation", "CRM Data Management", 
	  "CRM Migration", "CRM Support", "CRM Training", "CRM Integration Services", "CRM Solutions Provider", "CRM System Development",
  
	  // Tech Stack Keywords
	  "Tech Stack", "React.js Development", "Vue.js Development", "Angular Development", "Node.js Development", "Python Development", "Django Development", 
	  "Ruby on Rails Development", "PHP Development", "Java Development", "Swift Development", "Kotlin Development", "Flutter Development", 
	  "React Native Development", "HTML5 Development", "CSS3 Development", "JavaScript Development", "SQL", "NoSQL", "GraphQL", "REST APIs", 
	  "Microservices", "Serverless Architecture", "DevOps", "Cloud Computing", "AWS", "Azure", "Google Cloud Platform", "Docker", "Kubernetes", 
	  "CI/CD", "Infrastructure as Code", "Terraform", "Ansible", "Jenkins", "Git", "Version Control", "Agile Development", "Scrum", "Kanban", 
	  "Software Development Lifecycle", "Tech Innovations", "Tech Solutions", "Technology Consulting",
  
	  "Shopify Development", "Wordpress Development", "Freelance Development", "SEO", "E-Commerce Development", "Betting App Development", "Developer"
  
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.meta.keywords} />
        <meta property="og:title" content={metadata.meta.openGraph.title} />
        <meta property="og:description" content={metadata.meta.openGraph.description} />
        <meta property="og:type" content={metadata.meta.openGraph.type} />
        <meta property="og:url" content={metadata.meta.openGraph.url} />
        <meta property="og:image" content={metadata.meta.openGraph.image} />
        <meta name="twitter:card" content={metadata.meta.twitter.card} />
        <meta name="twitter:site" content={metadata.meta.twitter.site} />
        <meta name="twitter:title" content={metadata.meta.twitter.title} />
        <meta name="twitter:description" content={metadata.meta.twitter.description} />
        <meta name="twitter:image" content={metadata.meta.twitter.image} />
        <link rel="icon" href={metadata.icons.icon[0]} />
        <link rel="apple-touch-icon" href={metadata.icons.apple[0]} />
        <link rel="shortcut icon" href={metadata.icons.shortcut[0]} />
        <script type="application/ld+json">
          {JSON.stringify(metadata.structuredData)}
        </script>
      </Head>
      <body className={sora.className}>
        <div className="min-h-screen max-w-screen bg-[#0F0F0F] text-white relative">
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
