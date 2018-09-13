import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
import { ICONS } from './enums';

const Icon = (props) => {
  const { name, ...otherProps } = props;
  const icon = ICONS[name];

  if (!icon) {
    return null;
  }

  return (
    <SvgIcon viewBox={icon.viewBox} {...otherProps}>
      <path fill="currentColor" d={icon.path} />
    </SvgIcon>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
