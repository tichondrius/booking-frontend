export const getUser = (username) => ({
  method: 'GET',
  url: 'api/users/21',

});

// export const putUser = (username,first_name,last_name,phone,email) => ({
//   method: 'PUT',
//   url: 'api/users/21',
//   data: {
//     username,first_name,last_name,phone,email
//   }
// });




export const putUser = (datat) => ({
  method: 'PUT',
  url: 'api/users/21',
  data: datat
});