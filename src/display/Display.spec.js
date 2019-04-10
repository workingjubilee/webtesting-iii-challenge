// Test away!
import React from 'react';
import ReactDOM from 'react-dom';
import Display from './Display';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

it('renders successfully', () => {
  render(<Display />);
})