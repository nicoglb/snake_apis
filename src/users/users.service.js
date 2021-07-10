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

const getUser = async(id) => {
  //  let user = users.find((elemento) => elemento.username === id);
    return await User.findAll({
        where: {
          username: id
        }
      });
}

const createUser = async (user) => {
   // users.push(user);
    const us = await User.create({
        username: user.username,
        fullname : user.fullname,
        email: user.email,
        password: user.password
      });
     
      console.log(us); 
    ;
}

const updateUser = async (id,user) => {
    return  await User.update({ 
        fullname : user.fullname,
        email: user.email,
        password: user.password
       }, {
        where: {
            username: id
        }
      });
     
}

const deleteUser = async(id) => {
  return await User.destroy({
        where: {
          username: id
        }
      });
}

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };