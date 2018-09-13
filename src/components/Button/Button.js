import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.css';

// Simplified Button component

const Button = (props) => {
  const cssClasses = classNames('Button', {
    [`Button--${props.color}`]: props.color,
    'Button--block': props.block,
  });

  return (
    <button
      className={cssClasses}
      disabled={props.disabled}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  block: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  block: false,
  color: 'primary',
  disabled: false,
  onClick: () => {},
};

export default Button;
