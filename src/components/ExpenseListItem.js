import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
    return (<tr>
        <td align="left"><Link to={`/edit/${id}`}>{description}</Link></td>
        <td align="right">{numeral(amount / 100).format('$0,0.00')}</td>
        <td align="right">{moment(createdAt).format("D MMMM YYYY")}</td>
    </tr>);
};

export default ExpenseListItem;