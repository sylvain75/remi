import React from 'react';
import PropTypes from 'prop-types';

export const Header = ({ title }) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xxl tracking-tight">{title}</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-xl md:flex-col lg:flex lg:flex-row lg:flex-grow lg:justify-end">
          <a href="#responsive-header" className="flex mt-4 lg:mt-0 text-gray-200 hover:text-white mr-4">
            About Us
          </a>
          <a href="#responsive-header" className="flex mt-4 lg:mt-0 text-gray-200 hover:text-white mr-4">
            Our work
          </a>
          <a href="#responsive-header" className="flex mt-4 lg:mt-0 text-gray-200 hover:text-white">
            Gallery
          </a>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
