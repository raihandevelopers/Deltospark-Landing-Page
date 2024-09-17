const metadata = {
    home: {
      title: "Home - Your Website",
      description: "Welcome to the home page of Your Website.",
      keywords: "home, website, main page",
      openGraph: {
        title: "Home - Your Website",
        description: "Welcome to the home page of Your Website.",
        url: "https://yourwebsite.com",
        site_name: "Your Website Name",
        images: [
          {
            url: "https://yourwebsite.com/home-og-image.jpg",
            width: 1200,
            height: 630,
            alt: "Home Page Open Graph Image"
          }
        ],
      },
      twitter: {
        card: "summary_large_image",
        site: "@yourtwitterhandle",
        title: "Home - Your Website",
        description: "Welcome to the home page of Your Website.",
        image: "https://yourwebsite.com/home-twitter-image.jpg"
      }
    },
    about: {
      title: "About Us - Your Website",
      description: "Learn more about us on the About Us page.",
      keywords: "about us, company info",
      openGraph: {
        title: "About Us - Your Website",
        description: "Learn more about us on the About Us page.",
        url: "https://yourwebsite.com/about",
        site_name: "Your Website Name",
        images: [
          {
            url: "https://yourwebsite.com/about-og-image.jpg",
            width: 1200,
            height: 630,
            alt: "About Us Open Graph Image"
          }
        ],
      },
      twitter: {
        card: "summary_large_image",
        site: "@yourtwitterhandle",
        title: "About Us - Your Website",
        description: "Learn more about us on the About Us page.",
        image: "https://yourwebsite.com/about-twitter-image.jpg"
      }
    }
    // Add more routes as needed
  };
  
  export default metadata;
  