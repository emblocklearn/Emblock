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
    question: "What are the long-term career prospects in UI/UX Design, Front-End, Back-End, and Full Stack Development?",
    response: "All these fields are poised for significant growth over the next decade. As technology continues to advance, professionals with expertise in UI/UX, Front-End, Back-End, and Full Stack Development will be key players in shaping the future of digital experiences and infrastructure."
  },
  {
    id: 2,
    question: "What job opportunities does Full Stack Development offer?",
    response: "Full Stack Development opens doors to diverse roles, including Full Stack Developer, Web Developer, and Software Engineer, with opportunities spanning various sectors such as finance, healthcare, and technology."
  },
  {
    id: 3,
    question: "Why should I pursue a career in UI/UX Design?",
    response: "UI/UX Design focuses on creating intuitive, user-friendly digital experiences. With businesses increasingly prioritizing user-centered designs, demand for UI/UX Designers is rapidly growing, offering creative and impactful career opportunities."
  },
  {
    id: 4,
    question: "What are the career opportunities for Front-End Developers?",
    response: "Front-End Developers are responsible for crafting the user interface and experience of websites and applications. Career opportunities include roles such as Front-End Developer, Web Designer, and UI Developer, with high demand across industries."
  },
  {
    id: 5,
    question: "What makes Back-End Development a good career choice?",
    response: "Back-End Development involves server-side logic, databases, and API integration. It is critical for creating robust, scalable applications. Careers include Back-End Developer, Database Administrator, and API Developer, with strong growth potential."
  },
  {
    id: 6,
    question: "What skills do I need to succeed in UI/UX Design?",
    response: "To excel in UI/UX Design, you need skills in wireframing, prototyping, user research, and tools like Figma, Adobe XD, and Sketch. A deep understanding of user behavior and interaction design is also essential."
  },
  {
    id: 7,
    question: "What technologies are essential for Front-End Development?",
    response: "Front-End Development requires strong skills in HTML, CSS, JavaScript, and frameworks like React, Angular, or Vue.js. Knowledge of responsive design, version control, and browser developer tools is also important."
  },
  {
    id: 8,
    question: "What key technologies should I learn for Back-End Development?",
    response: "Back-End Development relies on technologies like Node.js, Express, Python, Ruby on Rails, and databases such as SQL and MongoDB. Familiarity with cloud services, APIs, and authentication mechanisms is crucial."
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
    name: 'Lakshy',
  },
];