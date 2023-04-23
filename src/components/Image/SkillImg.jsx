// import React from 'react';
// import PropTypes from 'prop-types';
// // import Image from 'next/image';

// const SkillImg = ({ filename, alt }) => (
//   // <Image src={filename} alt={alt} layout="responsive" width={50} />
//   <img src={filename} alt={alt} width={50} />
// );

// SkillImg.propTypes = {
//   filename: PropTypes.string,
//   alt: PropTypes.string,
// };

// export default SkillImg;


import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const SkillImg = ({ filename, alt }) => <img alt={alt} src={filename} style={{ zIndex: "-1", }} className='img-fluid' /> ;

SkillImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default SkillImg;