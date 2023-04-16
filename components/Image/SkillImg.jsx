import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

const SkillImg = ({ filename, alt }) => (
  <Image src={filename} alt={alt} layout="responsive" width={50} />
);

SkillImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default SkillImg;
