import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return a toal of 0', () => {
    expect(getExpensesTotal([])).toBe(0);
});

test('should return a toal of 195000 for expenses[1]', () => {
    expect(getExpensesTotal([expenses[1]])).toBe(195000);
});

test('should return a toal of 240195 for all expenses', () => {
    expect(getExpensesTotal(expenses)).toBe(240195);
});