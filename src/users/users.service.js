const {User}= require('./users.entity');


/* const users = [{
    username: 'nico',
    fullname: 'Nicolas',
    email: 'nico@mail.com',
    password: '123'
},
{
    username: 'cele',
    fullname: 'Celeste',
    email: 'cele@mail.com',
    password: '123'
}, {
    username: 'gabi',
    fullname: 'Gabriela',
    email: 'gabi@mail.com',
    password: '123'
}] */

const getUsers = async() => {
    return await User.findAll();
}

const getUser = (id) => {
    let user = users.find((elemento) => elemento.username === id);
    return user;
}

const createUser = (user) => {
    users.push(user);

    return user;
}

const updateUser = (id,user) => {
    let idx = users.findIndex(u=>u.username === id)
    console.log(idx);
    if (idx>=0){
        users[idx] = {...users[idx],...user}
        return users[idx]
    }
    else{
        return undefined
    }

    
}

const deleteUser = (id) => {
    let idx = users.findIndex(u=>u.username === id)
    let user;
    console.log(`idx user a eliminar ${idx}`);

    if (idx >= 0) {
      user = users.splice(idx, 1)[0]; //[0] porque splice me retorna un array y accedo al que saque
    }

    return user
}

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };