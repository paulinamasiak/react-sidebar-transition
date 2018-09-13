import React from 'react';
import ReactDOM from 'react-dom';
import BtnIcon from '../BtnIcon';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BtnIcon icon="menu" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
