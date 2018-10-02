import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.css';

export default class Button extends Component {

  static propTypes = {
    text: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    context: PropTypes.oneOf(['default', 'outline', 'success']),
    onClick: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object
  }

  static defaultProps = {
    text: 'Button Text',
    size: 'md',
    context: 'default',
    onClick: () => console.log('Clicked button')
  }

  render() {
    const {
      text,
      size,
      context,
      onClick,
      className,
      style,
      otherProps
    } = this.props;

    const baseClass = 'sci-button';
    const compoundClass = classNames(baseClass, className, {
        [`${baseClass}--${context}`]: context,
        [`${baseClass}--${size}`]: size
    });

    return (
      <button
        type="button"
        size={ size }
        context={ context }
        onClick={ onClick }
        className={ compoundClass }
        style={ style }
        { ...otherProps }
      >
        { text }
      </button>
    );
  }
}
