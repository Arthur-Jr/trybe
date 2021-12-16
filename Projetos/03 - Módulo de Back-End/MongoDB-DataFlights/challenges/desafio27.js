const empresa = "PASSAREDO";
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

// Referencia de como usar o retorno de uma query em outra:
// https://stackoverflow.com/questions/23637743/mongo-db-using-result-of-query-in-another-query-using-in
