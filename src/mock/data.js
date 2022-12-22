import { nanoid } from 'nanoid';

export const headData = {
  title: 'Ritik Patidar | Developer',
  lang: 'en',
  description: 'Welcome to my portfolio',
};

export const heroData = {
  title: '',
  name: 'Ritik Patidar',
  subtitle: "I'm Web Developer",
  cta: '',
};

export const aboutData = {
  img: 'me.jpg',
  paragraphOne: 'I am a Computer Science Engineering graduate, currently working as a Full Stack Developer. I am much interested in developing new things which excite me a lot.',
  paragraphTwo: 'I love exploring new technologies and being a practitioner.',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1U_O5DhMUaHwZf3pSHFvLw4HH__83t4QL/view?usp=sharing',
};

export const skillsData = [
  {
    id: nanoid(),
    img: 'skills/javascript-colored.jpg',
    title: 'JavaScript',
    info: '',
    info2: '',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    id: nanoid(),
    img: 'skills/typescript-colored.jpg',
    title: 'TypeScript',
    info: '',
    info2: '',
    url: 'https://www.typescriptlang.org',
  },
  {
    id: nanoid(),
    img: 'skills/react-colored.jpg',
    title: 'React',
    info: '',
    info2: '',
    url: 'https://reactjs.org/',
  },
  {
    id: nanoid(),
    img: 'skills/react-colored.jpg',
    title: 'React Native',
    info: '',
    info2: '',
    url: 'https://reactnative.dev/',
  },
  {
    id: nanoid(),
    img: 'skills/html5-colored.jpg',
    title: 'HTML5',
    info: '',
    info2: '',
    url: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
  },
  {
    id: nanoid(),
    img: 'skills/css3-colored.jpg',
    title: 'CSS3',
    info: '',
    info2: '',
    url: 'https://www.w3.org/TR/CSS/#css',
  },
  {
    id: nanoid(),
    img: 'skills/tailwindcss-colored.jpg',
    title: 'Tailwind CSS',
    info: '',
    info2: '',
    url: 'https://tailwindcss.com/',
  },
  {
    id: nanoid(),
    img: 'skills/bootstrap-colored.jpg',
    title: 'Bootstrap',
    info: '',
    info2: '',
    url: 'https://getbootstrap.com/',
  },
  {
    id: nanoid(),
    img: 'skills/materialui-colored.jpg',
    title: 'Material UI',
    info: '',
    info2: '',
    url: 'https://mui.com/',
  },
  {
    id: nanoid(),
    img: 'skills/nodejs-colored.jpg',
    title: 'NodeJS',
    info: '',
    info2: '',
    url: 'https://nodejs.org/en/'
  },
  {
    id: nanoid(),
    img: 'skills/mongodb-colored.jpg',
    title: 'MongoDB',
    info: '',
    info2: '',
    url: 'https://www.mongodb.com/'
  },
  {
    id: nanoid(),
    img: 'skills/python-colored.jpg',
    title: 'Python',
    info: '',
    info2: '',
    url: 'https://www.python.org/'
  },
]

export const projectsData = [
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/Ritik-Patidar/projectName',
  // },
];

// CONTACT DATA
export const contactData = {
  title : 'Contact',
  cta: 'Would you like to connect with me? Awesome!',
  btn: "Let's Connect",
  linkedIn: "https://www.linkedin.com/in/ritik-patidar/",
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ritik-patidar',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Ritik-Patidar',
    },
  ],
};

export const githubButtons = {
  isEnabled: false
};
