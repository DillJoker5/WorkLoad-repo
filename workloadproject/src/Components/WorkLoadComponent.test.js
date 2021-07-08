//imports
import WorkLoadComponent from "./WorkLoadComponent";
import { shallow } from 'enzyme';

//tests
//work in progress
test('page is rendered', () => {
    const wrapper = shallow(<WorkLoadComponent />);
});

test('create button is rendered', () => {
    const wrapper = shallow(<WorkLoadComponent />);

    expect(wrapper.containsAnyMatchingElements([<button className='createButton' onClick={showCreatePage}>Create Item</button>])).toEqual(true);
});

test('update button is rendered', () => {
    const wrapper = shallow(<WorkLoadComponent />);

    expect(wrapper.containsAnyMatchingElements([<button className='updateButton' onClick={showUpdatePage}>Update Item</button>])).toEqual(true);
});

test('delete button is rendered', () => {
    const wrapper = shallow(<WorkLoadComponent />);

    expect(wrapper.containsAnyMatchingElements([<button className='deleteButton' onClick={deleteWorkLoadItem}>Delete Item</button>])).toEqual(true);
});

test('display on button is rendered', () => {
    const wrapper = shallow(<WorkLoadComponent />);

    expect(wrapper.containsAnyMatchingElements([<button value={displayOn} className='displayDataButton' onClick={toggleDisplayData}>Display On</button>])).toEqual(true);
});

test('display off button is rendered', () => {
    const wrapper = shallow(<WorkLoadComponent />);

    expect(wrapper.containsAnyMatchingElements([<button value={displayOff} className='displayDataButton' onClick={toggleDisplayData}>Display Off</button>])).toEqual(true);
});

test('table headers are rendered', () => {
    const wrapper = shallow(<WorkLoadComponent />);

    const tableHeaders = wrapper.find('th');

    expect(tableHeaders.length).toEqual(5);
});

//work in progress
test('clicking add button takes to add item page', () => {
    const wrapper = shallow(<WorkLoadComponent />);
    
    const addButton = wrapper.find('button').get(0);

    addButton.simulate('click');
});

//work in progress
test('clicking update button takes to update item page', () => {
    const wrapper = shallow(<WorkLoadComponent />);

    const updateButton = wrapper.find('button').get(1);

    updateButton.simulate('click');
});

//work in progress
test('clicking delete button deletes the desired item in the list', () => {
    const wrapper = shallow(<WorkLoadComponent />);

    const deleteButton = wrapper.find('button').get(2);

    deleteButton.simulate('click');
});

test('clicking display on button causes table to be shown', () => {
    const wrapper = shallow(<WorkLoadComponent />);

    const toggleOnButton = wrapper.find('button').get(3);

    toggleOnButton.simulate('click');

    expect(wrapper.find('tbody').exists()).toBe(true);
});

test('clicking display off button causes table to not be shown', () => {
    const wrapper = shallow(<WorkLoadComponent />);

    const toggleOffButton = wrapper.find('button').get(4);

    toggleOffButton.simulate('click');

    expect(wrapper.find('tbody').exists()).toBeFalsy();
});

//work in progress
test('table renders', () => {
    const wrapper = shallow(<WorkLoadComponent />);
});
