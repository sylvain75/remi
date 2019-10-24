import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './box.css';

const Box = ({ children, className }) => (
  <Container className={className}>{children}</Container>
);

Box.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Box;
