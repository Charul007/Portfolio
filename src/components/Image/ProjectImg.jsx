import React from 'react';
import PropTypes from 'prop-types';

const ProjectImg = ({ filename, alt }) => (
  <img alt={alt} src={filename} style={{ zIndex: "-1" }} className='img-fluid' />
);

ProjectImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default ProjectImg;