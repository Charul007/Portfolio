// import React from 'react';
// import PropTypes from 'prop-types';
// // import Image from 'next/image';

// const ProjectImg = ({ filename, alt }) => (
//   // <Image src={filename} alt={alt} layout="responsive" width={1366} />
//   <img src={filename} alt={alt} width={1366} />
// );

// ProjectImg.propTypes = {
//   filename: PropTypes.string,
//   alt: PropTypes.string,
// };

// export default ProjectImg;


import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const ProjectImg = ({ filename, alt }) => (
  // <StaticQuery
  //   query={graphql`
  //     query {
  //       images: allFile {
  //         edges {
  //           node {
  //             relativePath
  //             name
  //             childImageSharp {
  //               fluid(maxWidth: 1366) {
  //                 ...GatsbyImageSharpFluid
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `}
  //   render={(data) => {
  //     const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

  //     if (!image) return null;

  //     const imageFluid = image.node.childImageSharp.fluid;
  //     return <Img alt={alt} fluid={imageFluid} />;
  //   }}
  // />
  <img alt={alt} src={filename} style={{ zIndex: "-1" }} className='img-fluid' />
);

ProjectImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default ProjectImg;