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
    title: "Resources",
    links: [
      {
        id: '0',
        name: "Contact",
        link: "/contact#",
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

export const contacts = [
  {
    id: "1",
    icon: star,
    title: "Discover more",
    content:
      "‍‍‍‍Get a custom demo for your use case or business",
  },
  {
    id: "2",
    icon: shield,
    title: "Collaborate with us",
    content:
      "Let's share your thoughts with us without any hesitation.",
  },
  {
    id: "3",
    icon: HandShake,
    title: "Drop us a line!",
    content:
      "Say hello! we enjoy listening to you",
  },
];

export const fValues =[
  {
    id: "full-name",
    label: "First Name",
    type:"text"
  },
  {
    id: "last-name",
    label: "Last Name",
    type:"text"

  },
  {
    id: "company",
    label: "Company",
    type:"text"

  },
  {
    id: "email",
    label: "Email",
    type:"email"
  },
  {
    id: "phone",
    label: "Phone number",
    type:"tel"
  },
]
export const termsServices = [
  {
    id: "Term-1",
    title: "Eligibilty",
    content:
      "Our website is available to users who are 13 years of age or older. If you are under the age of 13, you must have the permission of a parent or guardian to use our website.",
  },
  {
    id: "Term-2",
    title: "Account Creation",
    content:
      "In order to use certain features of our website, you may need to create an account. When creating an account, you must provide accurate and complete information. You are responsible for keeping your account information confidential and for all activity that occurs on your account.",
  },
  {
    id: "Term-3",
    title: "Content",
    content:
      "You are responsible for all content that you post on our website. You agree that your content will not violate any laws or regulations, and that it will not infringe on the rights of any third party. You also agree that your content will not be defamatory, obscene, or otherwise offensive.",
  },
  {
    id: "Term-4",
    title: "Conduct",
    content:
      "You agree to use our website in a respectful and lawful manner. You agree not to engage in any activity that would disrupt or damage our website, or that would violate the rights of any third party.",
  },
  {
    id: "Term-5",
    title: "Termination",
    content:
      "We may terminate your account at any time for any reason. We also reserve the right to change or modify these Terms of Service at any time.",
  },
  {
    id: "Term-6",
    title: "Governing Law",
    content:
      "These Terms of Service are governed by the laws of the State of California. Any dispute arising out of these Terms of Service will be resolved in a court of law located in the State of California.",
  },
  {
    id: "Term-7",
    title: "Entire Agrrement",
    content:
      "These Terms of Service constitute the entire agreement between you and us regarding the use of our website. These Terms of Service supersede any prior or contemporaneous communications, representations, or agreements, whether oral or written.",
  },
  {
    id: "Term-8",
    title: "Contact us",
    content:
      "If you have any questions about these Terms of Service, please contact at " ,
  }
  
];
export const signupValues =[
  {
    id: "user-name",
    label: "Username",
    type:"text"
  },

  {
    id: "email",
    label: "Email",
    type:"email"
  },
  {
    id: "password",
    label: "Password",
    type:"password"
  },
]