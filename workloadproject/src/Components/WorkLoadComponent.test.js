//imports
import WorkLoadComponent from "./WorkLoadComponent";
import { shallow } from 'enzyme';

//tests
test('page is rendered', () => {
    const wrapper = shallow(<WorkLoadComponent />);

    expect(wrapper.get(0)).toBeDefined;
    expect(wrapper.find('tbody')).toBeDefined;
    expect(wrapper.find('button').at(0)).toBeDefined;
    expect(wrapper.find('button').at(1)).toBeDefined;
    expect(wrapper.find('button').at(2)).toBeDefined;
    expect(wrapper.find('button').at(3)).toBeDefined;
    expect(wrapper.find('button').at(4)).toBeDefined;
    expect(wrapper.find('th').at(0)).toBeDefined;
    expect(wrapper.find('th').at(1)).toBeDefined;
    expect(wrapper.find('th').at(2)).toBeDefined;
    expect(wrapper.find('th').at(3)).toBeDefined;
    expect(wrapper.find('th').at(4)).toBeDefined;
    expect(wrapper.find('tr').at(0)).toBeDefined;
});

test('create button is rendered', () => {
    const wrapper = shallow(<WorkLoadComponent />);

    expect(wrapper.containsAnyMatchingElements([<button>Create Item</button>])).toEqual(true);
});

test('update button is rendered', () => {
    const wrapper = shallow(<WorkLoadComponent />);

    expect(wrapper.containsAnyMatchingElements([<button>Update Item</button>])).toEqual(true);
});

test('delete button is rendered', () => {
    const wrapper = shallow(<WorkLoadComponent />);

    expect(wrapper.containsAnyMatchingElements([<button>Delete Item</button>])).toEqual(true);
});

test('display on button is rendered', () => {
    const wrapper = shallow(<WorkLoadComponent />);

    expect(wrapper.containsAnyMatchingElements([<button>Display On</button>])).toEqual(true);
});

test('display off button is rendered', () => {
    const wrapper = shallow(<WorkLoadComponent />);

    expect(wrapper.containsAnyMatchingElements([<button>Display Off</button>])).toEqual(true);
});

test('table headers are rendered', () => {
    const wrapper = shallow(<WorkLoadComponent />);

    const tableHeaders = wrapper.find('th');

    expect(tableHeaders.length).toEqual(5);
});

//work in progress
test('clicking add button takes to add item page', () => {
    const wrapper = shallow(<WorkLoadComponent />);
    
    const addButton = wrapper.find('button').at(0);

    addButton.simulate('click');
});

//work in progress
test('clicking update button takes to update item page', () => {
    const wrapper = shallow(<WorkLoadComponent />);

    const updateButton = wrapper.find('button').at(1);

    updateButton.simulate('click');
});

//work in progress
test('clicking delete button deletes the desired item in the list', () => {
    const wrapper = shallow(<WorkLoadComponent />);

    const deleteButton = wrapper.find('button').at(2);

    deleteButton.simulate('click');
});

test('clicking display on button causes table to be shown', async () => {
    const wrapper = shallow(<WorkLoadComponent />);

    const toggleOnButton = wrapper.find('button').at(3);

    toggleOnButton.simulate('click');

    await setTimeout(() => {
        expect(wrapper.find('tbody').exists()).toBe(true);
    });
});

test('clicking display off button causes table to not be shown', async () => {
    const wrapper = shallow(<WorkLoadComponent />);

    const toggleOffButton = wrapper.find('button').at(4);

    toggleOffButton.simulate('click');

    await setTimeout(() => {
        expect(wrapper.find('tbody').exists()).toBeFalsy();
    });
});

test('table renders', () => {
    const wrapper = shallow(<WorkLoadComponent />);

    expect(wrapper.find('tbody')).toBeDefined;
    expect(wrapper.find('th').at(0)).toBeDefined;
    expect(wrapper.find('th').at(1)).toBeDefined;
    expect(wrapper.find('th').at(2)).toBeDefined;
    expect(wrapper.find('th').at(3)).toBeDefined;
    expect(wrapper.find('th').at(4)).toBeDefined;
    expect(wrapper.find('tr').at(0)).toBeDefined;
});
