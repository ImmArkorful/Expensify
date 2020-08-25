import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../components/404';

test('Should render the NotFoundPage', () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});
