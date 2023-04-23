// /* eslint-disable react/prop-types */
// import React from 'react';
// // import Image from 'next/image';

// const AboutImg = ({ filename, alt }) => (
//   // <Image src={filename} alt={alt} layout="fixed" width={300} />
//   <img src={filename} alt={alt} width={300} />
// );

// export default AboutImg;

import React from 'react';
// import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
// import Img from 'gatsby-image';
import { StaticImage } from "gatsby-plugin-image"

const AboutImg = ({ filename, alt }) => <img alt={alt} src={filename} width={300} height={300} style={{ zIndex: "-1", borderRadius: "50%" }} /> ;

AboutImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default AboutImg;