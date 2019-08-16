export const Types = {
  SIGN_REQUEST: '@auth/SIGN_REQUEST',
  SIGN_SUCCESS: '@auth/SIGN_SUCCESS',
  SIGN_FAILURE: '@auth/SIGN_FAILURE',
};

export function signRequest(email, password) {
  return {
    type: Types.SIGN_REQUEST,
    payload: { email, password },
  };
}

export function signSuccess(token, user) {
  return {
    type: Types.SIGN_SUCCESS,
    payload: { token, user },
  };
}
export function signFailure() {
  return {
    type: Types.SIGN_FAILURE,
  };
}
