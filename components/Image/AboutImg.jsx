/* eslint-disable react/prop-types */
import React from 'react';
import Image from 'next/image';

const AboutImg = ({ filename, alt }) => (
  <Image src={filename} alt={alt} layout="fixed" width={300} />
);

export default AboutImg;
