import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  outline: 0;
  border-radius: 2px;
  padding: 5px 10px;
`;

const CustomButton = ({ children, className, ...props }) => (
  <ButtonContainer className={className} {...props}>
    {children}
  </ButtonContainer>
);

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default CustomButton;
