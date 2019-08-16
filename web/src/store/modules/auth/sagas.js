import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { Types as AuthTypes, signSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (!user.provider) {
      toast.error('User is not a provider');
      return;
    }

    yield put(signSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    toast.error('Authentication failed. Please verify your data');
    yield put(signFailure());
  }
}

export default all([takeLatest(AuthTypes.SIGN_REQUEST, signIn)]);
