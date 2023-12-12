require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

const Book = require('./models/book');

async function seed() {
  await Book.create({
    title: 'Book 1',
    description: 'Book 1 description',
    status: true
  });

  await Book.create({
    title: 'Book 2',
    description: 'Book 2 description',
    status: true
  });

  await Book.create({
    title: 'Book 3',
    description: 'Book 3 description',
    status: true
  });

  mongoose.disconnect();
}

seed();
