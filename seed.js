require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

const Book = require('./models/book');

async function seed() {
  await Book.create({
    title: 'Book 1',
    description: 'Book 1 description',
    status: 'read'
  });

  await Book.create({
    title: 'Book 2',
    description: 'Book 2 description',
    status: 'read'
  });

  await Book.create({
    title: 'Book 3',
    description: 'Book 3 description',
    status: 'read'
  });

  mongoose.disconnect();
}

seed();
