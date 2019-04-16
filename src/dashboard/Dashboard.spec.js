// Test away
import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import { render, fireEvent, cleanup } from 'react-testing-library';
import renderer from 'react-test-renderer';
import 'jest-dom/extend-expect';

// it('renders successfully', () => {
//   render(<Dashboard />);
// })

const { getByText } = render(<Dashboard />);

const click = (button, number = 1) => {
  // const { getByText } = render(<Dashboard />);
  const regex = new RegExp('^'.concat(button.concat('$')), 'i');
  for (let i = 0; i < number; i += 1) {
    fireEvent.click(getByText(regex));
  }
};

describe('<Dashboard />', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});


describe('Lock/Unlock Button', () => {
  it('does not lock when gate is open', () => {
    click('lock gate');
    click('close gate');
    getByText(/unlocked/i);
  });

  it('locks when gate is closed', () => {
    click('close gate');
    click('lock gate');
    getByText(/^locked$/i);
  });
});