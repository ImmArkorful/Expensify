import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
  const action = { type: 'REMOVE_EXPENSE', id: expenses[1].id };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should not remove expenses if id not found', () => {
  const action = { type: 'REMOVE_EXPENSE', id: '-1' };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('Should add an expense', () => {
  const expense = {
    description: 'learn',
    note: '',
    amount: 900,
    createdAt: 1000,
  };
  const action = { type: 'ADD_EXPENSE', expense };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('Should edit an expense by id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: { description: 'Jonah' },
  };
  const state = expensesReducer(expenses, action);
  expect(state[0]).toEqual({
    ...expenses[0],
    description: 'Jonah',
  });
});

test('Should not edit an expense if id not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: { description: 'Jonah' },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('Should set expenses', () => {
  const newExpenses = [
    {
      description: 'Me this',
      note: 'test',
      amount: 9000,
      createdAt: 1000,
    },
  ];
  const action = {
    type: 'SET_EXPENSES',
    expenses: newExpenses,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(newExpenses);
});
