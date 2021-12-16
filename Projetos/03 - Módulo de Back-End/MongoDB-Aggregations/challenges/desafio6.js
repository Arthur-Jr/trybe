db.movies.aggregate([
  {
    $match: {
      awards: { $all: [/won/i, /oscar/i] },
      "imdb.rating": { $ne: "" },
    },
  },
  {
    $group: {
      _id: null,
      maior_rating: { $max: "$imdb.rating" },
      menor_rating: { $min: "$imdb.rating" },
      media_rating_not_rounded: { $avg: "$imdb.rating" },
      desvio_padrao_not_rounded: { $stdDevSamp: "$imdb.rating" },
    },
  },
  {
    $addFields: {
      media_rating: { $round: ["$media_rating_not_rounded", 1] },
      desvio_padrao: { $round: ["$desvio_padrao_not_rounded", 1] },
    },
  },
  {
    $project: {
      _id: 0,
      media_rating_not_rounded: 0,
      desvio_padrao_not_rounded: 0,
    },
  },
]);

// Referência para o uso do addFields nessa situação:
// https://stackoverflow.com/questions/50088576/mongoerror-the-subtract-accumulator-is-a-unary-operator
