import { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import SkillImg from '../Image/SkillImg';

const Skills = () => {
  const { skills } = useContext(PortfolioContext);

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
    <section id="skills" style={{backgroundColor:'black',color:'white'}} >
      <Container>
        <div className="skills-wrapper" >
          <Title title="MY SKILLS"/>
          <Row>
            {skills.map((skill) => {
              const { title, url, img, id } = skill;
              return (
                <Col key={id} lg={3} sm={4} xs={4}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={600}
                    distance="50px"
                  >
                    <div className="project-wrapper__image" >
                      <Tilt
                        options={{
                          reverse: false,
                          max: 8,
                          perspective: 1000,
                          scale: 1.05,
                          speed: 300,
                          transition: true,
                          axis: null,
                          reset: true,
                          easing: 'cubic-bezier(.03,.98,.52,.99)',
                        }}
                      >
                        <a
                          href={url || '#'}
                          target="_blank"
                          aria-label="Project Link"
                          rel="noopener noreferrer"
                        >
                          <div className="d-flex border flex-column justify-content-start align-items-center py-sm-5 mb-4 rounded-2 bg-skill">
                            <div
                              data-tilt
                              className="d-flex flex-column justify-content-center align-items-center rounded-circle"
                            >
                              <div
                                className="shadow-lg rounded-circle p-3 mt-3 mt-sm-0 bg-white"
                                style={{ height: '60px', width: '60px', }}
                              >
                                <SkillImg alt={title} filename={img} />
                              </div>
                            </div>
                            <p className="skills-text mt-3 mt-sm-5 text-center">{title}</p>
                          </div>
                        </a>
                      </Tilt>
                    </div>
                  </Fade>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
