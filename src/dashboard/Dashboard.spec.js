// Test away
import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

it('renders successfully', () => {
  render(<Dashboard />);
})