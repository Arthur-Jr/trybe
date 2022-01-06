const express = require('express');
const { addUserController, getAllUsersController, getUserByIdController, editUserController } = require('./controllers/users.controller');
const errorMiddleware = require('./middlewares/errorMiddleware');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/user', addUserController);

app.get('/user', getAllUsersController);

app.get('/user/:id', getUserByIdController);

app.put('/user/:id', editUserController);

app.use(errorMiddleware);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
