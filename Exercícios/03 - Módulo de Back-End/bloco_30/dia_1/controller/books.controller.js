const { book } = require('../models');

const getAllBooks = async (_req, res) => {
  try {
    const allBooks = await book.findAll();

    return res.status(200).json(allBooks);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro!' });
  }
};

const getBookById = async (req, res) => {
  try {
    const { id } = req.params

    const result = await book.findByPk(id);

    if (result === null) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro!' });
  }
};

const addBook = async (req, res) => {
  try {
    const infos = req.body;

    const newBook = await book.create(infos);

    return res.status(200).json(newBook);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro!' });
  }
};

const editBook = async (req, res) => {
  try {
    const infos = req.body;
    const { id } = req.params;

    await book.update(infos, { where: { id } });

    return res.status(200).json({ message: 'success' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro!' });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    await book.destroy({ where: { id } });

    return res.status(200).json({ message: 'success' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro!' });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  editBook,
  deleteBook
}
