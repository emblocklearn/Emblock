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
    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/project-emblock.appspot.com/o/assests%2Fui%20ux.avif?alt=media&token=cc5e1cce-4407-4363-8b74-f938abe75099',
    alt: 'UI/UX Designing',
    title: 'UI/UX Designing',
    description: 'Learn to create intuitive and user-friendly interfaces for modern apps.',
    secondImg:'https://firebasestorage.googleapis.com/v0/b/project-emblock.appspot.com/o/assests%2Fui%20ux.avif?alt=media&token=cc5e1cce-4407-4363-8b74-f938abe75099',
    applydesc1:" Creating wireframes and prototypes to visualize design concepts and interactions.",
    applydesc2:"Engage in real-time collaboration with clients and gain practical, hands-on experience in the field.",
    applydesc3:"Learn UI/UX best practices using the latest trends in the industry.",
    applydesc4:" Build beautifully designed web and mobile projects using modern tools used by top companies in 2024."

  },
  {
    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/project-emblock.appspot.com/o/assests%2Ffront%20end%202.avif?alt=media&token=8c9cfd9e-8167-455a-9955-05d6eaf850c8',
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
    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/project-emblock.appspot.com/o/assests%2Ffront%20end%202.avif?alt=media&token=8c9cfd9e-8167-455a-9955-05d6eaf850c8',
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
    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/project-emblock.appspot.com/o/assests%2Ffull%20stack%202.avif?alt=media&token=cd80abc4-243e-4df9-9577-8ebfd2c2aef1',

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





export const faqs = [
  {
    id: 1,
    question: "Why should I choose Full Stack Development as a career?",
    response: "Full Stack Development offers dynamic opportunities for problem-solving, innovation, and making a real impact across industries. The demand for skilled Full Stack Developers is on the rise, making it a lucrative and fulfilling career choice."
  },
  {
    id: 2,
    question: "What job opportunities does Full Stack Development offer?",
    response: "Full Stack Development opens doors to diverse roles, including Full Stack Developer, Web Developer, and Software Engineer, with opportunities spanning various sectors such as finance, healthcare, and technology."
  },
  {
    id: 3,
    question: "Where should I learn Full Stack Development?",
    response: "Our workshop will provide insights about courses and resources to kickstart your Full Stack Development journey."
  },
  {
    id: 4,
    question: "What can I expect from a Full Stack Development career in the next 5 to 10 years?",
    response: "The field is expected to grow exponentially, with increased integration into various industries. As technology evolves, Full Stack Developers will play a crucial role in shaping the future of digital innovation and technology solutions."
  },
  {
    id: 5,
    question: "What skills do I need to succeed as a Full Stack Developer?",
    response: "To succeed as a Full Stack Developer, you need strong skills in both front-end and back-end technologies, a solid understanding of databases, and familiarity with cloud services and DevOps tools."
  },
  {
    id: 6,
    question: "What are the key technologies used in Full Stack Development?",
    response: "Key technologies include HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and SQL. Familiarity with version control systems like Git and deployment platforms like Heroku is also essential."
  },
];


export const testimonials = [
  {
    id: 1,
    content:
      'Joining this Full Stack workshop was an eye-opener. The dedication and knowledge of the mentors, especially Prem, completely transformed the way I approach coding. They make the whole journey to becoming a full stack developer exciting and inspiring.',
    name: 'Karthik',
  },
  {
    id: 2,
    content:
      'This Full Stack workshop totally changed how I think about coding. From designing slick user interfaces to building powerful backends, every session blew my mind. And with mentors like Prem there to guide you, there\'s no way you can\'t succeed as a full stack developer.',
    name: 'Arjun',
  },
  {
    id: 3,
    content:
      'This workshop was a game-changer for my coding skills. Learning how to build user interfaces and manage servers felt like unlocking a whole new world. Plus, the mentors are so passionate, they make you want to keep learning and pushing yourself.',
    name: 'John',
  },
];