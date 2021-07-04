const usersService = require('./users.service');

const getUsers = () =>{

    return usersService.getUsers();

};

const getUser = (id) => {

    return usersService.getUser(id);
};

const createUser = (user) => {     
    return usersService.createUser(user);
}

const updateUser = (id,user) => {     
    let res = usersService.updateUser(id,user);
    console.log(res);
    return res
}

const deleteUser = (id) => {     
    return usersService.deleteUser(id);
}

module.exports = {getUsers, getUser, createUser, updateUser, deleteUser};