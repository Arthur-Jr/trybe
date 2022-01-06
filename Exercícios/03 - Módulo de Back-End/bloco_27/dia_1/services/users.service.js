const { addUserModel, getAllUsersModel, getUseByIdModel, editUserModel } = require("../models/users.model")

const checkName = (firstName, lastName) => {
  if(!firstName || !lastName) {
    throw { status: 400, message: 'Os campos firstName e lastName são obrigatório' }
  }
}

const checkEmail = (email) => {
  if(!email) {
    throw { status: 400, message: 'O campo email é obrigatório' }
  }
}

const checkPassword = (password) => {
  if(!password) {
    throw { status: 400, message: 'O campo password é obrigatório' }
  } else if (password.length < 6) {
    throw { status: 400, message: 'O campo password deve ter pelo menos 6 caracteres' }
  }
}

const addUserService = ({ firstName, lastName, email, password }) => {
  checkName(firstName, lastName);
  checkEmail(email);
  checkPassword(password);

  return addUserModel({ firstName, lastName, email, password });
}

const getAllUsersService = async () => {
  return await getAllUsersModel();
}

const getUserByIdService = async (id) => {
  const user = getUseByIdModel(id);
  if(!user) throw { status: 404, message: 'Usuário não encontrado' }

  return user;
}

const editUserService = async (id, { firstName, lastName, email, password }) => {
  checkName(firstName, lastName);
  checkEmail(email);
  checkPassword(password);

  const editedUser = await editUserModel(id, { firstName, lastName, email, password });

  if(!editedUser.value) throw { status: 404, message: 'Usuário não encontrado' };

  return editedUser;
}

module.exports = {
  addUserService,
  getAllUsersService,
  getUserByIdService,
  editUserService,
}
