import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CustomButton from './button';

const BaseBtn = styled.button`
  position: relative;
  display: block;
  width: 250px;
  //margin: 20px auto;
  padding: 10px;

  background-color: #fff;
  border: 1px solid #ccc;

  color: #000;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;

  transform-style: flat;
  transition: all 250ms ease-out;

  &:before,
  &:after {
    content: '';
    position: absolute;
    z-index: -2;
    transition: all 250ms ease-out;
  }
`;

export const StyledFlattenOnHoverButton = styled(BaseBtn)`
  border: 1px solid transparent;
  &:before,
  &:after {
    bottom: 15px;
    width: 50%;
    height: 20%;
    max-width: 300px;
    max-height: 100px;

    box-shadow: 0 15px 12px rgba(31, 31, 31, 0.7);
  }
  &:before {
    left: 10px;
    transform: rotate(-3deg);
  }
  &:after {
    right: 10px;
    transform: rotate(3deg);
  }

  &:hover {
    border-color: #ccc;

    &:before,
    &:after {
      transition: box-shadow 600ms ease-out, left 200ms, right 200ms;
      box-shadow: 0 8px 8px rgba(31, 31, 31, 0.5);
    }
    &:before {
      left: 5px;
    }
    &:after {
      right: 5px;
    }
  }
`;
