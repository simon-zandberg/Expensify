import React from 'react';
import { removeExpense } from '../actions/expenses';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        const expense = props.expense;

        this.state = {
            description: expense ? expense.description : '',
            note: expense ? expense.note : '',
            amount: expense ? (expense.amount/100).toString() : '',
            createdAt: expense ? moment(expense.createdAt) : moment(),
            calendarFocused: true,
            error: ''
        };
    }
    
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;

        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please provide description and amount.'}));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                id: this.state.id,
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };

    render() {
        return (
            <div>
                { this.state.error && <p><b>{this.state.error}</b></p> }
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <div>
                        <input
                            type="text"
                            placeholder="Amount"
                            value={this.state.amount}
                            onChange={this.onAmountChange}
                        />
                    </div>
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                        displayFormat={'DD/MM/YYYY'}
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Save Expense</button>
                </form>
            </div>
        );
    };
};