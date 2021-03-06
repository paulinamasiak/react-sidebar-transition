import React from 'react';
import PropTypes from 'prop-types';
import CSSTransition from 'react-transition-group/CSSTransition';

import './Drawer.css';

const TIMEOUT = {
  enter: 600,
  exit: 300,
};

const Drawer = (props) => (
  <CSSTransition
    mountOnEnter
    unmountOnExit
    in={props.show}
    timeout={TIMEOUT}
    classNames={{
      enterActive: `Drawer--${props.position}-open`,
      exitActive: `Drawer--${props.position}-closed`,
    }}>
    <div className={`Drawer Drawer--${props.position}`}>{props.children}</div>
  </CSSTransition>
);

Drawer.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool,
  position: PropTypes.oneOf(['left', 'right']),
};

Drawer.defaultProps = {
  children: null,
  show: false,
  position: 'left',
};

export default Drawer;
