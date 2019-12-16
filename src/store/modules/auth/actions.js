function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export { signInRequest, signInSuccess, signFailure };
