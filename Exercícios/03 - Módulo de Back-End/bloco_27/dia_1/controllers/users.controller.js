const { addUserService, getAllUsersService, getUserByIdService, editUserService } = require("../services/users.service");

const addUserController = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const newUserId = await addUserService({ firstName, lastName, email, password  });
    return res.status(201).json({ id: newUserId, firstName, lastName, email });

  } catch (err) {
    console.error(err.message);
    return next(err);
  }
}

const getAllUsersController = async (_req, res, next) => {
  try {
    const allUsers = await getAllUsersService();

    return res.status(200).json(allUsers);

  } catch (err) {
    console.error(err.message);
    return next(err);
  }
}

const getUserByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await getUserByIdService(id);
    return res.status(200).json(user);

  } catch (err) {
    console.error(err.message);
    return next(err);
  }
}

const editUserController = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const { id } = req.params;
    await editUserService(id, { firstName, lastName, email, password });

    return res.status(201).json({ id, firstName, lastName, email });

  } catch (err) {
    console.error(err.message);
    return next(err);
  }
}

module.exports = {
  addUserController,
  getAllUsersController,
  getUserByIdController,
  editUserController,
}
