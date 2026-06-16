// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import dotnetLogo from "./assets/tech_logo/dotnet.png";
import phpLogo from "./assets/tech_logo/php.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import awsLogo from "./assets/tech_logo/aws2.png";
import linuxLogo from "./assets/tech_logo/linux.png";
import dockerLogo from "./assets/tech_logo/docker.webp";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience Section Logo's
import prodigyLogo from "./assets/company_logo/prodigy_logo.png";
import sihLogo from "./assets/company_logo/sih_logo.jpg";
import rdservicesLogo from "./assets/company_logo/rd_services_logo.jpeg";

// Education Section Logo's
import glsLogo  from "./assets/education_logo/gls_logo.png";
import guLogo from "./assets/education_logo/gu_logo.jpg";
import vedantLogo from "./assets/education_logo/vedant_logo.jpg";
import aadharshilaLogo from "./assets/education_logo/aadharshila_logo.jpg";

// Project Section Logo's
import wanderlustLogo from "./assets/work_logo/wanderlust.png";
import imagerecogLogo from "./assets/work_logo/image_recog.jpg";
import todesktopLogo from "./assets/work_logo/todesktop.png";
import holuxLogo from "./assets/work_logo/holux.png";
import onlinefoodLogo from "./assets/work_logo/online_food_delivery.jpeg";
import amazonLogo from "./assets/work_logo/amazon_clone.png";

export const SkillsInfo = [
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "C-Sharp", logo: csharpLogo },
      { name: "Dot-net", logo: dotnetLogo },
      { name: "PHP", logo: phpLogo },
      // { name: "JavaScript", logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Angular", logo: angularLogo },
      { name: "Redux", logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "AWS", logo: awsLogo },
      { name: "Linux", logo: linuxLogo },
      { name: "Docker", logo: dockerLogo },
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      // { name: "Compass", logo: mcLogo },
      // { name: "Vercel", logo: vercelLogo },
      // { name: "Netlify", logo: netlifyLogo },
      // { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: sihLogo,
    role: "Participated at SIH'24",
    company: "Smart India Hackathon",
    date: "September 2024 - November 2024",
    desc: "During my participation in Smart India Hackathon 2024, I worked on developing a conversational image recognition chatbot. This experience allowed me to explore advanced technologies such as deep learning models YOLOv3 and MobileNet for object detection, along with OpenCV for image processing. I built a web-based interface using Flask and implemented the solution in Python, enabling real-time object identification with interactive conversational capabilities. It was an incredible learning journey and a highly rewarding hackathon experience.",
    skills: ["Python", "Flask", "Machine Learning", "OpenCV", "SQL"],
  },
  {
    id: 1,
    img: prodigyLogo,
    role: "Web Developer",
    company: "Prodigy Infotech",
    date: "June 2024 - July 2024",
    desc: "Built and optimized assigned web development tasks, focusing on performance and responsiveness. Gained hands-on experience with modern web technologies while continuously learning and applying new concepts to deliver quality results efficiently.",
    skills: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "MongoDb"],
  },
  {
    id: 2,
    img: rdservicesLogo,
    role: "Full Stack Developer",
    company: "RD Services",
    date: "December 2023 - March 2024",
    desc: "Worked on developing an Online Food Delivery System using Python, Django, and MySQL. This project deepened my understanding of backend development and database integration. I also had the valuable opportunity to interact with industry experts, gaining practical insights and knowledge from their experience.",
    skills: [
      "Django",
      "Python",
      "MySQL",
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: glsLogo,
    school: "GLS University, Ahmedabad",
    date: "August 2024 - pursuing",
    grade: "8.12 CGPA",
    desc: "Currently pursuing a master's degree, exploring advanced fields like Android development, ML, Data Science, AI, blockchain, Cryptography and IoT. This comprehensive program is allowing me to build expertise in these dynamic and transformative technologies.",
    degree: "Master of Computer Applications - MCA",
  },
  {
    id: 1,
    img: guLogo,
    school: "Gujarat University, Ahmedabad",
    date: "June 2021 - April 2024",
    grade: "7.7 CGPA",
    desc: "I studied the fundamentals and building blocks of Computer Science during my college, covering core subjects like Operating Systems, Computer Networks, and Object-Oriented Programming. I gained hands-on experience with multiple programming languages, including C/C++, Java, Python, C#, PHP, and .NET. Additionally, I developed strong skills in full stack development, encompassing both front-end and back-end technologies.",
    degree: "Bachelor of Computer Applications - BCA",
  },
  {
    id: 2,
    img: vedantLogo,
    school: "Vedant International School, Ahmedabad",
    date: "June 2020 - March 2021",
    grade: "75.53%",
    desc: "I completed my 12th grade in a Commerce stream, where I built a strong foundation in subjects like Economics, Accounting, and Business Studies, along with Computer Science. It was a valuable and enjoyable phase where I deepened my understanding of commerce and technology.",
    degree: "GSEB(XII)",
  },
  {
    id: 3,
    img: aadharshilaLogo,
    school: "Aadharshila School, Ahmedabad",
    date: "June 2018 - March 2019",
    grade: "64%",
    desc: "I studied from KG to 10th standard at a school that played a foundational role in shaping my character. It was a memorable time in my life where I not only focused on academics but also actively participated in sports and various extracurricular activities, learning valuable life skills along the way.",
    degree: "GSEB(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "WanderLust - Online Rental Platform",
    description:
      "Developed a full-stack rental platform inspired by Airbnb using the MERN stack, featuring property listings, bookings, 2FA authentication, session & cookie management, and geolocation via geocoding. Built with MVC architecture, RESTful routing, Mongoose integration, middleware, and robust error handling, and fully deployed.",
    image: wanderlustLogo,
    tags: ["MongoDB", "Express JS", "React JS", "Node JS", "Mongoose", "Geocoding", "Render"],
    github:
      "https://github.com/parthdhameliya09/wanderlust",
    webapp: "https://wanderlust-nat1.onrender.com/listings",
  },
  {
    id: 1,
    title: "Conversational Image Recognition Chatbot",
    description:
      "Developed a conversational image recognition chatbot using deep learning models YOLOv3 and MobileNet for object detection. Integrated OpenCV for image processing and Flask for creating a web-based interface. Leveraged Python to implement the solution, enabling real-time object identification and conversational interaction for dynamic user experiences.",
    image: imagerecogLogo,
    tags: ["Python", "Flask", "Machine Learning", "OpenCV", "SQL"],
    // github: "https://github.com/codingmastr/CSPrep",
    // webapp: "https://csprep.netlify.app/",
  },
  {
    id: 2,
    title: "ToDesktop",
    description:
      "Crafted with a strong focus on Tailwind CSS, along with HTML, CSS, and JavaScript. This site is a visual treat with stunning gradient designs throughout, offering a sleek and modern user experience.",
    image: todesktopLogo,
    tags: ["Tailwind CSS", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/parthdhameliya09/ToDesktop",
    webapp: "https://to-desktop-red.vercel.app/",
  },
  {
    id: 3,
    title: "Holux - Property Selling Website",
    description:
      "Developed a responsive property selling platform using HTML, CSS, and JavaScript. Holux allows users to browse and explore a wide range of properties based on location, offering features typically expected from modern real estate dealers. Designed for intuitive navigation and user-friendly experience.",
    image: holuxLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/parthdhameliya09/PRODIGY_WD_01",
    webapp: "https://holux-psi.vercel.app/",
  },
  {
    id: 4,
    title: "Online Food Ordering System",
    description:
      "Developed a dynamic and user-friendly online food delivery platform leveraging HTML, CSS, JavaScript, Python - Django and MySQL. This project aimed to streamline the food ordering process by providing customers with an intuitive interface to browse menus, place orders, and track deliveries in real-time.",
    image: onlinefoodLogo,
    tags: ["Python", "Django", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/parthdhameliya09/Food-delivery",
    // webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  },
  {
    id: 5,
    title: "Amazon Website Clone",
    description:
      "By creating a clone of Amazon's website, I aimed to replicate its user interface, overall layout, and key features. I focused on achieving a seamless browsing experience, intuitive navigation and visually appealing design elements. I strived to recreate the familiar experience we all know and love.",
    image: amazonLogo,
    tags: ["HTML", "CSS"],
    github: "https://github.com/parthdhameliya09/Amazon_Clone",
    webapp: "https://amazon-clone-ashen-five.vercel.app/",
  },
];
