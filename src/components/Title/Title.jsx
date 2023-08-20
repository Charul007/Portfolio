import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';

const Title = ({ title , p = '' }) => (
  <Fade bottom duration={1000} delay={300} distance="0px">
      { p && <p className="">{p}</p>}
      <h2 className="section-title">{title}</h2>
  </Fade>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  p: PropTypes.string,
};

export default Title;
