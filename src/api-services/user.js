export const getUser = (userId) => ({
  method: 'GET',
  url: `api/users/${userId}`,

});

// export const putUser = (username,first_name,last_name,phone,email) => ({
//   method: 'PUT',
//   url: 'api/users/21',
//   data: {
//     username,first_name,last_name,phone,email
//   }
// });




export const putUser = (datat,userId) => ({
  method: 'PUT',
  url: `api/users/${userId}`,
  data: datat
});