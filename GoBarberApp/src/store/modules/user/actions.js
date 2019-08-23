export const Types = {
  UPDATE_PROFILE_REQUEST: '@user/UPDATE_PROFILE_REQUEST',
  UPDATE_PROFILE_SUCCESS: '@user/UPDATE_PROFILE_SUCCESS',
  UPDATE_PROFILE_FAILURE: '@user/UPDATE_PROFILE_FAILURE',
};

export function updateProfileRequest(data) {
  return {
    type: Types.UPDATE_PROFILE_REQUEST,
    payload: { data },
  };
}

export function updateProfileSuccess(profile) {
  return {
    type: Types.UPDATE_PROFILE_SUCCESS,
    payload: { profile },
  };
}

export function updateProfileFailure() {
  return {
    type: Types.UPDATE_PROFILE_FAILURE,
  };
}
