import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: 123 });

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        expense: {
            id: 123
        }
    });
});

test('Should setup edit expense action object', () => {
    const action = editExpense(123,
        [{description: 'first item'},
        {amount: 100}
    ]);

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 123,
        updates: [
            {description: 'first item'},
            {amount: 100}
        ]
    });
});

test('Should setup add expense action object with defaults', () => {
    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});

test('Should setup add expense action object', () => {
    const expenseData ={
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was rent from last month'
    }
    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});