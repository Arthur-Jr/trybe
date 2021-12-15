db.movies.insertMany(
  [
    {
      "title": "Batman",
      "category": [ "action", "adventure" ],
      "imdbRating": 7.6,
      "budget": 35
    },
    {
      "title": "Godzilla",
      "category": [ "action", "adventure", "sci-fi" ],
      "imdbRating": 6.6
    },
    {
      "title": "Home Alone",
      "category": [ "family", "comedy" ],
      "imdbRating": 7.4
    }
  ]
);

// 01:
db.movies.updateOne({ title: "Batman" },
  { $set: { imdbRating: 7.7 } }
);

// 02:
db.movies.updateOne({ title: "Godzilla" },
  { $set: { budget: 1 } }
);

// 03:
db.movies.updateOne({ title: "Home Alone" },
  { $set:
    { 
      budget: 1,
      imdbRating: 5.5
    }
  }
);

// 04:
db.movies.updateOne({ title: "Batman" },
  { $inc: { imdbRating: 2 } }
);

// 05:
db.movies.updateOne({ title: "Home Alone" },
  { $inc: { budget: 5 } }
);

// 06:
db.movies.updateOne({ title: "Batman" },
  { $mul: { imdbRating: 4 } }
);

// 07:
db.movies.updateOne({ title: "Batman" },
  { $rename: { budget: "estimatedBudget" } }
);

// 08:
db.movies.updateOne({ title: "Home Alone" },
  { $min: { budget: 5 } }
);

// 09:
db.movies.updateOne({ title: "Godzilla" },
  { 
    $set:
      { 
        "category.1": "thriller"
      },
    $max: 
      {
        imdbRating: 8.6
      }
  }
);

// 10:
db.movies.updateOne({ title: "Home Alone" },
  { $currentDate: { lastUpdated: { $type: "timestamp" } } }
);

// 11:
db.movies.updateMany({}, 
  {
    $set: { saquels: 0 }
  }
);

// 12:
db.movies.updateMany({}, 
  {
    $unset: {
      budget: "",
      estimatedBudget: ""
    }
  }
);

// 13:
db.movies.updateMany(
  { $or: [{ title: "Batman" }, { title: "Home Alone" }] },
  { $max: { imdbRating: 17 } }
);

db.movies.find();
