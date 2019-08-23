import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { Types, updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword ? rest : {}),
    };

    const { data } = yield call(api.put, 'users', profile);

    Alert.alert('Success', 'Profile updated successfully');

    yield put(updateProfileSuccess(data));
  } catch (err) {
    Alert.alert('Profile updating failure', 'Please verify your data');

    yield put(updateProfileFailure());
  }
}

export default all([takeLatest(Types.UPDATE_PROFILE_REQUEST, updateProfile)]);
