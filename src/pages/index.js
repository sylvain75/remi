import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import Layout from 'components/layout';
import { graphql } from 'gatsby';
import Box from 'components/box';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';

const styles = {
  homeSection: {
    height: '76vh',
    width: '100%',
  },
  gallerySection: {
    height: '100vh',
    paddingTop: 30,
    backgroundColor: 'aqua',
  },
  bkImage: {
    position: 'absolute',
    top: 0,
    zIndex: -5,
    height: '100vh',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    opacity: 0.35,
  },
};

const Index = ({ data }) => (
  <Layout>
    <section className="homeSection" style={styles.homeSection}>
      <Img fluid={data.homeJson.background.image.childImageSharp.fluid} alt={"hello"} style={styles.bkImage} />
      <Box>{data.homeJson.content.childMarkdownRemark.rawMarkdownBody}</Box>
    </section>
    <section className="gallerySection" style={styles.gallerySection}>
      <Gallery items={data.homeJson.gallery} />
      <Box>
        Content text We Do
      </Box>
    </section>

    <div style={{ height: '50vh' }} />
    <IOExample />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      background {
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
