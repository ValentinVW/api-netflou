const express = require("express");

const app = express();

const movie = require("./movie.json");
const serie = require("./serie.json");

// ---- MOVIE ---- //

app.get("/movie", async (request, respond) => {
  try {
    const movies = await movie;
    respond.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ---- SERIE ---- //

app.get("/serie", (request, respond) => {
  respond.json(serie);
});

app.listen(3000, () => {
  console.log("Server is running on localhost3000");
});
