import React from 'react';
import { connect } from 'react-redux';
import getExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpenseSummary = (props) => (
  <div>
    {props.expenses.length === 1 ? (
      <h1>
        Viewing {props.expenses.length} expense totalling{' '}
        {'¢' + numeral(getExpensesTotal(props.expenses) / 100).format('0,0.00')}
      </h1>
    ) : (
      <h1>
        Viewing {props.expenses.length} expenses totalling{' '}
        {'¢' + numeral(getExpensesTotal(props.expenses) / 100).format('0,0.00')}
      </h1>
    )}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpenseSummary);
