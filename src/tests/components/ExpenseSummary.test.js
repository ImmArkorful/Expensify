import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

test('Should render ExpenseSummary component for multiple expenses', () => {
  const wrapper = shallow(<ExpenseSummary expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test('Should correctly render summary for a single expense', () => {
  const wrapper = shallow(<ExpenseSummary expenses={[expenses[0]]} />);
  expect(wrapper).toMatchSnapshot();
});
