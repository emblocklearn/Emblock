// src/data.js
import uiImage from '../assets/ui-image.png'; // Correct path
import frontendImg from '../assets/frontendimg.png'; // Correct path
import backendImg from '../assets/backendimg.png'; // Correct path
import fullstackImg from '../assets/fstackimg.png'; // Correct path
import secondImg from '../assets/secondImg.jpg';
import secondImg1 from '../assets/secondImg1.png';
import secondImg2 from '../assets/secondImg2.png';
import secondImg3 from '../assets/secondImg3.png';
export const offerItems = [
  {
    imgSrc: uiImage,
    alt: 'UI/UX Designing',
    title: 'UI/UX Designing',
    description: 'Learn to create intuitive and user-friendly interfaces for modern apps.',
    secondImg:secondImg2,
    applydesc1:" Creating wireframes and prototypes to visualize design concepts and interactions.",
    applydesc2:"Engage in real-time collaboration with clients and gain practical, hands-on experience in the field.",
    applydesc3:"Learn UI/UX best practices using the latest trends in the industry.",
    applydesc4:" Build beautifully designed web and mobile projects using modern tools used by top companies in 2024."

  },
  {
    imgSrc: frontendImg,
    alt: 'Frontend Development',
    title: 'Frontend Development',
    description: 'Master the art of crafting responsive and interactive websites.',
    secondImg:secondImg1,
    applydesc1:"You will learn complete front-end web development from scratch",
    applydesc2:"Engage in real-time collaboration with clients and gain practical, hands-on experience in the field.",
    applydesc3:"You will learn to build Bootstrap 5 Web Applications",
    applydesc4:"You will develop skills in building contemporary websites using HTML5, CSS4 and React JS."
  },
  {
    imgSrc: backendImg,
    alt: 'Backend Development',
    title: 'Backend Development',
    description: 'Understand server-side development with databases, APIs, and more.',
    secondImg:secondImg3,
    applydesc1:"Gain expertise in the full modern backend stack, including Node.js and MongoDB.",
    applydesc2:"Engage in real-time collaboration with clients and gain practical, hands-on experience in the field.",
    applydesc3:"You will learn web application frameworks such as Django during the program.",
    applydesc4:"Develop a complete real-world application, including both API and server-side rendered website, from start to finish."
  },
  {
    imgSrc: fullstackImg,

    alt: 'Full Stack Development',
    title: 'Full Stack Development',
    description: 'Explore decentralized web technologies, blockchain, and smart contracts.',
    secondImg:secondImg,
    applydesc1:"Creating, testing, and deploying smart contracts across different blockchain platforms.",
    applydesc2:"Build user-friendly front-end interfaces for DApps using web 3 frameworks and integrate them with web 3 wallets.",
    applydesc3:"Discover decentralized finance, non-fungible tokens, and decentralized autonomous organizations in web 3.",
    applydesc4:"Developing, interacting with, and overseeing decentralized applications that utilize web 3 protocols."
  },
];

export default offerItems;