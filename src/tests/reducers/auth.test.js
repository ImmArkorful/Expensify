import authReducer from '../../reducers/auth';

test('Should login and store uid', () => {
  const uid = 123;
  const action = { type: 'LOGIN', uid };
  const state = authReducer({}, action);
  expect(state).toEqual({
    uid,
  });
});

test('Should log out and clear uid', () => {
  const uid = 123;
  const action = { type: 'LOGOUT' };
  const state = authReducer({ uid }, action);
  expect(state).toEqual({});
});
