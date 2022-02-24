import express from 'express';
import { nanoid } from 'nanoid';
import Joke from '../models/Joke.js';

const router = express.Router();

/**
 * Exercise 1
 * Create a GET /joke route, that returns all jokes.
 */
router.get('/', async (req, res, next) => {
  try {
    const jokes = await Joke.find().populate('author', 'name -_id');
    res.json(jokes);
  } catch (error) {
    next(error);
  }
});

/**
 * Exercise 2
 * Create a GET /joke/:id route, that returns the joke for the given id.
 */

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const joke = await Joke.findById(id);
    res.json(joke);
  } catch (error) {
    next(error);
  }
});

// /**
//  * Exercise 3
//  * Create a POST /joke route, that adds a new joke to the array.
//  */

router.post('/', async (req, res, next) => {
  try {
    const joke = await Joke.create(req.body);
    res.json(joke);
  } catch (error) {
    next(error);
  }
});

// /**
//  * Exercise 4
//  * Create a PATCH /joke/:id route, that updates the joke for the given id.
//  */

router.patch('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const joke = await Joke.findByIdAndUpdate(id, req.body, { new: true });
    res.json(joke);
  } catch (error) {
    next(error);
  }
});

// /**
//  * Exercise 5
//  * Create a DELETE /joke/:id route, that deletes the joke for the given id.
//  */

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedJoke = await Joke.findByIdAndDelete(id);
    res.json(deletedJoke);
  } catch (error) {
    next(error);
  }
});

export default router;
