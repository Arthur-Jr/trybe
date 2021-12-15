db.movies.drop();
db.movies.insertMany([
  {
    title: "Batman",
    category: [
      "action",
      "adventure",
    ],
    imdbRating: 7.7,
    budget: 35,
  },
  {
    title: "Godzilla",
    category: [
      "action",
      "adventure",
      "sci-fi",
    ],
    imdbRating: 6.6,
    budget: 1,
  },
  {
    title: "Home Alone",
    category: [
      "family",
      "comedy",
    ],
    imdbRating: 7.4,
  },
]);

// 01:
db.movies.updateOne({ title: "Batman" }, { $push: { category: "superhero" } });

// 02:
db.movies.updateOne({ title: "Batman" },
  {
    $push: { category: { $each: ["villain", "comic-based"] } }
  } 
);

// 03:
db.movies.updateOne({ title: "Batman" },
  {
    $pop: { category: -1 }
  }
);

// 04:
db.movies.updateOne({ title: "Batman" },
  {
    $pop: { category: -1 }
  }
);

// 05:
db.movies.updateOne({ title: "Batman" },
  {
    $pop: { category: 1 }
  }
);

// 06:
db.movies.updateOne({ title: "Batman" },
  {
    $addToSet: { category: "action" }
  }
);

// 07:
db.movies.updateMany({ title: { $in: ["Batman", "Home Alone"] } },
  {
    $addToSet: { category: "90's" }
  }
);

// 08:
db.movies.updateOne({ title: "Home Alone" },
  {
    $push: { cast: {
      $each: [
        {
          actor: "Macaulay Culkin",
          character: "Kevin"
        },
        {
          actor: "Joe Pesci",
          character: "Harry"
        },
        {
          actor: "Daniel Stern"
        }
      ]
    } }
  }
);

// 09:
db.movies.updateOne({ title: "Home Alone" },
  {
    $set: {
      "cast.$[index].character": "Marv"
    }
  },
  { arrayFilters: [{ "index.actor": "Daniel Stern" }] }
);

// 10:
db.movies.updateOne({ title: "Batman" },
  {
    $set: {
      cast: [
        {
          character: "Batman"
        },
        {
          character: "Alfred"
        },
        {
          character: "Coringa"
        }
      ]
    }
  }
);

// 11:
db.movies.updateOne({ title: "Batman" },
  {
    $push: {
      "cast.$[index].actor": "Christian Bale"
    }
  },
  { arrayFilters: [{ "index.character": "Batman" }] }
);

db.movies.updateOne({ title: "Batman" },
  {
    $push: {
      "cast.$[index].actor": "Michael Caine"
    }
  },
  { arrayFilters: [{ "index.character": "Alfred" }] }
);

db.movies.updateOne({ title: "Batman" },
  {
    $push: {
      "cast.$[index].actor": "Heath Ledger"
    }
  },
  { arrayFilters: [{ "index.character": "Coringa" }] }
);

// 12:

db.movies.updateOne({ title: "Batman" },
  {
    $push: {
      "cast.$[index].actor": {
        $each: [
          "Michael Keaton", "Val Kilmer", "George Clooney"
        ],
        $sort: 1 
      }
    }
  },
  { arrayFilters: [{ "index.character": "Batman" }] }
);

db.movies.find();
