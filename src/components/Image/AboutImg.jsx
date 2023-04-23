import React from 'react';
import PropTypes from 'prop-types';

const AboutImg = ({ filename, alt }) => <img alt={alt} src={filename} width={300} height={300} style={{ zIndex: "-1", borderRadius: "50%" }} /> ;

AboutImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default AboutImg;