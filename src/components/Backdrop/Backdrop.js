import React from 'react';
import PropTypes from 'prop-types';
import CSSTransition from 'react-transition-group/CSSTransition';

import './Backdrop.css';

const TIMEOUT = 300;

const Backdrop = (props) => (
  <CSSTransition
    mountOnEnter
    unmountOnExit
    in={props.show}
    timeout={TIMEOUT}
    classNames={{
      enterActive: 'Backdrop--open',
      exitActive: 'Backdrop--closed',
    }}>
    <div className="Backdrop" onClick={props.onClick}>
      {props.children}
    </div>
  </CSSTransition>
);

Backdrop.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool,
  onClick: PropTypes.func,
};

Backdrop.defaultProps = {
  children: null,
  show: false,
  onClick: () => {},
};

export default Backdrop;
