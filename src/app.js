const express = require("express");

const app = express();

const movie = require("../movie.json");
const serie = require("../serie.json");
app.use(express.json());

// ---- MOVIE ---- //

app.get("/movie", (request, respond) => {
  respond.json(movie);
});

// ---- SERIE ---- //

app.get("/serie", (request, respond) => {
  respond.json(serie);
});

app.listen(3000, () => {
  console.log("Server is running on localhost3000");
});
