const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (_req, res, _next) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products);
});

router.get('/:id', async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);

  if(!product) return res.status(404).json({ message: 'Produto não encontrado' });

  res.status(200).json(product);
});

router.post('/', async (req, res) => {
  try {
    const { name, brand } = req.body;
  
    const newProduct = await ProductModel.add(name, brand);
  
    res.status(201).json(newProduct);  
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado' });
  }

});

router.delete('/:id', async (req, res) => {
  try {
    const products = await ProductModel.exclude(req.params.id);
  
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { name, brand } = req.body;
  
    const products = await ProductModel.update(req.params.id, name, brand);
  
    res.status(200).json(products); 
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

module.exports = router;
