import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
    return (<tr>
        <td align="left"><Link to={`/edit/${id}`}>{description}</Link></td>
        <td align="right">${(amount / 100).toFixed(2)}</td>
        <td align="right">{moment(createdAt).format("D MMM YYYY")}</td>
    </tr>);
};

export default ExpenseListItem;