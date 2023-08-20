import { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import ExperienceCard from './ExperienceCard';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  const { experiences, about } = useContext(PortfolioContext);

  const { resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="experience">
      <div className="experience-container">
        <section className="experience-section">
          <Title title="Work Experience" p="WHAT I'VE DONE SO FAR" />
          <div className="d-flex flex-column text-start" style={{ marginTop: '5rem' }}>
            <VerticalTimeline className="vertical-timeline-custom-line">
              {experiences.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} />
              ))}
              <VerticalTimelineElement
                contentStyle={{
                  background: '#eaeaec',
                  color: '#292929',
                  boxShadow:
                    'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                contentArrowStyle={{
                  borderRight: '7px solid  #232631',
                }}
                iconStyle={{ background: '#333333' }}
                icon={
                  <div className="d-flex justify-content-center align-items-center w-100 h-100">
                    <img
                      src="icons/resume.png"
                      alt="resume"
                      style={{ width: '45%', height: '45%', objectFit: 'contain' }}
                    />
                  </div>
                }
              >
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={1000}
                  distance="30px"
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--hero"
                    href={resume}
                    download
                  >
                    MY RESUME{' '}
                  </a>
                </Fade>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Experience;
