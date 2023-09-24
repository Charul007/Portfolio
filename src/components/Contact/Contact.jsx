import { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email, title, linkedIn } = contact;

  return (
    <section id="contact"  style={{backgroundColor:'black',color:'white'}} >
      <Container  style={{backgroundColor:'black',color:'white'}} >
        <Title title={title} />
        <Fade bottom duration={1000} delay={600} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">{cta || ''}</p>
            {btn && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn--resume"
                href={email ? `mailto:${email}` : linkedIn}
              >
                {btn || ''}
              </a>
            )}
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
