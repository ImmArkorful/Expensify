import React from 'react';
import getExpensesTotal from '../../selectors/expenses-total';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

test('Should correctly add up multiple amounts', () => {
  const total = getExpensesTotal(expenses);
  expect(total).toEqual(
    expenses[0].amount + expenses[1].amount + expenses[2].amount
  );
});

test('Should return 0 if no expenses', () => {
  const total = getExpensesTotal([]);
  expect(total).toBe(0);
});

test('Should correctly add up a single expense', () => {
  const total = getExpensesTotal([expenses[0]]);
  expect(total).toBe(expenses[0].amount);
});
