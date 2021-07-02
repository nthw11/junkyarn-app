import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, qraphql } from 'gatsby';

export default function Logo() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "junkyarn-logo.jpg" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);
  return <Img fixed={data.file.childImageSharp.fixed} />;
}
