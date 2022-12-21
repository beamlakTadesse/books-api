const allRoles = {
  user: ['getBooks',],
  admin: ['getUsers', 'manageUsers','manageBooks'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
