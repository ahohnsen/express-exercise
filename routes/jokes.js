import express from "express";
import { nanoid } from "nanoid";

const router = express.Router();

let jokes = [
  {
    id: "0",
    joke: "Thanks for explaining the word “many” to me, it means a lot.",
  },
  {
    id: "1",
    joke: "Why did Adele cross the road? To say hello from the other side.",
  },
  {
    id: "2",
    joke: "What kind of concert only costs 45 cents? A 50 Cent concert featuring Nickelback.",
  },
  {
    id: "3",
    joke: "To the person who invented zero, thanks for nothing.",
  },
];

/**
 * Exercise 1
 * Create a GET /joke route, that returns all jokes.
 */
router.get("/", (req, res, next) => {
  res.json(jokes);
});

/**
 * Exercise 2
 * Create a GET /joke/:id route, that returns the joke for the given id.
 */

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  const joke = jokes.find((joke) => joke.id === id);
  if (joke) {
    res.json(joke);
  } else {
    next();
  }
});

/**
 * Exercise 3
 * Create a POST /joke route, that adds a new joke to the array.
 */

router.post("/", (req, res, next) => {
  const newJoke = req.body;
  newJoke.id = nanoid();
  jokes.push(newJoke);
  res.json({
    id: newJoke.id,
  });
});

/**
 * Exercise 4
 * Create a PATCH /joke/:id route, that updates the joke for the given id.
 */

router.patch("/:id", (req, res, next) => {
  const { id } = req.params;
  const jokeIndex = jokes.findIndex((joke) => joke.id === id);
  jokes[jokeIndex] = {
    ...jokes[jokeIndex],
    ...req.body,
    id,
  };
});

/**
 * Exercise 5
 * Create a DELETE /joke/:id route, that deletes the joke for the given id.
 */

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  jokes = jokes.filter((joke) => joke.id !== id);
  res.status(200).json({
    deletedId: id,
  });
});

export default router;
