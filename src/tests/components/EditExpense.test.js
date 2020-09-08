import React from 'react';
import { EditExpensePage } from '../../components/EditExpense';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
// import ExpenseForm from '../../components/ExpenseForm'

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      expense={expenses[0]}
      startEditExpense={startEditExpense}
      startRemoveExpense={startRemoveExpense}
      history={history}
    />
  );
});

test('Should render edit expense page', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Should handle startEditExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')({ description: 'Hey' });
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id, {
    description: 'Hey',
  });
});

test('Should handle removeExpense', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[0].id });
});
