import PropTypes from 'prop-types';

const SkillImg = ({ filename, alt }) => <img alt={alt} src={filename} style={{ zIndex: "-1", }} className='img-fluid' /> ;

SkillImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default SkillImg;