import React from 'react';
import { shallow } from 'enzyme';
import ExpensesSummary from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should display summary for 2 expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[1], expenses[2]]} />); 
    expect(wrapper).toMatchSnapshot();
});

test('should display summary for 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]} />); 
    expect(wrapper).toMatchSnapshot();
});

test('should display summary for no expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[]} />); 
    expect(wrapper).toMatchSnapshot();
});