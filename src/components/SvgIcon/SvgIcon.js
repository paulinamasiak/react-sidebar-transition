import React from 'react';
import PropTypes from 'prop-types';

const SvgIcon = (props) => {
  const { children, className, size, viewBox, title, ...otherProps } = props;

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox={viewBox}
      aria-hidden={title ? null : true}
      {...otherProps}>
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
};

SvgIcon.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  title: PropTypes.string,
  viewBox: PropTypes.string,
};

SvgIcon.defaultProps = {
  className: null,
  size: '1em',
  title: '',
  viewBox: '0 0 24 24',
};

export default SvgIcon;
