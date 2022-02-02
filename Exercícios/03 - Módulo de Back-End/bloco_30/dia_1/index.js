const express = require('express');
const bodyParser = require('body-parser');
const { getAllBooks, getBookById, addBook, editBook, deleteBook } = require('./controller/books.controller');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', getAllBooks);

app.get('/:id', getBookById);

app.post('/', addBook);

app.put('/:id', editBook);

app.delete('/:id', deleteBook);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));