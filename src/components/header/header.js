import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Container } from './header.css';
import Title from 'components/title';
import Nav from 'components/header/nav';

export const Header = ({ title }) => (
  <div>
    <Container>
      <Link activeClass="active" to="homeSection" spy={true} smooth={true} duration={500}>
        <Title as="h1">{title}</Title>
      </Link>

      <Nav />
    </Container>
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
