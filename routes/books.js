const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// Get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get one book
router.get('/:id', getBook, (req, res) => {
  res.send(res.book);
});

router.post('/', async (req, res) => {
  const book = new Book({
    title: req.body.title,
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

router.put('/:id', getBook, async (req, res) => {
  try {
    Object.keys(req.body).forEach((key) => {
      if (res.book[key] !== undefined) {
        res.book[key] = req.body[key];
      }
    });
    const updatedBook = await res.book.save();
    res.json(updatedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', getBook, async (req, res) => {
  try{
    await res.book.deleteOne();
    res.json({ message: 'Deleted book' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

async function getBook(req, res, next) {
  let book;
  try {
    book = await Book.findById(req.params.id);
    if (book === null) {
      return res.status(404).json({ message: 'Cannot find book' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.book = book;
  next();
}

module.exports = router;
