import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import { graphql } from 'gatsby';
import Box from 'components/box';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
import Img from 'gatsby-image';

const styles = {
  section1: {
    height: '100vh',
    width: '100%',
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
    <section style={styles.section1}>
      <Img fluid={data.homeJson.background.image.childImageSharp.fluid} alt={"hello"} style={styles.bkImage} />
      <Box>{data.homeJson.content.childMarkdownRemark.rawMarkdownBody}</Box>
    </section>
    <section>
      <Gallery items={data.homeJson.gallery} />
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
