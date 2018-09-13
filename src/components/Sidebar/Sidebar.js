import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '../Drawer';
import Button from '../Button';
import routes from '../../routes';

import './Sidebar.css';

const Sidebar = (props) => (
  <Drawer show={props.show}>
    <div className="Sidebar">
      <div className="Sidebar__body" />
      <div className="Sidebar__footer">
        <Button color="secondary" block>
          Sing out
        </Button>
      </div>
    </div>
  </Drawer>
);

Sidebar.propTypes = {
  show: PropTypes.bool,
};

Sidebar.defaultProps = {
  show: false,
};

export default Sidebar;
