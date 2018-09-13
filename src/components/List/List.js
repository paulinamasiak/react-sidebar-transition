import React from 'react';
import PropTypes from 'prop-types';

import './List.css';

const List = ({ items, itemRenderer }) => (
  <ul className="List">
    {items.map((item) => (
      <li className="List__item">{itemRenderer(item)}</li>
    ))}
  </ul>
);

List.propTypes = {
  items: PropTypes.array,
  itemRenderer: PropTypes.func,
};

List.defaultProps = {
  items: [],
  itemRenderer: () => {},
};

export default List;
