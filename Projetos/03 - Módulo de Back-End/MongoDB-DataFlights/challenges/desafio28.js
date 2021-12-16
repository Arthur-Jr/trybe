const empresa = "LATAM AIRLINES BRASIL";
const result = db.voos.find({
  $and: [
    { "empresa.nome": empresa },
    { natureza: "Doméstica" },
  ],
}).count();

db.resumoVoos.insertOne(
  {
    empresa,
    totalVoosDomesticos: result,
  },
);

db.resumoVoos.find(
  {},
  { 
    empresa: 1, 
    totalVoosDomesticos: 1, 
    _id: 0,
  },
).limit(1);
