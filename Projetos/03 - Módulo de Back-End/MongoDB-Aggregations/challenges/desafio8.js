db.air_alliances.aggregate([
  {
    $unwind: "$airlines",
  },
  {
    $lookup: {
      from: "air_routes",
      localField: "airlines",
      foreignField: "airline.name",
      as: "totalRotas",
    },
  },
  {
    $unwind: "$totalRotas",
  },
  {
    $match: { "totalRotas.airplane": { $in: ["747", "380"] } },
  },
  {
    $group: {
      _id: "$name",
      totalRotas: { $sum: 1 },
    },
  },
  {
    $sort: { totalRotas: -1 },
  },
  {
    $limit: 1,
  },
]);

// Chequei o pull request do colega Rod, para tirar umas dúvidas sobre esse desafio(unwind).
