const users = [{id: 1, name: 'John Doe'}, {id: 2, name: 'Jane Smith'}, {id: 3, name: 'Alice Johnson'}];

const getUsers = (cb) => {
   cb(users);
}

const getUserById = (id, cb) => {
   const user = users.find(user => user.id === parseInt(id));
   cb(user);
}

exports.getUsers = getUsers;
exports.getUserById = getUserById;