export function sortUsers(users, order_by, order_type = 'desc') {
  switch (order_by) {
  case 'id': {
    const sortedUsers = [...users].sort((user1, user2) => (
      user1.id - user2.id
    ));

    return order_type === 'desc' ? sortedUsers : sortedUsers.reverse();
  }

  case 'first_name': {
    const sortedUsers = [...users].sort((user1, user2) => (
      user1.first_name.localeCompare(user2.first_name)
    ));

    return order_type === 'desc' ? sortedUsers : sortedUsers.reverse();
  }

  default:
    return users;
  }
}
