import { useState, useEffect } from 'react';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { PortfolioProvider } from './context/context';
import { Helmet } from 'react-helmet';
import { headData } from './info/data';

import {
  heroData,
  aboutData,
  skillsData,
  projectsData,
  contactData,
  footerData,
  experienceData
} from './info/data';
import Experience from './components/Experience';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [projects, setProjects] = useState({projects:[],seeMore:{}});
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  const { title, lang, description } = headData;

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setSkills([...skillsData]);
    setExperiences([...experienceData])
    setProjects({...projectsData});
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <>
      <Helmet >
        <meta charSet="utf-8" />
        <title>{title || 'Ritik Patidar | Developer'}</title>
        <html lang={lang || 'en'} />
        <meta name="keywords" content="Ritik,Patidar ,Ritik Patidar, Developer,MERN Developer" />
        <meta name="description" content={description || 'Ritik Patidar | Developer'} />
      </Helmet>
      <PortfolioProvider value={{ hero, about, skills, experiences, projects, contact, footer }} >
        <Hero />
        <About />
        <Skills />
        {/* <Experience /> */}
        {/* <Projects /> */}
        <Contact />
        <Footer />
      </PortfolioProvider>
    </>
  );
}

export default App;
