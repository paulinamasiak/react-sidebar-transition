import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

const BtnIcon = (props) => (
  <a className={props.className} onClick={props.onClick}>
    <Icon name={props.icon} />
  </a>
);

BtnIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

BtnIcon.defaultProps = {
  className: null,
  onClick: () => {},
};

export default BtnIcon;
