import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default class StatBlock extends React.Component {
  static propTypes = {
    header: PropTypes.string,
    info: PropTypes.string
  }

  static defaultProps = {
    header: 'Header Text',
    info: 'info text to explain'
  }

  render() {
    const {
      header,
      info
    } = this.props;

    return (
      <div className="sci-stat-block">
        <header className="sci-stat-block__header">
          { header }
        </header>
        <p className="sci-stat-block__info">
          { info }
        </p>
      </div>
    );
  }
}
