export const Types = {
  SIGN_IN_REQUEST: '@auth/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS: '@auth/SIGN_IN_SUCCESS',
  SIGN_UP_REQUEST: '@auth/SIGN_UP_REQUEST',
  SIGN_FAILURE: '@auth/SIGN_FAILURE',
  SIGN_OUT: '@auth/SIGN_OUT',
};

export function signInRequest(email, password) {
  return {
    type: Types.SIGN_IN_REQUEST,
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: Types.SIGN_IN_SUCCESS,
    payload: { token, user },
  };
}

export function signUpRequest(name, email, password) {
  return {
    type: Types.SIGN_UP_REQUEST,
    payload: { name, email, password },
  };
}

export function signFailure() {
  return {
    type: Types.SIGN_FAILURE,
  };
}

export function signOut() {
  return {
    type: Types.SIGN_OUT,
  };
}
