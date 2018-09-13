import React from 'react';
import PropTypes from 'prop-types';

import './NestedList.css';

const NestedListItem = (props) => {
  const nextLevel = props.level + 1;

  return (
    <li className="NestedList__item">
      {props.itemRenderer(props.item, props.level)}
      {props.children && (
        <ul className="NestedList">
          {props.children.map((child, index) => (
            <NestedListItem
              key={child.id || index}
              item={child}
              children={child.children}
              level={nextLevel}
              itemRenderer={props.itemRenderer}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

NestedListItem.propTypes = {
  item: PropTypes.object.isRequired,
  children: PropTypes.array,
  level: PropTypes.number,
  itemRendered: PropTypes.func,
};

NestedListItem.defaultProps = {
  children: null,
  level: 0,
  itemRenderer: () => {},
};

export default NestedListItem;
