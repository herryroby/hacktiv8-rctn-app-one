import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../../../redux/store';
import Counter from './index';

describe('class increment 1 test', () => {
  it('should to match snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Counter />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should add number 1', () => {
    const { container } = render(
      <Provider store={store}>
        <Counter />
      </Provider>,
    );
    const buttonIncrement = container.querySelector('#increment-btn');
    fireEvent.click(buttonIncrement);
    const resultNumber = container.querySelector('#result');
    expect(resultNumber.innerHTML).toBe('1');
  });
});
