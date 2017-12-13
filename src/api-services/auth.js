export const postLogin = (username, password) => ({
  method: 'POST',
  url: 'token',
  data: {
    username,
    password,
  }
});

export const postSignUp = (username, password,first_name,last_name,phone,email,user_type_id,repassword) => ({
  method: 'POST',
  url: 'api/auth/register',
  data: {
    username,
    password,
    first_name,
    last_name,phone,email,user_type_id,repassword
  }
});
