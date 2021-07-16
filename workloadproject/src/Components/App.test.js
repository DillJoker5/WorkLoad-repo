//imports
import App from './App';
import { shallow } from 'enzyme';

//tests
test('App component is rendered', () => {
  const wrapper = shallow(<App />);
  
  expect(wrapper.get(0)).toBeDefined;
  expect(wrapper.find('h1')).toBeDefined;
});

test('workload header is rendered', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.containsAnyMatchingElements([<h1>WorkLoad List</h1>])).toEqual(true);
});

test('footer is rendered', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find('footer')).toBeDefined;
});

test('link to LinkedIn Profile is rendered', () => {
  const wrapper = shallow(<App />);

  const linkedInLink = wrapper.find('a').at(0);

  expect(linkedInLink).toBeDefined;
});
