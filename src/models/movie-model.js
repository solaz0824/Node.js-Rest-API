const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const MovieSchema = Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    releaseYear: {
      type: Number,
      required: true,
    },
    genres: {
      type: String,
      required: true,
      trim: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    cast: [
      {
        name: { type: String, trim: true },
        lastName: { type: String, trim: true },
      },
    ],
    crew: [
      {
        name: { type: String, trim: true },
        lastName: { type: String, trim: true },
        position: { type: String, trim: true },
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Movie = mongoose.model("movie", MovieSchema);

module.exports = Movie;
