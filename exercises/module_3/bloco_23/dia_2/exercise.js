// 01:
use ("heros");
db.superheroes.find({});

// 02:
use ("heros");
db.superheroes.find({ "aspects.height": { $lt: 180 } });

// 03:
use ("heros");
db.superheroes.find({ "aspects.height": { $lt: 180 } }).count();

// 04:
use ("heros");
db.superheroes.find({ "aspects.height": { $lte: 180 } }).count();

// 05:
use ("heros");
db.superheroes.findOne({ "aspects.height": { $gte: 200 } });

// 06:
use ("heros");
db.superheroes.find({ "aspects.height": { $gte: 200 } }).count();

// 07:
use ("heros");
db.superheroes.find({ "aspects.eyeColor": "green" });

// 08:
use ("heros");
db.superheroes.find({ "aspects.eyeColor": "blue" }).count();

// 09:
use ("heros");
db.superheroes.find(
  {
    "aspects.hairColor": {
      $in: ["No Hair", "black"]
    }
  }
);

// 10:
use ("heros");
db.superheroes.find(
  {
    "aspects.hairColor": {
      $in: ["No Hair", "black"]
    }
  }
).count();

// 11:
use ("heros");
db.superheroes.find(
  {
    "aspects.hairColor": {
      $nin: ["No Hair", "black"]
    }
  }
).count();

// 12:
use ("heros");
db.superheroes.find({ "aspects.height": { $not: {
  $gt: 180
} } });

// 13:
use ("heros");
db.superheroes.find(
  {
    $and: [
      { race: { $ne: "Human" } },
      { "aspects.height": { $gte: 180 } }
    ]
  }
);

// 14:
use ("heros");
db.superheroes.find(
  {
    $and: [
      { publisher: "Marvel Comics" },
      { "aspects.height": { $in: [180, 200] } }
    ]
  }
);

// 15:
use ("heros");
db.superheroes.find(
  {
    $and: [
      { publisher: { $not: { $eq: "Marvel Comics" } } },
      { "aspects.height": { $gt: 180, $lt: 200 } },
      { race: { $in: ["Human", "Mutant"] } }
    ]
  }
);

// 16:
use ("heros");
db.superheroes.find({ race: { $exists: false } }).count();

// 17:
use ("heros");
db.superheroes.find({ "aspects.hairColor": { $exists: true } }).count();

// 18:
use ("heros");
db.superheroes.deleteOne({ publisher: "Sony Pictures" });

// 19:
use ("heros");
db.superheroes.deleteMany({ publisher: "George Lucas" });
