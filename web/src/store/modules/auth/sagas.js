import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';
import history from '~/services/history';

import { Types as AuthTypes, signSuccess } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, 'sessions', {
    email,
    password,
  });

  const { token, user } = response.data;

  if (!user.provider) {
    console.tron.error('User is not a provider');
    return;
  }

  yield put(signSuccess(token, user));

  history.push('/dashboard');
}

export default all([takeLatest(AuthTypes.SIGN_REQUEST, signIn)]);
