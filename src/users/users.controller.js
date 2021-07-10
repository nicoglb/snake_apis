const usersService = require('./users.service');

const getUsers = async() =>{

    return await usersService.getUsers();

};

const getUser = async(id) => {

    return await usersService.getUser(id);
};

const createUser = async (user) => {     
    return await usersService.createUser(user);
}

const updateUser = async (id,user) => {     
    let res = await usersService.updateUser(id,user);
    console.log(res);
    return res;
}

const deleteUser = async (id) => {     
    return await usersService.deleteUser(id);
}

module.exports = {getUsers, getUser, createUser, updateUser, deleteUser};