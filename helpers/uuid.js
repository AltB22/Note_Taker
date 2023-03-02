//fsUtils and uuid were both referred to from class activities as helper functions that can be called in routes.

// Immediately export a function that generates a string of random numbers and letters
module.exports = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
