import React from 'react';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';
import ConfirmRemoveExpenseModal from './ConfirmRemoveExpenseModal';

export class EditExpensePage extends React.Component {
    state = {
        selectedExpense: null
    };

    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };

    onRemoveExpense = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    };

    setSelectedExpense = () => {
        this.setState(() => ({ selectedExpense: this.props.expense }));        
    }

    cancelRemoveExpense = () => {
        this.setState(() => ({ selectedExpense: null }));
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
                    <button className="button button--secondary" onClick={this.setSelectedExpense}>Remove Expense</button>
                </div>
                <ConfirmRemoveExpenseModal
                    selectedExpense={this.state.selectedExpense}
                    onRemoveExpense={this.onRemoveExpense}
                    cancelRemoveExpense={this.cancelRemoveExpense}
                />
            </div>
        );
    }
};

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);