// Test away!
import React from 'react';
import ReactDOM from 'react-dom';
import Controls from './Controls';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

it('renders successfully', () => {
  render(<Controls />);
})