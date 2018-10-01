import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const StatBlockWrapper = ({ children }) => (
  <div className="sci-stat-block__wrapper">
    { children }
  </div>
);

StatBlockWrapper.propTypes = {
  children: PropTypes.node
};

export default StatBlockWrapper;
