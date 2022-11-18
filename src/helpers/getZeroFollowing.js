export function getZeroFollowing(users) {
  return users.filter(user => !user.following.length);
}
