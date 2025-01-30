export type AuthState = {
  loggedInState: 'logged-in' | 'logged-out' | 'not-initialized';
};

export type AuthActions = { type: 'LOGIN' } | { type: 'LOGOUT' };
