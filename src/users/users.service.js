const { User } = require('./users.entity');

//todo lo comentado es para hacerlo sin conexion a la DB

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

const getUsers = async () => {
  return await User.findAll();
  //return users;
}

const getUser = async (id) => {
  //  let user = users.find((elemento) => elemento.username === id);
  return await User.findAll({
    where: {
      username: id
    },
    raw : true , 
    nest : true 
  });
  //return user;
}

const createUser = async (user) => {
  // users.push(user);
  return await User.create({
    username: user.username,
    fullname: user.fullname,
    email: user.email,
    password: user.password
  });

 // console.log(us);
  //return user;    
}

const updateUser = async (id, user) => {
  return await User.update({
    fullname: user.fullname,
    email: user.email,
    password: user.password
  }, {
    where: {
      username: id
    }
  });

  /* let idx = users.findIndex(u => u.username === id)
  console.log(idx);
  if (idx >= 0) {
    users[idx] = { ...users[idx], ...user }
    return users[idx]
  }
  else {
    return undefined
  } */

}

const deleteUser = async (id) => {
  return await User.destroy({
    where: {
      username: id
    }
  });

  /* let idx = users.findIndex(u => u.username === id)
  let user;
  console.log(`idx user a eliminar ${idx}`);

  if (idx >= 0) {
    user = users.splice(idx, 1)[0]; //[0] porque splice me retorna un array y accedo al que saque
  }

  return user */
}

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };