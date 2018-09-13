import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Drawer from '../Drawer';
import Button from '../Button';
import Icon from '../Icon';
import List from '../List';
import routes from '../../routes';

import './Sidebar.css';

const ACTIVE_ROUTE_ID = 1;

const renderListItem = (route) => {
  const cssClasses = classNames('Sidebar__link', {
    'Sidebar__link--active': route.id === ACTIVE_ROUTE_ID,
  });

  return (
    <a className={cssClasses}>
      <Icon className="Sidebar__link-icon" name={route.icon} size={20} />
      <span>{route.name}</span>
    </a>
  );
};

const Sidebar = (props) => (
  <Drawer show={props.show}>
    <div className="Sidebar">
      <nav className="Sidebar__body">
        <List items={routes} itemRenderer={renderListItem} />
      </nav>
      <div className="Sidebar__footer">
        <Button color="secondary" block>
          Sign out
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
