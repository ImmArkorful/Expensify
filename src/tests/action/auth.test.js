import { login, logout } from '../../actions/auth';

test('Should generate Login action object', () => {
  const uid = 124;
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid,
  });
});

test('Should generate Logout action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT',
  });
});
