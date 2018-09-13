import React from 'react';
import ReactDOM from 'react-dom';
import NestedList from '../NestedList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NestedList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
