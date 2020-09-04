import moment from 'moment';

const reducer = (accumulator, currentValue) => accumulator + currentValue;
export default (expenses) => {
  if (expenses.length === 0) {
    return 0;
  }
  return expenses
    .map((element) => {
      return element.amount;
    })
    .reduce(reducer, 0);
};
  