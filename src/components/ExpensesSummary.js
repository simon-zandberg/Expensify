import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => {
    if (props.expenses.length > 0) {
        return (
            <div>
                <h3>
                    Viewing {props.expenses.length} expenses totalling {numeral(expensesTotal(props.expenses) / 100).format('$0,0.00')}
                </h3>
            </div>
        );
    } else
        return null;
};

const mapStateToProps = (state, props) => ({
    expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);