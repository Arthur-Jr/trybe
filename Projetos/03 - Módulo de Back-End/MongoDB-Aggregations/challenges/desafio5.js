const actors = ["Sandra Bullock", "Tom Hanks", "Julia Roberts", "Kevin Spacey", "George Clooney"];

db.movies.aggregate([
  {
    $match: {
      countries: { $elemMatch: { $eq: "USA" } },
      "tomatoes.viewer.rating": { $gt: 3 },
      cast: { $exists: true },
    },
  },
  {
    $addFields: {
      num_favs: {
        $size: {
          $setIntersection: ["$cast", actors],
        },
      },
    },
  },
  {
    $sort: {
      num_favs: -1,
      "tomatoes.viewer.rating": -1,
      title: -1,
    },
  },
  {
    $project: {
      _id: 0,
      title: 1,
    },
  },
  {
    $skip: 23,
  },
  {
    $limit: 1,
  },
]);
