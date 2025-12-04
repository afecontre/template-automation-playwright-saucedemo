export const users = {
  standardUser: {
    username: 'standard_user',
    password: 'secret_sauce',
  },
  lockedUser: {
    username: 'locked_out_user',
    password: 'secret_sauce',
  },
  invalidUser: {
    username: 'invalid_user',
    password: 'wrong_password',
  },
};

export const messages = {
  lockedOut: 'Epic sadface: Sorry, this user has been locked out.',
  invalidCreds:
    'Epic sadface: Username and password do not match any user in this service',
};
