import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should display summary for 2 expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={4564} />);
    expect(wrapper).toMatchSnapshot();
});

test('should display summary for 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={450} />);
    expect(wrapper).toMatchSnapshot();
});

test('should display summary for no expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={0} expensesTotal={0} />);
    expect(wrapper).toMatchSnapshot();
});