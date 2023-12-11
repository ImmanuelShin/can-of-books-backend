const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  const book = new Book({
    title: req.body.name,
    description: req.body.description,
    status: req.body.status
  });
  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/:id', (req, res) => {
  res.send(req.params.id);
});

module.exports = router;
