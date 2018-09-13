import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '../Drawer';

import './Sidebar.css';

const Sidebar = (props) => (
  <Drawer show={props.show}>
    <div className="Sidebar" />
  </Drawer>
);

Sidebar.propTypes = {
  show: PropTypes.bool,
};

Sidebar.defaultProps = {
  show: false,
};

export default Sidebar;
