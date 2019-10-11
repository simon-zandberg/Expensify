import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        { props.expenses.length === 0 ? (
            <p>No expenses.</p>
        ) : (
            <div>
                <h1>Expense List</h1>
                <table width="100%">
                    <thead>
                        <tr>
                            <th align="left">Description</th>
                            <th align="right">Amount</th>
                            <th align="right">Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        { props.expenses.map((expense) => {
                            return <ExpenseListItem key={expense.id} {...expense} />;
                        })}
                    </tbody>
                </table>
                <p style={{display:'none'}}>{props.expenses.length}</p>
            </div>
        )}
    </div>
);

const mapStateToProps = state => ({
    expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);