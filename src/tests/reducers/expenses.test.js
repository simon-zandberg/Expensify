import moment from 'moment';
import uuid from 'uuid';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set default state', () => {
    const action = {
        type: '@@INIT'
    };    
    const result = expensesReducer(undefined, action);
    expect(result).toEqual([]);
});

test('should remove expense Rent', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[2].id
    };
    const result = expensesReducer(expenses, action);
    expect(result).toEqual(new Array(expenses[0], expenses[1]));
});

test('should NOT remove expense', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '6'
    };
    const result = expensesReducer(expenses, action);
    expect(result).toEqual(expenses);
});

test('should add new expense', () => {
    const expense = {
        id: uuid(),
        description: 'Groceries',
        note: '',
        amount: 13200,
        createdAt: moment()
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const result = expensesReducer(expenses, action);
    expect(result).toEqual([ ...expenses, expense ]);
});

test('should edit expense description from Rent to Accommodation', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '2',
        updates: {
            description: 'Accommodation',
            note: 'Changed from Rent to Accommodation',
        }
    }
    const result = expensesReducer(expenses, action);
    expect(result).toEqual([
        expenses[0],
        { ...expenses[1], description: 'Accommodation', note: 'Changed from Rent to Accommodation' },
        expenses[2]
    ]);
});

test('should NOT edit expense if id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description: 'Accommodation',
            note: 'Changed from Rent to Accommodation',
        }
    }
    const result = expensesReducer(expenses, action);
    expect(result).toEqual(expenses);
});