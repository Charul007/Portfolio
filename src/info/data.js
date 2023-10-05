import { nanoid } from 'nanoid';

export const headData = {
  title: 'Charul Patidar | Developer',
  lang: 'en',
  description: 'Charul Patidar | Developer',
};

export const heroData = {
  title: '',
  name: 'Charul Patidar',
  subtitle: "I'm Full Stack Developer",
  cta: '',
};

export const aboutData = {
  img: 'me.jpg',
  paragraphOne:
    'I am  currently working as a Full Stack Developer. I am very much interested in developing new things which excite me a lot.',
  paragraphTwo: 'I love exploring new technologies and being a practitioner.',
  paragraphThree: '',
  resume: 'https://www.canva.com/design/DAFtk0Y6RME/UCC73gLIAZrI15FrH6V3VQ/view?utm_content=DAFtk0Y6RME&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink',
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
    img: 'skills/mysql-colored.jpg',
    title: 'MySql',
    info: '',
    info2: '',
    url: 'https://www.mysql.com/',
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
    img: 'skills/bootstrap-colored.jpg',
    title: 'Bootstrap',
    info: '',
    info2: '',
    url: 'https://getbootstrap.com/',
  },
  // {
  //   id: nanoid(),
  //   img: 'skills/materialui-colored.jpg',
  //   title: 'Material UI',
  //   info: '',
  //   info2: '',
  //   url: 'https://mui.com/',
  // },
  {
    id: nanoid(),
    img: 'skills/nodejs-colored.jpg',
    title: 'NodeJS',
    info: '',
    info2: '',
    url: 'https://nodejs.org/en/',
  },
  {
    id: nanoid(),
    img: 'skills/mongodb-colored.jpg',
    title: 'MongoDB',
    info: '',
    info2: '',
    url: 'https://www.mongodb.com/',
  },
  {
    id: nanoid(),
    img: 'skills/c-shap.jpg',
    title: 'C#',
    info: '',
    info2: '',
    url: 'https://www.c-sharpcorner.com/csharp-tutorials',
  },
  {
    id: nanoid(),
    img: 'skills/Asp-Net-MVC.jpg',
    title: 'Asp.Net',
    info: '',
    info2: '',
    url: 'https://dotnet.microsoft.com/en-us/apps/aspnet',
  },
  {
    id: nanoid(),
    img: 'skills/java.jpg',
    title: 'JAVA',
    info: '',
    info2: '',
    url: 'https://www.java.com/en/',
  },
  {
    id: nanoid(),
    img: 'skills/Springboot.jpg',
    title: 'Spring Boot',
    info: '',
    info2: '',
    url: 'https://spring.io/projects/spring-boot/',
  },

];



// EXPERIENCE DATA
export const experienceData = [
  {
    title: 'Web Developer',
    company_name: 'Rudiment Webtech Solution, Indore',
    icon: 'experience/coverhunt.png',
    iconBg: '#333333',
    date: 'Jun 2021 - Dec 2022',
  },
];

// PROJECT DATA
export const projectsData = {
  projects: [
    {
      id: nanoid(),
      img: 'projects/pixelSpot.jpg',
      title: 'PixelSpot',
      info: 'PixelSpot is your go-to platform for photo management, sharing, and community interaction. It provides secure photo backup, intuitive organization, and selective sharing. Plus, users can engage with the community by liking and disliking photos.',
      info2: 'Technology :  ASP.Net WebApi (C#), MySql Server, React JS.Tools : Visual Studio, Git, VS Code , Figma, Draw IO',
      url: 'https://pixelspot.netlify.app/',
      repo: 'https://github.com/Charul007/PixelSpotFrontEnd.git',
    },
    {
      id: nanoid(),
      img: 'projects/todo.jpg',
      title: 'Todo List',
      info: 'Your To-Do List is a user-friendly task management application designed to streamline task organization and productivity. It offers essential features, such as task creation, deletion, and completion tracking. Users can also easily review completed tasks for a more organized and efficient workflow.',
      info2: 'Technology :  React JS, CSS, JavaSript',
      url: 'https://charul-todo.netlify.app/',
      repo: 'https://github.com/Charul007/TodoList.git',
    },
  ],
  seeMore : {
    cta: 'See More On Github',
    link: 'https://github.com/Charul007',
  }
};

// CONTACT DATA
export const contactData = {
  title: 'Contact',
  cta: 'Would you like to connect with me? Awesome!',
  btn: "Let's Connect",
  linkedIn: 'https://www.linkedin.com/in/charul-patidar-981975170/',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/charul-patidar-981975170/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Charul007',
    },
  ],
};

export const githubButtons = {
  isEnabled: false,
};
