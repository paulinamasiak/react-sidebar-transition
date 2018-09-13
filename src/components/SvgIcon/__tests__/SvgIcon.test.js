import React from 'react';
import ReactDOM from 'react-dom';
import SvgIcon from '../SvgIcon';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <SvgIcon>
      <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
    </SvgIcon>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
