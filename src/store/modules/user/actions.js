export function updateProfileRequest(data) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
}

export function signUpSuccess() {
  return {
    type: '@user/SIGN_UP_SUCCESS',
  };
}

export function signInFailure() {
  return {
    type: '@user/SIGN_IN_FAILURE',
  };
}

export function updateProfileSuccess(profile) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
  };
}
export function updateProfileFailure() {
  return {
    type: '@user/UPDATE_PROFILE_FAILURE',
  };
}
