const connection = require('./connection');
const { ObjectId } = require('mongodb');

const checkId = (id) => {
  if(!ObjectId.isValid(id)) {
    throw { status: 400, message: 'Id inválido' }
  }
}

const addUserModel = async ({ firstName, lastName, email, password }) => {
  const db = await connection();
  const { insertedId } = await db.collection('users').insertOne({ firstName, lastName, email, password });

  return insertedId;
}

const getAllUsersModel = async () => {
  const db = await connection();
  const result = await db.collection('users').find({}).toArray();

  return result;
}

const getUseByIdModel = async (id) => {
  checkId(id);

  const db = await connection();
  const result = db.collection('users').findOne({ _id: ObjectId(id) });

  return result;
}

const editUserModel = async (id, { firstName, lastName, email, password }) => {
  checkId(id);

  const db = await connection();
  const result = db.collection('users').findOneAndUpdate({ _id: ObjectId(id) }, { $set: { firstName, lastName, email, password } });

  return result;
}

module.exports = {
  addUserModel,
  getAllUsersModel,
  getUseByIdModel,
  editUserModel,
}
