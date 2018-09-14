import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Drawer from '../Drawer';
import Button from '../Button';
import Icon from '../Icon';
import NestedList from '../NestedList';
import routes from '../../routes';
import logo from '../../logo.svg';

import './Sidebar.css';

const ACTIVE_ROUTE_ID = 1;
const BASE_LEVEL = 0;

const isActiveRoute = (route) => route.id === ACTIVE_ROUTE_ID;
const isNestedRoute = (level) => level > BASE_LEVEL;

const renderListItem = (route, level) => {
  const isActive = isActiveRoute(route);
  const isNested = isNestedRoute(level);

  let cssClasses;

  if (isNested) {
    cssClasses = classNames('Sidebar__nested-link', {
      'Sidebar__nested-link--active': isActive,
    });
  } else {
    cssClasses = classNames('Sidebar__link', {
      'Sidebar__link--active': isActive,
    });
  }

  return (
    <a className={cssClasses}>
      {!isNested && <Icon className="Sidebar__link-icon" name={route.icon} />}
      <span>{route.name}</span>
    </a>
  );
};

const Sidebar = (props) => (
  <Drawer show={props.show}>
    <div className="Sidebar">
      <nav className="Sidebar__body">
        <NestedList items={routes} itemRenderer={renderListItem} />
      </nav>
      <div className="Sidebar__footer">
        <Button className="Sidebar__button" color="secondary" block>
          Sign out
        </Button>
        <img className="Sidebar__logo" src={logo} />
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
