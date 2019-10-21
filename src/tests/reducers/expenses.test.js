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

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [{
                id: '1',
                description: 'Bubble Gum',
                note: '',
                amount: 295,
                createdAt: 0
            }, {
                id: '2',
                description: 'October Rent',
                note: '',
                amount: 145000,
                createdAt: moment(0).subtract(4, 'd').valueOf()
            },
            {
                id: '3',
                description: 'Credit card payment',
                note: '',
                amount: 466000,
                createdAt: moment(0).add(4, 'd').valueOf()
            }]        
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(action.expenses);    
});