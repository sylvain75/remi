import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import { graphql } from 'gatsby';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
// import landingImage from "../../images/landing.jpg"

const Index = ({ data }) => (
  <Layout>
    {console.log(data, 'data')}
    {/*<Box>*/}
    {/*  <Title as="h2" size="large">*/}
    {/*    {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}*/}
    {/*  </Title>*/}
    {/*    */}
    {/*</Box>*/}
    <div
      style={{
        backgroundImage: `url(${data.homeJson.backgroundImage})`,
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100%",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        opacity: 0.35,
      }}
    />
    <Gallery items={data.homeJson.gallery} />
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
      backgroundImage
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
