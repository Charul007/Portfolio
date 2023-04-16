import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../style/main.scss';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import { PortfolioProvider } from '../context/context';

import {
  headData,
  heroData,
  aboutData,
  skillsData,
  projectsData,
  contactData,
  footerData,
} from '../mock/data';

const Home = () => {
  const { title, lang, description } = headData;

  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setSkills([...skillsData]);
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{title || 'Ritik Patidar | Developer'}</title>
        <html lang={lang || 'en'} />
        <meta name="keywords" content="Ritik,Patidar ,Ritik Patidar, Developer,MERN Developer" />
        <meta name="description" content={description || 'Ritik Patidar | Developer'} />
      </Head>
      <PortfolioProvider value={{ hero, about, skills, projects, contact, footer }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </PortfolioProvider>
    </>
  );
};

export default Home;
