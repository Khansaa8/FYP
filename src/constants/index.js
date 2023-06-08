import { HandShake,facebook, instagram, linkedin, twitter,shield, star  } from "../assets";


export const navLinks = [
  {
    id: "home",
    title: "Home",
    link:'/',
    anchor: "home",
  },
  {
    id: "features",
    title: "Features",
    link : '/#features',
    anchor: "features",
  },
  {
    id: "product",
    title: "Product",
    link: "/#product",
    anchor: "product",
  },
  {
    id: "about",
    title: "About",
    link:"/#about",
    anchor: "about",
  },
  {
    id: "contact",
    title: "Contact",
    link:"/#contact",
    anchor: "contact",
  }
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      " Improve customer communication and satisfaction with our API-powered voice recorder.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your personal informations and chat are secure.",
  },
  {
    id: "feature-3",
    icon: HandShake,
    title: "Building Relationships",
    content:
      "Make customers feel like they are talking to a real person, not a machine.",
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "100+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "10+",
  },
  {
    id: "stats-3",
    title: "Sales",
    value: "50+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        id: '0',
        name: "Content",
        link: "/content",
      },
      {
        id: '1',
        name: "How it Works",
        link: "/howitworks",
      },
      {
        id: '2',
        name: "Terms & Services",
        link: "/termsservives",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        id: '3', 
        name: "Help Center",
        link: "/helpcenter",
      },
      {
        id: '4',
        name: "Blog",
        link: "/blog",
      },
      {
        id: '5',
        name: "Explore",
        link: "/explore",
      },
    ],
  },
  
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];
