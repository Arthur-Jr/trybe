db.movies.aggregate([
  {
    $match: {
      languages: { $in: ["English"] },
    },
  },
  {
    $unwind: "$cast",
  },
  {
    $group: {
      _id: "$cast",
      numeroFilmes: { $sum: 1 },
      mediaIMDB_not_rounded: { $avg: "$imdb.rating" },
    },
  },
  {
    $addFields: {
      mediaIMDB: { $round: ["$mediaIMDB_not_rounded", 1] },
    },
  },
  {
    $project: {
      mediaIMDB_not_rounded: 0,
    },
  },
  {
    $sort: {
      numeroFilmes: -1,
      _id: -1,
    },
  },
]);
