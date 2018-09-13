import React from 'react';
import PropTypes from 'prop-types';
import NestedListItem from './NestedListItem';

import './NestedList.css';

const NestedList = (props) => (
  <ul className="NestedList">
    {props.items.map((item, index) => (
      <NestedListItem
        key={item.id || index}
        item={item}
        children={item.children}
        itemRenderer={props.itemRenderer}
      />
    ))}
  </ul>
);

NestedList.propTypes = {
  items: PropTypes.array,
  itemRenderer: PropTypes.func,
};

NestedList.defaultProps = {
  items: [],
  itemRenderer: () => {},
};

export default NestedList;
