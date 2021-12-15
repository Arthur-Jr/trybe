db.movies.drop();
db.movies.insertMany([
  {
    title: "Batman",
    category: [
      "action",
      "adventure"
    ],
    imdbRating: 7.7,
    budget: 35
  },
  {
    title: "Godzilla",
    category: [
      "action",
      "adventure",
      "sci-fi"
    ],
    imdbRating: 6.6,
    budget: 10
  },
  {
    title: "Home Alone",
    category: [
      "family",
      "comedy"
    ],
    imdbRating: 7.4
  }
]);

// 01:
db.movies.find({ category: { $all: ["action", "adventure"] } });

// 02:
db.movies.find(
  {
    $and: [
      { category: { $all: ["action"] } },
      { imdbRating:{ $gt: 7 } }
    ]
  }
);

// 03:
db.movies.updateOne(
  {
    title: "Batman"
  },
  {
    $push: {
      ratings: { $each: [85, 100, 102, 105] }
    }
  }
);

// 04:
db.movies.updateOne(
  {
    title: "Godzilla"
  },
  {
    $push: {
      ratings: { $each: [78, 52, 95, 102] }
    }
  }
);

// 05:
db.movies.updateOne(
  {
    title: "Home Alone"
  },
  {
    $push: {
      ratings: { $each:  [200, 99, 65] }
    }
  }
);

// 06:
db.movies.find(
  {
    ratings: { $elemMatch: { $gt: 103 } }
  },
  {
    title: 1,
    ratings: 1,
    _id: 0,
  }
);

// 07:
db.movies.find(
  {
    ratings: { $elemMatch: { $gt: 100, $lt: 105 } }
  },
  {
    title: 1,
    ratings: 1,
    _id: 0,
  }
);

// 08:
// Chequei o Gabarito:
db.movies.find(
  {
    ratings: { $elemMatch: { $gt: 64, $lt: 105, $mod: [9, 0] } }
  },
  {
    title: 1,
    ratings: 1,
    _id: 0,
  }
);

// 09:
db.movies.find(
  {
    $and: [
      { category: { $all: ["adventure"] } },
      { ratings: { $elemMatch: { $gt: 103 } } }
    ]
  },
  {
    title: 1,
    ratings: 1,
    category: 1,
    _id: 0,
  }
);

// 10:
db.movies.find(
  {
    category: { $size: 2 }
  },
  {
    title: 1,
    _id: 0,
  }
);

// 11:
db.movies.find(
  {
    ratings: { $size: 4 }
  },
  {
    title: 1,
    _id: 0,
  }
);

// 12:
db.movies.find(
  {
    $and: [
      { budget: { $mod: [5, 0] } },
      { category: { $size: 2 } }
    ]
  }
);

// 13:
db.movies.find(
  {
    $or: [
      { category: { $all: ["sci-fi"] } },
      { ratings: { $elemMatch: { $gt: 199 } } }
    ]
  },
  {
    title: 1,
    ratings: 1,
    category: 1,
    _id: 0
  }
);

// 14:
db.movies.find(
  {
    $and: [
      { ratings: { $size: 4 } },
      { category: { $in: ["adventure", "family"] } },
      { imdbRating: { $gte: 7 } }
    ]
  }
);

// 15:
db.movies.updateOne(
  {
    title: "Batman"
  },
  {
    $set: {
      descriptions: "he Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker."
    }
  }
);

// 16:
db.movies.updateOne(
  {
    title: "Godzilla"
  },
  {
    $set: {
      descriptions: "The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity"
    }
  }
);

// 17:
db.movies.updateOne(
  {
    title: "Home Alone"
  },
  {
    $set: {
      descriptions: "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation."
    }
  }
);

// 18:
db.movies.find({ descriptions: { $regex: /^The/ } });

// 19:
db.movies.find({ descriptions: { $regex: /humanity$/ } });

// 20:
db.movies.createIndex({ descriptions: "text" });

// 21:
db.movies.find({ $text: { $search: "vacation" } });

// 22:
db.movies.find({ $text: { $search: "monstrous criminal" } });

// 23:
db.movies.find({ $text: { $search: "\"when he is accidentally\"" } });
