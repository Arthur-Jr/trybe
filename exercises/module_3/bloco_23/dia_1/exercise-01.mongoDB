// 01:
use ("exercise");
db.bios.find({ _id: 8 });

// 02:
use ("exercise");
db.bios.find({ _id: 8 }, { name: true });

// 03:
use ("exercise");
db.bios.find({ _id: 8 }, { name: true, _id: false, birth: true });

// 04:
use ("exercise");
db.bios.find({ "name.first": "John" });

// 05:
use ("exercise");
db.bios.find().limit(3);

// 06:
use ("exercise");
db.bios.find().limit(2).skip(5);

// 07:
use ("lib");
db.books.find().count();

// 08:
use ("lib");
db.books.find({ status: "PUBLISH" }).count();

// 09:
use ("lib");
db.books.find({}, { title: 1, isbn: 1, pageCount: 1, _id: 0 }).limit(3);

// 10:
use ("lib");
db.books.find(
  {
    status: "MEAP"
  },
  {
    title: true,
    authors: true,
    status: true
  }
).limit(10).skip(5);