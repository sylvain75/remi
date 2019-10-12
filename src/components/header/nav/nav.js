import React from 'react';
// import { Link } from 'gatsby';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="">About</Link>
      </li>
      <li>
        <Link activeClass="active" to="gallerySection" spy={true} smooth={true} duration={500}>
          What we do
        </Link>
      </li>
      <li>
        <Link to="/projects">Our work</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
