import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default class Button extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
  }

  static defaultProps = {
    text: 'Button Text',
    onClick: () => console.log('Clicked button')
  }

  render() {
    const {
      text,
      onClick
    } = this.props;

    return (
      <button
        className="button"
        onClick={ onClick }
      >
        { text }
      </button>
    );
  }
}
