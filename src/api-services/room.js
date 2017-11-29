export const getRoom = (roomId) => ({
  url: `api/posts/${roomId}`,
  method: 'GET',
});
