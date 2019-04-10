// Test away!
import React from 'react';
import ReactDOM from 'react-dom';
import Display from './Display';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

it('renders successfully', () => {
  render(<Display />);
})

it('should display one of the valid un/lock states', () => {
  const { getByText } = render(<Display />);

  getByText(/lock/i);
})

it('should display one of the valid open/close states', () => {
  const { getByText } = render(<Display />);

  getByText(/open|close/i);
})