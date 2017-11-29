export const postLogin = (username, password) => ({
  method: 'post',
  url: 'token',
  data: {
    username,
    password,
  }
});