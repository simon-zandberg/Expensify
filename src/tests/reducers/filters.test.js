import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('Should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT'});

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Should setup SORT_BY_DATE filter values', () => {
    const currentState = {
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    const action = 'SORT_BY_DATE';
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('Should setup SORT_BY_AMOUNT filter values', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    const action = 'SORT_BY_AMOUNT';
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('amount');
});

test('Should set text filter', () => {
    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'Water'
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(action.text);
});

test('Should set startDate filter', () => {
    const action = {
        type: 'SET_START_DATE',
        startDate: moment('2019-10-07')
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(moment('2019-10-07'));
});

test('Should set endDate filter', () => {
    const action = {
        type: 'SET_END_DATE',
        endDate: moment('2019-11-02')
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(moment('2019-11-02'));
});