//imports
import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';

//tests
test('App component is rendered', () => {
  expect(render(<App />)).toEqual(true);
});

test('workload header is rendered', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.containsAnyMatchingElements([<h1>WorkLoad List</h1>])).toEqual(true);
});
